# Daay Store — Correção do "produto não aparece"

## Por que o produto não aparecia
O site lia os produtos direto do GitHub, que tem um CACHE de vários minutos.
Então o produto novo demorava (ou parecia não aparecer). Resolvido: agora o
site lê os produtos do próprio Cloudflare, que atualiza na hora a cada save.

## ⚠️ PASSO OBRIGATÓRIO no Cloudflare (faça uma vez só)
Para o site atualizar sozinho, é preciso ligar o "build". Sem isso, produto novo
continua não aparecendo. Faça assim:

1. Entre no painel do Cloudflare > seu projeto (daaystore).
2. Vá em Settings (Configurações) > Builds & deployments (ou "Build").
3. Em "Build command" (Comando de build), coloque exatamente:
       node build.js
4. Em "Build output directory" (Diretório de saída), deixe:
       .
   (um ponto, significa a pasta raiz)
5. Salve.
6. Vá em Deployments e clique em "Retry deployment" (ou faça um commit qualquer)
   para rodar o build pela primeira vez.

Pronto. A partir daí, toda vez que ela salvar um produto no painel, o Cloudflare
gera a lista atualizada e o produto aparece no site em ~1 minuto.

## Como subir no GitHub
Suba a pasta inteira por cima do que está lá (Add file > Upload files > arraste
tudo > Commit). Arquivos novos/alterados nesta versão:
- index.html              (lê os produtos do jeito certo)
- functions/api/produtos.js  (NOVO - monta a lista atualizada)
- build.js                (NOVO - gera a lista a cada deploy)
- dados/produtos/...      (cada produto em seu arquivo)

## Como ela usa (resumo)
1. Site + /admin > entra com o token do GitHub.
2. Produtos > New (novo) ou toca num produto para editar.
   - Foto: toca no campo e envia do celular.
   - Categoria: escolhe no menu.
   - Ordem: número menor aparece primeiro.
   - "Mostrar no site": desliga para esconder sem apagar.
3. Save/Publish. Em ~1 min aparece no site.

## Se mesmo assim demorar
Pode ser o navegador dela. Peça para atualizar a página segurando para recarregar
(ou abrir em aba anônima). O conteúdo novo aparece logo após o deploy terminar.
