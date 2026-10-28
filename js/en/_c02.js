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

LESSONS.push(
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
