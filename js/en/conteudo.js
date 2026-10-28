(() => {
/* Object-Oriented Project — Lessons, diagrams, exercises, quizzes and projects (data) — English */
// ================= CONTENT: Object-Oriented Project =================
const UNITS_EN = {
  0: { name: 'Start here', color: 'var(--acc)', soft: 'var(--acc-s)' },
  1: { name: 'General Aspects of Design', color: 'var(--u1)', soft: 'var(--u1s)' },
  2: { name: 'Object-Oriented Design', color: 'var(--u2)', soft: 'var(--u2s)' },
  3: { name: 'Data Design and Persistence', color: 'var(--u3)', soft: 'var(--u3s)' }
};
const J = s => s.replace(/^\n/, '');
const N = (t, x) => `<div class="note"><b>${t}</b><span>${x}</span></div>`;

const LESSONS_EN = [
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

{ id: 'uml', unit: 1, title: 'UML and its diagrams',
lead: 'UML is the standard language for drawing object-oriented systems. Being able to classify the diagrams shows up often on exams.',
body: `
<h2>Definition</h2>
<p><b>UML</b> (Unified Modeling Language) is a <b>metamodel</b> that provides tools for the analysis, design and implementation of software systems, and also for modeling businesses and processes.</p>
${N('Think of it this way', 'UML is like <b>musical notation</b>: any musician in the world reads the same score. Any developer reads the same diagram.')}
<h2>Classification of the diagrams</h2>
{{fig:umltree}}
<h2>Practice the classification</h2>
{{viz:umlclass}}
${N('In this course', 'the most used are the <b>Class Diagram</b> (structural), the <b>Sequence Diagram</b> (interaction) and the <b>State Machine Diagram</b> (behavioral).')}`,
codes: {}, ex: [] },

{ id: 'mer', unit: 1, title: 'Data modeling: the ERM',
lead: 'Besides classes, the system needs to store data. The Entity-Relationship Model describes that.',
body: `
<h2>The three elements</h2>
<div class="defs"><div><b>Entity</b><span>Stores data. One or more attributes identify each occurrence: the <b>key</b>. E.g.: Employee (employee ID).</span></div>
<div><b>Relationship</b><span>Links two entities. It can be <b>1:1, 1:N or M:N</b> and obeys referential integrity.</span></div>
<div><b>Weak entity</b><span>Depends on another entity to exist. E.g.: Dependent only exists if the Employee exists.</span></div></div>
<h2>Crow's foot notation (James Martin)</h2>
{{fig:crowfoot}}
<h2>Example</h2>
{{mmd:er_1n}}
<p class="cap">It reads: <b>one</b> department contains <b>zero or many</b> employees; each employee is in <b>one and only one</b> department.</p>`,
codes: {}, ex: [
  { t: 'Read the relationship', l: 'f', d: 'Write in plain English how to read: <code>CUSTOMER ||--o{ ORDER</code>.', h: 'Read each end: || = one and only one; o{ = zero or many.', ans: 'A customer places <b>zero or many</b> orders; each order belongs to <b>one and only one</b> customer.' }
] },

/* ---------- UNIT 2 ---------- */
{ id: 'objetos', unit: 2, title: 'Object, class, attribute and method',
lead: 'The basis of everything: the class is the mold, the object is the thing created from it.',
body: `
${N('Think of it this way', 'the <b>class</b> is the cake pan; each <b>object</b> is a cake baked in it. They all have the same shape (attributes), but each has its own flavor (values).')}
<h2>Definitions</h2>
<div class="defs"><div><b>Object</b><span>Has <b>state</b> (information), <b>behavior</b> (operations) and a unique <b>identity</b>. “Instance” and “object” are synonyms.</span></div>
<div><b>Class</b><span>Defines the structure and behavior common to a set of objects.</span></div>
<div><b>Attribute</b><span>A characteristic of each object. All objects of the class have the <b>same attributes</b>, but not the same <b>values</b>.</span></div>
<div><b>Method</b><span>A function of the class: it can receive parameters and return a value. Executed by an object.</span></div></div>
<h2>How the class appears in the diagram</h2>
{{mmd:cls_paciente}}
<p class="cap">Three compartments: <b>name</b>, <b>attributes</b> and <b>methods</b>.</p>
<h2>Create objects yourself</h2>
{{viz:objetos}}
<h2>Package</h2>
<p>The <b>package</b> (namespace) organizes classes into groups: system modules, architecture components or external libraries.</p>`,
codes: {}, ex: [
  { t: 'Model the Product class', l: 'f', d: 'Draw the UML class box for <code>Product</code>, with the attributes name, price and quantity (private), and the method <code>stockValue()</code> (price × quantity).', h: 'Three compartments: class name, attributes (−) and methods (+).', ans: '<b>Product</b><br>− name<br>− price<br>− quantity<br>+ stockValue()' },
  { t: 'Class attribute', l: 'm', d: 'The Product class needs to count how many products have been created in total — a number that belongs to the <b>class</b>, not to each object. How do this attribute and this method appear in the diagram?', h: 'An attribute and a method that belong to the class, and not to each object, are underlined in the class diagram.', ans: 'A <b>class</b> attribute (e.g.: <code>total</code>) and a <b>class</b> method (e.g.: <code>getTotal()</code>) appear <b>underlined</b> in the box — that is the UML notation for “belongs to the class as a whole”, not to each object.' }
] },

{ id: 'encapsulamento', unit: 2, title: 'Visibility, encapsulation and POJO',
lead: 'Who can see what? The symbols + − # ~ answer that, and encapsulation protects the object\'s data.',
body: `
<h2>The 4 visibility levels</h2>
{{viz:visibilidade}}
<h2>Encapsulation</h2>
<p>A principle that <b>hides implementation details from the client</b> and returns only what was requested. It is the <b>capsule</b> concept: data is only accessed <b>through methods</b>.</p>
{{viz:capsula}}
<h2>POJO methods (getters and setters)</h2>
<p><b>POJO</b> is the name given to the <code>get</code> and <code>set</code> methods that give controlled access to attributes, without exposing the fields directly.</p>
<div class="note warn"><b>Exam convention</b><span>In the design class diagram, <b>POJO methods are not drawn</b>, but they <b>must be declared in the implementation</b>. Attributes that represent references to other classes are not drawn either: that is implicit in the relationship lines.</span></div>`,
codes: {}, ex: [
  { t: 'Why not access it directly?', l: 'f', d: 'The Account class has the attribute <code>balance</code> (private). Why can\'t code outside the class simply do <code>account.balance = 1000000;</code>?', h: 'Private visibility (−) only allows access from inside the class itself.', ans: 'Because <code>balance</code> is <b>private</b> (−): only the <code>Account</code> class itself sees this attribute. Any change must go through a public method, such as <code>deposit()</code> or <code>withdraw()</code>, which can apply rules (e.g.: not letting the balance go negative).' },
  { t: 'Model the encapsulated Student class', l: 'm', d: 'Draw the class box for <code>Student</code> with name and grade (both private) and the corresponding POJO methods. Explain why <code>setGrade</code> should validate the value before saving it.', h: 'Private visibility = symbol "−"; public = "+".', ans: '<b>Student</b><br>− name<br>− grade<br>+ getName()<br>+ setName(name)<br>+ getGrade()<br>+ setGrade(grade)<br><br><code>setGrade</code> should validate the value (0 to 10) because encapsulation only works if the method itself protects the business rule; if the attribute were public, any code could assign an invalid value directly.' }
] }
];

LESSONS_EN.push(
{ id: 'associacao', unit: 2, title: 'Multiplicity and association',
lead: 'Classes relate to each other. Association is the simplest link, and multiplicity says how many objects take part on each side.',
body: `
<h2>The relationships you will study</h2>
{{fig:rels}}
<h2>Multiplicity</h2>
<div class="tbl-wrap"><table><tr><th>Notation</th><th>Means</th></tr>
<tr><td><code>1</code></td><td>exactly one</td></tr><tr><td><code>0..1</code></td><td>zero or one (optional)</td></tr>
<tr><td><code>*</code> or <code>0..*</code></td><td>zero or many (they are identical)</td></tr><tr><td><code>1..*</code></td><td>one or many</td></tr>
<tr><td><code>1..3</code></td><td>at least 1 and at most 3</td></tr><tr><td><code>10..15</code></td><td>at least 10 and at most 15</td></tr></table></div>
<div class="note warn"><b>Exam trap</b><span>“At least 1 and at most 3” is <code>1..3</code>, not <code>1**3</code>. And <code>*</code> and <code>0..*</code> are the same thing.</span></div>
{{viz:multi}}
<h2>Association</h2>
<p>One class <b>knows</b> the other and keeps a reference to it. A simple solid line.</p>
{{mmd:cls_assoc}}
${N('In the implementation', 'the association becomes an <b>attribute of the other class\'s type</b> (or a collection of it, when the multiplicity is many). In the diagram, this attribute is not drawn: the line already represents the reference.')}`,
codes: {}, ex: [
  { t: 'Read the multiplicities', l: 'f', d: 'Write how to read: <code>Department "1" -- "1..*" Employee</code>.', h: 'Read from each side: the number near class B says how many B are linked to one A.', ans: 'A department has <b>one or many</b> employees; each employee belongs to <b>exactly one</b> department.' },
  { t: 'Class group and students', l: 'm', d: 'Model Group (code) associated with Student (name), where a group has 0..* students. Draw the box for each class and the association line with the multiplicities.', h: 'In Group, the association with Student does not appear as a drawn attribute — the line already represents it.', ans: '<b>Group</b> "1" —— "0..*" <b>Student</b>. In the implementation, Group keeps a collection of Student (the attribute is not drawn in the diagram).' }
] },

{ id: 'associativa', unit: 2, title: 'Association class',
lead: 'When the link between two classes itself carries data, that link becomes a class.',
body: `
${N('Think of it this way', 'a teacher teaches a course, but <b>in which semester? in which room?</b> That information belongs neither to the teacher nor to the course: it belongs to the <b>class section</b>, which is the link between the two.')}
{{fig:associativa}}
<p>The association class is attached to the <b>middle of the line</b> of the association by a <b>dashed</b> line. It usually appears in <b>many-to-many</b> relationships.</p>
${N('In the database', 'the association class is equivalent to the <b>link entity</b> of the M:N (see Unit 3: “Assigned” becomes the “Assignment” table).')}`,
codes: {}, ex: [
  { t: 'Authorship (from the exam)', l: 'm', d: 'An article can be written by several authors and an author writes several articles. Where is the author\'s <b>publication order</b> in the article stored?', h: 'The data depends on the (author, article) pair.', ans: 'In an <b>Authorship association class</b>, linked to the Author *—* Article association, with the attribute <code>publicationOrder</code>. It does not go in Author (who has several articles) nor in Article (which has several authors).' }
] },

{ id: 'todoparte', unit: 2, title: 'Aggregation and composition',
lead: 'Whole-part relationships. The difference between the two is the most classic exam question.',
body: `
<h2>The difference in one sentence</h2>
<div class="vs"><div><b>Aggregation ◇</b><span>The part <b>can exist without the whole</b>. <b>Empty</b> diamond on the side of the whole.</span><small>Team ◇— Player: the team ends, the player keeps existing.</small></div>
<div><b>Composition ◆</b><span>The part <b>does not exist without the whole</b> (exclusive). <b>Filled</b> diamond on the side of the whole.</span><small>Invoice ◆— Item: delete the invoice, the items disappear with it.</small></div></div>
{{viz:todoparte}}
{{mmd:cls_todoparte}}
<div class="note warn"><b>From the exam</b><span>The diamond sits on the side of the <b>whole</b>. In <code>Y ◇— X ◆— Z</code>: X is part of Y (aggregation) and Z is an exclusive part of X (composition), so <b>Z depends on X to exist</b>.</span></div>
${N('Difference in the implementation', 'in <b>composition</b>, the whole <b>creates</b> the parts inside itself. In <b>aggregation</b>, the parts already exist and are just <b>passed</b> to the whole.')}`,
codes: {}, ex: [
  { t: 'Aggregation or composition?', l: 'f', d: 'Classify: (a) Order — OrderItem, (b) Library — Book, (c) House — Room, (d) Playlist — Song, (e) Magazine — Issue (from the exam).', h: 'Ask: if the whole is deleted, does the part still make sense on its own?', ans: '(a) <b>composition</b>, (b) <b>aggregation</b>, (c) <b>composition</b>, (d) <b>aggregation</b> (the song exists outside the playlist), (e) <b>composition</b> (the issue only exists inside that magazine).' },
  { t: 'Order with items', l: 'm', d: 'Model Order in composition with OrderItem (name, quantity, price). Draw the diagram with the filled diamond on the right side.', h: 'The item does not exist without the order: the filled diamond (◆) goes on the Order side.', ans: '<b>Order</b> ◆—— <b>OrderItem</b>. The filled diamond is on Order (the whole): if the order is deleted, the items disappear with it — it is composition, not aggregation.' }
] },

{ id: 'heranca', unit: 2, title: 'Inheritance, abstract class and polymorphism',
lead: 'The child inherits everything from the parent and can behave in its own way. This is the basis of the most requested exam answer.',
body: `
{{mmd:cls_heranca}}
<div class="defs"><div><b>Inheritance</b><span>The child class (<code>extends</code>) inherits attributes and methods from the parent. Arrow with an <b>empty</b> triangle pointing to the parent. An “<b>is a</b>” relationship: BankSlip <i>is a</i> PaymentMethod.</span></div>
<div><b>Abstract class</b><span>Cannot be instantiated (<code>new</code> gives an error). Serves as a mold. Name in <i>italics</i> or with «abstract» in the diagram.</span></div>
<div><b>Abstract method</b><span>Has only the signature; each concrete child is <b>required</b> to implement it.</span></div>
<div><b>Polymorphism</b><span>The same call (<code>processPayment()</code>) runs different versions depending on the real object.</span></div></div>
{{viz:polimorfismo}}
<div class="note warn"><b>Standard exam answer</b><span>The gain of polymorphism: <b>code reuse and low coupling</b>. New payment methods come in by <b>creating new subclasses</b>, without touching the parent's <code>processPayment()</code> implementation. Without polymorphism, the method would be <b>monolithic</b>, full of conditionals, and each new type would change an implementation that was already stable.</span></div>
${N('Careful', 'not every inheritance has polymorphism (False on the exam!). There is only polymorphism when the child <b>overrides</b> a method and it is called through the parent\'s reference.')}`,
codes: {}, ex: [
  { t: 'Test the abstract class', l: 'f', d: 'In the diagram of PaymentMethod (abstract) and its children CreditCard, BankSlip and Pix, what happens if someone tries to instantiate <code>new PaymentMethod(10)</code> directly? And if a child does not implement <code>processPayment()</code>?', h: 'Both are classic exam errors: instantiating an abstract class and not fulfilling the “contract” of the abstract method.', ans: 'Both cause a <b>compilation error</b>: an abstract class <b>cannot be instantiated</b> with <code>new</code>; and every concrete class that inherits from an abstract one is <b>required</b> to implement its abstract methods, otherwise it does not compile either.' },
  { t: 'Payroll', l: 'm', d: 'Model the abstract class Employee (name, abstract method <code>calculateSalary()</code>) and the children SalariedEmployee (fixed salary) and HourlyEmployee (hours × hourly rate). Draw the complete inheritance diagram.', h: 'The PaymentMethod from the example above follows the same mold: an abstract parent with the method without a body, concrete children that implement it each in their own way.', ans: '<b>Employee</b> «abstract» at the top, with <code>−name</code> and <code>+calculateSalary(): double</code> in italics (abstract). <b>SalariedEmployee</b> and <b>HourlyEmployee</b> inherit from it (empty-triangle arrow) and each implements <code>calculateSalary()</code> in its own way — it is the same polymorphism as in the PaymentMethod example.' }
] },

{ id: 'dependencia', unit: 2, title: 'Dependency',
lead: 'One class uses another just in passing, without keeping it as an attribute.',
body: `
<p><b>Dependency</b> indicates that a change in one object (the supplier, independent) can affect another (the client, dependent). A <b>dashed</b> line with an open arrow pointing to the supplier.</p>
{{mmd:cls_dep}}
<ul><li>The client class <b>depends on some service</b> of the supplier class.</li><li>The client <b>does not declare</b> the supplier in its attributes.</li><li>The supplier is <b>received as a method parameter</b> (or created inside it).</li></ul>
${N('Association × dependency', 'association = <b>attribute</b> (lasting relationship). Dependency = <b>parameter</b> or local variable (passing relationship).')}`,
codes: {}, ex: [
  { t: 'What relationship is this?', l: 'f', d: 'The Report class has the method <code>print(Printer p)</code> and has no attribute of type Printer. What is the relationship and how do you draw it?', h: 'Method parameter, no attribute.', ans: '<b>Dependency</b>: Report ┈┈> Printer (dashed line with an open arrow pointing to Printer, the supplier).' }
] },

{ id: 'interface', unit: 2, title: 'Interface',
lead: 'A contract: it says which methods a class must have, without saying how.',
body: `
<p>In everyday life, an interface is what lets different things communicate. In OO, it is the <b>“face” an object shows to others</b>: the services it provides.</p>
<ul><li>Defines a <b>mandatory behavior</b> (the idea of a <b>contract</b>).</li><li>Contains <b>only method signatures</b>, with no implementation.</li><li>One or more classes <b>implement</b> it and commit to writing all of its methods.</li><li>Captures behaviors shared by <b>unrelated</b> classes, without forcing inheritance.</li><li>Makes <b>decoupling</b> easier.</li></ul>
{{mmd:cls_interface}}
<p class="cap">Notation: «interface» at the top of the box and a <b>dashed line with an empty triangle</b> (realization). There is also the “lollipop” notation (circle).</p>
<h2>Interface × abstract class</h2>
<div class="tbl-wrap"><table><tr><th></th><th>Interface</th><th>Abstract class</th></tr>
<tr><td>Reserved word</td><td><code>implements</code></td><td><code>extends</code></td></tr>
<tr><td>How many per class</td><td>several</td><td>only one</td></tr>
<tr><td>Attributes</td><td>no (only constants)</td><td>yes</td></tr>
<tr><td>Methods with a body</td><td>no (except default)</td><td>yes, mixed with abstract ones</td></tr>
<tr><td>Relationship</td><td>“knows how to”</td><td>“is a”</td></tr></table></div>`,
codes: {}, ex: [
  { t: 'Authenticable interface', l: 'm', d: 'Create the interface <code>Authenticable</code> with the method <code>authenticate(password)</code>. Draw Manager and Customer — two classes with no inheritance between them — implementing this interface, each with its own authentication logic.', h: 'Interface = «interface» at the top, dashed line with an empty triangle to each class that implements it.', ans: '<b>«interface» Authenticable</b> with <code>+authenticate(password): boolean</code>. <b>Manager</b> and <b>Customer</b> linked to it by a dashed line with an empty triangle (realization) — they are unrelated classes, but they share the same contract.' }
] },

{ id: 'sequencia', unit: 2, title: 'Sequence diagram',
lead: 'Shows the order in time of the messages exchanged between objects to fulfill a use case.',
body: `
<p><b>Goal:</b> emphasize the <b>time order</b> of the message exchange between objects (sequence of events). It is used to detail a use case, model the logic of a complex operation and understand how objects collaborate.</p>
<h2>Elements</h2>
{{fig:seqelems}}
<h2>Follow a diagram step by step</h2>
{{viz:sequencia}}
<h2>Fragments (interaction operators)</h2>
<div class="tbl-wrap"><table><tr><th>Operator</th><th>Means</th><th>Equivalent to</th></tr>
<tr><td><code>alt</code></td><td>conditional execution (one or the other)</td><td>if / else</td></tr>
<tr><td><code>opt</code></td><td>optional execution (one or nothing)</td><td>if without else</td></tr>
<tr><td><code>loop</code></td><td>repetition</td><td>for / while</td></tr>
<tr><td><code>par</code></td><td>parallel execution</td><td>threads</td></tr>
<tr><td><code>strict</code></td><td>strict sequential order</td><td>—</td></tr>
<tr><td><code>neg</code></td><td>negation (invalid sequence)</td><td>—</td></tr>
<tr><td><code>break</code></td><td>execution break (exception)</td><td>break / throw</td></tr></table></div>
<h2>Example: HTTP request with a validation failure</h2>
{{mmd:seq_http}}
<h2>MVC in the diagram: boundary, control and entity</h2>
<div class="defs"><div><b>Boundary</b><span>Interface between the system and the user, or between systems (screens, APIs).</span></div>
<div><b>Control</b><span>Separates business rules and task sequencing from the interface.</span></div>
<div><b>Entity</b><span>Stores and manages the system's data.</span></div></div>
{{mmd:seq_mvc}}`,
codes: {}, ex: [
  { t: 'Sequence: add an article (from the assignment)', l: 'd', d: 'The editor adds an article. If it is the 1st article of the issue, the issue is registered. Then, <b>while</b> there are authors to link, an authorship is created; if it is the author\'s 1st publication, the author is registered. Which fragments do you use and where?', h: '“If” becomes alt/opt; “while” becomes loop. One fragment can sit inside another.', ans: 'An <b>alt/opt</b> “[If 1st article of the issue]” around <code>registerIssue()</code>; a <b>loop</b> “[While there is an author to link]” around <code>linkAuthorship()</code>; and, inside the loop, another <b>alt/opt</b> “[If author\'s 1st publication]” around <code>registerAuthor()</code>. See the full diagram in this lesson\'s simulation.' }
] },

/* ---------- UNIT 3 ---------- */
{ id: 'der', unit: 3, title: 'From the ERM to tables',
lead: 'Each type of relationship becomes tables in its own way. This conversion is the basis of the logical design.',
body: `
${N('The golden rule', 'the foreign key (FK) goes on the <b>N</b> side. When both sides are N (M:N), a <b>link table</b> is born.')}
<h2>Convert each case</h2>
{{viz:mer2tab}}
<h2>Notation conversion: classes × relational</h2>
<div class="tbl-wrap"><table><tr><th>Class diagram</th><th>Crow's foot</th><th>Means</th></tr>
<tr><td><code>0..1</code></td><td><code>o|</code></td><td>zero or one</td></tr><tr><td><code>1</code></td><td><code>||</code></td><td>one and only one</td></tr>
<tr><td><code>*</code></td><td><code>o{</code></td><td>zero or many</td></tr><tr><td><code>1..*</code></td><td><code>|{</code></td><td>one or many</td></tr></table></div>`,
codes: {}, ex: [
  { t: 'Convert to tables', l: 'm', d: 'Doctor and Patient are related through Appointment (date, time, diagnosis); a doctor sees many patients and a patient consults many doctors. Which tables and keys?', h: 'It is M:N with attributes on the relationship.', ans: '<b>DOCTOR</b>(<u>license_no</u>, name) · <b>PATIENT</b>(<u>tax_id</u>, name, birth_date) · <b>APPOINTMENT</b>(<u>appointment_no</u>, license_no → DOCTOR, tax_id → PATIENT, date, time, diagnosis). Appointment is the link entity (in the class diagram, an association class).' }
] },

{ id: 'mapeamento', unit: 3, title: 'Classes × tables and ORM',
lead: 'The class diagram and the relational model describe the same reality with different rules. The ORM builds the bridge.',
body: `
<h2>Each relationship in both worlds</h2>
<div class="tbl-wrap"><table><tr><th>In the ERM / tables</th><th>In the class diagram</th></tr>
<tr><td>1:N relationship (FK on the N side)</td><td><b>Association</b></td></tr>
<tr><td>M:N relationship (link table with attributes)</td><td><b>Association class</b></td></tr>
<tr><td>1:1 relationship “is subdivided into” / generalization</td><td><b>Inheritance</b></td></tr>
<tr><td>Weak entity (PK composed with the owner's)</td><td><b>Composition</b></td></tr>
<tr><td>Self-relationship (FK to the table itself)</td><td><b>Self-association</b></td></tr></table></div>
{{mmd:cls_orgao}}
<p class="cap">Self-association: an Agency is linked to a parent agency.</p>
<div class="note warn"><b>From the exam (True)</b><span>We can generate classes from tables and vice versa, <b>but</b> the Class Diagram and the Entity-Relationship Diagram are different artifacts, with their own characteristics. E.g.: the FKs appear in the ERM; in the class diagram, they do not.</span></div>
<h2>ORM: Object-Relational Mapping</h2>
<p>A technique that converts <b>objects ↔ table rows</b> automatically (e.g.: Hibernate, Entity Framework). There are two approaches:</p>
<div class="vs"><div><b>Code First</b><span>You write the classes; the tool generates the tables.</span></div><div><b>Database First</b><span>You design the database first; the tool generates the classes (<b>scaffolding</b>).</span></div></div>
<h2>Database First in practice</h2>
{{viz:dbfirst}}`,
codes: {}, ex: [
  { t: 'What is the equivalent?', l: 'f', d: 'The table ASSIGNMENT(department_id, employee_id, start_date, end_date) links Department and Employee. In the class diagram, what does it become?', h: 'M:N relationship with its own attributes.', ans: 'An <b>association class</b> Assignment (startDate, endDate) attached to the Department *—* Employee association. The FKs do not appear as attributes.' }
] },

{ id: 'chaves', unit: 3, title: 'Natural key × surrogate key',
lead: 'Every table needs a primary key. But should it use a real-world value or a number generated by the system?',
body: `
<div class="vs"><div><b>Natural key</b><span>Based on real-world values; reflects how the object is identified outside the system.</span><small>E.g.: tax ID, car license plate, official document number.</small></div>
<div><b>Surrogate key</b><span>A unique integer generated by the system just to be the PK. Also called a synthetic key or pseudo-key.</span><small>E.g.: id INT IDENTITY / AUTOINCREMENT.</small></div></div>
<h2>Characteristics of the surrogate</h2>
<ul><li>The value is <b>never reused</b> and is generated by the system itself.</li><li>It has no meaning (no semantics).</li><li>It is not handled or seen by the user.</li></ul>
<div class="duo2"><div class="good-b"><b>✓ Advantages</b><ul><li>Guarantee of non-repeated values.</li><li>Speeds up joins and indexing (performance).</li><li>Changes in business rules do not affect the key.</li><li>Replaces large composite keys.</li></ul></div>
<div class="bad-b"><b>✕ Disadvantages</b><ul><li>Usually does not work as a query key.</li><li>No semantic relation with the table: violates 3NF.</li><li>Implementation varies between DBMSs.</li><li>Can cause problems in data migration and integration.</li></ul></div></div>
${N('Example', 'if the Customer PK were the tax ID and the customer fixed a mistyped tax ID, every FK pointing to it would have to change. With a surrogate <code>customer_id</code>, only the tax ID field changes.')}`,
codes: {}, ex: [] },

{ id: 'projetobd', unit: 3, title: 'Database design: conceptual, logical and physical',
lead: 'From the real world to the SQL script running in the database, in stages.',
body: `
{{fig:etapas}}
<h2>Conceptual: ERD + data dictionary</h2>
<p>The ERD shows entities and relationships; the <b>data dictionary</b> describes each attribute (name, type, size, whether it is required, description).</p>
<div class="tbl-wrap"><table><tr><th>Attribute</th><th>Type</th><th>Size</th><th>Req.</th><th>Description</th></tr>
<tr><td>isbn</td><td>numeric</td><td>13</td><td>yes</td><td>Book identifier (PK)</td></tr>
<tr><td>title</td><td>text</td><td>200</td><td>yes</td><td>Book title</td></tr>
<tr><td>publisher_id</td><td>integer</td><td>—</td><td>yes</td><td>Publisher (FK → PUBLISHER)</td></tr></table></div>
<h2>Physical: the SQL script</h2>
{{code:sql}}
<ul><li><code>PRIMARY KEY</code> identifies each row; composite key in link tables (WRITES).</li><li><code>FOREIGN KEY ... REFERENCES</code> creates referential integrity.</li><li><code>ON DELETE NO ACTION</code>: does not let you delete a parent that has children.</li></ul>
{{mmd:er_biblio}}
<h2>Tools</h2>
<p><b>DB Designer Fork</b> to draw and generate the script (set the <i>Crow's Foot</i> notation in Display › Notation) and <b>SQLiteStudio</b> to run it.</p>`,
codes: { sql: J(`
CREATE TABLE PUBLISHER (
  PUBLISHER_ID    INT NOT NULL,
  PUBLISHER_NAME  VARCHAR(50),
  PRIMARY KEY (PUBLISHER_ID));

CREATE TABLE BOOK (
  ISBN            NUMERIC(13) NOT NULL,
  PUBLISHER_ID    INT NOT NULL,
  TITLE           VARCHAR(200) NOT NULL,
  PUBLISH_YEAR    NUMERIC(4),
  PRIMARY KEY (ISBN),
  FOREIGN KEY (PUBLISHER_ID) REFERENCES PUBLISHER(PUBLISHER_ID)
    ON DELETE NO ACTION ON UPDATE NO ACTION);

CREATE TABLE AUTHOR (
  AUTHOR_ID    INT NOT NULL,
  AUTHOR_NAME  VARCHAR(100),
  PRIMARY KEY (AUTHOR_ID));

-- M:N between BOOK and AUTHOR: link table with a composite PK
CREATE TABLE WRITES (
  ISBN       NUMERIC(13) NOT NULL,
  AUTHOR_ID  INT NOT NULL,
  PRIMARY KEY (ISBN, AUTHOR_ID),
  FOREIGN KEY (ISBN) REFERENCES BOOK(ISBN),
  FOREIGN KEY (AUTHOR_ID) REFERENCES AUTHOR(AUTHOR_ID));`) },
ex: [
  { t: 'Write the script', l: 'm', d: 'Write the CREATE TABLE for DEPARTMENT(id, description) and EMPLOYEE(employee_no, name, birth_date, department_id) with the FK.', h: 'The FK goes in EMPLOYEE (N side) and references DEPARTMENT.', ans: `<pre class="mini">CREATE TABLE DEPARTMENT (
  DEPARTMENT_ID INT NOT NULL,
  DEPARTMENT_DESC VARCHAR(60),
  PRIMARY KEY (DEPARTMENT_ID));

CREATE TABLE EMPLOYEE (
  EMPLOYEE_NO INT NOT NULL,
  NAME VARCHAR(100) NOT NULL,
  BIRTH_DATE DATE,
  DEPARTMENT_ID INT NOT NULL,
  PRIMARY KEY (EMPLOYEE_NO),
  FOREIGN KEY (DEPARTMENT_ID)
    REFERENCES DEPARTMENT(DEPARTMENT_ID));</pre>` }
] }
);

// ================= DIAGRAMS (Mermaid), FIGURES, EXAM, QUIZZES =================
const MMD_EN = {
  cls_paciente: `classDiagram
class Patient {
  -String taxId
  -String name
  -double weight
  -double height
  +calculateBMI() double
}`,
  cls_assoc: `classDiagram
direction LR
class Person { -String name }
class Car { -String model
  -int year }
Person "1" --> "0..*" Car : owns`,
  cls_todoparte: `classDiagram
direction LR
Team "1" o-- "11..*" Player : aggregation
Invoice "1" *-- "1..*" InvoiceItem : composition
class Team { -String name }
class Player { -String name }
class Invoice { -int number
  +total() double }
class InvoiceItem { -int qty
  -double price }`,
  cls_heranca: `classDiagram
class PaymentMethod {
  <<abstract>>
  #double amount
  +processPayment()* void
}
class CreditCard { -String cardNumber
  +processPayment() void }
class BankSlip { -String barcode
  +processPayment() void }
PaymentMethod <|-- CreditCard
PaymentMethod <|-- BankSlip`,
  cls_dep: `classDiagram
direction LR
class Order { -double amount
  +totalWithShipping(ShippingCalculator c, String state) double }
class ShippingCalculator { +calculate(double v, String state) double }
Order ..> ShippingCalculator : uses`,
  cls_interface: `classDiagram
class Taxable {
  <<interface>>
  +calculateTax() double
}
class Product { -double price
  +calculateTax() double }
class Service { -double amount
  +calculateTax() double }
Taxable <|.. Product
Taxable <|.. Service`,
  cls_orgao: `classDiagram
class Agency { -String name
  -String acronym }
Agency "0..*" --> "0..1" Agency : linked to (parent)`,
  cls_revista: `classDiagram
class Magazine { -long issn
  -String title
  -String frequency }
class Issue { -int number
  -short volume
  -Date date }
class Article { -short number
  -String title
  -String text }
class Author { -String email
  -String name }
class Authorship { -short publicationOrder
  +linkAuthorship() }
Magazine "1" *-- "0..*" Issue
Issue "1" *-- "10..15" Article
Author "*" -- "*" Article
Article .. Authorship
Author .. Authorship`,
  cls_ecommerce: `classDiagram
class Customer { -String name
  -String email
  -String phone
  -String taxId
  -String password }
class Address { -String street
  -String city }
class Order { -Date date
  -int number
  -String status }
class OrderItem { -int quantity
  -double price }
class Product { -String description
  -double salePrice
  -int stockQty }
class Category { -String description }
class PaymentMethod { -String description }
Customer "1" *-- "1..*" Address
Customer "1" -- "0..*" Order
Order "0..*" --> "1" Address : ships to
Order "1" *-- "1..*" OrderItem
OrderItem "0..*" --> "1" Product
Product "0..*" --> "1" Category
Order "0..*" --> "1" PaymentMethod`,
  seq_artigo: `sequenceDiagram
actor Editor
participant A as :Article
participant E as :Issue
participant AU as :Authorship
participant AT as :Author
Editor->>A: addArticle()
alt If 1st article of the issue
  A->>E: registerIssue()
  E-->>A: Issue opened
end
loop While there is an author to link
  A->>AU: linkAuthorship()
  alt If author's 1st publication
    AU->>AT: registerAuthor()
    AT-->>AU: Author registered
  end
  AU-->>A: Author linked
end
A-->>Editor: Article registered`,
  seq_http: `sequenceDiagram
actor U as User
participant API as API
participant S as Service
participant DB as Database
U->>API: POST /orders
API->>API: validate(data)
alt valid data
  API->>S: createOrder(data)
  S->>DB: INSERT order
  DB-->>S: ok
  S-->>API: order created
  API-->>U: 201 Created
else invalid data
  API-->>U: 400 Bad Request
end`,
  seq_mvc: `sequenceDiagram
actor C as Customer
participant T as SalesScreen «boundary»
participant V as SalesControl «control»
participant S as Session «entity»
participant I as Ticket «entity»
C->>T: choose session and seat
T->>V: sellTicket(session, seat)
V->>S: checkAvailability(seat)
S-->>V: available
V->>I: new Ticket(session, seat)
I-->>V: ticket
V-->>T: confirmation
T-->>C: show ticket`,
  er_1n: `erDiagram
DEPARTMENT ||--o{ EMPLOYEE : contains
DEPARTMENT { int department_id PK
  string department_desc }
EMPLOYEE { int employee_no PK
  string name
  date birth_date
  int department_id FK }`,
  er_biblio: `erDiagram
PUBLISHER ||--o{ BOOK : publishes
BOOK ||--o{ WRITES : has
AUTHOR ||--o{ WRITES : writes
BOOK ||--o{ COPY : owns
PUBLISHER { int publisher_id PK
  string publisher_name }
BOOK { numeric isbn PK
  int publisher_id FK
  string title
  numeric publish_year }
AUTHOR { int author_id PK
  string author_name }
WRITES { numeric isbn PK, FK
  int author_id PK, FK }
COPY { int copy_id PK
  numeric isbn FK
  date acquired_date
  decimal price }`
};

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
