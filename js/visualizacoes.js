/* Projeto Orientado a Objetos — Player passo a passo e visualizações interativas de POO e banco de dados */
// ================= VISUALIZAÇÕES DE POO =================
const VIZ = {};
function vhead(el, tag, title, sub) { el.innerHTML = `<div class="viz-h"><span class="tag">${tag}</span><b>${title}</b></div>${sub ? `<p class="vsub">${sub}</p>` : ''}`; }
// ---- morph: atualiza só o que mudou, para as transições CSS animarem entre os passos ----
const IH = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
function morph(el, html) { const t = document.createElement(el.tagName === 'TBODY' ? 'table' : 'div'); IH.set.call(t, html); patchKids(el, t); }
function isNew(n) { if (n.nodeType === 1) n.classList.add('m-new'); return n; }
function patchKids(a, b) {
  const bc = [...b.childNodes].filter(n => n.nodeType !== 3 || n.data.trim() || b.childNodes.length === 1);
  const keyed = bc.length && bc.every(n => n.nodeType === 1 && n.dataset.key != null);
  if (keyed) {
    const keys = new Set(bc.map(n => n.dataset.key)), old = new Map();
    [...a.childNodes].forEach(n => { if (n.nodeType === 1 && n.dataset.key != null && keys.has(n.dataset.key)) old.set(n.dataset.key, n); else n.remove(); });
    bc.forEach((nb, i) => { let na = old.get(nb.dataset.key); if (na) patch(na, nb); else na = isNew(nb); if (a.children[i] !== na) a.insertBefore(na, a.children[i] || null); });
    return;
  }
  const ac = [...a.childNodes].filter(n => n.nodeType !== 3 || n.data.trim() || a.childNodes.length === 1);
  bc.forEach((nb, i) => {
    const na = ac[i];
    if (!na) { a.appendChild(isNew(nb)); return; }
    if (na.nodeType !== nb.nodeType || na.nodeName !== nb.nodeName) { a.replaceChild(isNew(nb), na); return; }
    if (na.nodeType === 3) { if (na.data !== nb.data) na.data = nb.data; return; }
    patch(na, nb);
  });
  for (let i = bc.length; i < ac.length; i++) ac[i].remove();
}
function patch(a, b) {
  for (const { name } of [...a.attributes]) if (!b.hasAttribute(name)) a.removeAttribute(name);
  for (const { name, value } of [...b.attributes]) if (a.getAttribute(name) !== value) a.setAttribute(name, value);
  if (a.classList.contains('vmsg')) { if (IH.get.call(a) !== IH.get.call(b)) { IH.set.call(a, IH.get.call(b)); a.classList.remove('flash'); void a.offsetWidth; a.classList.add('flash'); } return; }
  patchKids(a, b);
}
function add(el, html) {
  const d = document.createElement('div'); IH.set.call(d, html); const n = d.firstElementChild; el.appendChild(n);
  Object.defineProperty(n, 'innerHTML', { configurable: true, get() { return IH.get.call(n); }, set(v) { morph(n, v); } });
  return n;
}
// player: avança/volta por quadros pré-calculados
function player(el, build, draw, speed = 900) {
  const ctl = add(el, `<div class="vctl"><div class="vprog"><i></i></div><button data-a="prev" aria-label="Voltar um passo">◀</button><button data-a="play" class="pri"></button><button data-a="next">Próximo ▸</button><button data-a="reset" aria-label="Recomeçar">↺</button><span class="vstep"></span></div>`);
  let F = build(), i = 0, t = null;
  const B = k => ctl.querySelector(`[data-a=${k}]`);
  const stop = () => { clearInterval(t); t = null; };
  const show = () => { draw(F[i], i, F); ctl.querySelector('.vstep').textContent = `passo ${i + 1} de ${F.length}`; ctl.querySelector('.vprog i').style.transform = `scaleX(${(i + 1) / F.length})`; el.classList.toggle('playing', !!t); B('prev').disabled = !i; B('next').disabled = i >= F.length - 1; B('play').textContent = t ? '⏸ Pausar' : i >= F.length - 1 ? '↺ De novo' : '▶ Animar'; };
  ctl.onclick = e => {
    const a = e.target.closest('button')?.dataset.a; if (!a) return;
    if (a === 'prev') { stop(); i = Math.max(0, i - 1); }
    if (a === 'next') { stop(); i = Math.min(F.length - 1, i + 1); }
    if (a === 'reset') { stop(); i = 0; }
    if (a === 'play') { if (t) stop(); else { if (i >= F.length - 1) i = 0; t = setInterval(() => { if (!el.isConnected || i >= F.length - 1) { stop(); if (el.isConnected) show(); return; } i++; show(); }, speed); } }
    show();
  };
  show();
  return { reload() { stop(); F = build(); i = 0; show(); } };
}
const escV = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// processo de software
VIZ.processo = el => {
  vhead(el, 'Passo a passo', 'As 5 atividades metodológicas', 'Avance e veja o que acontece e o que é produzido em cada atividade.');
  const st = add(el, `<div style="display:flex;flex-direction:column;gap:12px"></div>`);
  const A = [['Comunicação', 'Conversar com o cliente e levantar requisitos.', 'documento de requisitos'], ['Planejamento', 'Estimar prazos, custos, riscos e equipe.', 'cronograma, plano do projeto'],
    ['Modelagem', '<b>Análise</b> (o problema) e <b>projeto/design</b> (a solução técnica).', 'diagramas UML, modelo de dados'], ['Construção', 'Programação, testes e depuração.', 'código, casos de teste'], ['Entrega', 'Implantar e receber o retorno do cliente.', 'sistema em produção']];
  player(el, () => A.map((_, i) => i), i => {
    st.innerHTML = `<div class="pflow">${A.map((a, k) => `<div class="${k === i ? 'on' : k < i ? 'done' : ''}"><i>${k + 1}</i><b>${a[0]}</b></div>`).join('')}</div>
      <div class="vmsg"><b>${A[i][0]}:</b> ${A[i][1]}<br><small style="color:var(--fg3)">Artefatos: ${A[i][2]}</small></div>`;
  }, 1600);
};

// classificador de diagramas UML
VIZ.umlclass = el => {
  vhead(el, 'Jogo', 'Em que grupo fica cada diagrama?', 'Toque no diagrama e depois no grupo certo.');
  const D = [['Classes', 'e'], ['Sequência', 'i'], ['Casos de uso', 'c'], ['Pacotes', 'e'], ['Máquina de estados', 'c'], ['Comunicação', 'i'], ['Implantação', 'e'], ['Atividades', 'c'], ['Objetos', 'e'], ['Componentes', 'e']];
  const G = { e: 'Estrutural', c: 'Comportamental', i: 'Interação' };
  let left = D.map((d, i) => i), sel = null, ok = 0, err = 0;
  const box = add(el, `<div></div>`), msg = add(el, `<div class="vmsg">Escolha um diagrama.</div>`);
  const draw = () => {
    box.innerHTML = `<div class="chips">${left.map(i => `<button data-d="${i}" class="${sel === i ? 'on' : ''}">${D[i][0]}</button>`).join('') || '<span style="color:var(--ok);font-weight:600">✓ Todos classificados!</span>'}</div>
      <div class="bins">${Object.entries(G).map(([k, n]) => `<button data-g="${k}"><b>${n}</b><small>${D.filter((d, i) => d[1] === k && !left.includes(i)).map(d => d[0]).join(' · ') || '—'}</small></button>`).join('')}</div>
      <div class="stats"><div class="stat"><small>acertos</small><b>${ok}</b></div><div class="stat"><small>erros</small><b>${err}</b></div></div>`;
  };
  box.addEventListener('click', e => {
    const d = e.target.closest('[data-d]'), g = e.target.closest('[data-g]');
    if (d) { sel = +d.dataset.d; msg.innerHTML = `Onde fica <b>${D[sel][0]}</b>?`; }
    else if (g && sel !== null) {
      if (D[sel][1] === g.dataset.g) { ok++; left = left.filter(i => i !== sel); msg.innerHTML = `✓ <b>${D[sel][0]}</b> é ${G[g.dataset.g].toLowerCase()}.`; }
      else { err++; msg.innerHTML = `✕ Não. <b>${D[sel][0]}</b> é ${G[D[sel][1]].toLowerCase()}${D[sel][1] === 'i' ? ' (interação, um tipo de comportamental)' : ''}.`; left = left.filter(i => i !== sel); }
      sel = null;
    }
    draw();
  });
  draw();
};

// criar objetos a partir da classe
VIZ.objetos = el => {
  vhead(el, 'Experimente', 'Uma classe, vários objetos', 'Preencha e crie pacientes. Todos têm os mesmos atributos, cada um com seus valores.');
  const f = add(el, `<div class="row-in"><label>nome <input type="text" value="Ana" data-k="n" style="width:110px"></label><label>peso <input type="number" value="70" data-k="p"></label><label>altura <input type="number" value="1.75" step="0.01" data-k="a"></label><button class="vbtn on" data-a="new">new Paciente(…)</button></div>`);
  const objs = [{ n: 'Caio', p: 92, a: 1.8 }];
  const box = add(el, `<div></div>`), msg = add(el, `<div class="vmsg">A classe é o molde. Cada <code>new</code> cria um objeto novo, com identidade própria.</div>`);
  const draw = () => {
    box.innerHTML = `<div class="objwrap"><div class="objcls"><small>classe</small><b>Paciente</b><span>-nome<br>-peso<br>-altura</span><span>+calcularIMC()</span></div><div class="objs">${objs.map((o, i) => `<div class="obj"><small>p${i + 1} : Paciente</small><span>nome = "${escV(o.n)}"</span><span>peso = ${o.p}</span><span>altura = ${o.a}</span><button class="vbtn" data-imc="${i}">p${i + 1}.calcularIMC()</button></div>`).join('')}</div></div>`;
  };
  el.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.a === 'new') { const q = k => f.querySelector(`[data-k=${k}]`).value; objs.push({ n: q('n') || 'Sem nome', p: +q('p') || 0, a: +q('a') || 1 }); if (objs.length > 6) objs.shift(); draw(); msg.innerHTML = `Objeto <b>p${objs.length}</b> criado. Mesma classe, valores diferentes.`; }
    if (b.dataset.imc !== undefined) { const o = objs[+b.dataset.imc], v = o.p / (o.a * o.a); msg.innerHTML = `<code>p${+b.dataset.imc + 1}.calcularIMC()</code> usa os valores <b>deste</b> objeto: ${o.p} / (${o.a} × ${o.a}) = <b>${v.toFixed(2)}</b>`; }
  });
  draw();
};

// visibilidade
VIZ.visibilidade = el => {
  vhead(el, 'Toque', 'Quem enxerga cada símbolo?', 'Escolha o modificador e veja quem pode acessar o atributo.');
  const V = { '+': ['public', [1, 1, 1, 1]], '#': ['protected', [1, 1, 1, 0]], '~': ['pacote (padrão)', [1, 0, 1, 0]], '-': ['private', [1, 0, 0, 0]] };
  const W = ['A própria classe', 'Classe filha (outro pacote)', 'Classe do mesmo pacote', 'Qualquer outra classe'];
  const t = add(el, `<div class="vtabs">${Object.entries(V).map(([k, v]) => `<button class="vbtn" data-v="${k}"><b style="font-family:'JetBrains Mono',monospace">${k}</b> ${v[0]}</button>`).join('')}</div>`);
  const box = add(el, `<div></div>`);
  const pick = k => { t.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === k));
    box.innerHTML = `<div class="vis">${W.map((w, i) => `<div class="${V[k][1][i] ? 'yes' : 'no'}"><i>${V[k][1][i] ? '✓' : '✕'}</i>${w}</div>`).join('')}</div><div class="vmsg" style="margin-top:10px"><code>${k}saldo: double</code> no diagrama = atributo ${V[k][0] === 'pacote (padrão)' ? 'de visibilidade padrão' : V[k][0]} na implementação.${k === '-' ? ' Regra de ouro do encapsulamento: <b>atributos privados, métodos públicos</b>.' : ''}${k === '#' ? ' Útil na herança: a filha usa o atributo da mãe.' : ''}</div>`; };
  t.onclick = e => { const b = e.target.closest('[data-v]'); if (b) pick(b.dataset.v); };
  pick('-');
};

// cápsula: acesso direto x método
VIZ.capsula = el => {
  vhead(el, 'Experimente', 'Mexer direto × pedir ao objeto', 'Tente alterar o saldo das duas formas.');
  let saldo = 100; const log = [];
  const box = add(el, `<div></div>`);
  const draw = () => { box.innerHTML = `<div class="caps"><div class="cap-o"><small>conta : Conta</small><div class="cap-core"><span>-saldo</span><b>R$ ${saldo.toFixed(2)}</b></div><div class="cap-ms"><span>+depositar()</span><span>+sacar()</span><span>+getSaldo()</span></div></div>
    <div class="cap-btns"><button class="vbtn" data-c="direto">conta.saldo = -500</button><button class="vbtn" data-c="sacar">conta.sacar(500)</button><button class="vbtn" data-c="sacar50">conta.sacar(50)</button><button class="vbtn" data-c="dep">conta.depositar(30)</button></div></div>
    <div class="vmsg">${log[0] || 'O saldo fica <b>dentro da cápsula</b>. Só os métodos públicos chegam até ele, e eles aplicam as regras.'}</div>`; };
  box.addEventListener('click', e => {
    const c = e.target.closest('[data-c]')?.dataset.c; if (!c) return;
    if (c === 'direto') log.unshift('<b style="color:var(--o-err)">✕ Erro de compilação:</b> <code>saldo has private access in Conta</code>. Sem encapsulamento, qualquer classe poderia deixar o saldo negativo.');
    if (c === 'sacar') log.unshift(`<b style="color:var(--warn)">! Recusado pelo método:</b> saldo de R$ ${saldo.toFixed(2)} é menor que 500. A regra fica num lugar só.`);
    if (c === 'sacar50') { if (saldo >= 50) { saldo -= 50; log.unshift('✓ <code>sacar(50)</code> validou e alterou o saldo.'); } else log.unshift('! Saldo insuficiente.'); }
    if (c === 'dep') { saldo += 30; log.unshift('✓ <code>depositar(30)</code> alterou o saldo pelo caminho certo.'); }
    draw();
  });
  draw();
};

// leitor de multiplicidade
VIZ.multi = el => {
  vhead(el, 'Monte a frase', 'Lendo uma associação', 'Escolha as multiplicidades e veja como se lê.');
  const M = { '1': 'exatamente um', '0..1': 'no máximo um (opcional)', '*': 'zero ou muitos', '1..*': 'um ou muitos', '1..3': 'de um a três', '10..15': 'de dez a quinze' };
  const f = add(el, `<div class="row-in"><b>Departamento</b><select data-k="a">${Object.keys(M).map(k => `<option ${k === '1' ? 'selected' : ''}>${k}</option>`).join('')}</select><span>——</span><select data-k="b">${Object.keys(M).map(k => `<option ${k === '*' ? 'selected' : ''}>${k}</option>`).join('')}</select><b>Funcionario</b></div>`);
  const msg = add(el, `<div class="vmsg"></div>`);
  const upd = () => { const a = f.querySelector('[data-k=a]').value, b = f.querySelector('[data-k=b]').value;
    msg.innerHTML = `Um departamento tem <b>${M[b]}</b> funcionário(s).<br>Um funcionário pertence a <b>${M[a]}</b> departamento(s).<br><small style="color:var(--fg3)">Truque: o número escrito <b>perto de uma classe</b> diz quantos objetos <b>dela</b> se ligam a um objeto da outra.</small>`; };
  f.addEventListener('change', upd); upd();
};

// agregação x composição
VIZ.todoparte = el => {
  vhead(el, 'Simulação', 'O que acontece ao apagar o todo?', 'Escolha o tipo e apague o objeto “todo”.');
  const T = { ag: { todo: 'Time', parte: 'Jogador', itens: ['Rafa', 'Duda', 'Léo'], sym: '◇', nome: 'Agregação' }, co: { todo: 'NotaFiscal', parte: 'Item', itens: ['Teclado', 'Mouse', 'Cabo'], sym: '◆', nome: 'Composição' } };
  let k = 'ag', apagado = false;
  const tb = add(el, `<div class="vtabs"><button class="vbtn on" data-t="ag">◇ Agregação</button><button class="vbtn" data-t="co">◆ Composição</button></div>`);
  const box = add(el, `<div></div>`);
  const draw = () => { const t = T[k];
    box.innerHTML = `<div class="tp"><div class="tp-todo ${apagado ? 'gone' : ''}"><small>todo</small><b>${t.todo}</b><span class="sym">${t.sym}</span></div><div class="tp-parts">${t.itens.map(n => `<div class="tp-p ${apagado && k === 'co' ? 'gone' : ''} ${apagado && k === 'ag' ? 'free' : ''}"><small>${t.parte}</small>${n}</div>`).join('')}</div></div>
      <div class="vctl"><button class="pri" data-x="del" ${apagado ? 'disabled' : ''}>Apagar ${t.todo}</button><button data-x="reset">↺</button></div>
      <div class="vmsg">${!apagado ? `<b>${t.nome}:</b> o losango ${t.sym} fica do lado do <b>${t.todo}</b> (o todo).` : k === 'ag' ? '<b>Agregação:</b> o time acabou, mas os jogadores <b>continuam existindo</b> e podem entrar em outro time.' : '<b>Composição:</b> a nota fiscal foi apagada e os itens <b>foram junto</b>. Eles não existem sem ela.'}</div>`; };
  tb.onclick = e => { const b = e.target.closest('[data-t]'); if (!b) return; k = b.dataset.t; apagado = false; tb.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); draw(); };
  box.addEventListener('click', e => { const x = e.target.closest('[data-x]')?.dataset.x; if (x === 'del') apagado = true; if (x === 'reset') apagado = false; if (x) draw(); });
  draw();
};

// polimorfismo
VIZ.polimorfismo = el => {
  vhead(el, 'Experimente', 'A mesma chamada, comportamentos diferentes', 'Rode o laço e depois adicione um novo tipo de pagamento sem mexer no laço.');
  const P = { CartaoCredito: ['💳', 'Cartão final 4111: R$ 150.0'], Boleto: ['🧾', 'Boleto 34191: R$ 89.9'], Pix: ['⚡', 'Pix para ana@email.com: R$ 42.0'], Cripto: ['🪙', 'Cripto carteira 0xA1: R$ 300.0'] };
  let lista = ['CartaoCredito', 'Boleto'], cur = -1, t = null;
  const box = add(el, `<div></div>`);
  const draw = () => { box.innerHTML = `<div class="poly"><div class="vcode"><div class="${cur >= 0 ? 'on' : ''}">for (FormaPagamento f : lista)</div><div class="${cur >= 0 ? 'on' : ''}">    f.processarPagamento();</div></div>
    <div class="pobjs">${lista.map((n, i) => `<div class="${i === cur ? 'on' : ''}"><span>${P[n][0]}</span><small>${n}</small></div>`).join('')}</div>
    <div class="vctl"><button class="pri" data-p="run">▶ Rodar o laço</button>${['Pix', 'Cripto'].filter(n => !lista.includes(n)).map(n => `<button data-p="${n}">+ class ${n}</button>`).join('')}<button data-p="reset">↺</button></div>
    <div class="vmsg">${cur >= 0 ? `<code>f</code> é do tipo <b>FormaPagamento</b>, mas o objeto real é <b>${lista[cur]}</b> → executa a versão de ${lista[cur]}:<br><code>${P[lista[cur]][1]}</code>` : 'A variável <code>f</code> é do tipo da mãe. Qual versão de <code>processarPagamento()</code> roda depende do objeto real.'}</div></div>`; };
  box.addEventListener('click', e => {
    const p = e.target.closest('[data-p]')?.dataset.p; if (!p) return;
    clearInterval(t);
    if (p === 'run') { cur = 0; draw(); t = setInterval(() => { if (!el.isConnected) return clearInterval(t); if (cur >= lista.length - 1) { clearInterval(t); return; } cur++; draw(); }, 1300); return; }
    if (p === 'reset') { lista = ['CartaoCredito', 'Boleto']; cur = -1; }
    else { lista.push(p); cur = -1; box.querySelector('.vmsg'); }
    draw();
    if (P[p]) box.querySelector('.vmsg').innerHTML = `Criamos só a classe <b>${p}</b> (filha de FormaPagamento). O laço <b>não mudou nenhuma linha</b>. Isso é reutilização e baixo acoplamento.`;
  });
  draw();
};

// diagrama de sequência passo a passo
VIZ.sequencia = el => {
  vhead(el, 'Passo a passo', 'Incluir artigo (alt + loop)', 'Cada passo acende uma mensagem, na ordem em que acontece no tempo.');
  const P = ['«ator» Editor', ':Artigo', ':Edicao', ':Autoria', ':Autor'];
  const M = [[0, 1, 'incluirArtigo()', 's', 'O editor (ator) dispara o caso de uso.'], [1, 2, 'cadastrarEdicao()', 's', '<b>alt [Se 1º artigo da edição]</b>: só acontece se a edição ainda não existe.', 'alt1'], [2, 1, 'Edição aberta', 'r', 'Retorno (seta tracejada) para quem chamou.', 'alt1'],
    [1, 3, 'vincularAutoria()', 's', '<b>loop [Enquanto tiver autor a ser vinculado]</b>: repete para cada autor.', 'loop'], [3, 4, 'cadastrarAutor()', 's', '<b>alt [Se 1ª publicação do autor]</b> dentro do loop: um fragmento dentro do outro.', 'loop alt2'], [4, 3, 'Autor cadastrado', 'r', 'Retorno do cadastro do autor.', 'loop alt2'],
    [3, 1, 'Autor vinculado', 'r', 'Fim de uma volta do loop.', 'loop'], [1, 0, 'Artigo cadastrado', 'r', 'Resposta final ao ator. O tempo correu de cima para baixo.']];
  const st = add(el, `<div></div>`);
  player(el, () => M.map((_, i) => i), i => {
    const n = P.length, x = k => (k + 0.5) / n * 100;
    const frag = (tag, label) => { const rows = M.map((m, j) => (m[5] || '').split(' ').includes(tag) ? j : -1).filter(j => j >= 0); if (!rows.length) return ''; return { a: rows[0], b: rows[rows.length - 1], label }; };
    const F = [frag('alt1', 'alt [1º artigo da edição]'), frag('loop', 'loop [enquanto houver autor]'), frag('alt2', 'alt [1ª publicação]')];
    st.innerHTML = `<div class="seq" style="--n:${n}"><div class="seq-h">${P.map(p => `<div>${p}</div>`).join('')}</div><div class="seq-b">
      ${P.map((_, k) => `<span class="lifeline" style="left:${x(k)}%"></span>`).join('')}
      ${F.map(f => `<div class="seq-f" style="top:${f.a * 46 + 4}px;height:${(f.b - f.a + 1) * 46 - 4}px;left:${f.label.startsWith('alt [1ª') ? x(3) - 6 : x(1) - 6}%;right:${f.label.startsWith('alt [1º') ? 100 - x(2) - 4 : 2}%"><i>${f.label}</i></div>`).join('')}
      ${M.map((m, j) => { const a = Math.min(x(m[0]), x(m[1])), w = Math.abs(x(m[1]) - x(m[0])), left = m[1] < m[0]; return `<div class="seq-m ${m[3]} ${j === i ? 'on' : j < i ? 'past' : 'fut'} ${left ? 'l' : ''}" style="top:${j * 46 + 24}px;left:${a}%;width:${w}%"><span>${m[2]}</span></div>`; }).join('')}
    </div></div><div class="vmsg">${M[i][4]}</div>`;
  }, 1500);
};

// MER -> tabelas
VIZ.mer2tab = el => {
  vhead(el, 'Escolha o caso', 'Como cada relacionamento vira tabela', 'Veja o modelo e as tabelas resultantes. PK sublinhada, FK em azul.');
  const C = {
    '1:N': ['DEPARTAMENTO ||--o{ FUNCIONARIO : contem', [['DEPARTAMENTO', ['_cod_departamento', 'desc_departamento']], ['FUNCIONARIO', ['_matricula', 'nome', 'data_nascimento', '>cod_departamento']]], 'A FK vai para o lado <b>N</b> (Funcionário). No diagrama de classes: <b>associação</b>.'],
    'M:N': ['DEPARTAMENTO ||--o{ LOTACAO : tem\nFUNCIONARIO ||--o{ LOTACAO : esta', [['DEPARTAMENTO', ['_cod_departamento', 'desc_departamento']], ['FUNCIONARIO', ['_matricula', 'nome']], ['LOTACAO', ['_>cod_departamento', '_>matricula', 'data_inicio', 'data_termino']]], 'O relacionamento “Lota” vira a <b>tabela de ligação LOTAÇÃO</b>, com as duas FKs formando a PK e os dados da ligação. No diagrama de classes: <b>classe associativa</b>.'],
    '1:1': ['VEICULO ||--o| CAMINHAO : "se subdivide em"', [['VEICULO', ['_renavam', 'placa', 'marca', 'modelo', 'ind_caminhao']], ['CAMINHAO', ['_>renavam', 'peso', 'numero_eixos']]], 'Caminhão usa a <b>mesma PK</b> de Veículo, que também é FK. No diagrama de classes: <b>herança</b> (Caminhão é um Veículo).'],
    'Fraca': ['FUNCIONARIO ||--o{ DEPENDENTE : possui', [['FUNCIONARIO', ['_matricula', 'nome']], ['DEPENDENTE', ['_>matricula', '_id_dependente', 'nome', 'grau_parentesco']]], 'A entidade fraca usa a PK do dono <b>dentro da sua própria PK</b> (chave composta). No diagrama de classes: <b>composição</b>.'],
    'Auto 1:N': ['ORGAO ||--o{ ORGAO : vincula', [['ORGAO', ['_cod_orgao', 'nome', 'sigla', '>cod_orgao_pai']]], 'A FK aponta para a <b>própria tabela</b> (órgão-pai). No diagrama de classes: <b>autoassociação</b>.'],
    'Auto N:N': ['TIME ||--o{ PARTIDA : local\nTIME ||--o{ PARTIDA : visitante', [['TIME', ['_cod_time', 'nome']], ['PARTIDA', ['_>time_local', '_>time_visitante', '_data', 'hora', 'gols_local', 'gols_visitante']]], 'Times jogam com times: a ligação vira a tabela PARTIDA com <b>duas FKs para TIME</b> e o resultado.'],
    'Generalização': ['CLIENTE ||--o| PESSOA_FISICA : e\nCLIENTE ||--o| PESSOA_JURIDICA : e', [['CLIENTE', ['_cod_cliente', 'nome', 'endereco']], ['PESSOA_FISICA', ['_>cod_cliente', 'cpf', 'data_nascimento']], ['PESSOA_JURIDICA', ['_>cod_cliente', 'cnpj', 'numero_socios']]], 'Cada especialização é uma tabela com a PK do cliente. No diagrama de classes: <b>herança</b>.']
  };
  const tb = add(el, `<div class="vtabs">${Object.keys(C).map((k, i) => `<button class="vbtn ${i ? '' : 'on'}" data-c="${k}">${k}</button>`).join('')}</div>`);
  const box = add(el, `<div></div>`);
  const pick = k => {
    tb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.c === k));
    const c = C[k];
    box.innerHTML = `<div class="mmd" data-src="${escV('erDiagram\n' + c[0])}"></div><div class="tabs-out">${c[1].map(([t, cols]) => `<div class="tbl"><b>${t}</b>${cols.map(col => { const mk = col.match(/^([_>]*)(.*)$/), pk = mk[1].includes('_'), fk = mk[1].includes('>'), n = mk[2]; return `<span class="${pk ? 'pk' : ''} ${fk ? 'fk' : ''}">${n}${pk ? ' <em>PK</em>' : ''}${fk ? ' <em>FK</em>' : ''}</span>`; }).join('')}</div>`).join('')}</div><div class="vmsg">${c[2]}</div>`;
    renderMermaid(box);
  };
  tb.onclick = e => { const b = e.target.closest('[data-c]'); if (b) pick(b.dataset.c); };
  pick('1:N');
};

// Database First: tabela -> classe
VIZ.dbfirst = el => {
  vhead(el, 'Gerador', 'Da tabela para a classe (scaffolding)', 'Escolha uma tabela do script da biblioteca e veja a classe que uma ferramenta Database First geraria.');
  const T = {
    LIVRO: [['ISBN', 'NUMERIC(13)', 'pk'], ['COD_EDITORA', 'INT', 'fk:EDITORA'], ['TITULO', 'VARCHAR(200)'], ['ANO_PUBLICACAO', 'NUMERIC(4)']],
    EDITORA: [['COD_EDITORA', 'INT', 'pk'], ['NOME_EDITORA', 'VARCHAR(50)']],
    EXEMPLAR: [['COD_LIVRO', 'INT', 'pk'], ['ISBN', 'NUMERIC(13)', 'fk:LIVRO'], ['DATA_AQUISICAO', 'DATE'], ['PRECO', 'DECIMAL(7,2)']],
    EMPRESTIMO: [['COD_EMPRESTIMO', 'INT', 'pk'], ['MATRICULA', 'INT', 'fk:FUNCIONARIO'], ['COD_LIVRO', 'INT', 'fk:EXEMPLAR'], ['DATA_EMPRESTIMO', 'DATE'], ['DATA_DEVOLUCAO', 'DATE']]
  };
  const camel = s => s.toLowerCase().replace(/_([a-z])/g, (a, b) => b.toUpperCase());
  const Pascal = s => { const c = camel(s); return c[0].toUpperCase() + c.slice(1); };
  const jt = t => /^INT|SMALLINT/.test(t) ? 'int' : /^NUMERIC\(13\)/.test(t) ? 'long' : /^NUMERIC/.test(t) ? 'int' : /^DECIMAL/.test(t) ? 'double' : /^DATE/.test(t) ? 'LocalDate' : /^BOOL/.test(t) ? 'boolean' : 'String';
  const tb = add(el, `<div class="vtabs">${Object.keys(T).map((k, i) => `<button class="vbtn ${i ? '' : 'on'}" data-t="${k}">${k}</button>`).join('')}</div>`);
  const box = add(el, `<div class="dbf"></div>`);
  const pick = k => {
    tb.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.t === k));
    const cols = T[k];
    const sql = `CREATE TABLE ${k} (\n${cols.map(c => `  ${c[0]} ${c[1]}${c[2] ? ' NOT NULL' : ''}`).join(',\n')},\n  PRIMARY KEY (${cols.find(c => c[2] === 'pk')[0]})${cols.filter(c => (c[2] || '').startsWith('fk')).map(c => `,\n  FOREIGN KEY (${c[0]}) REFERENCES ${c[2].slice(3)}`).join('')});`;
    const fields = cols.map(c => (c[2] || '').startsWith('fk') ? `    private ${Pascal(c[2].slice(3))} ${camel(c[2].slice(3))};   // FK vira referência ao objeto` : `    private ${jt(c[1])} ${camel(c[0])};${c[2] === 'pk' ? '   // chave primária' : ''}`).join('\n');
    const classe = `class ${Pascal(k)} {\n${fields}\n\n    // + construtor, getters e setters (POJO)\n}`;
    box.innerHTML = `<div><small>Tabela (SQL)</small><pre class="mini">${escV(sql)}</pre></div><div class="dbf-ar">→</div><div><small>Classe gerada</small><pre class="mini">${escV(classe)}</pre></div>`;
  };
  tb.onclick = e => { const b = e.target.closest('[data-t]'); if (b) pick(b.dataset.t); };
  pick('LIVRO');
  add(el, `<div class="vmsg">Repare: nomes viram <b>camelCase</b>, tipos SQL viram tipos da classe, e a <b>FK vira uma referência ao objeto</b> (associação), não um número solto.</div>`);
};

