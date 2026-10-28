
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

