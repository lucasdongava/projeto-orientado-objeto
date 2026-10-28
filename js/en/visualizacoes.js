/* Object-Oriented Project — interactive visualizations (English). Overrides the Portuguese ones in js/visualizacoes.js */

// software process
VIZ.processo = el => {
  vhead(el, 'Step by step', 'The 5 framework activities', 'Move forward and see what happens and what is produced in each activity.');
  const st = add(el, `<div style="display:flex;flex-direction:column;gap:12px"></div>`);
  const A = [['Communication', 'Talk to the client and gather requirements.', 'requirements document'], ['Planning', 'Estimate deadlines, costs, risks and team.', 'schedule, project plan'],
    ['Modeling', '<b>Analysis</b> (the problem) and <b>design</b> (the technical solution).', 'UML diagrams, data model'], ['Construction', 'Programming, testing and debugging.', 'code, test cases'], ['Deployment', 'Deliver and receive the client\'s feedback.', 'system in production']];
  player(el, () => A.map((_, i) => i), i => {
    st.innerHTML = `<div class="pflow">${A.map((a, k) => `<div class="${k === i ? 'on' : k < i ? 'done' : ''}"><i>${k + 1}</i><b>${a[0]}</b></div>`).join('')}</div>
      <div class="vmsg"><b>${A[i][0]}:</b> ${A[i][1]}<br><small style="color:var(--fg3)">Artifacts: ${A[i][2]}</small></div>`;
  }, 1600);
};

// UML diagram classifier
VIZ.umlclass = el => {
  vhead(el, 'Game', 'Which group does each diagram belong to?', 'Tap the diagram and then the right group.');
  const D = [['Class', 'e'], ['Sequence', 'i'], ['Use case', 'c'], ['Package', 'e'], ['State machine', 'c'], ['Communication', 'i'], ['Deployment', 'e'], ['Activity', 'c'], ['Object', 'e'], ['Component', 'e']];
  const G = { e: 'Structural', c: 'Behavioral', i: 'Interaction' };
  let left = D.map((d, i) => i), sel = null, ok = 0, err = 0;
  const box = add(el, `<div></div>`), msg = add(el, `<div class="vmsg">Pick a diagram.</div>`);
  const draw = () => {
    box.innerHTML = `<div class="chips">${left.map(i => `<button data-d="${i}" class="${sel === i ? 'on' : ''}">${D[i][0]}</button>`).join('') || '<span style="color:var(--ok);font-weight:600">✓ All classified!</span>'}</div>
      <div class="bins">${Object.entries(G).map(([k, n]) => `<button data-g="${k}"><b>${n}</b><small>${D.filter((d, i) => d[1] === k && !left.includes(i)).map(d => d[0]).join(' · ') || '—'}</small></button>`).join('')}</div>
      <div class="stats"><div class="stat"><small>correct</small><b>${ok}</b></div><div class="stat"><small>wrong</small><b>${err}</b></div></div>`;
  };
  box.addEventListener('click', e => {
    const d = e.target.closest('[data-d]'), g = e.target.closest('[data-g]');
    if (d) { sel = +d.dataset.d; msg.innerHTML = `Where does <b>${D[sel][0]}</b> go?`; }
    else if (g && sel !== null) {
      if (D[sel][1] === g.dataset.g) { ok++; left = left.filter(i => i !== sel); msg.innerHTML = `✓ <b>${D[sel][0]}</b> is ${G[g.dataset.g].toLowerCase()}.`; }
      else { err++; msg.innerHTML = `✕ No. <b>${D[sel][0]}</b> is ${G[D[sel][1]].toLowerCase()}${D[sel][1] === 'i' ? ' (interaction, a kind of behavioral)' : ''}.`; left = left.filter(i => i !== sel); }
      sel = null;
    }
    draw();
  });
  draw();
};

// creating objects from the class
VIZ.objetos = el => {
  vhead(el, 'Try it', 'One class, many objects', 'Fill in and create patients. They all have the same attributes, each with its own values.');
  const f = add(el, `<div class="row-in"><label>name <input type="text" value="Ana" data-k="n" style="width:110px"></label><label>weight <input type="number" value="70" data-k="p"></label><label>height <input type="number" value="1.75" step="0.01" data-k="a"></label><button class="vbtn on" data-a="new">new Patient(…)</button></div>`);
  const objs = [{ n: 'Caio', p: 92, a: 1.8 }];
  const box = add(el, `<div></div>`), msg = add(el, `<div class="vmsg">The class is the mold. Each <code>new</code> creates a new object, with its own identity.</div>`);
  const draw = () => {
    box.innerHTML = `<div class="objwrap"><div class="objcls"><small>class</small><b>Patient</b><span>-name<br>-weight<br>-height</span><span>+calculateBMI()</span></div><div class="objs">${objs.map((o, i) => `<div class="obj"><small>p${i + 1} : Patient</small><span>name = "${escV(o.n)}"</span><span>weight = ${o.p}</span><span>height = ${o.a}</span><button class="vbtn" data-imc="${i}">p${i + 1}.calculateBMI()</button></div>`).join('')}</div></div>`;
  };
  el.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.a === 'new') { const q = k => f.querySelector(`[data-k=${k}]`).value; objs.push({ n: q('n') || 'No name', p: +q('p') || 0, a: +q('a') || 1 }); if (objs.length > 6) objs.shift(); draw(); msg.innerHTML = `Object <b>p${objs.length}</b> created. Same class, different values.`; }
    if (b.dataset.imc !== undefined) { const o = objs[+b.dataset.imc], v = o.p / (o.a * o.a); msg.innerHTML = `<code>p${+b.dataset.imc + 1}.calculateBMI()</code> uses the values of <b>this</b> object: ${o.p} / (${o.a} × ${o.a}) = <b>${v.toFixed(2)}</b>`; }
  });
  draw();
};

// visibility
VIZ.visibilidade = el => {
  vhead(el, 'Tap', 'Who sees each symbol?', 'Pick the modifier and see who can access the attribute.');
  const V = { '+': ['public', [1, 1, 1, 1]], '#': ['protected', [1, 1, 1, 0]], '~': ['package (default)', [1, 0, 1, 0]], '-': ['private', [1, 0, 0, 0]] };
  const W = ['The class itself', 'Child class (other package)', 'Class in the same package', 'Any other class'];
  const t = add(el, `<div class="vtabs">${Object.entries(V).map(([k, v]) => `<button class="vbtn" data-v="${k}"><b style="font-family:'JetBrains Mono',monospace">${k}</b> ${v[0]}</button>`).join('')}</div>`);
  const box = add(el, `<div></div>`);
  const pick = k => { t.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === k));
    box.innerHTML = `<div class="vis">${W.map((w, i) => `<div class="${V[k][1][i] ? 'yes' : 'no'}"><i>${V[k][1][i] ? '✓' : '✕'}</i>${w}</div>`).join('')}</div><div class="vmsg" style="margin-top:10px"><code>${k}balance: double</code> in the diagram = ${V[k][0] === 'package (default)' ? 'an attribute with default visibility' : 'a ' + V[k][0] + ' attribute'} in the implementation.${k === '-' ? ' Golden rule of encapsulation: <b>private attributes, public methods</b>.' : ''}${k === '#' ? ' Useful in inheritance: the child uses the parent\'s attribute.' : ''}</div>`; };
  t.onclick = e => { const b = e.target.closest('[data-v]'); if (b) pick(b.dataset.v); };
  pick('-');
};

// capsule: direct access x method
VIZ.capsula = el => {
  vhead(el, 'Try it', 'Touching it directly × asking the object', 'Try changing the balance both ways.');
  let saldo = 100; const log = [];
  const box = add(el, `<div></div>`);
  const draw = () => { box.innerHTML = `<div class="caps"><div class="cap-o"><small>account : Account</small><div class="cap-core"><span>-balance</span><b>$ ${saldo.toFixed(2)}</b></div><div class="cap-ms"><span>+deposit()</span><span>+withdraw()</span><span>+getBalance()</span></div></div>
    <div class="cap-btns"><button class="vbtn" data-c="direto">account.balance = -500</button><button class="vbtn" data-c="sacar">account.withdraw(500)</button><button class="vbtn" data-c="sacar50">account.withdraw(50)</button><button class="vbtn" data-c="dep">account.deposit(30)</button></div></div>
    <div class="vmsg">${log[0] || 'The balance stays <b>inside the capsule</b>. Only the public methods reach it, and they apply the rules.'}</div>`; };
  box.addEventListener('click', e => {
    const c = e.target.closest('[data-c]')?.dataset.c; if (!c) return;
    if (c === 'direto') log.unshift('<b style="color:var(--o-err)">✕ Compilation error:</b> <code>balance has private access in Account</code>. Without encapsulation, any class could make the balance negative.');
    if (c === 'sacar') log.unshift(`<b style="color:var(--warn)">! Refused by the method:</b> a balance of $ ${saldo.toFixed(2)} is less than 500. The rule lives in one place only.`);
    if (c === 'sacar50') { if (saldo >= 50) { saldo -= 50; log.unshift('✓ <code>withdraw(50)</code> validated and changed the balance.'); } else log.unshift('! Insufficient funds.'); }
    if (c === 'dep') { saldo += 30; log.unshift('✓ <code>deposit(30)</code> changed the balance the right way.'); }
    draw();
  });
  draw();
};

// multiplicity reader
VIZ.multi = el => {
  vhead(el, 'Build the sentence', 'Reading an association', 'Pick the multiplicities and see how it reads.');
  const M = { '1': 'exactly one', '0..1': 'at most one (optional)', '*': 'zero or many', '1..*': 'one or many', '1..3': 'one to three', '10..15': 'ten to fifteen' };
  const f = add(el, `<div class="row-in"><b>Department</b><select data-k="a">${Object.keys(M).map(k => `<option ${k === '1' ? 'selected' : ''}>${k}</option>`).join('')}</select><span>——</span><select data-k="b">${Object.keys(M).map(k => `<option ${k === '*' ? 'selected' : ''}>${k}</option>`).join('')}</select><b>Employee</b></div>`);
  const msg = add(el, `<div class="vmsg"></div>`);
  const upd = () => { const a = f.querySelector('[data-k=a]').value, b = f.querySelector('[data-k=b]').value;
    msg.innerHTML = `A department has <b>${M[b]}</b> employee(s).<br>An employee belongs to <b>${M[a]}</b> department(s).<br><small style="color:var(--fg3)">Trick: the number written <b>near a class</b> says how many objects <b>of that class</b> link to one object of the other.</small>`; };
  f.addEventListener('change', upd); upd();
};

// aggregation x composition
VIZ.todoparte = el => {
  vhead(el, 'Simulation', 'What happens when the whole is deleted?', 'Pick the type and delete the “whole” object.');
  const T = { ag: { todo: 'Team', parte: 'Player', itens: ['Rafa', 'Duda', 'Leo'], sym: '◇', nome: 'Aggregation' }, co: { todo: 'Invoice', parte: 'Item', itens: ['Keyboard', 'Mouse', 'Cable'], sym: '◆', nome: 'Composition' } };
  let k = 'ag', apagado = false;
  const tb = add(el, `<div class="vtabs"><button class="vbtn on" data-t="ag">◇ Aggregation</button><button class="vbtn" data-t="co">◆ Composition</button></div>`);
  const box = add(el, `<div></div>`);
  const draw = () => { const t = T[k];
    box.innerHTML = `<div class="tp"><div class="tp-todo ${apagado ? 'gone' : ''}"><small>whole</small><b>${t.todo}</b><span class="sym">${t.sym}</span></div><div class="tp-parts">${t.itens.map(n => `<div class="tp-p ${apagado && k === 'co' ? 'gone' : ''} ${apagado && k === 'ag' ? 'free' : ''}"><small>${t.parte}</small>${n}</div>`).join('')}</div></div>
      <div class="vctl"><button class="pri" data-x="del" ${apagado ? 'disabled' : ''}>Delete ${t.todo}</button><button data-x="reset">↺</button></div>
      <div class="vmsg">${!apagado ? `<b>${t.nome}:</b> the diamond ${t.sym} sits on the side of <b>${t.todo}</b> (the whole).` : k === 'ag' ? '<b>Aggregation:</b> the team is gone, but the players <b>keep existing</b> and can join another team.' : '<b>Composition:</b> the invoice was deleted and the items <b>went with it</b>. They do not exist without it.'}</div>`; };
  tb.onclick = e => { const b = e.target.closest('[data-t]'); if (!b) return; k = b.dataset.t; apagado = false; tb.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); draw(); };
  box.addEventListener('click', e => { const x = e.target.closest('[data-x]')?.dataset.x; if (x === 'del') apagado = true; if (x === 'reset') apagado = false; if (x) draw(); });
  draw();
};

// polymorphism
VIZ.polimorfismo = el => {
  vhead(el, 'Try it', 'The same call, different behaviors', 'Run the loop and then add a new payment type without touching the loop.');
  const P = { CreditCard: ['💳', 'Card ending 4111: $ 150.0'], BankSlip: ['🧾', 'Bank slip 34191: $ 89.9'], Pix: ['⚡', 'Pix to ana@email.com: $ 42.0'], Crypto: ['🪙', 'Crypto wallet 0xA1: $ 300.0'] };
  let lista = ['CreditCard', 'BankSlip'], cur = -1, t = null;
  const box = add(el, `<div></div>`);
  const draw = () => { box.innerHTML = `<div class="poly"><div class="vcode"><div class="${cur >= 0 ? 'on' : ''}">for (PaymentMethod f : list)</div><div class="${cur >= 0 ? 'on' : ''}">    f.processPayment();</div></div>
    <div class="pobjs">${lista.map((n, i) => `<div class="${i === cur ? 'on' : ''}"><span>${P[n][0]}</span><small>${n}</small></div>`).join('')}</div>
    <div class="vctl"><button class="pri" data-p="run">▶ Run the loop</button>${['Pix', 'Crypto'].filter(n => !lista.includes(n)).map(n => `<button data-p="${n}">+ class ${n}</button>`).join('')}<button data-p="reset">↺</button></div>
    <div class="vmsg">${cur >= 0 ? `<code>f</code> is of type <b>PaymentMethod</b>, but the real object is <b>${lista[cur]}</b> → runs the ${lista[cur]} version:<br><code>${P[lista[cur]][1]}</code>` : 'The variable <code>f</code> has the parent\'s type. Which version of <code>processPayment()</code> runs depends on the real object.'}</div></div>`; };
  box.addEventListener('click', e => {
    const p = e.target.closest('[data-p]')?.dataset.p; if (!p) return;
    clearInterval(t);
    if (p === 'run') { cur = 0; draw(); t = setInterval(() => { if (!el.isConnected) return clearInterval(t); if (cur >= lista.length - 1) { clearInterval(t); return; } cur++; draw(); }, 1300); return; }
    if (p === 'reset') { lista = ['CreditCard', 'BankSlip']; cur = -1; }
    else { lista.push(p); cur = -1; box.querySelector('.vmsg'); }
    draw();
    if (P[p]) box.querySelector('.vmsg').innerHTML = `We only created the class <b>${p}</b> (a child of PaymentMethod). The loop <b>did not change a single line</b>. That is reuse and low coupling.`;
  });
  draw();
};

// sequence diagram step by step
VIZ.sequencia = el => {
  vhead(el, 'Step by step', 'Add article (alt + loop)', 'Each step lights up a message, in the order they happen in time.');
  const P = ['«actor» Editor', ':Article', ':Issue', ':Authorship', ':Author'];
  const M = [[0, 1, 'addArticle()', 's', 'The editor (actor) triggers the use case.'], [1, 2, 'registerIssue()', 's', '<b>alt [If 1st article of the issue]</b>: only happens if the issue does not exist yet.', 'alt1'], [2, 1, 'Issue opened', 'r', 'Return (dashed arrow) to the caller.', 'alt1'],
    [1, 3, 'linkAuthorship()', 's', '<b>loop [While there is an author to link]</b>: repeats for each author.', 'loop'], [3, 4, 'registerAuthor()', 's', '<b>alt [If author\'s 1st publication]</b> inside the loop: one fragment inside the other.', 'loop alt2'], [4, 3, 'Author registered', 'r', 'Return from registering the author.', 'loop alt2'],
    [3, 1, 'Author linked', 'r', 'End of one round of the loop.', 'loop'], [1, 0, 'Article registered', 'r', 'Final reply to the actor. Time ran from top to bottom.']];
  const st = add(el, `<div></div>`);
  player(el, () => M.map((_, i) => i), i => {
    const n = P.length, x = k => (k + 0.5) / n * 100;
    const frag = (tag, label) => { const rows = M.map((m, j) => (m[5] || '').split(' ').includes(tag) ? j : -1).filter(j => j >= 0); if (!rows.length) return ''; return { a: rows[0], b: rows[rows.length - 1], label }; };
    const F = [frag('alt1', 'alt [1st article of the issue]'), frag('loop', 'loop [while authors remain]'), frag('alt2', 'alt [author\'s 1st publication]')];
    st.innerHTML = `<div class="seq" style="--n:${n}"><div class="seq-h">${P.map(p => `<div>${p}</div>`).join('')}</div><div class="seq-b">
      ${P.map((_, k) => `<span class="lifeline" style="left:${x(k)}%"></span>`).join('')}
      ${F.map(f => `<div class="seq-f" style="top:${f.a * 46 + 4}px;height:${(f.b - f.a + 1) * 46 - 4}px;left:${f.label.startsWith('alt [author') ? x(3) - 6 : x(1) - 6}%;right:${f.label.startsWith('alt [1st') ? 100 - x(2) - 4 : 2}%"><i>${f.label}</i></div>`).join('')}
      ${M.map((m, j) => { const a = Math.min(x(m[0]), x(m[1])), w = Math.abs(x(m[1]) - x(m[0])), left = m[1] < m[0]; return `<div class="seq-m ${m[3]} ${j === i ? 'on' : j < i ? 'past' : 'fut'} ${left ? 'l' : ''}" style="top:${j * 46 + 24}px;left:${a}%;width:${w}%"><span>${m[2]}</span></div>`; }).join('')}
    </div></div><div class="vmsg">${M[i][4]}</div>`;
  }, 1500);
};

// ERM -> tables
VIZ.mer2tab = el => {
  vhead(el, 'Pick the case', 'How each relationship becomes a table', 'See the model and the resulting tables. PK underlined, FK in blue.');
  const C = {
    '1:N': ['DEPARTMENT ||--o{ EMPLOYEE : contains', [['DEPARTMENT', ['_department_id', 'department_desc']], ['EMPLOYEE', ['_employee_no', 'name', 'birth_date', '>department_id']]], 'The FK goes on the <b>N</b> side (Employee). In the class diagram: <b>association</b>.'],
    'M:N': ['DEPARTMENT ||--o{ ASSIGNMENT : has\nEMPLOYEE ||--o{ ASSIGNMENT : is_in', [['DEPARTMENT', ['_department_id', 'department_desc']], ['EMPLOYEE', ['_employee_no', 'name']], ['ASSIGNMENT', ['_>department_id', '_>employee_no', 'start_date', 'end_date']]], 'The “Assigned” relationship becomes the <b>ASSIGNMENT link table</b>, with both FKs forming the PK and the link\'s data. In the class diagram: <b>association class</b>.'],
    '1:1': ['VEHICLE ||--o| TRUCK : "is subdivided into"', [['VEHICLE', ['_registration', 'plate', 'make', 'model', 'is_truck']], ['TRUCK', ['_>registration', 'weight', 'axle_count']]], 'Truck uses the <b>same PK</b> as Vehicle, which is also an FK. In the class diagram: <b>inheritance</b> (a Truck is a Vehicle).'],
    'Weak': ['EMPLOYEE ||--o{ DEPENDENT : has', [['EMPLOYEE', ['_employee_no', 'name']], ['DEPENDENT', ['_>employee_no', '_dependent_id', 'name', 'relationship']]], 'The weak entity uses the owner\'s PK <b>inside its own PK</b> (composite key). In the class diagram: <b>composition</b>.'],
    'Self 1:N': ['AGENCY ||--o{ AGENCY : links', [['AGENCY', ['_agency_id', 'name', 'acronym', '>parent_agency_id']]], 'The FK points to the <b>table itself</b> (parent agency). In the class diagram: <b>self-association</b>.'],
    'Self N:N': ['TEAM ||--o{ MATCH : home\nTEAM ||--o{ MATCH : away', [['TEAM', ['_team_id', 'name']], ['MATCH', ['_>home_team', '_>away_team', '_date', 'time', 'home_goals', 'away_goals']]], 'Teams play teams: the link becomes the MATCH table with <b>two FKs to TEAM</b> and the result.'],
    'Generalization': ['CUSTOMER ||--o| INDIVIDUAL : is\nCUSTOMER ||--o| COMPANY : is', [['CUSTOMER', ['_customer_id', 'name', 'address']], ['INDIVIDUAL', ['_>customer_id', 'tax_id', 'birth_date']], ['COMPANY', ['_>customer_id', 'company_id', 'partner_count']]], 'Each specialization is a table with the customer\'s PK. In the class diagram: <b>inheritance</b>.']
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

// Database First: table -> class
VIZ.dbfirst = el => {
  vhead(el, 'Generator', 'From table to class (scaffolding)', 'Pick a table from the library script and see the class a Database First tool would generate.');
  const T = {
    BOOK: [['ISBN', 'NUMERIC(13)', 'pk'], ['PUBLISHER_ID', 'INT', 'fk:PUBLISHER'], ['TITLE', 'VARCHAR(200)'], ['PUBLISH_YEAR', 'NUMERIC(4)']],
    PUBLISHER: [['PUBLISHER_ID', 'INT', 'pk'], ['PUBLISHER_NAME', 'VARCHAR(50)']],
    COPY: [['COPY_ID', 'INT', 'pk'], ['ISBN', 'NUMERIC(13)', 'fk:BOOK'], ['ACQUIRED_DATE', 'DATE'], ['PRICE', 'DECIMAL(7,2)']],
    LOAN: [['LOAN_ID', 'INT', 'pk'], ['EMPLOYEE_NO', 'INT', 'fk:EMPLOYEE'], ['COPY_ID', 'INT', 'fk:COPY'], ['LOAN_DATE', 'DATE'], ['RETURN_DATE', 'DATE']]
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
    const fields = cols.map(c => (c[2] || '').startsWith('fk') ? `    private ${Pascal(c[2].slice(3))} ${camel(c[2].slice(3))};   // FK becomes an object reference` : `    private ${jt(c[1])} ${camel(c[0])};${c[2] === 'pk' ? '   // primary key' : ''}`).join('\n');
    const classe = `class ${Pascal(k)} {\n${fields}\n\n    // + constructor, getters and setters (POJO)\n}`;
    box.innerHTML = `<div><small>Table (SQL)</small><pre class="mini">${escV(sql)}</pre></div><div class="dbf-ar">→</div><div><small>Generated class</small><pre class="mini">${escV(classe)}</pre></div>`;
  };
  tb.onclick = e => { const b = e.target.closest('[data-t]'); if (b) pick(b.dataset.t); };
  pick('BOOK');
  add(el, `<div class="vmsg">Notice: names become <b>camelCase</b>, SQL types become class types, and the <b>FK becomes an object reference</b> (association), not a loose number.</div>`);
};
