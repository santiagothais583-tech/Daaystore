# Daay Store — Guia rápido

## O que mudou nesta versão (correções)
- **Produtos não somem mais**: cada produto agora é salvo em seu próprio arquivo
  (pasta dados/produtos). Antes era tudo num arquivo só, o que causava o problema
  de um item sumir quando outro era adicionado.
- **Categoria sem erro de digitação**: ao cadastrar um produto, a categoria é um
  MENU para escolher (Lingerie, Babydoll, Camisolas, Sexy Shop), não mais digitada.
- **Painel ótimo no celular**: o Sveltia CMS é feito para funcionar bem no celular.
- **Site sempre atualizado**: o site lê os produtos direto do GitHub, então tudo
  que ela salvar aparece no site sozinho.
- **Foto que falha não quebra o card**: se uma imagem não carregar, entra a logo.

## Como subir no GitHub
Suba a pasta inteira por cima do que está lá (Add file > Upload files, arraste
tudo, e Commit). Os arquivos importantes:
- index.html
- admin/index.html e admin/config.yml
- dados/ (config, design, categorias, e a pasta produtos com 1 arquivo por produto)
- imagens/ (logo e fotos)

## Como ela edita (pelo celular ou PC)
1. Acesse o endereço do site + /admin
2. Entre com o token do GitHub (login já configurado)
3. Em **Produtos**: toque em "New" para adicionar, ou num produto para editar.
   - Foto: toque no campo de foto e envie do celular.
   - Categoria: escolha no menu.
   - Ordem: número menor aparece primeiro.
   - "Mostrar no site": desligue para esconder sem apagar.
4. Toque em **Save/Publish**. Em ~1 minuto o site atualiza.

## Criar novas categorias
Em **Aparência do Site** não; as categorias ficam fixas no menu de escolha por
segurança (evita erro de digitação). Para adicionar uma categoria nova, é preciso
incluí-la na lista do painel — peça para o responsável pelo site, é rápido.
