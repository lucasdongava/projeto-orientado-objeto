/* Object-Oriented Project — Lessons, diagrams, exercises, quizzes and projects (data) — English */
// ================= CONTENT: Object-Oriented Project =================
const UNITS = {
  0: { name: 'Start here', color: 'var(--acc)', soft: 'var(--acc-s)' },
  1: { name: 'General Aspects of Design', color: 'var(--u1)', soft: 'var(--u1s)' },
  2: { name: 'Object-Oriented Design', color: 'var(--u2)', soft: 'var(--u2s)' },
  3: { name: 'Data Design and Persistence', color: 'var(--u3)', soft: 'var(--u3s)' }
};
const J = s => s.replace(/^\n/, '');
const N = (t, x) => `<div class="note"><b>${t}</b><span>${x}</span></div>`;

const LESSONS = [
/* ---------- STARTING MODULE ---------- */
{ id: 'ferramentas', unit: 0, title: 'How to study and the course tools',
lead: 'This course mixes modeling (drawing UML and database diagrams) with object-oriented programming. Here you get the map of the content and the tools used in each part.',
body: `
${N('Think of it this way', 'before building a house, someone draws the blueprint. <b>Software design</b> is drawing the blueprint of the system: which classes exist, how they talk to each other and where the data is stored.')}
<h2>The course map</h2>
{{fig:mapa}}
<h2>Tools</h2>
<div class="tbl-wrap"><table><tr><th>For</th><th>Tool</th><th>What you do with it</th></tr>
<tr><td>UML diagrams</td><td><b>ArgoUML</b> (or draw.io)</td><td>Class and sequence diagrams</td></tr>
<tr><td>Data model</td><td><b>DB Designer Fork</b></td><td>Draw tables and relationships (crow's foot) and generate the SQL script</td></tr>
<tr><td>Database</td><td><b>SQLiteStudio</b></td><td>Run the script and create the tables</td></tr>
<tr><td>Implementation</td><td><b>NetBeans</b> or Eclipse</td><td>Implement the classes from the diagram</td></tr>
<tr><td>Text diagrams</td><td><b>Mermaid</b> (mermaid.live)</td><td>Generate diagrams by writing code</td></tr></table></div>
${N('On this site', 'all diagrams are drawn with Mermaid, in the same style as the ArgoUML class boxes.')}
<h2>Class diagram in ArgoUML</h2>
<p>The class box in ArgoUML has the same three compartments as the diagram: name, attributes and methods.</p>
{{fig:argouml}}`,
codes: {}, ex: [] },

/* ---------- UNIT 1 ---------- */
{ id: 'modelos', unit: 1, title: 'Models, artifacts and design',
lead: 'Why draw before programming? Because models let everyone see the system before it exists.',
body: `
<h2>Two concepts that show up on the exam</h2>
<div class="defs"><div><b>Model</b><span>A small-scale representation of something you intend to build at full scale. E.g.: a scale model of a building, a class diagram.</span></div>
<div><b>Artifact</b><span>Any product created during development: diagrams, requirements documents, code, scripts, test cases.</span></div></div>
${N('Think of it this way', 'the model is the <b>house blueprint</b>; the artifacts are <b>all the paperwork</b> the construction produces: blueprint, budget, schedule, the house itself.')}
<p>Models and artifacts let you see the system <b>before</b> implementing it, so that the client and the IT team agree on what will be built.</p>
<div class="note warn"><b>Exam phrase</b><span>Models should be used to design the <b>FUTURE</b>, not to document the <b>PAST</b>.</span></div>
<h2>With design × without design</h2>
{{fig:comsem}}
<h2>Design × Project</h2>
<p>In Portuguese both become “projeto”, but they are different things:</p>
<div class="tbl-wrap"><table><tr><th></th><th>Design</th><th>Project</th></tr>
<tr><td>What it is</td><td>The <b>technical design</b> of the solution</td><td>The <b>undertaking</b>: schedule, cost, team</td></tr>
<tr><td>Question</td><td>“How will the system work?”</td><td>“When, how much and who?”</td></tr>
<tr><td>Example</td><td>Class diagram, database model</td><td>Schedule, budget</td></tr></table></div>
<p>This course is about <b>design</b>.</p>`,
codes: {}, ex: [
  { t: 'Classify the artifacts', l: 'f', d: 'Say whether each item is a <b>design</b> or a <b>project</b> artifact: (a) delivery schedule, (b) class diagram, (c) team budget, (d) database creation script, (e) sequence diagram.', h: 'Design answers “how it works”; project answers “when, how much and who”.', ans: '<b>Design:</b> (b) class diagram, (d) database script, (e) sequence diagram.<br><b>Project:</b> (a) schedule, (c) budget.' }
] },

{ id: 'processo', unit: 1, title: 'Software process and design activities',
lead: 'Software is built by following a process: a set of predictable steps, with activities, controls and artifacts.',
body: `
<h2>Software process</h2>
<ul><li>A set of <b>predictable steps</b>.</li><li>Contains <b>activities, controls and artifacts</b>.</li><li>Establishes a process <b>flow</b>.</li><li>Uses <b>standards</b> (e.g.: interface standards).</li></ul>
<h2>The 5 framework activities</h2>
{{viz:processo}}
<h2>What happens in design</h2>
<div class="chipsgrid">${['Detail the <b>dynamic, static and structural</b> aspects', '<b>Database</b> design', 'Software <b>architecture</b> design', '<b>Integration</b> design', 'User <b>interface</b> design', 'Design <b>patterns</b>'].map(x => `<div>${x}</div>`).join('')}</div>
${N('To avoid confusion', '<b>Analysis</b> describes <i>what</i> the system must do (the problem). <b>Design</b> describes <i>how</i> it will do it (the technical solution). Both are part of Modeling.')}`,
codes: {}, ex: [
  { t: 'Put them in order', l: 'f', d: 'Order the activities: Construction, Communication, Deployment, Modeling, Planning. Then say which one includes programming and which one includes the class diagram.', h: 'First you talk to the client; last you deliver.', ans: 'Communication → Planning → Modeling → Construction → Deployment.<br>Programming, testing and debugging belong to <b>Construction</b>. The class diagram belongs to <b>Modeling</b> (analysis and design).' }
] },

