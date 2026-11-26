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
