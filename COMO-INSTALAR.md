# Site Daay Store — Guia de Instalação

Seu site está pronto! Ele tem duas partes:
- O **site** que os clientes veem (catálogo com fotos, preços e botão de WhatsApp).
- O **painel de administração** onde sua sogra edita tudo por um link, sem mexer em código.

Siga os passos abaixo UMA vez para colocar tudo no ar. Depois disso, ela edita sozinha pelo painel.

---

## PARTE 1 — Colocar o site no GitHub

1. Crie uma conta grátis em https://github.com (se ainda não tiver).
2. Clique em **New repository** (botão verde "New").
3. Dê um nome, ex: `daay-store`. Marque como **Public**. Clique em **Create repository**.
4. Na página do repositório, clique em **uploading an existing file** (ou aba "Add file" > "Upload files").
5. Arraste TODOS os arquivos e pastas que estão dentro da pasta `daay-store` (o `index.html`, a pasta `admin`, a pasta `dados`, a pasta `imagens`).
6. Clique em **Commit changes**.

---

## PARTE 2 — Publicar no Netlify (grátis)

1. Acesse https://app.netlify.com e crie conta (pode entrar com o próprio GitHub).
2. Clique em **Add new site** > **Import an existing project**.
3. Escolha **GitHub** e selecione o repositório `daay-store`.
4. Não precisa configurar nada — clique em **Deploy**.
5. Em segundos o site estará no ar num link tipo `https://nome-aleatorio.netlify.app`.

---

## PARTE 3 — Ativar o painel de edição (Identity)

Isto é o que dá o **login para sua sogra editar**.

1. No painel do Netlify, com o site aberto, vá em **Site configuration** (ou "Settings").
2. Procure **Identity** e clique em **Enable Identity**.
3. Ainda em Identity, vá em **Registration** e deixe como **Invite only** (só quem você convidar entra).
4. Role até **Services > Git Gateway** e clique em **Enable Git Gateway**.
5. Volte ao topo de Identity, clique em **Invite users** e digite o e-mail da sua sogra (e o seu). Ela receberá um convite por e-mail para criar a senha.

---

## PARTE 4 — Como ela edita (o link mágico)

1. O link do painel é o endereço do site + **/admin**.
   Exemplo: `https://nome-aleatorio.netlify.app/admin`
2. Ela acessa esse link, faz login com o e-mail e senha criados.
3. Lá dentro ela pode:
   - **Informações da Loja**: mudar slogan, texto, WhatsApp, Instagram.
   - **Produtos**: adicionar, remover, mudar nome, preço, categoria e foto.
4. Ao clicar em **Publish**, o site atualiza sozinho em cerca de 1 minuto.

Pronto! Salve o link do `/admin` para ela. É só isso que ela precisa usar daqui pra frente.

---

## Domínio próprio (.com.br) — opcional

1. Registre o domínio em https://registro.br (custa cerca de R$ 40/ano).
2. No Netlify: **Domain settings** > **Add custom domain** > digite seu domínio.
3. O Netlify mostra os dados (DNS) que você cola no painel do registro.br.

---

## Dica sobre as fotos

As 6 fotos atuais são apenas exemplos. Pelo painel, em cada produto, ela clica no campo **Foto**, faz upload da foto real do produto direto do celular ou computador, e salva.
