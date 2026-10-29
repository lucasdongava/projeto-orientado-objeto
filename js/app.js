/* Projeto Orientado a Objetos — Navegação e estado */
// ================= APP =================
const $ = s => document.querySelector(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem('poo:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('poo:' + k, JSON.stringify(v)); } catch (e) {} }
};
// pede ao navegador para não apagar o progresso sozinho (não protege contra limpeza manual)
try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const LV = { f: T('lvF'), m: T('lvM'), d: T('lvD') };
const done = new Set(store.get('done', []));
let view = 'inicio';

// ---------- tema ----------
(() => { const t = store.get('tema', null); if (t) document.documentElement.dataset.theme = t; })();
$('#themeBtn').onclick = () => {
  const cur = document.documentElement.dataset.theme || 'light';
  const nx = cur === 'dark' ? 'light' : 'dark'; const apply = () => { document.documentElement.dataset.theme = nx; setTimeout(() => renderMermaid(document), 50); }; store.set('tema', nx);
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(apply); else apply();
};
// quando o site é exibido dentro da landing page, acompanha o tema dela (sem gravar a preferência)
addEventListener('message', e => { const t = e.source === parent && e.data && e.data.estudosTema; if (t === 'light' || t === 'dark') { document.documentElement.dataset.theme = t; setTimeout(() => renderMermaid(document), 50); } });

// ---------- idioma ----------
(() => {
  const box = $('#lang'), btn = $('#langBtn'), menu = $('#langMenu');
  const close = () => { box.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.onclick = e => { e.stopPropagation(); const open = !box.classList.contains('open'); box.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open)); };
  menu.querySelectorAll('[data-l]').forEach(b => b.onclick = () => { close(); if (b.dataset.l !== LANG) setLang(b.dataset.l); });
  document.addEventListener('click', e => { if (!box.contains(e.target)) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

// ---------- toast ----------
let toastT; function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1800); }

// ---------- sidebar ----------
function renderSide() {
  let h = `<div class="side-head"><div><b>${T('sideLessons')}</b><small>${T('sideCount', done.size, LESSONS.length)}</small></div><button class="icon-btn" data-close aria-label="${T('closeMenuAria')}">✕</button></div><div class="nav-home"><button data-go="inicio" class="${view === 'inicio' ? 'on' : ''}">${T('navHome')}</button><button data-go="painel" class="${view === 'painel' ? 'on' : ''}">${T('navProg')}</button><button data-go="resumo" class="${view === 'resumo' ? 'on' : ''}">${T('navSummary')}</button><button data-go="provas" class="${view === 'provas' ? 'on' : ''}">${T('navExams')}</button></div>`;
  for (const u of [0, 1, 2, 3]) {
    h += `<div class="unit"><div class="unit-h"><b style="background:${UNITS[u].color}">${u || '★'}</b>${UNITS[u].name}</div>`;
    for (const L of LESSONS.filter(l => l.unit === u))
      h += `<button style="--i:${LESSONS.indexOf(L) + 2}" class="lesson-btn ${view === L.id ? 'on' : ''} ${done.has(L.id) ? 'done' : ''}" data-go="${L.id}"><span class="dot">${done.has(L.id) ? '✓' : ''}</span>${esc(L.title)}</button>`;
    h += `</div>`;
  }
  $('#side').innerHTML = h;
  if (justDone) { const b = $(`#side [data-go="${justDone}"]`); if (b) b.classList.add('just'); justDone = null; }
  placeSideInd();
  $('#progTxt').textContent = T('progTxt', done.size, LESSONS.length);
  $('.top-prog').classList.toggle('on', view === 'painel');
  $('#progBar').style.width = (done.size / LESSONS.length * 100) + '%';
}
$('#side').addEventListener('click', e => { if (e.target.closest('[data-close]')) return closeDrawer(); const b = e.target.closest('[data-go]'); if (b) go(b.dataset.go); });
$('#logoHome').addEventListener('click', e => { e.preventDefault(); closeDrawer(); go('inicio'); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
(() => { let x0 = null; const sd = $('#side'); sd.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true }); sd.addEventListener('touchend', e => { if (x0 != null && e.changedTouches[0].clientX - x0 < -60) closeDrawer(); x0 = null; }, { passive: true }); })();
const closeDrawer = () => { $('#side').classList.remove('open'); $('#scrim').classList.remove('on'); $('#menuBtn').setAttribute('aria-expanded', 'false'); };
$('.top-prog').setAttribute('role', 'button'); $('.top-prog').tabIndex = 0; $('.top-prog').title = T('progTitle');
$('.top-prog').onclick = () => go('painel'); $('.top-prog').onkeydown = e => { if (e.key === 'Enter') go('painel'); };
$('#menuBtn').onclick = () => { const o = $('#side').classList.toggle('open'); $('#scrim').classList.toggle('on', o); $('#menuBtn').setAttribute('aria-expanded', String(o)); if (o) { const on = $('#side .lesson-btn.on'); if (on) on.scrollIntoView({ block: 'center' }); } };
$('#scrim').onclick = closeDrawer;
// computador: recolher/mostrar a sidebar (lembra a escolha)
(() => {
  const btn = $('#collapseBtn');
  const apply = off => { document.body.classList.toggle('side-off', off); btn.setAttribute('aria-expanded', String(!off)); btn.setAttribute('aria-label', off ? T('showSideAria') : T('collapseAria')); };
  apply(!!store.get('sideOff', false));
  btn.onclick = () => { const off = !document.body.classList.contains('side-off'); apply(off); store.set('sideOff', off); };
})();

// ---------- páginas ----------
function snippet(L, key) {
  return `<div class="snip"><div class="snip-h"><span>script.sql</span></div><pre data-hl="${L.id}|${key}"></pre></div>`;
}
function renderLesson(L) {
  const U = UNITS[L.unit], i = LESSONS.indexOf(L), prev = LESSONS[i - 1], next = LESSONS[i + 1];
  let h = `<div class="crumb" style="color:${U.color}">${L.unit ? T('crumbUnit', L.unit) : ''}${U.name}</div><h1>${esc(L.title)}</h1><p class="lead">${L.lead}</p>`;
  h += L.body.replace(/\{\{code:(\w+)\}\}/g, (a, k) => snippet(L, k)).replace(/\{\{viz:(\w+)\}\}/g, (a, k) => `<div class="viz" data-viz="${k}"></div>`).replace(/\{\{fig:(\w+)\}\}/g, (a, k) => FIG2[k] ? FIG2[k]() : '').replace(/\{\{mmd:(\w+)\}\}/g, (a, k) => `<div class="mmd" data-mmd="${k}"></div>`);
  if (PROVA[L.id]) h += `<div class="prova"><div class="prova-h">${T('examTitle')}</div><ul>${PROVA[L.id].map(x => `<li>${x}</li>`).join('')}</ul></div>`;
  if (QUIZ[L.id]) h += `<h2>${T('quizTitle')}</h2><p style="color:var(--fg2)">${T('quizIntro')}</p><div class="quiz">` + QUIZ[L.id].map((q, qi) => `<div class="q"><p>${qi + 1}. ${q[0]}</p><div class="opts">${q[1].map((o, oi) => `<button class="opt" data-qa="${L.id}|${qi}|${oi}">${o}</button>`).join('')}</div><div class="qx"><div></div></div></div>`).join('') + `</div><div class="quiz-foot"><button class="btn" data-requiz="${L.id}">${T('requiz')}</button></div>`;
  if (L.ex.length) h += `<h2>${T('practice')}</h2>` + METODO + `<div class="ex-list">` + L.ex.map((x, j) => {
    return `
    <div class="ex"><div class="ex-top"><h4>${esc(x.t)}<span class="lvl ${x.l}">${LV[x.l]}</span>${STATS.isSolved(`${L.id}:ex${j}`) ? `<span class="solved">${T('solved')}</span>` : ''}</h4></div>
    <p>${x.d}</p>
    <div class="ex-act">${x.ans ? `<button class="btn pri" data-ans>${T('seeAnswer')}</button>` : `<button class="btn" data-done2="${L.id}:ex${j}">${STATS.isSolved(`${L.id}:ex${j}`) ? T('alreadyDone') : T('markDone')}</button>`}<button class="btn" data-hint>${T('seeHint')}</button></div>
    <div class="hint"><div>${x.h}</div></div>${x.ans ? `<div class="hint ansb"><div><b>${T('answerLbl')}</b> ${x.ans}</div></div>` : ''}</div>`;
  }).join('') + `</div>`;
  const nx = next ? { id: next.id, t: next.title } : { id: 'resumo', t: T('summaryTitle') }, isDone = done.has(L.id);
  h += `<div class="lesson-foot">
    <div class="up-next"><span>${T('upNext')}</span><b>${esc(nx.t)}</b></div>
    <div class="foot-bar">
      ${prev ? `<button class="btn fb fb-prev" data-go="${prev.id}" title="${esc(prev.title)}" aria-label="${esc(T('prevAria', prev.title))}"><span aria-hidden="true">←</span><span class="t">${T('prev')}</span></button>` : ''}
      <button class="btn fb fb-done ${isDone ? 'is' : ''}" data-done="${L.id}" aria-pressed="${isDone}"><span class="ck" aria-hidden="true">${isDone ? '✓' : ''}</span>${isDone ? T('completed') : T('complete')}</button>
      <button class="btn pri fb fb-next" data-go="${nx.id}" aria-label="${esc(T('nextAria', nx.t))}">${T('next')} <span aria-hidden="true">→</span></button>
    </div>
  </div>`;
  return h;
}
function renderHome() {
  const last = LESSONS.find(l => l.id === store.get('last', '')) || LESSONS.find(l => !done.has(l.id)) || LESSONS[0];
  let h = `<h1>${T('homeH1')}</h1>
  <p class="lead">${T('homeLead', LESSONS.length)}</p>
  <div class="hero"><b>${T('continueH')}</b><span style="color:var(--fg2)">${esc(last.title)}${last.unit ? T('unitWord', last.unit) : ''}</span><button class="btn pri" data-go="${last.id}">${T('openLesson')}</button></div>
  <button class="unit-card" data-go="ferramentas" style="width:100%;border-color:var(--acc);margin-bottom:8px"><span class="n" style="color:var(--acc)">${T('startHere')}</span><b>${T('howStudy')}</b><span>${T('howStudyD')}</span></button>
  <button class="unit-card rs-cta" data-go="resumo" style="width:100%;margin-bottom:8px"><span class="n" style="color:var(--acc)">${T('examSoon')}</span><b>${T('sum3')}</b><span>${T('sum3d')}</span></button>
  <button class="unit-card" data-go="provas" style="width:100%;margin-bottom:8px"><span class="n" style="color:var(--acc)">${T('homeExamsTag')}</span><b>${T('homeExamsB')}</b><span>${T('homeExamsD')}</span></button>
  <button class="unit-card" data-go="painel" style="width:100%;margin-bottom:8px"><span class="n" style="color:var(--fg3)">${T('panelTag')}</span><b>${T('yourProg')}</b><span>${T('yourProgD')}</span></button>
  <h2>${T('unitsH')}</h2><div class="unit-cards">`;
  for (const u of [1, 2, 3]) {
    const ls = LESSONS.filter(l => l.unit === u), d = ls.filter(l => done.has(l.id)).length;
    h += `<button class="unit-card" data-go="${ls[0].id}"><span class="n" style="color:${UNITS[u].color}">${T('unitUpper', u)}</span><b>${UNITS[u].name}</b><span>${ls.map(l => l.title).join(' · ')}</span><div class="mini"><i style="width:${d / ls.length * 100}%;background:${UNITS[u].color}"></i></div></button>`;
  }
  h += `</div>
  <h2>${T('modelAny')}</h2>` + METODO + `
  <h2>${T('plan8')}</h2>` + PLAN.map(([w, t]) => `<div class="week"><b>${w}</b><span>${t}</span></div>`).join('');
  return h;
}
let justDone = null, sideTop = null, swapT;
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function reveal(root) {
  if (!('IntersectionObserver' in window) || reduced()) return;
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  root.querySelectorAll('.crumb,h1,.lead,h2,.note,.snip,.viz,.fig,.tbl-wrap,.prova,.quiz .q,.pq,.method,.ex,.card,.unit-card,.hero,.week,.lesson-foot').forEach(n => {
    n.classList.add('rv'); const sib = [...n.parentElement.children].filter(c => c.classList.contains('rv')); n.style.transitionDelay = Math.min(sib.indexOf(n), 5) * 55 + 'ms'; io.observe(n);
  });
}
function placeSideInd() {
  const sd = $('#side'), on = sd.querySelector('.lesson-btn.on'); let ind = sd.querySelector('.side-ind');
  if (!ind) { ind = document.createElement('div'); ind.className = 'side-ind'; sd.prepend(ind); }
  if (!on) { ind.style.opacity = 0; return; }
  const y = on.offsetTop, set = () => { ind.style.transform = `translate(${on.offsetLeft}px, ${y}px)`; ind.style.width = on.offsetWidth + 'px'; ind.style.height = on.offsetHeight + 'px'; ind.style.opacity = 1; };
  if (sideTop == null || reduced()) { ind.style.transition = 'none'; set(); void ind.offsetWidth; ind.style.transition = ''; }
  else { ind.style.transition = 'none'; ind.style.transform = `translate(${on.offsetLeft}px, ${sideTop}px)`; ind.style.width = on.offsetWidth + 'px'; ind.style.height = on.offsetHeight + 'px'; ind.style.opacity = 1; void ind.offsetWidth; ind.style.transition = ''; set(); }
  sideTop = y;
}
function go(id, keepScroll) {
  const li = $('#lessonIn');
  if (!keepScroll && li.childElementCount && !reduced() && view !== id) { li.classList.add('leave'); clearTimeout(swapT); swapT = setTimeout(() => render(id, keepScroll), 170); view = id; renderSide(); closeDrawer(); return; }
  render(id, keepScroll);
}
function render(id, keepScroll) {
  view = id; closeDrawer();
  const L = LESSONS.find(l => l.id === id);
  const li = $('#lessonIn');
  li.innerHTML = L ? renderLesson(L) : id === 'painel' ? renderPainel() : id === 'resumo' ? renderResumo() : id === 'provas' ? renderProvas() : renderHome();
  if (id === 'painel') requestAnimationFrame(() => li.querySelectorAll('.ring-fg').forEach(c => c.classList.add('go')));
  li.classList.remove('leave');
  if (!keepScroll) reveal(li);
  $('#lessonIn').querySelectorAll('.viz[data-viz]').forEach(el => { try { VIZ[el.dataset.viz] && VIZ[el.dataset.viz](el); } catch (e) { console.error(e); } });
  if (L) {
    store.set('last', id);
    li.querySelectorAll('pre[data-hl]').forEach(pre => { const [lid, k] = pre.dataset.hl.split('|'); pre.textContent = LESSONS.find(x => x.id === lid).codes[k]; });
  }
  renderMermaid(li);
  try { history.replaceState(null, '', '#' + id); } catch (e) {}
  if (!keepScroll) $('#lesson').scrollTop = 0;
  renderSide();
}
$('#lessonIn').addEventListener('click', e => {
  const t = e.target.closest('button'); if (!t) return;
  if (t.dataset.go) go(t.dataset.go);
  else if (t.dataset.qa) { const [lid, qi, oi] = t.dataset.qa.split('|'), q = QUIZ[lid][+qi], box = t.closest('.q'); STATS.quiz(lid, +qi, +oi === q[2]); box.querySelectorAll('.opt').forEach((b, k) => { b.disabled = true; if (k === q[2]) b.classList.add('ok'); else if (b === t) b.classList.add('bad'); }); const x = box.querySelector('.qx'); x.classList.add('open'); x.firstElementChild.innerHTML = (+oi === q[2] ? `<b style="color:var(--ok)">${T('qRight')}</b> ` : `<b style="color:var(--o-err)">${T('qWrong')}</b> `) + q[3]; }
  else if (t.dataset.jump) { const el = document.getElementById(t.dataset.jump); if (el) el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); }
  else if (t.classList.contains('fc')) t.classList.toggle('flip');
  else if (t.dataset.requiz) { STATS.clearQuiz(t.dataset.requiz); go(t.dataset.requiz, true); toast(T('tRequiz')); }
  else if (t.hasAttribute('data-reset')) { t.nextElementSibling.hidden = false; t.hidden = true; }
  else if (t.hasAttribute('data-reset-no')) { const b = t.closest('.resetbox'); b.querySelector('.rconf').hidden = true; b.querySelector('[data-reset]').hidden = false; }
  else if (t.hasAttribute('data-reset-yes')) { STATS.reset(); go('painel', true); toast(T('tReset')); }
  else if (t.hasAttribute('data-method')) { const m = t.closest('.method').querySelector('.method-ex'); const o = m.classList.toggle('open'); t.textContent = o ? T('hideEx') : T('seeEx'); }
  else if (t.hasAttribute('data-ans')) { const h = t.closest('.ex').querySelector('.ansb'); const o = h.classList.toggle('open'); t.textContent = o ? T('hideAnswer') : T('seeAnswer'); }
  else if (t.hasAttribute('data-hint')) { const h = t.closest('.ex').querySelector('.hint'); const o = h.classList.toggle('open'); t.textContent = o ? T('hideHint') : T('seeHint'); }
  else if (t.dataset.done) { const id = t.dataset.done; done.has(id) ? done.delete(id) : (done.add(id), justDone = id); store.set('done', [...done]); go(id, true); if (done.has(id)) toast(T('tDone')); }
  else if (t.dataset.done2) { const k = t.dataset.done2; const was = STATS.isSolved(k); if (!was) STATS.solve(k); go(view, true); toast(was ? '' : T('tMarked')); }
});

// ---------- início ----------
(() => {
  const h = (location.hash || '').slice(1);
  go(LESSONS.some(l => l.id === h) || h === 'painel' || h === 'resumo' || h === 'provas' ? h : 'inicio');
})();

