// Worker da Daay Store: serve o site estático e responde /api/produtos.
// A função monta a lista de produtos a partir dos arquivos do próprio deploy,
// que estão sempre atualizados (o Worker republica a cada alteração no painel).

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/produtos") {
      return await listarProdutos(url.origin, env);
    }

    // Demais rotas: servir os arquivos estáticos (site, /admin, dados, imagens)
    return env.ASSETS.fetch(request);
  }
};

async function listarProdutos(origin, env) {
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };

  async function tryJSON(path) {
    try {
      const r = await env.ASSETS.fetch(new Request(origin + path));
      if (r.ok) return await r.json();
    } catch (e) {}
    return null;
  }

  let nomes = [];
  const idx = await tryJSON("/dados/produtos-index.json");
  if (idx && Array.isArray(idx.arquivos)) nomes = idx.arquivos;

  // Reforço: se o índice estiver vazio, descobre os nomes pela API do GitHub
  if (nomes.length === 0) {
    try {
      const api = "https://api.github.com/repos/santiagothais583-tech/Daaystore/contents/dados/produtos?ref=main";
      const r = await fetch(api, { headers: { "User-Agent": "daaystore", "Accept": "application/vnd.github+json" } });
      if (r.ok) {
        const lista = await r.json();
        nomes = lista.filter(f => f.name && f.name.endsWith(".json")).map(f => f.name);
      }
    } catch (e) {}
  }

  const produtos = [];
  for (const nome of nomes) {
    const p = await tryJSON("/dados/produtos/" + nome);
    if (p && p.nome && p.ativo !== false) produtos.push(p);
  }
  produtos.sort((a, b) => (a.ordem || 99) - (b.ordem || 99));

  return new Response(JSON.stringify({ produtos, total: produtos.length }), { headers });
}
