/* Projeto Orientado a Objetos — idiomas (pt-BR e en). Carregado antes de tudo. */
const I18N = {
  pt: {
    docTitle: 'Projeto Orientado a Objetos',
    meta: 'Plataforma de estudos de Projeto Orientado a Objetos: UML, diagramas de sequência, modelagem de dados, testes e resumo.',
    openLessonsAria: 'Abrir aulas', collapseAria: 'Recolher menu lateral', showSideAria: 'Mostrar menu lateral', collapseTitle: 'Recolher/mostrar menu',
    logoAria: 'Projeto Orientado a Objetos: ir para o Início', themeAria: 'Alternar tema', langAria: 'Idioma', sideNavAria: 'Aulas',
    lvF: 'Fácil', lvM: 'Médio', lvD: 'Desafio',
    tRequiz: 'Teste reiniciado', tReset: 'Progresso zerado', tDone: 'Aula concluída ✓', tMarked: 'Marcado como feito ✓',
    sideLessons: 'Aulas', sideCount: (n, t) => `${n} de ${t} concluídas`, closeMenuAria: 'Fechar menu', navHome: 'Início', navProg: 'Progresso', navSummary: 'Resumo',
    progTxt: (n, t) => `${n} de ${t} aulas`, progTitle: 'Ver painel de progresso',
    crumbUnit: u => 'Unidade ' + u + ' · ', examTitle: '📝 O que costuma cair na prova', quizTitle: 'Teste rápido',
    quizIntro: 'Responda antes de ir para os exercícios. A correção aparece na hora.', requiz: '↺ Refazer teste', practice: 'Pratique', solved: '✓ Resolvido',
    seeAnswer: 'Ver resposta', hideAnswer: 'Esconder resposta', alreadyDone: '✓ Já marquei como feito', markDone: 'Marcar como feito', seeHint: 'Ver dica', hideHint: 'Esconder dica',
    answerLbl: 'Resposta:', upNext: 'A seguir', prevAria: t => 'Aula anterior: ' + t, prev: 'Anterior', completed: 'Concluída', complete: 'Concluir',
    nextAria: t => 'Próxima: ' + t, next: 'Próxima', summaryTitle: 'Resumo',
    qRight: '✓ Certo!', qWrong: '✗ Não é essa.', seeEx: 'Ver exemplo', hideEx: 'Esconder exemplo',
    homeH1: 'Projete sistemas orientados a objetos, do diagrama ao código',
    homeLead: n => `${n} aulas das três unidades: diagramas UML e de banco desenhados na tela e simulações interativas, passo a passo, de como o código vira objeto e o objeto vira diagrama.`,
    continueH: 'Continuar de onde parou', openLesson: 'Abrir aula →', unitWord: u => ' — Unidade ' + u,
    startHere: '★ COMECE AQUI', howStudy: 'Como estudar e ferramentas', howStudyD: 'O mapa da disciplina e como usar o ArgoUML, o DB Designer e o SQLiteStudio.',
    examSoon: 'PROVA CHEGANDO?', sum3: 'Resumo das 3 unidades', sum3d: 'Conceitos, símbolos UML, as respostas que mais caem, conversão MER → classes e cartões de revisão — tudo numa página.',
    panelTag: 'PAINEL', yourProg: 'Seu progresso', yourProgD: 'Veja o domínio de cada unidade, onde você mais erra e o que já está tranquilo.',
    unitsH: 'Unidades', unitUpper: u => 'UNIDADE ' + u, modelAny: 'Como modelar qualquer cenário', plan8: 'Plano de 8 semanas',
    pvPrevAria: 'Voltar um passo', pvNext: 'Próximo ▸', pvResetAria: 'Recomeçar', pvStep: (i, n) => `passo ${i} de ${n}`, pvPause: '⏸ Pausar', pvAgain: '↺ De novo', pvPlay: '▶ Animar',
    drawing: 'desenhando diagrama…', needNet: 'Conecte-se à internet para ver este diagrama.',
    stOk: 'Tranquilo', stAtt: 'Atenção', stRev: 'Reforçar', stNew: 'Não iniciado', ringAria: p => `${p}% de domínio`,
    pnCrumb: 'Painel', pnH1: 'Seu progresso',
    pnLead: 'O domínio de cada aula junta três coisas: o <b>teste rápido</b> (metade do peso), os <b>exercícios marcados como feitos</b> e a aula <b>concluída</b>.',
    kDone: 'Aulas concluídas', kAcc: 'Acerto nos testes', kAnswered: (a, t) => `${a} de ${t} respondidas`, kEx: 'Exercícios feitos',
    emptyB: 'Ainda não há dados.', emptyS: 'Responda o teste rápido de uma aula e o painel começa a se montar.', startFirst: 'Começar pela primeira aula →',
    nextStep: 'Próximo passo recomendado', nsReview: 'Revisar', nsStart: 'Começar',
    nsWeak: (s, redo, left) => `Domínio de ${s}% — ${redo ? 'refaça o teste rápido e ' : ''}${left ? 'resolva os exercícios que faltam' : 'revise a teoria'}.`, nsFresh: 'É a próxima aula que você ainda não abriu.', goLesson: 'Ir para a aula →',
    byUnit: 'Domínio por unidade', moduleStart: 'Módulo inicial', unitN: u => 'Unidade ' + u,
    unitProg: (k, n) => k ? `${k} de ${n} aula${n > 1 ? 's' : ''} iniciada${k > 1 ? 's' : ''}` : 'nenhuma aula iniciada',
    whereWrong: 'Onde você mais erra', wrongIntro: 'Questões do teste rápido que você errou, da mais recente para a mais antiga.', wrongRedo: 'Questões para refazer',
    wrongTimes: w => ` · errou ${w}×`, noWrong: 'Nenhuma questão errada registrada ainda. 👏', whereGood: 'Onde você está tranquilo',
    goodScore: (s, r, t, so, e) => `${s}% · ${r}/${t} no teste · ${so}/${e} exercícios`, noGood: 'Quando uma aula passar de 75% de domínio, ela aparece aqui.',
    resetBtn: 'Zerar progresso', resetAsk: 'Apagar respostas, erros e exercícios resolvidos deste aparelho?', resetYes: 'Sim, zerar', resetNo: 'Cancelar',
    avaOut: 'Saída', navExams: 'Provas', prCrumb: 'Revisão para a prova', prTitle: 'Provas anteriores',
    prLead: 'Questões das provas da disciplina (2025/2, 2026/1 e 2026/2), com os gabaritos e padrões de resposta que constam no material do AVA. Responda e confira.',
    prQ: n => 'Questão ' + n, prNoKey: 'O material do AVA não traz o gabarito desta questão.', prKey: 'Gabarito:', prPadrao: 'Padrão de resposta', prSeePadrao: 'Ver padrão de resposta', prHidePadrao: 'Esconder padrão de resposta',
    prTrue: 'V', prFalse: 'F', prScore: (a, b) => a + ' de ' + b + ' acertos', prRedo: '↺ Refazer',
    homeExamsTag: 'PROVAS ANTERIORES', homeExamsB: 'Questões das provas com gabarito', homeExamsD: 'Provas de 2025/2 e 2026/2 com gabarito e padrão de resposta, e a prova final de revisão de 2026/1.',
    rsReview: 'Revisão para a prova'
  },
  en: {
    docTitle: 'Object-Oriented Project',
    meta: 'Study platform for Object-Oriented Design: UML, sequence diagrams, data modeling, quizzes and summary.',
    openLessonsAria: 'Open lessons', collapseAria: 'Collapse side menu', showSideAria: 'Show side menu', collapseTitle: 'Collapse/show menu',
    logoAria: 'Object-Oriented Project: go to Home', themeAria: 'Toggle theme', langAria: 'Language', sideNavAria: 'Lessons',
    lvF: 'Easy', lvM: 'Medium', lvD: 'Challenge',
    tRequiz: 'Quiz restarted', tReset: 'Progress reset', tDone: 'Lesson completed ✓', tMarked: 'Marked as done ✓',
    sideLessons: 'Lessons', sideCount: (n, t) => `${n} of ${t} completed`, closeMenuAria: 'Close menu', navHome: 'Home', navProg: 'Progress', navSummary: 'Summary',
    progTxt: (n, t) => `${n} of ${t} lessons`, progTitle: 'View progress dashboard',
    crumbUnit: u => 'Unit ' + u + ' · ', examTitle: '📝 What usually shows up on the exam', quizTitle: 'Quick quiz',
    quizIntro: 'Answer before moving on to the exercises. The feedback shows up right away.', requiz: '↺ Redo quiz', practice: 'Practice', solved: '✓ Solved',
    seeAnswer: 'See answer', hideAnswer: 'Hide answer', alreadyDone: '✓ Already marked as done', markDone: 'Mark as done', seeHint: 'See hint', hideHint: 'Hide hint',
    answerLbl: 'Answer:', upNext: 'Up next', prevAria: t => 'Previous lesson: ' + t, prev: 'Previous', completed: 'Completed', complete: 'Complete',
    nextAria: t => 'Next: ' + t, next: 'Next', summaryTitle: 'Summary',
    qRight: '✓ Correct!', qWrong: '✗ Not this one.', seeEx: 'See example', hideEx: 'Hide example',
    homeH1: 'Design object-oriented systems, from diagram to code',
    homeLead: n => `${n} lessons across the three units: UML and database diagrams drawn on screen and step-by-step interactive simulations of how code becomes an object and the object becomes a diagram.`,
    continueH: 'Pick up where you left off', openLesson: 'Open lesson →', unitWord: u => ' — Unit ' + u,
    startHere: '★ START HERE', howStudy: 'How to study and the tools', howStudyD: 'The course map and how to use ArgoUML, DB Designer and SQLiteStudio.',
    examSoon: 'EXAM COMING UP?', sum3: 'Summary of the 3 units', sum3d: 'Concepts, UML symbols, the answers that come up most, ERM → classes conversion and review cards — all on one page.',
    panelTag: 'DASHBOARD', yourProg: 'Your progress', yourProgD: 'See your mastery of each unit, where you slip most and what you already have under control.',
    unitsH: 'Units', unitUpper: u => 'UNIT ' + u, modelAny: 'How to model any scenario', plan8: '8-week plan',
    pvPrevAria: 'Back one step', pvNext: 'Next ▸', pvResetAria: 'Restart', pvStep: (i, n) => `step ${i} of ${n}`, pvPause: '⏸ Pause', pvAgain: '↺ Again', pvPlay: '▶ Animate',
    drawing: 'drawing diagram…', needNet: 'Connect to the internet to see this diagram.',
    stOk: 'Solid', stAtt: 'Needs attention', stRev: 'Review', stNew: 'Not started', ringAria: p => `${p}% mastery`,
    pnCrumb: 'Dashboard', pnH1: 'Your progress',
    pnLead: 'The mastery of each lesson combines three things: the <b>quick quiz</b> (half of the weight), the <b>exercises marked as done</b> and the lesson being <b>completed</b>.',
    kDone: 'Lessons completed', kAcc: 'Quiz accuracy', kAnswered: (a, t) => `${a} of ${t} answered`, kEx: 'Exercises done',
    emptyB: 'No data yet.', emptyS: 'Answer a lesson\'s quick quiz and the dashboard starts to build itself.', startFirst: 'Start with the first lesson →',
    nextStep: 'Recommended next step', nsReview: 'Review', nsStart: 'Start',
    nsWeak: (s, redo, left) => `Mastery of ${s}% — ${redo ? 'redo the quick quiz and ' : ''}${left ? 'solve the exercises that are missing' : 'review the theory'}.`, nsFresh: 'It is the next lesson you have not opened yet.', goLesson: 'Go to lesson →',
    byUnit: 'Mastery by unit', moduleStart: 'Starting module', unitN: u => 'Unit ' + u,
    unitProg: (k, n) => k ? `${k} of ${n} lesson${n > 1 ? 's' : ''} started` : 'no lesson started',
    whereWrong: 'Where you slip most', wrongIntro: 'Quick quiz questions you got wrong, from most recent to oldest.', wrongRedo: 'Questions to redo',
    wrongTimes: w => ` · missed ${w}×`, noWrong: 'No wrong answers recorded yet. 👏', whereGood: 'Where you are solid',
    goodScore: (s, r, t, so, e) => `${s}% · ${r}/${t} on the quiz · ${so}/${e} exercises`, noGood: 'When a lesson passes 75% mastery, it shows up here.',
    resetBtn: 'Reset progress', resetAsk: 'Erase answers, mistakes and solved exercises on this device?', resetYes: 'Yes, reset', resetNo: 'Cancel',
    avaOut: 'Output', navExams: 'Exams', prCrumb: 'Exam review', prTitle: 'Past exams',
    prLead: 'Questions from the course exams (2025/2, 2026/1 and 2026/2), with the answer keys and answer patterns that appear in the AVA material. Answer and check.',
    prQ: n => 'Question ' + n, prNoKey: 'The AVA material does not include the answer key for this question.', prKey: 'Answer key:', prPadrao: 'Answer pattern', prSeePadrao: 'See answer pattern', prHidePadrao: 'Hide answer pattern',
    prTrue: 'T', prFalse: 'F', prScore: (a, b) => a + ' of ' + b + ' correct', prRedo: '↺ Redo',
    homeExamsTag: 'PAST EXAMS', homeExamsB: 'Exam questions with answer keys', homeExamsD: 'The 2025/2 and 2026/2 exams with answer keys and answer patterns, and the 2026/1 final review exam.',
    rsReview: 'Exam review'
  }
};

// idioma: localStorage 'thoth:lang'; dentro de iframe (landing) vale o idioma da landing (sessionStorage), sem gravar a preferência
const EMBEDDED = window.parent !== window;
let LANG = 'pt';
(() => {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'pt' || q === 'en') {   // a landing manda ?lang=: embutido vale so na sessao; numa aba nova vira a preferencia
      if (EMBEDDED) sessionStorage.setItem('thoth:lang-embed', q); else localStorage.setItem('thoth:lang', q);
      try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) {}
    }
    let v = EMBEDDED ? sessionStorage.getItem('thoth:lang-embed') : localStorage.getItem('thoth:lang');
    if (v !== 'pt' && v !== 'en') v = /^pt/i.test(navigator.language || '') ? 'pt' : 'en';
    LANG = v;
  } catch (e) {}
})();
const T = (k, ...a) => { const v = (I18N[LANG] && I18N[LANG][k] !== undefined) ? I18N[LANG][k] : I18N.pt[k]; return typeof v === 'function' ? v(...a) : (v === undefined ? k : v); };

function setLang(l) {
  try { if (EMBEDDED) sessionStorage.setItem('thoth:lang-embed', l); else localStorage.setItem('thoth:lang', l); } catch (e) {}
  location.reload();
}
// a landing manda o idioma por mensagem (só vale quando estamos dentro dela)
addEventListener('message', e => {
  if (!EMBEDDED || e.source !== parent || !e.data) return;
  const l = e.data.estudosLang;
  if ((l === 'pt' || l === 'en') && l !== LANG) { try { sessionStorage.setItem('thoth:lang-embed', l); } catch (er) {} location.reload(); }
});

// textos estáticos do index.html
function applyStatic() {
  document.documentElement.lang = LANG === 'en' ? 'en' : 'pt-BR';
  document.title = T('docTitle');
  const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = T('meta');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(',').forEach(pair => { const [a, k] = pair.split(':'); el.setAttribute(a, T(k)); }));
  document.querySelectorAll('#langMenu [data-l]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.l === LANG)));
}
