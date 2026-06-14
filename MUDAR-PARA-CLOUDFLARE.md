# Migrar para o Cloudflare Pages — Passo a passo

O site sai do Netlify e vai para o Cloudflare Pages: grátis, estável e sem
sistema de créditos. O painel passa a usar login pelo GitHub (sem servidor extra).

## Parte 1 — Atualizar os arquivos no GitHub
Suba estes por cima dos atuais (no seu repositório santiagothais583-tech/Daaystore,
use Add file > Upload files e depois Commit):

- index.html            (sem o antigo login do Netlify)
- admin/index.html       (novo painel Sveltia, login pelo GitHub)
- admin/config.yml       (backend agora é "github")

Os arquivos de dados (pasta dados) e as fotos continuam como estão.

## Parte 2 — Publicar no Cloudflare Pages
1. Crie conta grátis em https://dash.cloudflare.com (pode usar e-mail comum).
2. No menu, vá em "Workers & Pages" > "Create" > aba "Pages".
3. Clique em "Connect to Git" e autorize o GitHub.
4. Escolha o repositório "Daaystore".
5. Em configurações de build, deixe TUDO em branco/padrão:
   - Framework preset: None
   - Build command: (vazio)
   - Build output directory: / (ou deixe em branco)
6. Clique em "Save and Deploy".
7. Em ~1 min o site fica no ar num endereço tipo:
   https://daaystore.pages.dev

## Parte 3 — Entrar no painel
1. Acesse o seu endereço novo + /admin
   Ex: https://daaystore.pages.dev/admin
2. Clique em "Sign in with GitHub" e autorize.
3. Pronto: você edita produtos, preços, categorias, design e fotos.
   Ao salvar (Publish), o site atualiza sozinho em ~1 min.

> Para sua sogra usar: ela também precisa ter uma conta no GitHub e ter acesso
> ao repositório. O jeito mais simples é você adicioná-la como colaboradora:
> no GitHub, repositório > Settings > Collaborators > Add people > e-mail dela.
> Aí ela entra no /admin com o GitHub dela e edita igual.

## Parte 4 (opcional) — Domínio próprio .com.br
1. Registre em https://registro.br (~R$ 40/ano).
2. No Cloudflare Pages: aba "Custom domains" > "Set up a domain".
3. Siga as instruções de DNS que o Cloudflare mostrar.

## E o site antigo no Netlify?
Pode deixar como está (pausado) ou apagar depois que confirmar que o Cloudflare
está funcionando. Não tem pressa.
