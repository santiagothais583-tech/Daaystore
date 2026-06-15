// Pages Function: monta a lista de produtos a partir dos arquivos do próprio deploy.
// O Cloudflare republica a cada alteração no painel, então fica SEMPRE atualizado
// (sem o cache do GitHub que fazia o produto novo não aparecer).
export async function onRequestGet({ env, request }) {
  const origin = new URL(request.url).origin;
  const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };

  async function tryJSON(path) {
    try {
      const r = await env.ASSETS.fetch(new Request(origin + path));
      if (r.ok) return await r.json();
    } catch (e) {}
    return null;
  }

  let nomes = [];

  // Fonte A: índice gerado no build (mais confiável)
  const idx = await tryJSON('/dados/produtos-index.json');
  if (idx && Array.isArray(idx.arquivos)) nomes = idx.arquivos;

  // Fonte B: se não houver índice, tenta a API do GitHub para descobrir os nomes
  if (nomes.length === 0) {
    try {
      const api = 'https://api.github.com/repos/santiagothais583-tech/Daaystore/contents/dados/produtos?ref=main';
      const r = await fetch(api, { headers: { 'User-Agent': 'daaystore', 'Accept': 'application/vnd.github+json' } });
      if (r.ok) {
        const lista = await r.json();
        nomes = lista.filter(f => f.name && f.name.endsWith('.json')).map(f => f.name);
      }
    } catch (e) {}
  }

  const produtos = [];
  for (const nome of nomes) {
    const p = await tryJSON('/dados/produtos/' + nome);
    if (p && p.nome && p.ativo !== false) produtos.push(p);
  }
  produtos.sort((a, b) => (a.ordem || 99) - (b.ordem || 99));

  return new Response(JSON.stringify({ produtos, total: produtos.length }), { headers });
}
