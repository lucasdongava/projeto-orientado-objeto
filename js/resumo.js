/* Projeto Orientado a Objetos — Diagramas Mermaid e resumo de revisão das 3 unidades */
// ================= MERMAID (diagramas) =================
let mmdP = null, mmdSeq = 0;
function loadMermaid() {
  if (window.mermaid) return Promise.resolve(window.mermaid);
  if (!mmdP) mmdP = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js'; s.onload = () => res(window.mermaid); s.onerror = () => { mmdP = null; rej(); }; document.head.appendChild(s); });
  return mmdP;
}
const cssv = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const curTheme = () => document.documentElement.dataset.theme || 'light';
async function renderMermaid(root) {
  const nodes = [...root.querySelectorAll('.mmd')].filter(n => n.dataset.theme !== curTheme());
  if (!nodes.length) return;
  nodes.forEach(n => { if (!n.dataset.theme) n.innerHTML = '<div class="mmd-load">desenhando diagrama…</div>'; });
  let m; try { m = await loadMermaid(); } catch (e) { nodes.forEach(n => { n.innerHTML = '<div class="mmd-load">Conecte-se à internet para ver este diagrama.</div>'; }); return; }
  const v = n => cssv(n);
  m.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'base', fontFamily: 'Geist, system-ui, sans-serif',
    themeVariables: { fontSize: '14px', background: v('--bg'), primaryColor: v('--panel2'), primaryTextColor: v('--fg'), primaryBorderColor: v('--fg3'), lineColor: v('--fg2'), secondaryColor: v('--acc-s'), tertiaryColor: v('--bg'), mainBkg: v('--panel2'), nodeBorder: v('--fg3'), textColor: v('--fg'), noteBkgColor: v('--warn-s'), noteTextColor: v('--fg'), noteBorderColor: v('--warn'), actorBkg: v('--panel2'), actorBorder: v('--fg3'), actorTextColor: v('--fg'), actorLineColor: v('--fg3'), signalColor: v('--fg'), signalTextColor: v('--fg'), labelBoxBkgColor: v('--acc-s'), labelBoxBorderColor: v('--acc'), labelTextColor: v('--fg'), loopTextColor: v('--fg'), activationBkgColor: v('--acc-s'), activationBorderColor: v('--acc'), attributeBackgroundColorOdd: v('--bg'), attributeBackgroundColorEven: v('--panel2') },
    sequence: { useMaxWidth: true, mirrorActors: false, actorMargin: 40 }, class: { useMaxWidth: true }, er: { useMaxWidth: true } });
  for (const n of nodes) {
    const src = n.dataset.src || MMD[n.dataset.mmd];
    try { const { svg } = await m.render('mmd' + (++mmdSeq), src); n.innerHTML = svg; n.dataset.theme = curTheme(); }
    catch (e) { n.innerHTML = '<pre class="mini">' + escV(src) + '</pre>'; n.dataset.theme = curTheme(); }
  }
}

// ================= RESUMO PARA A PROVA =================
const escR = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const C = s => `<pre class="mini" data-hl>${escR(s.replace(/^\n/, ''))}</pre>`;
const KEY = t => `<div class="key">${t}</div>`;
const RESUMO = [
{ u: 1, id: 'r-u1', title: 'Unidade 1 · Aspectos Gerais', blocks: [
  ['Modelo, artefato e projeto', `<ul><li><b>Modelo:</b> representação em pequena escala de algo que se pretende executar em grande.</li><li><b>Artefato:</b> produto do desenvolvimento (diagrama, documento, código, script).</li><li>Modelos servem para <b>projetar o FUTURO</b>, não documentar o PASSADO.</li><li><b>Design</b> = desenho técnico (como funciona) · <b>Project</b> = empreendimento (prazo, custo, equipe).</li></ul>`],
  ['Processo de software', `<p class="rs-h">5 atividades metodológicas, nesta ordem:</p><div class="sim"><span>1</span><code>Comunicação</code><span>2</span><code>Planejamento</code><span>3</span><code>Modelagem (análise + projeto)</code><span>4</span><code>Construção (programação, testes, depuração)</code><span>5</span><code>Entrega</code></div>
<ul><li>Atividades do <b>design</b>: aspectos dinâmicos/estáticos/estruturais, banco de dados, arquitetura, integração, interface, padrões.</li></ul>`],
  ['UML', `<ul><li><b>UML</b>: metamodelo para análise, projeto e implementação de sistemas (e modelagem de negócios).</li><li><b>Estruturais:</b> classes, objetos, componentes, estrutura composta, implantação, pacotes.</li><li><b>Comportamentais:</b> casos de uso, atividades, máquina de estados.</li><li><b>Interação</b> (subgrupo dos comportamentais): sequência, comunicação, visão geral de interação.</li></ul>`],
  ['MER e pé de galinha', `<ul><li><b>Entidade</b> (tem chave) · <b>relacionamento</b> (1:1, 1:N, M:N) · <b>entidade fraca</b> (depende de outra).</li></ul>
<div class="tbl-wrap"><table><tr><th>Pé de galinha</th><th>Classes</th><th>Lê-se</th></tr><tr><td>o|</td><td>0..1</td><td>zero ou um</td></tr><tr><td>||</td><td>1</td><td>um e somente um</td></tr><tr><td>o{</td><td>*</td><td>zero ou vários</td></tr><tr><td>|{</td><td>1..*</td><td>um ou vários</td></tr></table></div>`]
] },
{ u: 2, id: 'r-u2', title: 'Unidade 2 · Projeto OO', blocks: [
  ['Conceitos básicos', `<ul><li><b>Objeto</b> = estado + comportamento + identidade (objeto = instância).</li><li><b>Classe</b> = molde; mesmos atributos, valores diferentes em cada objeto.</li><li><b>Método de instância</b> só é executado por um objeto.</li><li><b>Pacote</b> = agrupa classes (namespace).</li></ul>${FIG2.argouml ? FIG2.argouml() : ''}`],
  ['Visibilidade e encapsulamento', `<div class="tbl-wrap"><table><tr><th>Símbolo</th><th>Visibilidade</th><th>Quem enxerga</th></tr><tr><td>+</td><td>pública</td><td>todos</td></tr><tr><td>−</td><td>privada</td><td>só a própria classe</td></tr><tr><td>#</td><td>protegida</td><td>a classe e as filhas</td></tr><tr><td>~</td><td>de pacote</td><td>classes do mesmo pacote</td></tr></table></div>
<ul><li><b>Encapsulamento:</b> esconder a implementação; acessar dados só por métodos (cápsula).</li><li>Regra: <b>atributos privados, métodos públicos</b>.</li></ul>${KEY('<b>POJO/POCO</b> (getters e setters): <b>não</b> aparecem no diagrama de classes, mas <b>são declarados</b> na implementação. Atributos que são referências a outras classes também não são desenhados.')}`],
  ['Relacionamentos (símbolos)', `${FIG2.rels()}
<div class="tbl-wrap"><table><tr><th>Multiplicidade</th><th>Significa</th></tr><tr><td>1</td><td>exatamente um</td></tr><tr><td>0..1</td><td>zero ou um</td></tr><tr><td>* = 0..*</td><td>zero ou muitos (iguais!)</td></tr><tr><td>1..*</td><td>um ou muitos</td></tr><tr><td>1..3</td><td>mín. 1, máx. 3 (nunca 1**3)</td></tr></table></div>`],
  ['Agregação × composição (cai sempre)', `<div class="vs"><div><b>Agregação ◇</b><span>todo-parte; a parte <b>vive sem o todo</b>.</span><small>Time ◇— Jogador</small></div><div><b>Composição ◆</b><span>todo-parte <b>exclusivo</b>; a parte <b>morre com o todo</b>.</span><small>NotaFiscal ◆— Item</small></div></div>
${KEY('O losango fica no lado do <b>todo</b>. Em <code>Y ◇— X ◆— Z</code>: <b>Z depende de X para existir</b>. Na prova, “as cardinalidades todo-parte são sempre 1 para N” foi considerado Verdadeiro, e “agregação e composição têm o mesmo código” foi considerado Falso.')}`],
  ['Classe associativa e dependência', `<ul><li><b>Classe associativa</b>: dados da própria ligação (Turma entre Professor e Disciplina; Autoria entre Autor e Artigo). Linha tracejada até o meio da associação. Típica de M:N.</li><li><b>Dependência</b> (┈┈>): o cliente <b>recebe o fornecedor por parâmetro</b>, sem guardá-lo em atributo. Mudar o fornecedor pode afetar o cliente.</li></ul>`],
  ['Herança, abstrata e polimorfismo', `${C(`
abstract class FormaPagamento {
    protected double valor;
    public abstract void processarPagamento();      // sem corpo
}
class Boleto extends FormaPagamento {
    @Override public void processarPagamento() { ... }   // obrigatório
}
FormaPagamento f = new Boleto();   // ok
f.processarPagamento();            // roda a versão do Boleto (polimorfismo)
// new FormaPagamento();           // ERRO: classe abstrata`)}
${KEY('<b>Resposta padrão:</b> polimorfismo traz <b>reutilização de código e baixo acoplamento</b>: novos tipos entram criando subclasses, <b>sem alterar</b> o método da mãe. Sem ele, o método seria monolítico, cheio de <code>if</code>s. <b>Nem toda herança tem polimorfismo</b> (Falso na prova).')}`],
  ['Interface', `<ul><li><b>Contrato</b>: só assinaturas; quem implementa (<code>implements</code>) é obrigado a escrever todos os métodos.</li><li>Une classes <b>não relacionadas</b> com comportamento comum, sem herança. Facilita o desacoplamento.</li><li>Notação: «interface» + linha tracejada com triângulo vazio (realização), ou “pirulito”.</li><li>Uma classe pode implementar <b>várias</b> interfaces, mas herdar de <b>uma</b> classe só.</li></ul>`],
  ['Diagrama de sequência', `<ul><li>Enfatiza a <b>ordem temporal</b> das mensagens (de cima para baixo).</li><li>Elementos: <b>ator</b>, <b>objeto</b> (:Classe), <b>linha da vida</b>, <b>caixa de ativação</b>, <b>mensagem</b> (seta cheia), <b>retorno</b> (tracejada), <b>automensagem</b>, criação/destruição (X).</li></ul>
<div class="tbl-wrap"><table><tr><th>Operador</th><th>Uso</th></tr><tr><td>alt</td><td>um ou outro (if/else)</td></tr><tr><td>opt</td><td>um ou nada (if)</td></tr><tr><td>loop</td><td>repetição</td></tr><tr><td>par</td><td>paralelo</td></tr><tr><td>strict</td><td>ordem estrita</td></tr><tr><td>neg</td><td>negação</td></tr><tr><td>break</td><td>quebra (exceção)</td></tr></table></div>
<ul><li>MVC: <b>fronteira</b> (tela/API), <b>controle</b> (regras e sequência), <b>entidade</b> (dados).</li></ul>`]
] },
{ u: 3, id: 'r-u3', title: 'Unidade 3 · Dados e persistência', blocks: [
  ['MER → tabelas → classes', `<div class="tbl-wrap"><table><tr><th>Caso</th><th>Tabelas</th><th>Diagrama de classes</th></tr>
<tr><td>1:N</td><td>FK no lado N</td><td>associação</td></tr><tr><td>M:N</td><td>tabela de ligação (Lota → Lotação), PK composta das FKs</td><td>classe associativa</td></tr>
<tr><td>1:1 / generalização</td><td>filha com a mesma PK do pai (PK e FK)</td><td>herança</td></tr><tr><td>Entidade fraca</td><td>PK composta com a PK do dono</td><td>composição</td></tr>
<tr><td>Autorrelacionamento 1:N</td><td>FK para a própria tabela (pai)</td><td>autoassociação</td></tr><tr><td>Autorrelacionamento N:N</td><td>tabela com duas FKs para a mesma tabela (Partida)</td><td>autoassociação / classe associativa</td></tr></table></div>
${KEY('Diagrama de classes e DER são <b>artefatos diferentes</b>, mesmo que um possa ser gerado a partir do outro.')}`],
  ['ORM e Database First', `<ul><li><b>ORM</b>: mapeia objetos ↔ tabelas (JPA/Hibernate, Entity Framework).</li><li><b>Code First</b>: classes → tabelas. <b>Database First</b>: tabelas → classes (<b>scaffolding</b>).</li><li>Na geração, a FK vira <b>referência ao objeto</b>; nomes viram camelCase.</li></ul>`],
  ['Chaves', `<div class="vs"><div><b>Natural</b><span>do mundo real: CPF, placa, nº de documento.</span></div><div><b>Substituta (surrogate)</b><span>inteiro gerado pelo sistema, sem significado, nunca reutilizado.</span></div></div>
<ul><li><b>Vantagens</b> da substituta: sem repetição, joins/índices mais rápidos, imune a mudanças de regra, troca chaves compostas.</li><li><b>Desvantagens</b>: não serve para consulta, viola a 3FN, varia por SGBD, atrapalha migração/integração.</li></ul>`],
  ['Etapas e SQL', `<div class="sim"><span>1</span><code>Conceitual: DER + dicionário de dados</code><span>2</span><code>Lógico: tabelas, tipos, chaves</code><span>3</span><code>Físico: script do SGBD</code><span>4</span><code>Implementação: rodar e produzir</code></div>${C(`
CREATE TABLE LIVRO (
  ISBN NUMERIC(13) NOT NULL,
  COD_EDITORA INT NOT NULL,
  TITULO VARCHAR(200) NOT NULL,
  PRIMARY KEY (ISBN),
  FOREIGN KEY (COD_EDITORA) REFERENCES EDITORA(COD_EDITORA)
    ON DELETE NO ACTION ON UPDATE NO ACTION);`)}`]
] }
];
const ERROS_PROVA = [
  ['Losango do lado da parte', 'O losango fica no lado do <b>todo</b>.'], ['Confundir ◇ e ◆', 'Vazio = agregação (parte independente); cheio = composição.'],
  ['Escrever <code>1**3</code>', 'O certo é <code>1..3</code>.'], ['Achar que <code>*</code> ≠ <code>0..*</code>', 'São idênticos.'],
  ['Desenhar get/set no diagrama', 'POJO não vai no diagrama de projeto (mas vai no código).'], ['Desenhar a FK como atributo da classe', 'A referência é a linha do relacionamento.'],
  ['“Toda herança tem polimorfismo”', 'Falso: precisa sobrescrever o método.'], ['Dar <code>new</code> em classe abstrata', 'Erro de compilação.'],
  ['FK no lado 1', 'A FK vai para o lado N.'], ['alt × opt', 'alt = um ou outro; opt = um ou nada.']
];
const FLASH = [
  ['Objeto tem…', 'estado, comportamento e identidade'], ['Símbolo #', 'protected (classe e filhas)'], ['* e 0..* são…', 'idênticos'], ['◆ no lado de X ligado a Z', 'Z depende de X (composição)'],
  ['Ganho do polimorfismo', 'reutilização e baixo acoplamento'], ['Fornecedor por parâmetro, sem atributo', 'dependência'], ['Interface contém…', 'apenas assinaturas (contrato)'], ['Operador “um ou outro”', 'alt'],
  ['M:N vira…', 'tabela de ligação (classe associativa)'], ['Entidade fraca no diagrama de classes', 'composição'], ['Tabelas → classes', 'Database First (scaffolding)'], ['Chave gerada pelo sistema', 'substituta (surrogate)'],
  ['Diagrama de sequência é…', 'comportamental, de interação'], ['Getters/setters no diagrama?', 'não; só no código'], ['Etapa que gera o script SQL', 'projeto físico'], ['Modelos projetam…', 'o futuro']
];
function renderResumo() {
  let h = `<div class="crumb">Revisão para a prova</div><h1>Resumo das 3 unidades</h1>
  <p class="lead">Conceitos, notações, código-modelo, as respostas que mais caem e cartões de revisão rápida — tudo numa página.</p>
  <div class="rs-plan"><b>Se você tem poucas horas</b><ol><li><b>20 min</b> — Unidade 1: definições e classificação UML.</li><li><b>60 min</b> — Unidade 2: símbolos dos relacionamentos, agregação × composição, polimorfismo (decore a resposta padrão) e sequência.</li><li><b>30 min</b> — Unidade 3: tabela de conversão MER → classes e chaves.</li><li><b>15 min</b> — Erros clássicos + cartões.</li></ol></div>
  <nav class="rs-nav">${RESUMO.map(U => `<button data-jump="${U.id}" style="--c:${UNITS[U.u].color}">${U.title.split(' · ')[0]}<small>${U.title.split(' · ')[1]}</small></button>`).join('')}<button data-jump="r-erros" style="--c:var(--o-err)">Erros<small>clássicos</small></button><button data-jump="r-flash" style="--c:var(--acc)">Cartões<small>revisão</small></button></nav>`;
  for (const U of RESUMO) {
    h += `<section class="rs-unit" id="${U.id}"><h2 style="--c:${UNITS[U.u].color}"><span class="rs-dot"></span>${U.title}</h2>`;
    U.blocks.forEach(([t, body]) => { h += `<details class="rs-card" open><summary>${t}</summary><div class="rs-body">${body}</div></details>`; });
    h += `</section>`;
  }
  h += `<section class="rs-unit" id="r-erros"><h2 style="--c:var(--o-err)"><span class="rs-dot"></span>Erros clássicos de prova</h2><div class="errs">${ERROS_PROVA.map(([a, b]) => `<div class="errc"><b>✕ ${a}</b><span>✓ ${b}</span></div>`).join('')}</div></section>`;
  h += `<section class="rs-unit" id="r-flash"><h2 style="--c:var(--acc)"><span class="rs-dot"></span>Cartões de revisão rápida</h2><p style="color:var(--fg2)">Pense na resposta e toque no cartão para conferir.</p><div class="flash">${FLASH.map(([q, a]) => `<button class="fc"><span class="fq">${q}</span><span class="fa2">${a}</span></button>`).join('')}</div></section>`;
  h += `<div class="rs-end"><b>Boa prova! 🍀</b><span>Na questão de modelagem: grife substantivos (classes) e verbos (relacionamentos), anote as quantidades dos dois lados e pergunte se a parte vive sem o todo.</span></div>`;
  return h;
}

