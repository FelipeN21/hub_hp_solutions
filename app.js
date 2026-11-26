import { CATEGORIAS, PROJETOS } from './projetos.js';

const TODOS = { id: 'todos', nome: 'Todos', descricao: 'Tudo o que já está publicado, separado por categoria.' };
const abas = [TODOS, ...CATEGORIAS];

const menu = document.getElementById('menu');
const lista = document.getElementById('projetos');
const titulo = document.getElementById('secao-titulo');
const descricao = document.getElementById('secao-descricao');

// Cria um elemento com classe e texto (sempre como texto, nunca HTML).
function el(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto != null) e.textContent = texto;
  return e;
}

function montarMenu() {
  for (const aba of abas) {
    const li = el('li');
    const a = el('a', 'menu-item');
    a.append(el('span', 'nome-longo', aba.nome), el('span', 'nome-curto', aba.nomeCurto ?? aba.nome));
    a.href = `#${aba.id}`;
    a.dataset.aba = aba.id;
    a.setAttribute('role', 'tab');
    const qtd = aba.id === 'todos' ? PROJETOS.length : PROJETOS.filter((p) => p.categoria === aba.id).length;
    a.append(el('span', 'contador', String(qtd)));
    li.append(a);
    menu.append(li);
  }
}

function cartao(p) {
  const art = el('article', 'cartao');
  art.id = p.id;

  const midia = el('a', 'cartao-midia' + (p.imagemRetrato ? ' retrato' : ''));
  midia.href = p.acao.url;
  midia.target = '_blank';
  midia.rel = 'noopener';
  midia.tabIndex = -1;
  midia.setAttribute('aria-hidden', 'true');
  const img = el('img');
  img.src = p.imagem;
  img.alt = p.imagemAlt;
  img.loading = 'lazy';
  midia.append(img);

  const corpo = el('div', 'cartao-corpo');

  const cab = el('div', 'cartao-cabecalho');
  const icone = el('img', 'cartao-icone');
  icone.src = p.icone;
  icone.alt = '';
  icone.width = 48;
  icone.height = 48;
  const nomes = el('div');
  nomes.append(el('h3', null, p.nome), el('p', 'cartao-jogo', p.jogo));
  cab.append(icone, nomes);

  const ul = el('ul', 'destaques');
  for (const d of p.destaques) ul.append(el('li', null, d));

  const techs = el('ul', 'tecnologias');
  techs.setAttribute('aria-label', 'Tecnologias');
  for (const t of p.tecnologias) techs.append(el('li', null, t));

  const cta = el('a', 'botao');
  cta.href = p.acao.url;
  cta.target = '_blank';
  cta.rel = 'noopener';
  cta.append(el('span', 'botao-rotulo', p.acao.rotulo), el('span', 'botao-detalhe', p.acao.detalhe));

  corpo.append(cab, el('p', 'cartao-resumo', p.resumo), ul, techs, cta);
  art.append(midia, corpo);
  return art;
}

function grupo(cat) {
  const projetos = PROJETOS.filter((p) => p.categoria === cat.id);
  const sec = el('section', 'grupo');
  const h = el('h3', 'grupo-titulo');
  const link = el('a', null, cat.nome);
  link.href = `#${cat.id}`;
  h.append(link);
  sec.append(h);
  if (projetos.length === 0) sec.append(el('p', 'vazio', 'Em breve.'));
  for (const p of projetos) sec.append(cartao(p));
  return sec;
}

function mostrar() {
  const id = location.hash.slice(1);
  const aba = abas.find((a) => a.id === id) ?? TODOS;

  for (const a of menu.querySelectorAll('.menu-item')) {
    const ativo = a.dataset.aba === aba.id;
    a.classList.toggle('ativo', ativo);
    a.setAttribute('aria-selected', String(ativo));
  }

  titulo.textContent = aba.id === 'todos' ? 'Todos os projetos' : aba.nome;
  descricao.textContent = aba.descricao;

  lista.replaceChildren(
    ...(aba.id === 'todos' ? CATEGORIAS.map(grupo) : grupo(aba).querySelectorAll(':scope > :not(.grupo-titulo)')),
  );
}

montarMenu();
mostrar();
window.addEventListener('hashchange', () => {
  mostrar();
  document.querySelector('.secao').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
