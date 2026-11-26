# HP Solutions

Portfólio dos nossos projetos, separado por categoria (menu no topo):

| Categoria | Projeto | Link |
|---|---|---|
| Overlays | **Pit Overlay's** (Path of Exile 2) | [release no GitHub](https://github.com/FelipeN21/poe2_overlay/releases/latest) |
| Overlays | **HopeDiff** (League of Legends) | [hopediff.vercel.app](https://hopediff.vercel.app) |
| Overlays | **Hope Phasmophobia Overlay** (Phasmophobia) | [hope-phasmophobia-overlay.vercel.app](https://hope-phasmophobia-overlay.vercel.app) |
| Soluções de comunicação | **Tela** (compartilhamento de tela do squad) | [tarkov-multi-screen.vercel.app](https://tarkov-multi-screen.vercel.app) |

Site estático, sem build: `index.html`, `style.css`, `app.js` e `projetos.js`.

## Adicionar um projeto ou uma categoria

Tudo fica em `projetos.js`:

- **Projeto novo**: copie um item de `PROJETOS`, troque os textos, o `categoria` e o `acao.url`, e coloque as imagens
  em `assets/projetos/`.
- **Categoria nova** (vira uma aba do menu): acrescente um item em `CATEGORIAS`.

O menu usa o endereço com `#` (ex.: `#overlays`, `#comunicacao`), então dá para mandar o link direto de uma aba.

## Rodar localmente

Abrir o `index.html` direto pelo arquivo não funciona (módulos JS). Use um servidor estático:

```sh
npx serve .
```

## Publicar

Funciona como está na Vercel (importar o repositório, sem configurar nada) ou no GitHub Pages
(Settings → Pages → branch `main`, pasta `/`).
