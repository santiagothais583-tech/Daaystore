# Daay Store — Correção definitiva (produto agora atualiza)

## O que estava errado
Faltava o arquivo de configuração do Worker (wrangler.toml). Sem ele, o Cloudflare
servia uma versão fixa e não atualizava. Agora vai: o Worker serve o site e tem
uma rota /api/produtos que sempre lê a lista mais recente.

## COMO SUBIR (faça uma vez)
1. No GitHub, suba a pasta inteira por cima do que está lá
   (Add file > Upload files > arraste tudo > Commit).
   Arquivos NOVOS importantes: wrangler.toml, worker.js, build.js, .assetsignore
   (a pasta "functions" foi removida — pode apagar no GitHub se ainda existir).

2. No Cloudflare, confirme as configurações de Build (Settings > Build):
   - Build command:  node build.js
   - Deploy command: npx wrangler deploy
   - Root directory: /
   Isso já estava assim no seu print — está correto. Só clique em Update se mudar algo.

3. Vá em Deployments e clique em "Retry deployment" (ou "Create deployment")
   para publicar com a configuração nova.

## Como testar
1. Abra o site: deve continuar funcionando normal.
2. Entre no /admin, adicione um produto e Salve.
3. Aguarde ~1-2 min (o Cloudflare republica) e atualize o site.
4. O produto novo deve aparecer.

## Como ela usa (resumo)
- Site + /admin > entra com o token do GitHub.
- Produtos > New (novo) ou toca para editar. Foto: toca e envia do celular.
  Categoria: escolhe no menu. Ordem: número menor aparece primeiro.
  "Mostrar no site": desliga para esconder sem apagar.
- Save. Em ~1-2 min aparece no site.

## Importante
Cada produto é um arquivo separado (pasta dados/produtos), então NUNCA mais
um some quando outro é adicionado.
