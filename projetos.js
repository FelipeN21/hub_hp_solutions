// Lista de projetos e categorias do portfólio.
// Para adicionar um projeto: copie um objeto de PROJETOS, ajuste os campos e use o id de uma categoria.
// Para adicionar uma categoria nova (vira uma aba do menu): acrescente em CATEGORIAS.

export const CATEGORIAS = [
  {
    id: 'overlays',
    nome: 'Overlays',
    descricao: 'Programas que ficam por cima do jogo e trazem a informação na hora, sem precisar sair da partida.',
  },
  {
    id: 'comunicacao',
    nome: 'Soluções de comunicação',
    nomeCurto: 'Comunicação', // rótulo do menu no celular (opcional)
    descricao: 'Ferramentas para o squad se ver, se ouvir e se organizar, direto do navegador.',
  },
];

export const PROJETOS = [
  {
    id: 'pit-overlay',
    categoria: 'overlays',
    nome: "Pit Overlay's",
    jogo: 'Path of Exile 2',
    icone: 'assets/projetos/pit-overlay-icone.png',
    imagem: 'assets/projetos/pit-overlay-print.png',
    imagemAlt: 'Overlay mostrando o preço de uma armadura rara, com filtros de mods e os anúncios mais baratos',
    imagemRetrato: true,
    resumo:
      'Overlay para Windows que consulta o preço de itens do Path of Exile 2 sem sair do jogo. ' +
      'Passe o mouse sobre um item, aperte Ctrl+D e o preço aparece ao lado, buscado direto no trade oficial.',
    destaques: [
      'Ctrl+D sobre o item: copia, abre o overlay e busca o preço na hora',
      'Filtros de liga, moeda, corrupção e identificação, sem conversão de moeda',
      'Cada mod com caixinha e mínimo/máximo editáveis (começa em 90% do valor)',
      'Armas: DPS total, físico e elemental, e "Busca por DPS" para achar armas parecidas',
      'Respeita os limites da API do trade e avisa quando é preciso esperar',
      'Cinco esquemas de cor, transparência ajustável e atalhos configuráveis',
    ],
    tecnologias: ['C#', '.NET 10', 'WPF', 'Windows'],
    acao: {
      rotulo: 'Baixar no GitHub',
      detalhe: 'Release mais recente (.exe)',
      url: 'https://github.com/FelipeN21/poe2_overlay/releases/latest',
    },
  },
  {
    id: 'hopediff',
    categoria: 'overlays',
    nome: 'HopeDiff',
    jogo: 'League of Legends',
    icone: 'assets/projetos/hopediff-logo.svg',
    imagem: 'assets/projetos/hopediff-print.png',
    imagemAlt: 'Página do HopeDiff mostrando o overlay de League of Legends com build adaptativa, runas e alertas de selva',
    imagemRetrato: false,
    resumo:
      'Overlay nativo para League of Legends com builds ao vivo do OP.GG (Master+ e Challenger+), ' +
      'itemização adaptada aos inimigos, radar preditivo de selva e importação de runas em um clique.',
    destaques: [
      'Builds ao vivo do OP.GG (Master+) adaptadas aos 5 inimigos da partida',
      'Next-Buy inteligente via API local da Riot (127.0.0.1:2999), sem repetir botas ou itens iniciais',
      'Pontuação de counters e composição no draft (sinergia, frontline, AD/AP e blind pick)',
      'Radar preditivo de selva (janelas de gank e nível 6) e coach de wave e CS',
      'Modo Split (Build + Gameplan lado a lado) e importação de runas em 1 clique',
      '100% externo e somente leitura, com modo click-through (F7) e suporte a PT-BR',
    ],
    tecnologias: ['C#', '.NET 9', 'WPF', 'Windows', 'Vercel'],
    acao: {
      rotulo: 'Abrir o site',
      detalhe: 'hopediff.vercel.app',
      url: 'https://hopediff.vercel.app',
    },
  },
  {
    id: 'hope-phasmophobia-overlay',
    categoria: 'overlays',
    nome: 'Hope Phasmophobia Overlay',
    jogo: 'Phasmophobia',
    icone: 'assets/projetos/phasmo-overlay-logo.svg',
    imagem: 'assets/projetos/phasmo-overlay-print.png',
    imagemAlt: 'Página do Hope Phasmophobia Overlay com HUD de investigação, medidor de passos em BPM e filtros de evidências',
    imagemRetrato: false,
    resumo:
      'HUD cognitivo externo para Phasmophobia que roda por cima do jogo sem precisar dar Alt-Tab. ' +
      'Marque evidências por atalho, meça a velocidade dos passos em BPM e controle cronômetros de sobrevivência.',
    destaques: [
      'Dedução completa de 30 fantasmas, com filtro de Mimic (orbe falso) e partidas 0-evidência',
      'Medidor de velocidade por passos (F10) com cálculo de BPM ao vivo e ajuste de Blood Moon (+15%)',
      'Cronômetros de Smudge (3:00), Crucifixo (0:25) e caçada com alertas sonoros e atalhos globais',
      'Três modos táticos: Análise completa, Intel compacto (Home) e Sobrevivência (Pause)',
      'Discord Rich Presence com telemetria da investigação e botão de privacidade em 1 clique',
      '100% externo (sem leitura de memória), código aberto (GPLv3) e em 10 idiomas, incluindo PT-BR',
    ],
    tecnologias: ['C#', 'WPF', 'Windows', 'Discord RPC', 'Vercel'],
    acao: {
      rotulo: 'Abrir o site',
      detalhe: 'hope-phasmophobia-overlay.vercel.app',
      url: 'https://hope-phasmophobia-overlay.vercel.app',
    },
  },
  {
    id: 'tela',
    categoria: 'comunicacao',
    nome: 'Tela',
    jogo: 'Qualquer jogo, direto no navegador',
    icone: 'assets/projetos/tela-logo.svg',
    imagem: 'assets/projetos/tela-print.png',
    imagemAlt: 'Tela de entrada do Tela, com campos de nome, sala e senha',
    imagemRetrato: false,
    resumo:
      'Compartilhamento de tela entre amigos pelo navegador, com baixo atraso e sem servidor. ' +
      'O vídeo vai direto do seu PC para o PC de cada amigo. Serve para qualquer jogo, e já traz uma integração ' +
      'básica com Escape from Tarkov.',
    destaques: [
      'Vídeo P2P via WebRTC: vai direto de PC para PC, sem passar por servidor',
      'Salas com senha opcional (criptografia com PBKDF2) e link para convidar',
      'Janela PiP por cima do jogo, com layouts, recortes e volume por amigo',
      'Integração básica com Escape from Tarkov: preços, tarefas, mapas, munição e wishlist',
      'Spotify Jams da sala e busca rápida com Ctrl+K',
      'Instalável como app (PWA) no Chrome e no Edge',
    ],
    tecnologias: ['JavaScript', 'WebRTC', 'Trystero / Nostr', 'PWA', 'Vercel'],
    acao: {
      rotulo: 'Abrir o site',
      detalhe: 'tarkov-multi-screen.vercel.app',
      url: 'https://tarkov-multi-screen.vercel.app',
    },
  },
];
