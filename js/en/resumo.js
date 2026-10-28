/* Object-Oriented Project — exam summary (English). Overrides the Portuguese data and renderer in js/resumo.js */
RESUMO.splice(0, RESUMO.length,
{ u: 1, id: 'r-u1', title: 'Unit 1 · General Aspects', blocks: [
  ['Model, artifact and design', `<ul><li><b>Model:</b> a small-scale representation of something you intend to build at full scale.</li><li><b>Artifact:</b> a product of development (diagram, document, code, script).</li><li>Models are for <b>designing the FUTURE</b>, not documenting the PAST.</li><li><b>Design</b> = technical drawing (how it works) · <b>Project</b> = undertaking (schedule, cost, team).</li></ul>`],
  ['Software process', `<p class="rs-h">5 framework activities, in this order:</p><div class="sim"><span>1</span><code>Communication</code><span>2</span><code>Planning</code><span>3</span><code>Modeling (analysis + design)</code><span>4</span><code>Construction (programming, testing, debugging)</code><span>5</span><code>Deployment</code></div>
<ul><li>Activities of <b>design</b>: dynamic/static/structural aspects, database, architecture, integration, interface, patterns.</li></ul>`],
  ['UML', `<ul><li><b>UML</b>: a metamodel for analysis, design and implementation of systems (and business modeling).</li><li><b>Structural:</b> class, object, component, composite structure, deployment, package.</li><li><b>Behavioral:</b> use case, activity, state machine.</li><li><b>Interaction</b> (a subgroup of the behavioral): sequence, communication, interaction overview.</li></ul>`],
  ['ERM and crow\'s foot', `<ul><li><b>Entity</b> (has a key) · <b>relationship</b> (1:1, 1:N, M:N) · <b>weak entity</b> (depends on another).</li></ul>
<div class="tbl-wrap"><table><tr><th>Crow's foot</th><th>Classes</th><th>Reads as</th></tr><tr><td>o|</td><td>0..1</td><td>zero or one</td></tr><tr><td>||</td><td>1</td><td>one and only one</td></tr><tr><td>o{</td><td>*</td><td>zero or many</td></tr><tr><td>|{</td><td>1..*</td><td>one or many</td></tr></table></div>`]
] },
{ u: 2, id: 'r-u2', title: 'Unit 2 · OO Design', blocks: [
  ['Basic concepts', `<ul><li><b>Object</b> = state + behavior + identity (object = instance).</li><li><b>Class</b> = mold; same attributes, different values in each object.</li><li>An <b>instance method</b> is only executed by an object.</li><li><b>Package</b> = groups classes (namespace).</li></ul>${FIG2.argouml ? FIG2.argouml() : ''}`],
  ['Visibility and encapsulation', `<div class="tbl-wrap"><table><tr><th>Symbol</th><th>Visibility</th><th>Who sees it</th></tr><tr><td>+</td><td>public</td><td>everyone</td></tr><tr><td>−</td><td>private</td><td>only the class itself</td></tr><tr><td>#</td><td>protected</td><td>the class and its children</td></tr><tr><td>~</td><td>package</td><td>classes in the same package</td></tr></table></div>
<ul><li><b>Encapsulation:</b> hide the implementation; access data only through methods (capsule).</li><li>Rule: <b>private attributes, public methods</b>.</li></ul>${KEY('<b>POJO/POCO</b> (getters and setters): <b>do not</b> appear in the class diagram, but <b>are declared</b> in the implementation. Attributes that are references to other classes are not drawn either.')}`],
  ['Relationships (symbols)', `${FIG2.rels()}
<div class="tbl-wrap"><table><tr><th>Multiplicity</th><th>Means</th></tr><tr><td>1</td><td>exactly one</td></tr><tr><td>0..1</td><td>zero or one</td></tr><tr><td>* = 0..*</td><td>zero or many (same!)</td></tr><tr><td>1..*</td><td>one or many</td></tr><tr><td>1..3</td><td>min. 1, max. 3 (never 1**3)</td></tr></table></div>`],
  ['Aggregation × composition (always on the exam)', `<div class="vs"><div><b>Aggregation ◇</b><span>whole-part; the part <b>lives without the whole</b>.</span><small>Team ◇— Player</small></div><div><b>Composition ◆</b><span><b>exclusive</b> whole-part; the part <b>dies with the whole</b>.</span><small>Invoice ◆— Item</small></div></div>
${KEY('The diamond sits on the side of the <b>whole</b>. In <code>Y ◇— X ◆— Z</code>: <b>Z depends on X to exist</b>. On the exam, “whole-part cardinalities are always 1 to N” was considered True, and “aggregation and composition have the same code” was considered False.')}`],
  ['Association class and dependency', `<ul><li><b>Association class</b>: data of the link itself (Section between Teacher and Course; Authorship between Author and Article). Dashed line to the middle of the association. Typical of M:N.</li><li><b>Dependency</b> (┈┈>): the client <b>receives the supplier as a parameter</b>, without keeping it in an attribute. Changing the supplier can affect the client.</li></ul>`],
  ['Inheritance, abstract and polymorphism', `${C(`
abstract class PaymentMethod {
    protected double amount;
    public abstract void processPayment();      // no body
}
class BankSlip extends PaymentMethod {
    @Override public void processPayment() { ... }   // mandatory
}
PaymentMethod f = new BankSlip();   // ok
f.processPayment();                 // runs the BankSlip version (polymorphism)
// new PaymentMethod();             // ERROR: abstract class`)}
${KEY('<b>Standard answer:</b> polymorphism brings <b>code reuse and low coupling</b>: new types come in by creating subclasses, <b>without changing</b> the parent\'s method. Without it, the method would be monolithic, full of <code>if</code>s. <b>Not every inheritance has polymorphism</b> (False on the exam).')}`],
  ['Interface', `<ul><li><b>Contract</b>: only signatures; whoever implements (<code>implements</code>) must write all the methods.</li><li>Unites <b>unrelated</b> classes with a common behavior, without inheritance. Makes decoupling easier.</li><li>Notation: «interface» + dashed line with an empty triangle (realization), or “lollipop”.</li><li>A class can implement <b>several</b> interfaces, but inherit from only <b>one</b> class.</li></ul>`],
  ['Sequence diagram', `<ul><li>Emphasizes the <b>time order</b> of the messages (top to bottom).</li><li>Elements: <b>actor</b>, <b>object</b> (:Class), <b>lifeline</b>, <b>activation bar</b>, <b>message</b> (solid arrow), <b>return</b> (dashed), <b>self-message</b>, creation/destruction (X).</li></ul>
<div class="tbl-wrap"><table><tr><th>Operator</th><th>Use</th></tr><tr><td>alt</td><td>one or the other (if/else)</td></tr><tr><td>opt</td><td>one or nothing (if)</td></tr><tr><td>loop</td><td>repetition</td></tr><tr><td>par</td><td>parallel</td></tr><tr><td>strict</td><td>strict order</td></tr><tr><td>neg</td><td>negation</td></tr><tr><td>break</td><td>break (exception)</td></tr></table></div>
<ul><li>MVC: <b>boundary</b> (screen/API), <b>control</b> (rules and sequence), <b>entity</b> (data).</li></ul>`]
] },
{ u: 3, id: 'r-u3', title: 'Unit 3 · Data and persistence', blocks: [
  ['ERM → tables → classes', `<div class="tbl-wrap"><table><tr><th>Case</th><th>Tables</th><th>Class diagram</th></tr>
<tr><td>1:N</td><td>FK on the N side</td><td>association</td></tr><tr><td>M:N</td><td>link table (Assigned → Assignment), composite PK made of the FKs</td><td>association class</td></tr>
<tr><td>1:1 / generalization</td><td>child with the same PK as the parent (PK and FK)</td><td>inheritance</td></tr><tr><td>Weak entity</td><td>PK composed with the owner's PK</td><td>composition</td></tr>
<tr><td>1:N self-relationship</td><td>FK to the table itself (parent)</td><td>self-association</td></tr><tr><td>N:N self-relationship</td><td>table with two FKs to the same table (Match)</td><td>self-association / association class</td></tr></table></div>
${KEY('The class diagram and the ERD are <b>different artifacts</b>, even though one can be generated from the other.')}`],
  ['ORM and Database First', `<ul><li><b>ORM</b>: maps objects ↔ tables (JPA/Hibernate, Entity Framework).</li><li><b>Code First</b>: classes → tables. <b>Database First</b>: tables → classes (<b>scaffolding</b>).</li><li>In generation, the FK becomes an <b>object reference</b>; names become camelCase.</li></ul>`],
  ['Keys', `<div class="vs"><div><b>Natural</b><span>from the real world: tax ID, plate, document no.</span></div><div><b>Surrogate</b><span>an integer generated by the system, meaningless, never reused.</span></div></div>
<ul><li><b>Advantages</b> of the surrogate: no repetition, faster joins/indexes, immune to rule changes, replaces composite keys.</li><li><b>Disadvantages</b>: not useful for queries, violates 3NF, varies by DBMS, hinders migration/integration.</li></ul>`],
  ['Stages and SQL', `<div class="sim"><span>1</span><code>Conceptual: ERD + data dictionary</code><span>2</span><code>Logical: tables, types, keys</code><span>3</span><code>Physical: DBMS script</code><span>4</span><code>Implementation: run and go live</code></div>${C(`
CREATE TABLE BOOK (
  ISBN NUMERIC(13) NOT NULL,
  PUBLISHER_ID INT NOT NULL,
  TITLE VARCHAR(200) NOT NULL,
  PRIMARY KEY (ISBN),
  FOREIGN KEY (PUBLISHER_ID) REFERENCES PUBLISHER(PUBLISHER_ID)
    ON DELETE NO ACTION ON UPDATE NO ACTION);`)}`]
] }
);
ERROS_PROVA.splice(0, ERROS_PROVA.length,
  ['Diamond on the part\'s side', 'The diamond goes on the <b>whole</b>\'s side.'], ['Mixing up ◇ and ◆', 'Empty = aggregation (independent part); filled = composition.'],
  ['Writing <code>1**3</code>', 'The right form is <code>1..3</code>.'], ['Thinking <code>*</code> ≠ <code>0..*</code>', 'They are identical.'],
  ['Drawing get/set in the diagram', 'POJO does not go in the design diagram (but it goes in the code).'], ['Drawing the FK as a class attribute', 'The reference is the relationship line.'],
  ['“Every inheritance has polymorphism”', 'False: the method must be overridden.'], ['Using <code>new</code> on an abstract class', 'Compilation error.'],
  ['FK on the 1 side', 'The FK goes on the N side.'], ['alt × opt', 'alt = one or the other; opt = one or nothing.']
);
FLASH.splice(0, FLASH.length,
  ['An object has…', 'state, behavior and identity'], ['Symbol #', 'protected (class and children)'], ['* and 0..* are…', 'identical'], ['◆ on X\'s side linked to Z', 'Z depends on X (composition)'],
  ['Gain of polymorphism', 'reuse and low coupling'], ['Supplier by parameter, no attribute', 'dependency'], ['An interface contains…', 'only signatures (contract)'], ['“One or the other” operator', 'alt'],
  ['M:N becomes…', 'a link table (association class)'], ['Weak entity in the class diagram', 'composition'], ['Tables → classes', 'Database First (scaffolding)'], ['System-generated key', 'surrogate'],
  ['The sequence diagram is…', 'behavioral, interaction'], ['Getters/setters in the diagram?', 'no; only in the code'], ['Stage that generates the SQL script', 'physical design'], ['Models design…', 'the future']
);
renderResumo = function renderResumo() {
  let h = `<div class="crumb">Exam review</div><h1>Summary of the 3 units</h1>
  <p class="lead">Concepts, notations, model code, the answers that come up most and quick review cards — all on one page.</p>
  <div class="rs-plan"><b>If you only have a few hours</b><ol><li><b>20 min</b> — Unit 1: definitions and UML classification.</li><li><b>60 min</b> — Unit 2: relationship symbols, aggregation × composition, polymorphism (memorize the standard answer) and sequence.</li><li><b>30 min</b> — Unit 3: ERM → classes conversion table and keys.</li><li><b>15 min</b> — Classic mistakes + cards.</li></ol></div>
  <nav class="rs-nav">${RESUMO.map(U => `<button data-jump="${U.id}" style="--c:${UNITS[U.u].color}">${U.title.split(' · ')[0]}<small>${U.title.split(' · ')[1]}</small></button>`).join('')}<button data-jump="r-erros" style="--c:var(--o-err)">Classic<small>mistakes</small></button><button data-jump="r-flash" style="--c:var(--acc)">Cards<small>review</small></button></nav>`;
  for (const U of RESUMO) {
    h += `<section class="rs-unit" id="${U.id}"><h2 style="--c:${UNITS[U.u].color}"><span class="rs-dot"></span>${U.title}</h2>`;
    U.blocks.forEach(([t, body]) => { h += `<details class="rs-card" open><summary>${t}</summary><div class="rs-body">${body}</div></details>`; });
    h += `</section>`;
  }
  h += `<section class="rs-unit" id="r-erros"><h2 style="--c:var(--o-err)"><span class="rs-dot"></span>Classic exam mistakes</h2><div class="errs">${ERROS_PROVA.map(([a, b]) => `<div class="errc"><b>✕ ${a}</b><span>✓ ${b}</span></div>`).join('')}</div></section>`;
  h += `<section class="rs-unit" id="r-flash"><h2 style="--c:var(--acc)"><span class="rs-dot"></span>Quick review cards</h2><p style="color:var(--fg2)">Think of the answer and tap the card to check.</p><div class="flash">${FLASH.map(([q, a]) => `<button class="fc"><span class="fq">${q}</span><span class="fa2">${a}</span></button>`).join('')}</div></section>`;
  h += `<div class="rs-end"><b>Good luck on the exam! 🍀</b><span>In the modeling question: underline the nouns (classes) and verbs (relationships), note the quantities on both sides and ask whether the part lives without the whole.</span></div>`;
  return h;
};
