/* Projeto Orientado a Objetos — Registro de desempenho e painel de progresso */
// ================= PROGRESSO: registro de desempenho + painel =================
const STATS = (() => {
  const blank = () => ({ quiz: {}, solved: {} });
  let S = blank();
  try { const v = JSON.parse(localStorage.getItem('poo:stats') || 'null'); if (v && v.quiz) S = v; } catch (e) {}
  const save = () => { try { localStorage.setItem('poo:stats', JSON.stringify(S)); } catch (e) {} };
  return {
    get: () => S,
    reset() { S = blank(); save(); },
    quiz(lid, qi, ok) { const q = (S.quiz[lid] = S.quiz[lid] || {}); const r = (q[qi] = q[qi] || { n: 0, wrong: 0 }); r.n++; if (!ok) r.wrong++; r.last = ok; save(); },
    clearQuiz(lid) { if (S.quiz[lid]) Object.values(S.quiz[lid]).forEach(r => delete r.last); save(); },
    solve(key) { if (!S.solved[key]) { S.solved[key] = Date.now(); save(); return true; } return false; },
    isSolved: key => !!S.solved[key]
  };
})();
// compara a saída do programa com a saída esperada do exemplo
const normOut = t => String(t).replace(/\r/g, '').split('\n').map(l => l.replace(/\s+$/, '')).filter(l => l.trim()).join('\n');
function expectedFor(key) {
  const m = /^(.+):ex(\d+)$/.exec(key || ''); if (!m) return null;
  const E = EXAMPLES[`${m[1]}:${m[2]}`]; if (!E || /…/.test(E[1])) return null;
  return E[1].split(/\n\s*\n\(/)[0];
}

// ---- cálculo de domínio ----
function lessonScore(L) {
  const S = STATS.get(), q = S.quiz[L.id] || {}, T = (QUIZ[L.id] || []).length;
  const answered = Object.values(q).filter(r => r.last !== undefined).length, right = Object.values(q).filter(r => r.last === true).length;
  const EX = L.ex.filter(x => !x.ans).map((x, j) => j);
  const solvable = L.ex.map((x, j) => j).filter(j => !L.ex[j].ans), E = solvable.length, solved = solvable.filter(j => STATS.isSolved(`${L.id}:ex${j}`)).length;
  const isDone = done.has(L.id);
  const started = answered || solved || isDone;
  // só entram no cálculo as partes que a aula realmente tem; aula não iniciada vale 0
  const parts = [[0.15, isDone ? 1 : 0]];
  if (T) parts.push([0.5, right / T]);
  if (E) parts.push([0.35, solved / E]);
  const wsum = parts.reduce((a, p) => a + p[0], 0);
  const score = started ? Math.round(parts.reduce((a, p) => a + p[0] * p[1], 0) / wsum * 100) : 0;
  const acc = answered ? right / answered : null;
  let st = !started ? 'novo' : (acc !== null && acc < 0.5) ? 'reforcar' : score >= 75 ? 'ok' : score >= 45 ? 'atencao' : 'reforcar';
  return { score, st, T, answered, right, E, solved, isDone, acc };
}
const ST_LBL = { ok: ['✓', 'Tranquilo'], atencao: ['!', 'Atenção'], reforcar: ['✕', 'Reforçar'], novo: ['○', 'Não iniciado'] };
const chip = st => `<span class="st st-${st}"><i>${ST_LBL[st][0]}</i>${ST_LBL[st][1]}</span>`;
function ring(p, color) {
  const r = 30, c = 2 * Math.PI * r;
  return `<svg class="ring" viewBox="0 0 76 76" role="img" aria-label="${p}% de domínio"><circle cx="38" cy="38" r="${r}" class="ring-bg"/><circle cx="38" cy="38" r="${r}" class="ring-fg" style="stroke:${color};stroke-dasharray:${c};--off:${c * (1 - p / 100)}" transform="rotate(-90 38 38)"/><text x="38" y="43">${p}%</text></svg>`;
}

function renderPainel() {
  const S = STATS.get(), rows = LESSONS.map(L => ({ L, ...lessonScore(L) }));
  const tq = rows.reduce((a, r) => a + r.T, 0), ta = rows.reduce((a, r) => a + r.answered, 0), tr = rows.reduce((a, r) => a + r.right, 0);
  const te = rows.reduce((a, r) => a + r.E, 0), ts = rows.reduce((a, r) => a + r.solved, 0);
  const anyData = ta || ts || done.size;
  let h = `<div class="crumb">Painel</div><h1>Seu progresso</h1><p class="lead">O domínio de cada aula junta três coisas: o <b>teste rápido</b> (metade do peso), os <b>exercícios marcados como feitos</b> e a aula <b>concluída</b>.</p>`;
  h += `<div class="kpis">
    <div class="kpi"><small>Aulas concluídas</small><b>${done.size}<span>/${LESSONS.length}</span></b></div>
    <div class="kpi"><small>Acerto nos testes</small><b>${ta ? Math.round(tr / ta * 100) + '%' : '—'}</b><span class="kn">${ta} de ${tq} respondidas</span></div>
    <div class="kpi"><small>Exercícios feitos</small><b>${ts}<span>/${te}</span></b></div></div>`;
  if (!anyData) h += `<div class="empty"><b>Ainda não há dados.</b><span>Responda o teste rápido de uma aula e o painel começa a se montar.</span><button class="btn pri" data-go="${LESSONS[0].id}">Começar pela primeira aula →</button></div>`;
  // próximo passo
  const weak = rows.filter(r => r.st === 'reforcar' || r.st === 'atencao').sort((a, b) => a.score - b.score)[0];
  const fresh = rows.find(r => r.st === 'novo');
  const rec = weak || fresh;
  if (rec && anyData) h += `<div class="nextstep"><div><small>Próximo passo recomendado</small><b>${weak ? 'Revisar' : 'Começar'}: ${esc(rec.L.title)}</b><span>${weak ? `Domínio de ${rec.score}% — ${rec.answered && rec.acc < 1 ? 'refaça o teste rápido e ' : ''}${rec.solved < rec.E ? 'resolva os exercícios que faltam' : 'revise a teoria'}.` : 'É a próxima aula que você ainda não abriu.'}</span></div><button class="btn pri" data-go="${rec.L.id}">Ir para a aula →</button></div>`;
  // unidades
  h += `<h2>Domínio por unidade</h2><div class="units">`;
  for (const u of [0, 1, 2, 3]) {
    const R = rows.filter(r => r.L.unit === u), avg = Math.round(R.reduce((a, r) => a + r.score, 0) / R.length);
    const SR = R.filter(r => r.st !== 'novo'), savg = SR.length ? SR.reduce((a, r) => a + r.score, 0) / SR.length : 0;
    const st = !SR.length ? 'novo' : SR.some(r => r.st === 'reforcar') && savg < 60 ? 'reforcar' : savg >= 75 ? 'ok' : 'atencao';
    const prog = SR.length ? `${SR.length} de ${R.length} aula${R.length > 1 ? 's' : ''} iniciada${SR.length > 1 ? 's' : ''}` : 'nenhuma aula iniciada';
    h += `<div class="ucard"><div class="uhead">${ring(avg, UNITS[u].color)}<div><small>${u ? 'Unidade ' + u : 'Módulo inicial'} · ${prog}</small><b>${UNITS[u].name}</b>${chip(st)}</div></div>
      <div class="lrows">${R.map(r => `<button class="lrow" data-go="${r.L.id}"><span class="ln-t">${esc(r.L.title)}</span><span class="ln-bar"><i style="width:${r.score}%;background:var(--st-${r.st})"></i></span><span class="ln-p">${r.st === 'novo' ? '—' : r.score + '%'}</span><span class="ln-st c-${r.st}" title="${ST_LBL[r.st][1]}">${ST_LBL[r.st][0]}</span></button>`).join('')}</div></div>`;
  }
  h += `</div>`;
  // onde erra / onde está tranquilo
  const wrongQ = [];
  for (const L of LESSONS) Object.entries(S.quiz[L.id] || {}).forEach(([qi, r]) => { if (r.last === false || (r.wrong && r.last === undefined)) wrongQ.push({ L, q: QUIZ[L.id][+qi], w: r.wrong }); });
  const good = rows.filter(r => r.st === 'ok');
  h += `<div class="two"><section class="pane"><h3><span class="st st-reforcar"><i>✕</i></span> Onde você mais erra</h3>`;
  h += wrongQ.length ? `<p class="pn">Questões do teste rápido que você errou, da mais recente para a mais antiga.</p><h4>Questões para refazer</h4><ul class="wq">${wrongQ.slice(0, 8).map(x => `<li><button data-go="${x.L.id}"><span>${x.q[0]}</span><small>${esc(x.L.title)}${x.w > 1 ? ` · errou ${x.w}×` : ''}</small></button></li>`).join('')}</ul>`
    : `<p class="pn">Nenhuma questão errada registrada ainda. 👏</p>`;
  h += `</section><section class="pane"><h3><span class="st st-ok"><i>✓</i></span> Onde você está tranquilo</h3>`;
  h += good.length ? `<div class="goods">${good.map(r => `<button class="good" data-go="${r.L.id}"><b>${esc(r.L.title)}</b><span>${r.score}% · ${r.right}/${r.T} no teste · ${r.solved}/${r.E} exercícios</span></button>`).join('')}</div>`
    : `<p class="pn">Quando uma aula passar de 75% de domínio, ela aparece aqui.</p>`;
  h += `</section></div>`;
  h += `<div class="resetbox"><button class="btn" data-reset>Zerar progresso</button><span class="rconf" hidden>Apagar respostas, erros e exercícios resolvidos deste aparelho? <button class="btn pri" data-reset-yes>Sim, zerar</button><button class="btn" data-reset-no>Cancelar</button></span></div>`;
  return h;
}

