# Techlog — Site Pessoal

Blog pessoal e documentação ao vivo do [Matheus Ulhôa](https://github.com/m4th3ux), construído com [Docusaurus](https://docusaurus.io/) e hospedado no GitHub Pages em [m4th3ux.github.io](https://m4th3ux.github.io/).

## Stack

- [Docusaurus](https://docusaurus.io/) 3.x (preset classic)
- [pnpm](https://pnpm.io/) como gerenciador de pacotes
- Deploy automático via GitHub Actions (GitHub Pages)

## Requisitos

- Node.js `>= 20.0`
- pnpm `9.x`

```bash
# habilitar o corepack (Node >= 16.9)
corepack enable
```

## Desenvolvimento local

```bash
pnpm install
pnpm start
```

O comando inicia o servidor de desenvolvimento e abre o navegador em http://localhost:3000/. A maioria das mudanças é refletida ao vivo, sem reiniciar o servidor.

## Build

```bash
pnpm build
```

Gera o conteúdo estático na pasta `build/`, pronto para ser servido por qualquer host estático.

## Deploy

O deploy é automático: todo push na branch `main` dispara o workflow `.github/workflows/deploy.yml`, que constrói o site e publica via GitHub Pages (Actions).

Para isso, nas configurações do repositório, a fonte do GitHub Pages deve estar apontando para **GitHub Actions** (`Settings → Pages → Source → GitHub Actions`). Nenhum token pessoal é necessário — o workflow usa o `GITHUB_TOKEN` automático.

## Estrutura

- `blog/` — posts do blog (Markdown/MDX)
- `docs/` — documentação e anotações ao vivo
- `src/pages/` — páginas React (homepage)
- `src/css/custom.css` — tema global
- `static/` — arquivos estáticos (imagens, favicon)
- `docusaurus.config.js` — configuração do site
- `sidebars.js` — definição das sidebars da documentação
