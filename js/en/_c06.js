const FIG2_EN = {
  mapa: () => `<figure class="fig"><div class="umap">
    <div style="--c:var(--u1)"><small>Unit 1</small><b>General aspects</b><span>model · artifact · process · UML · ERM</span></div>
    <div style="--c:var(--u2)"><small>Unit 2</small><b>OO design</b><span>classes · relationships · inheritance · interface · sequence</span></div>
    <div style="--c:var(--u3)"><small>Unit 3</small><b>Data</b><span>ERM → tables · ORM · keys · SQL</span></div></div>
    <figcaption>From idea to database: first understand the process and the notation, then design the classes, and finally design where the objects are stored.</figcaption></figure>`,
  comsem: () => `<figure class="fig"><div class="duo2"><div class="bad-b"><b>✕ Without design</b><ul><li>Everyone understands the system in their own way.</li><li>Mistakes found only in the code, when changing is expensive.</li><li>Rework and “hacks”.</li></ul></div><div class="good-b"><b>✓ With design</b><ul><li>Everyone sees the same model before programming.</li><li>Problems show up on paper, when fixing is cheap.</li><li>Organized, reusable code.</li></ul></div></div></figure>`,
  umltree: () => `<figure class="fig"><div class="utree">
    <div class="ut-root">UML diagrams</div>
    <div class="ut-cols">
      <div><b>Structural</b><small>the static structure</small><span>Class</span><span>Object</span><span>Component</span><span>Composite structure</span><span>Deployment</span><span>Package</span></div>
      <div><b>Behavioral</b><small>what happens</small><span>Use case</span><span>Activity</span><span>State machine</span>
        <div class="ut-sub"><b>Interaction</b><span>Sequence</span><span>Communication</span><span>Interaction overview</span><span>Timing</span></div></div>
    </div></div><figcaption>Interaction diagrams are a subgroup of the behavioral ones.</figcaption></figure>`,
  crowfoot: () => `<figure class="fig"><div class="crow">${[['o|', 'zero or one', 'M0 20H60M40 10V30M52 20a8 8 0 1 0 0.01 0', '0..1'], ['||', 'one and only one', 'M0 20H60M40 10V30M48 10V30', '1'], ['o{', 'zero or many', 'M0 20H60M44 20L60 8M44 20L60 32M30 20a8 8 0 1 0 0.01 0', '0..*'], ['|{', 'one or many', 'M0 20H60M44 20L60 8M44 20L60 32M34 10V30', '1..*']].map(([c, t, d, u]) => `<div><svg viewBox="-4 0 70 40" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg><b>${t}</b><small>Mermaid <code>${c}</code> · classes <code>${u}</code></small></div>`).join('')}</div>
    <figcaption>The symbol closest to the entity is the <b>maximum</b>; the farthest is the <b>minimum</b>. Circle = zero, bar = one, “crow's foot” = many.</figcaption></figure>`,
  rels: () => `<figure class="fig"><div class="rels">${[
    ['Association', 'line', '', 'knows / uses as an attribute'], ['Aggregation', 'line', 'odia', 'whole-part, independent part'], ['Composition', 'line', 'fdia', 'whole-part, exclusive part'],
    ['Inheritance', 'line', 'tri', '“is a”'], ['Realization', 'dash', 'tri', 'implements an interface'], ['Dependency', 'dash', 'arrow', 'uses in passing (parameter)']
  ].map(([n, l, h, d]) => `<div><svg viewBox="0 0 120 24" aria-hidden="true"><line x1="4" y1="12" x2="${h === 'tri' ? 102 : h ? 96 : 116}" y2="12" stroke="currentColor" stroke-width="2" ${l === 'dash' ? 'stroke-dasharray="5 4"' : ''}/>${h === 'odia' ? '<path d="M96 12l10-6 10 6-10 6z" fill="var(--bg)" stroke="currentColor" stroke-width="2"/>' : h === 'fdia' ? '<path d="M96 12l10-6 10 6-10 6z" fill="currentColor"/>' : h === 'tri' ? '<path d="M102 4l14 8-14 8z" fill="var(--bg)" stroke="currentColor" stroke-width="2"/>' : h === 'arrow' ? '<path d="M104 5l12 7-12 7" fill="none" stroke="currentColor" stroke-width="2"/>' : ''}</svg><b>${n}</b><small>${d}</small></div>`).join('')}</div>
    <figcaption>The symbol sits at the end of the <b>whole</b> (diamonds) or of the <b>parent / interface / supplier</b> (arrows and triangles).</figcaption></figure>`,
  associativa: () => `<figure class="fig"><svg class="fsvg" viewBox="0 0 340 190" role="img" aria-label="Teacher and Course linked by a many-to-many association; the Section class attaches to the middle of the line by a dashed line">
    <rect x="6" y="20" width="100" height="44" rx="8" class="s-box"/><text x="56" y="47" class="s-t b">Teacher</text>
    <rect x="234" y="20" width="100" height="44" rx="8" class="s-box"/><text x="284" y="47" class="s-t b">Course</text>
    <line x1="106" y1="42" x2="234" y2="42" class="s-ln"/><text x="114" y="34" class="s-lab">*</text><text x="222" y="34" class="s-lab">*</text>
    <line x1="170" y1="42" x2="170" y2="104" class="s-ln" stroke-dasharray="5 4"/>
    <rect x="105" y="104" width="130" height="78" rx="8" class="s-box ok"/><text x="170" y="124" class="s-t b">Section</text><line x1="105" y1="132" x2="235" y2="132" class="s-ln"/>
    <text x="116" y="150" class="s-lab" style="text-anchor:start">-semester: String</text><text x="116" y="168" class="s-lab" style="text-anchor:start">-room: String</text></svg>
    <figcaption>Section holds the data that only exists when a teacher and a course meet.</figcaption></figure>`,
  seqelems: () => `<figure class="fig"><div class="selems">${[
    ['Actor', 'Someone outside the system who starts the interaction (stick figure).'], ['Object', 'Box at the top: <code>:Class</code> or <code>name:Class</code>.'], ['Lifeline', 'Vertical dashed line: time runs from top to bottom.'],
    ['Activation bar', 'Thin rectangle on the lifeline: the object is executing.'], ['Synchronous message', 'Solid arrow ▶: calls and waits for the reply.'], ['Return message', 'Dashed arrow ⇠: the reply.'],
    ['Self-message', 'Arrow that leaves and returns to the same object: it calls one of its own methods.'], ['Creation / destruction', 'Arrow to the new object\'s box · X at the end of the lifeline.']
  ].map(([t, d]) => `<div><b>${t}</b><span>${d}</span></div>`).join('')}</div></figure>`,
  etapas: () => `<figure class="fig"><div class="steps4">${[
    ['Real world', 'focus on requirements; collecting data, constraints and relationships'], ['Conceptual', 'ERD + data dictionary, independent of the DBMS'],
    ['Logical', 'tables, types, sizes and keys, still independent of the DBMS'], ['Physical', 'conversion to the chosen DBMS and generation of the SQL script'], ['Implementation', 'run the script and go to production']
  ].map(([t, d], i) => `<div><i>${i + 1}</i><b>${t}</b><span>${d}</span></div>`).join('')}</div></figure>`
};
const _argoFig = FIG2.argouml;
FIG2_EN.argouml = () => _argoFig().replace('alt="Caixa de classe no ArgoUML"', 'alt="Class box in ArgoUML"').replace(/<figcaption>[\s\S]*<\/figcaption>/, '<figcaption>The class box (Patient) drawn in ArgoUML: name, attributes (−) and methods (+) — the same three compartments as the UML diagram.</figcaption>');

const EXAMPLES_EN = {
  'objetos:0': ['', 'Pen: 100.0\nNotebook: 180.0'],
  'objetos:1': ['', 'Products created: 3'],
  'encapsulamento:1': ['', 'Invalid grade\nBia: 8.5'],
  'associacao:1': ['', 'Group OOP-01:\n - Ana\n - Caio'],
  'todoparte:1': ['', 'Total: 114.0'],
  'heranca:1': ['', 'Ana: 4500.0\nCaio: 4200.0'],
  'interface:0': ['', 'true\nfalse'],
  'ferramentas:0': ['', 'Hello, I am Ana\nHello, I am Bruno']
};

const PROVA_EN = {
  ferramentas: ['Know which tool is for what: ArgoUML (UML), DB Designer Fork (data model), SQLiteStudio (DBMS).'],
  modelos: ['Define <b>model</b> and <b>artifact</b>.', '“Models design the future, they do not document the past.”', 'Difference between <b>design</b> and <b>project</b>.'],
  processo: ['The 5 activities: communication, planning, modeling, construction, deployment.', 'What is done in design: DB, architecture, integration, interface, patterns.'],
  uml: ['Definition of UML (metamodel).', 'Classify diagrams into <b>structural</b>, <b>behavioral</b> and <b>interaction</b>.'],
  mer: ['Entity, relationship, weak entity.', 'Reading the crow\'s foot notation.'],
  objetos: ['Object = state + behavior + identity.', 'Difference between class and object; same attributes, different values.', 'Drawing the class box with attributes and methods.'],
  encapsulamento: ['Symbols <b>+ − # ~</b> and who sees each one.', 'Encapsulation = access to data only through methods.', 'POJO does not appear in the diagram, but is declared in the code.'],
  associacao: ['Reading and writing multiplicities (<code>*</code> = <code>0..*</code>; <code>1..3</code>).', 'An association becomes an attribute of the other class\'s type.'],
  associativa: ['Recognize when the data belongs to the link (association class), typical of M:N.'],
  todoparte: ['<b>Aggregation</b> (◇, independent part) × <b>composition</b> (◆, exclusive part).', 'The diamond sits on the side of the whole.', 'In composition, deleting the whole deletes the parts.'],
  heranca: ['An abstract class is not instantiated; an abstract method obliges the children.', 'Polymorphism: <b>reuse and low coupling</b>; new subclasses without changing the code.', 'Not every inheritance has polymorphism.'],
  dependencia: ['Dependency = received by parameter, no attribute; dashed line with an arrow.'],
  interface: ['Interface = contract, only signatures; <code>implements</code>.', 'Interface × abstract class.'],
  sequencia: ['Elements: actor, object, lifeline, activation, messages, return.', 'Operators <b>alt, opt, loop, par, strict, neg, break</b>.', 'Building the diagram from a scenario.'],
  der: ['Converting 1:N (FK on the N side), M:N (link table), 1:1, weak entity, self-relationship.'],
  mapeamento: ['ERM × class diagram equivalences.', 'ORM; Code First × Database First (scaffolding).', 'The class diagram and the ERD are different artifacts.'],
  chaves: ['Natural × surrogate; advantages and disadvantages of the surrogate.'],
  projetobd: ['Stages: conceptual, logical, physical, implementation.', 'Writing CREATE TABLE with PRIMARY KEY and FOREIGN KEY.']
};

const QUIZ_EN = {
  ferramentas: [['Which tool does the course use to draw the data model and generate the SQL script?', ['ArgoUML', 'DB Designer Fork', 'SQLiteStudio'], 1, 'DB Designer Fork draws tables and relationships and generates the script. SQLiteStudio runs the script.']],
  modelos: [['“A small-scale representation of something you intend to build at full scale” defines…', ['an artifact', 'a model', 'a process'], 1, 'That is the definition of a model.'],
    ['Models and artifacts should be used to…', ['document the past', 'design the future', 'replace the code'], 1, 'Classic phrase: design the FUTURE, do not document the PAST.']],
  processo: [['In which framework activity do programming, testing and debugging happen?', ['Modeling', 'Construction', 'Deployment'], 1, 'Construction = programming, testing and debugging.'],
    ['Which of these is NOT a design activity?', ['Database design', 'Architecture design', 'Estimating the team budget'], 2, 'Budget is “project” (management), not design.']],
  uml: [['The sequence diagram is…', ['structural', 'behavioral (interaction)', 'a deployment diagram'], 1, 'Sequence and communication are interaction diagrams, a subgroup of the behavioral ones.'],
    ['Which of these is structural?', ['Use case', 'State machine', 'Package'], 2, 'Package, class, object, component, composite structure and deployment are structural.']],
  mer: [['An entity that depends on another to exist is…', ['a weak entity', 'an associative entity', 'a foreign key'], 0, 'E.g.: Dependent depends on Employee.'],
    ['In crow\'s foot, <code>|{</code> means…', ['zero or one', 'one or many', 'zero or many'], 1, 'Bar = minimum 1; crow\'s foot = maximum many.']],
  objetos: [['An object has…', ['only attributes', 'state, behavior and identity', 'only methods'], 1, 'Booch\'s definition: state, behavior and identity.'],
    ['Two objects of the same class have…', ['the same attributes and the same values', 'the same attributes, with possibly different values', 'different attributes'], 1, 'The class defines the attributes; each object has its own values.']],
  encapsulamento: [['The symbol <code>#</code> means…', ['public', 'private', 'protected'], 2, '# protected: the class itself and its children can see it.'],
    ['POJO methods (get/set) in the design class diagram…', ['must be drawn', 'are not drawn, but are declared in the implementation', 'do not exist in any language'], 1, 'Convention asked on the exam (True).']],
  associacao: [['The multiplicities <code>*</code> and <code>0..*</code> are…', ['identical', 'different', 'invalid'], 0, 'True on the exam: they are the same thing.'],
    ['“At least 1 and at most 3” is written…', ['1**3', '1..3', '1-3'], 1, 'UML notation uses two dots: 1..3.']],
  associativa: [['When the association itself has attributes, you use…', ['inheritance', 'an association class', 'dependency'], 1, 'The link\'s data goes in the association class.']],
  todoparte: [['In <code>X ◆— Z</code> (filled diamond next to X)…', ['X depends on Z to exist', 'Z depends on X to exist', 'neither depends'], 1, 'Composition: Z is an exclusive part of X.'],
    ['Aggregation and composition, in the implementation, are…', ['always identical', 'different: in composition the whole creates the parts', 'impossible to implement'], 1, 'False on the exam that they “have the same implementation”.'],
    ['Are the cardinalities of whole-part relationships always 1 to N?', ['Yes', 'No'], 0, 'According to the course answer key: True.']],
  heranca: [['Does every inheritance relationship have polymorphism?', ['Yes', 'No'], 1, 'False: there is only polymorphism if the child overrides the method.'],
    ['When creating a new payment method in a project with polymorphism, you need to…', ['change the parent class method', 'just create a new subclass', 'add an if at every use'], 1, 'That is the gain: reuse and low coupling.'],
    ['<code>new PaymentMethod()</code> with an abstract PaymentMethod…', ['works', 'gives a compilation error', 'creates an empty object'], 1, 'An abstract class cannot be instantiated.']],
  dependencia: [['Changes in the supplier can cause changes in the client. What relationship is this?', ['Dependency', 'Inheritance', 'Multiplicity'], 0, 'Exam question (SEFAZ-RR): dependency.']],
  interface: [['An interface contains…', ['attributes and complete methods', 'only method signatures', 'only constructors'], 1, 'It is a contract: only signatures.'],
    ['A class can implement…', ['only one interface', 'several interfaces', 'none, if it inherits'], 1, '<code>implements</code> several interfaces is allowed; <code>extends</code> (inheritance) is only one.']],
  sequencia: [['The sequence diagram emphasizes…', ['the structure of the classes', 'the time order of the messages', 'the database tables'], 1, 'Order in time, from top to bottom.'],
    ['Which operator represents “one or the other”?', ['loop', 'alt', 'opt'], 1, 'alt = alternative (if/else). opt = optional (one or nothing).']],
  der: [['In a 1:N relationship, the foreign key goes…', ['on the 1 side', 'on the N side', 'in a new table'], 1, 'The FK always goes on the N side.'],
    ['An M:N relationship becomes…', ['an FK in each table', 'a link table', 'inheritance'], 1, 'E.g.: Assigned becomes the Assignment table.']],
  mapeamento: [['A weak entity is equivalent, in the class diagram, to…', ['composition', 'aggregation', 'an interface'], 0, 'The part (dependent) does not exist without the whole.'],
    ['Generating classes from existing tables is the approach called…', ['Code First', 'Database First', 'Model View'], 1, 'Database First (scaffolding).']],
  chaves: [['A disadvantage of the surrogate key is…', ['speeding up joins', 'violating 3NF because it has no semantic relation', 'never repeating'], 1, 'The other two are advantages.']],
  projetobd: [['In which stage is the SQL script for the DBMS generated?', ['Conceptual', 'Logical', 'Physical'], 2, 'Physical design converts the model to the chosen DBMS.']]
};

const PROJECTS_EN = [
  { u: 2, t: 'Clinic', d: 'Patient, Doctor and Appointment (association class with date and diagnosis). Calculate the patient\'s BMI.', k: ['association class', 'encapsulation'] },
  { u: 2, t: 'Car rental', d: 'Customer, Vehicle and Rental. Draw the class diagram and the sequence diagram for “Make a Rental”.', k: ['association', 'sequence'] },
  { u: 2, t: 'Bank with exceptions', d: 'Abstract Account, CheckingAccount and SavingsAccount; withdraw throws InsufficientFundsException.', k: ['inheritance', 'abstract', 'exception'] },
  { u: 2, t: 'Payroll', d: 'Abstract Employee with SalariedEmployee, HourlyEmployee and CommissionedEmployee; payroll total using polymorphism.', k: ['polymorphism'] },
  { u: 2, t: 'Scientific magazine', d: 'Magazine ◆ Issue ◆ Article, Author *–* Article with Authorship (exam question).', k: ['composition', 'association class'] },
  { u: 2, t: 'E-commerce', d: 'Customer, Address, Order, Item, Product, Category and Payment method (exam question).', k: ['multiplicity', 'composition'] },
  { u: 3, t: 'Law library', d: 'Book, Publisher, Author, Copy, Loan: ERD, dictionary and SQL script.', k: ['ERD', 'SQL'] },
  { u: 3, t: 'Championship', d: 'Teams that play each other: N:N self-relationship with the Match table and the score.', k: ['self-relationship'] },
  { u: 3, t: 'DB First', d: 'Take the library script and draw the corresponding classes.', k: ['ORM', 'scaffolding'] }
];
const PLAN_EN = [
  ['Wk 1', 'Unit 1: models, process, UML and ERM. Do the quick quizzes.'],
  ['Wk 2', 'Objects and encapsulation: model classes with attributes, methods and visibility.'],
  ['Wk 3', 'Association, multiplicity and association class.'],
  ['Wk 4', 'Aggregation × composition (question no. 1 on the exam). Project: e-commerce.'],
  ['Wk 5', 'Inheritance, abstract, polymorphism and interface. Project: payroll.'],
  ['Wk 6', 'Sequence diagram with alt/loop. Redo “add an article”.'],
  ['Wk 7', 'ERM → tables, keys and mapping to classes.'],
  ['Wk 8', 'SQL script and DB First. Review the summary and previous exams.']
];
const METODO_EN = `<div class="method">
  <div class="method-h"><b>To model any scenario</b><button class="btn" data-method>See example</button></div>
  <ol class="steps"><li><b>Underline the nouns</b> in the statement: they become candidates for classes and attributes.</li><li><b>Underline the verbs</b> that link nouns: they become relationships (and methods).</li><li><b>Ask the quantity</b> on both sides: they become the multiplicities.</li><li><b>Ask whether the part lives without the whole</b>: it decides aggregation or composition.</li></ol>
  <div class="method-ex"><div>
    <p><b>Scenario:</b> “A <u>customer</u> places <u>orders</u>; each order has several <u>items</u>, and each item is of a <u>product</u>.”</p>
    <p><b>1. Classes:</b> Customer, Order, Item, Product.</p>
    <p><b>2. Relationships:</b> customer <i>places</i> order; order <i>has</i> items; item <i>is of</i> product.</p>
    <p><b>3. Quantities:</b> Customer 1 — 0..* Order · Order 1 — 1..* Item · Item 0..* — 1 Product.</p>
    <p><b>4. Whole-part:</b> the item does not exist without the order → <b>composition</b>. The product exists on its own → <b>association</b>.</p>
  </div></div>
</div>`;

// ---- applies the English content over the Portuguese data ----
Object.assign(UNITS, UNITS_EN);
LESSONS.splice(0, LESSONS.length, ...LESSONS_EN);
Object.assign(MMD, MMD_EN);
Object.assign(FIG2, FIG2_EN);
Object.assign(EXAMPLES, EXAMPLES_EN);
Object.keys(PROVA).forEach(k => delete PROVA[k]); Object.assign(PROVA, PROVA_EN);
Object.keys(QUIZ).forEach(k => delete QUIZ[k]); Object.assign(QUIZ, QUIZ_EN);
PROJECTS.splice(0, PROJECTS.length, ...PROJECTS_EN);
PLAN.splice(0, PLAN.length, ...PLAN_EN);
METODO = METODO_EN;
})();
