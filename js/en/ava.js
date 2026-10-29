/* Object-Oriented Project — lesson additions from the AVA material (English). The code samples are shared with the Portuguese version. */
Object.assign(MMD, {
  ava_pacote: `classDiagram
namespace hospital {
  class Patient {
    -string taxId
    -string name
    -date birthdate
    -double weight
    -double height
    +calculateAge() int
    +calculateBMI() double
    +searchByName(string name) list
  }
  class Doctor
  class Surgery
}`,
  ava_interf: `classDiagram
direction LR
class BankAccount {
  -number
  -balance
  +create()
  +block()
  +unblock()
  +credit()
  +debit()
}
class Manipulable {
  <<interface>>
  +credit()
  +debit()
}
class Administrable {
  <<interface>>
  +create()
  +block()
  +unblock()
}
Manipulable <|.. BankAccount
Administrable <|.. BankAccount
Customer ..> Manipulable
Manager ..> Administrable`,
  ava_locadora: `classDiagram
class RentalCompany {
  CompanyId
  Address
  IssueInvoice()
}
class Car {
  Year
  Code
  Model
  Mileage
  Type
  DailyRate
  Availability
  Color
  ChangeAvailability()
  RegisterCar()
  GetRentalValue()
  CheckAvailability()
}
class Customer {
  Contact
  TaxId
  Address
  Name
  IdCard
  Status
  Phone
  ChangeStatus()
  RegisterCustomer()
  CheckStatus()
  CheckRegistration()
}
class Rental {
  RentalDate
  MileageDriven
  RentalValue
  Rent()
  CalculatePrice()
  GetRentalDate()
}
class SpecialCustomer {
  ExtraMileage
  DiscountRate
  GetDiscount()
  GetExtraMileage()
}
RentalCompany "1" o-- "0..*" Car
RentalCompany "1" o-- "0..*" Rental
RentalCompany "1" o--> "0..*" Customer
Rental "0..*" --> "1" Car : Rents
Rental "1..*" --> "1" Customer : Is made by
Customer <|-- SpecialCustomer`,
  ava_seq_cad: `sequenceDiagram
actor F as : Employee
participant C as : Customer
F->>+C: RegisterCustomer()
C-->>-F: return`,
  ava_seq_alug: `sequenceDiagram
actor F as : Employee
participant C as : Customer
participant Ca as : Car
participant A as : Rental
F->>+C: CheckRegistration()
C->>C: CheckStatus()
C-->>-F: return
F->>+Ca: CheckAvailability()
Ca-->>-F: return
F->>+A: Rent()
A->>+Ca: ChangeAvailability()
Ca-->>-A: return
A-->>-F: return`,
  seq_mvc: `sequenceDiagram
actor F as : Employee
participant I as : Cinema_Interface
participant C as : Cinema_Controller
participant S as Session
participant Sa as Room
participant Fi as Movie
participant In as Ticket
F->>I: 1: Select ticket sale()
I->>C: 1.1: ticket sale()
loop for each session [Guard]
  C->>S: 1.1.1: SelSession()
  S->>Sa: 1.1.1.1: GetRoom()
  Sa-->>S: room:int
  S->>Fi: 1.1.1.2: GetMovie()
  Fi-->>S: movie:String
  S-->>C: sessions:String
end
C->>I: 1.1.2: Show sessions()
F->>I: 2: Enter chosen session()
I->>C: 2.1: Session()
C->>In: 2.1.1: CreateTicket()
In-->>C: true:int
C->>I: 2.1.2: Issue Ticket()`,
  seq_http: `sequenceDiagram
actor U as User / Customer
participant V as Interface (View)
participant C as Controller
participant S as Business Rule (Service)
participant B as Database
autonumber
Note over U,B: MAIN FLOW: Request and Successful Processing
U->>V: Fills in data and clicks "Send"
V->>C: Sends request (POST /data)
C->>S: Runs validation and processing
S->>B: Persists information (Insert/Update)
B-->>S: Confirms data was saved
S-->>C: Returns processing success
C-->>V: Sends HTTP 200 (OK) response
V-->>U: Shows success message
Note over U,B: EXCEPTION FLOW 1: Invalid Data / Validation Failure
U->>V: Fills in incorrect data and sends
V->>C: Sends request
C->>S: Requests validation
S-->>C: Throws Exception (Invalid Data / Required Fields)
C-->>V: Returns HTTP 400 (Bad Request)
V-->>U: Shows alert with the validation errors
Note over U,B: EXCEPTION FLOW 2: Database Unavailable
U->>V: Sends valid request
V->>C: Sends request
C->>S: Runs processing
S->>B: Tries to persist data
B-->>S: Connection Error / Timeout
S-->>C: Throws Infrastructure Exception (DatabaseException)
C-->>V: Returns HTTP 500 (Internal Server Error)
V-->>U: Shows error message: "System unavailable"`,
  ava_consulta: `classDiagram
direction LR
class Doctor {
  -int licenseNo
  -string doctorName
}
class Appointment {
  -int appointmentNo
  -date appointmentDate
  -string appointmentTime
  -text diagnosis
}
class Patient {
  -long patientTaxId
  -string patientName
  -date birthDate
}
class Medication {
  -short sequenceNo
  -string medicationName
  -string dosage
}
Doctor "1" -- "1..*" Appointment
Appointment "1..*" -- "1" Patient
Appointment "1" *-- "1..*" Medication`,
  ava_er_caso: `erDiagram
PUBLISHER ||--o{ BOOK : ""
BOOK ||--o{ WRITES : ""
AUTHOR ||--o{ WRITES : ""
BOOK ||--o{ COPY : ""
COPY ||--o| WRITE_OFF : ""
WRITE_OFF_REASON ||--o{ WRITE_OFF : ""
EMPLOYEE ||--o{ LOAN : ""
COPY ||--o{ LOAN : ""
EMPLOYEE ||--o{ REQUEST : ""
BOOK ||--o{ REQUEST : ""
EMPLOYEE ||--o| LAWYER : ""
LAWYER ||--o{ ACCESS : ""
SUBSCRIPTION ||--o{ ACCESS : ""`
});

LX('ferramentas', `
<h2>Course software</h2>
<div class="tbl-wrap"><table><tr><th>For</th><th>Software</th></tr>
<tr><td>UML diagrams</td><td><b>ArgoUML</b> (argouml.br.uptodown.com/windows)</td></tr>
<tr><td>Data modeling (model and data dictionary)</td><td><b>DB Designer Fork</b> (sourceforge.net/projects/dbdesigner-fork)</td></tr>
<tr><td>DBMS</td><td><b>SQLite Studio</b> (sqlitestudio.pl) — in the Unit 3 slides it appears as <b>Letos</b> (letos.org), the former SQLiteStudio</td></tr>
<tr><td>Screen prototypes (visual interfaces)</td><td><b>Pencil Project</b> (pencil.evolus.vn)</td></tr>
<tr><td>Software architecture drawing</td><td><b>draw.io</b> (github.com/jgraph/drawio-desktop/releases)</td></tr>
<tr><td>Programming (C#)</td><td>IDE <b>Visual Studio</b> (visualstudio.microsoft.com/pt-br/vs/community)</td></tr>
<tr><td>Programming (Java)</td><td>IDE <b>Apache NetBeans</b> (netbeans.apache.org)</td></tr>
<tr><td>Programming (JavaScript)</td><td>No IDE: in the browser itself (Google Chrome)</td></tr></table></div>
<p>There may be standard forms in MS-Word. The AVA software package includes ArgoUML 0.34 (Windows and Ubuntu), DB Designer Fork 1.5 and JRE 8u281.</p>`);

LX('modelos', `
<h2>Definitions from the slides</h2>
<div class="defs"><div><b>Model</b><span>A small-scale representation of something you intend to build at full scale. (Aurélio Portuguese Language Dictionary)</span></div>
<div><b>Artifact</b><span>An object that has been altered by human action, as opposed to one that is the result of a natural phenomenon. (Michaelis UOL)</span></div></div>
<p>Models and artifacts give a view of the system before it is implemented, so that clients and IT professionals can express their needs and design how they will be met by the new system. <small>[Gonçalves, UECE, 2015 - Adapted]</small></p>`);

LX('processo', `
<h2>Flow of the phases</h2>
<div class="sim"><span>1</span><code>Requirements Specification</code><span>2</span><code>Analysis</code><span>3</span><code>Design</code><span>4</span><code>Implementation and Unit Testing</code><span>5</span><code>Testing</code><span>6</span><code>Delivery and Deployment</code></div>
<h2>Summary table: phase, technique, artifact and tool</h2>
<div class="tbl-wrap"><table><tr><th>Phase</th><th>Paradigm</th><th>Technique</th><th>Artifact</th><th>Tool</th></tr>
<tr><td rowspan="4"><b>Requirements Analysis</b></td><td>Requirements Engineering</td><td>Requirements Gathering</td><td>List of Requirements and Actors</td><td>MS-Word form <i>template</i></td></tr>
<tr><td rowspan="3">Requirements Engineering/UML</td><td rowspan="3">Requirements Specification</td><td>Use Case Model</td><td></td></tr>
<tr><td>Use Case Diagram</td><td>ArgoUML</td></tr>
<tr><td>Use Case Description</td><td>MS-Word form <i>template</i></td></tr>
<tr><td></td><td></td><td></td><td>Interface (Screen) Prototype</td><td>Pencil Project</td></tr>
<tr><td rowspan="5"><b>Analysis and Modeling</b></td><td rowspan="3">Data Modeling</td><td rowspan="3">Logical Data Modeling</td><td>Data Model</td><td></td></tr>
<tr><td>Entity-Relationship Diagram</td><td>DB Designer Fork</td></tr>
<tr><td>Data Dictionary</td><td>DB Designer Fork</td></tr>
<tr><td>Object Orientation/UML</td><td>Class Diagram</td><td>Class Diagram</td><td>ArgoUML</td></tr>
<tr><td>Object Orientation/UML</td><td>Sequence Diagram</td><td>Sequence Diagram</td><td>ArgoUML</td></tr>
<tr><td></td><td>UML</td><td>State Diagram</td><td>State Diagram</td><td>ArgoUML</td></tr>
<tr><td rowspan="7"><b><i>Design</i></b></td><td rowspan="4">Data Modeling</td><td rowspan="4">Logical Data Modeling</td><td>Relational Data Model</td><td></td></tr>
<tr><td>Entity-Relationship Diagram</td><td>DB Designer Fork</td></tr>
<tr><td>Detailed Data Dictionary</td><td>DB Designer Fork</td></tr>
<tr><td>Script for a specific DBMS</td><td>DB Designer Fork</td></tr>
<tr><td>Software Architecture</td><td>Software Architecture Design</td><td>Software Architecture Design (Component Drawing)</td><td>Draw.io</td></tr>
<tr><td>Object Orientation/UML</td><td>Package Diagram</td><td>Package Diagram</td><td>ArgoUML</td></tr>
<tr><td>Object Orientation/UML</td><td>Class Diagram with implementation details</td><td>Class Diagram</td><td>ArgoUML</td></tr>
<tr><td></td><td><i>User Experience</i></td><td>User Interface Design</td><td><i>Wireframe</i></td><td>Draw.io</td></tr>
<tr><td></td><td></td><td></td><td>Screen Design</td><td>MS-VisualStudio Community (HTML, CSS, JavaScript)</td></tr>
<tr><td><b>Implementation</b></td><td>Object-Oriented</td><td>Object-Oriented Programming</td><td>Source programs</td><td>MS-VisualStudio Community (ASP.Net Core and C#)</td></tr></table></div>`);

LX('objetos', `
<h2>General definition of an object</h2>
<p>An object can be (1) a tangible and/or visible thing; (2) something that can be grasped intellectually or (3) something toward which thoughts or actions are directed.</p>
<h2>Class notation</h2>
<div class="defs"><div><b>Attributes</b><span><code>visibility: name data_type = default_value</code></span></div>
<div><b>Methods</b><span><code>visibility: name (parameter_list): return_type</code></span></div></div>
<h2>Instance attribute and instance method</h2>
<ul><li><b>Instance attribute:</b> when a new object is created, a value must be defined for each attribute.</li>
<li><b>Method:</b> the concept of a function: it receives one or more parameters and returns a single value. The parameters can be the attributes of a class. The method (function) can be executed by an object of a class.</li>
<li><b>Instance method:</b> <code>+ calculateBMI(): double</code> — the function can only be executed by a given object of the class.</li></ul>
<p><b>Example:</b> patient object <code>p1 = &lt;TaxID=“99212345678”; name=“Vinícius”; birthdate=1968-11-08; weight=125.0; height=1.80&gt;</code><br><code>bmi = p1.calculateBMI();</code> → <code>bmi = 38.58</code></p>
<h2>Package</h2>
<p>Also called <i>Namespace</i> (Microsoft .Net environment). It organizes the classes of a system into groups: modules of a system or components of an architecture; groups of classes from external software that can be accessed by systems we develop.</p>
{{mmd:ava_pacote}}
<h2>Practice in JavaScript</h2>
${AVA_CODE.paciente_js}
<h2>Practice in Java: class, attribute, method and object</h2>
${AVA_CODE.engenheiro}`);

LX('encapsulamento', `
<h2>Message passing between objects</h2>
<p>“A asks B to do an Action” = “A asks B to execute Method X”.</p>
<h2>POJO methods</h2>
<p><b>Plain Old Java Objects</b> (“The Simple Classic Java Objects”): <i>getter</i> and <i>setter</i> methods to access the attributes of a class. Also called POJO or POCO methods.</p>
<h2>Practice in Java: visibility, encapsulation and POJO methods</h2>
<p>All attributes are private: no other class can access the content of these attributes. The methods are public, including the POJO methods.</p>
${AVA_CODE.pessoa_pojo}
<ul><li>Class generated in <b>ArgoUML</b>: menu <i>Generation › Generate All Classes…</i> (F7).</li><li>POJO methods created in <b>Apache NetBeans</b> by pressing <b>Alt + Insert</b> (<i>Generate Getters and Setters</i>).</li></ul>`);

LR('associacao', '<tr><td><code>1..3</code></td><td>at least 1 and at most 3</td></tr>', '<tr><td><code>n</code></td><td>a specific amount</td></tr><tr><td><code>m..n</code></td><td>a specific range</td></tr><tr><td><code>1..3</code></td><td>at least 1 and at most 3</td></tr>');
LX('associacao', `
<h2>How to read it (slides)</h2>
<ul><li><code>1</code>: an object A is always associated with one and only one object B.</li><li><code>1..*</code>: an object A is always associated with one or more objects B.</li><li><code>0..1</code>: an object A is associated with zero or one object B.</li><li><code>*</code>: an object A is associated with zero or more objects B.</li></ul>
<h2>Practice in Java: association between Pessoa and Carro</h2>
<p>A person can have <code>0..*</code> cars and each car belongs to one person (<code>1</code>).</p>
${AVA_CODE.assoc_pessoa}`);

LX('associativa', `
<h2>Practice in Java: association class Turma</h2>
<p>Professor and Disciplina are associated through the association class <b>Turma</b> (schedule and room).</p>
${AVA_CODE.associativa}`);

LX('todoparte', `
<h2>Aggregation and composition (slides)</h2>
<div class="vs"><div><b>Aggregation</b><span>One class is part of the other (whole/part relationship), but not exclusively.</span></div><div><b>Composition</b><span>One class is part of the other (whole/part relationship), exclusively.</span></div></div>
<h2>Practice in Java: aggregation (Time and Jogador)</h2>
<p><code>Time</code> ◇— <code>Jogador</code> (<code>0..1</code> — <code>0..*</code>). The players are created independently and then aggregated into the team.</p>
${AVA_CODE.agregacao}
<h2>Practice in Java: composition (NotaFiscal and ItemNotaFiscal)</h2>
<p><code>NotaFiscal</code> ◆— <code>ItemNotaFiscal</code> (<code>1</code> — <code>0..*</code>). The <code>ItemNotaFiscal</code> object is created inside the <code>NotaFiscal</code>.</p>
${AVA_CODE.composicao}`);

LX('heranca', `
<h2>Practice in Java: inheritance and polymorphism</h2>
<p>The abstract class <code>FormaPagamento</code> and its children <code>CartaoCredito</code> and <code>Boleto</code>; the same <code>pagar()</code> method processes both payment types.</p>
${AVA_CODE.heranca}`);

LX('dependencia', `
<h2>Concept (PUC-Rio, 2016)</h2>
<p>It represents that a change in one object (the independent object) may affect another object (the dependent object).</p>
<ul><li>The client class depends on some service of the supplier class;</li><li>A change in the supplier's state affects the client object;</li><li>The client class does not declare an object of the supplier type in its attributes;</li><li>The supplier is received as a method parameter.</li></ul>
<h2>Practice in C#: Program depends on Validador</h2>
{{mmd:ava_dep}}
${AVA_CODE.dependencia}`);

LX('interface', `
<h2>UML notation (Bezerra, 2015)</h2>
<p>A class can implement more than one interface. In the simplified form, the interface is represented by a “lollipop” (circle) attached to the class that implements it.</p>
{{mmd:ava_interf}}
<p class="cap">BankAccount implements two interfaces: Manipulable and Administrable.</p>
<h2>Practice in Java: Drawable and Circle</h2>
${AVA_CODE.interface_java}
<h2>Practice in C#: IReajuste</h2>
${AVA_CODE.interface_cs}
<h2>Practice in C#: polygons</h2>
<p>The <code>IPoligono</code> interface defines the signature <code>calcularArea()</code>; each polygon implements it with its own formula (rectangle: A = b·h; right triangle: A = bh/2; pentagon: A = 5L·a; ellipse: A = π·a·b).</p>
{{mmd:ava_poli}}
${AVA_CODE.poligonos}`);

LR('sequencia', '<h2>Example: HTTP request with a validation failure</h2>', '<h2>HTTP request: main flow and exception flows</h2>');
LX('sequencia', `
<h2>Example: Vehicle Rental System</h2>
<p><b>Use cases</b> (actor: Employee): Register Customer, Register Car, Make a Rental and Close a Rental.</p>
<h3>Classes obtained from the use cases</h3>
<div class="tbl-wrap"><table><tr><th>Class</th><th>Attributes</th><th>Operations</th></tr>
<tr><td>Customer</td><td>Contact, Tax ID, Address, Name, ID Card, Status, Phone</td><td>Register Customer, Check Status</td></tr>
<tr><td>Special Customer</td><td>Contact, Tax ID, Address, Name, Extra Mileage, ID Card, Status, Discount Rate, Phone</td><td>Register Customer, Get Discount Value, Get Extra Mileage Value</td></tr>
<tr><td>Rental Company</td><td>Company ID, Address</td><td>Issue invoice</td></tr>
<tr><td>Car</td><td>Year, Code, Color, Availability, Model, Mileage, Type, Daily Rental Value</td><td>Change Availability, Register Car, Get Rental Value, Check Availability</td></tr>
<tr><td>Rental</td><td>Rental Date, Mileage Driven, Rental Value</td><td>Rent, Calculate Price, Confirm Rental, Get Rental Date</td></tr></table></div>
<h3>Class diagram</h3>
{{mmd:ava_locadora}}
<h3>Sequence diagram of the “Register Customer” use case</h3>
{{mmd:ava_seq_cad}}
<h3>Sequence diagram of the “Make a Rental” use case</h3>
{{mmd:ava_seq_alug}}
<p class="cap">Example from SQL Magazine, Issue 13 (DevMedia).</p>
<h2>MVC in UML: cinema ticket sale</h2>
<p>Boundary: <b>Cinema_Interface</b>; Control: <b>Cinema_Controller</b>; Entities: Session, Room, Movie and Ticket. Mapping: View = Boundary · Controller = Control · Model = Entity.</p>`);

LX('mer', `
<h2>Historical context</h2>
<p>The Entity-Relationship Model was proposed by <b>Peter Chen</b> in 1976: “The Entity-Relationship Model — Toward a Unified View of Data” (Massachusetts Institute of Technology). <small>[Chen 1976]</small></p>`);

LX('der', `
<h2>Example with data: 1:N relationship</h2>
<div class="tbl-wrap"><table><tr><th colspan="2">Department</th></tr><tr><th>Department-code (K)</th><th>Department-desc</th></tr><tr><td>G01</td><td>Technical Management</td></tr><tr><td>G02</td><td>Administrative Management</td></tr></table></div>
<div class="tbl-wrap"><table><tr><th colspan="4">Employee</th></tr><tr><th>Employee no. (K)</th><th>Name</th><th>Birth date</th><th>Department-code</th></tr>
<tr><td>10</td><td>João</td><td>14/05/1980</td><td>G01</td></tr><tr><td>20</td><td>Pedro</td><td>18/03/2000</td><td>G02</td></tr><tr><td>30</td><td>Maria</td><td>17/11/1967</td><td>G01</td></tr><tr><td>40</td><td>Sebastião</td><td>12/12/1978</td><td>G01</td></tr><tr><td>50</td><td>Tereza</td><td>02/01/1990</td><td>G02</td></tr></table></div>
<h2>M:N relationship: the link entity</h2>
<p>The “Assigns” relationship becomes a link entity or relationship entity, with the attributes Department-code, Employee no., Start date and End date. In the logical design, “Assigns” will become the “Assignment” table.</p>
<h2>Extensions: generalization/specialization and aggregate</h2>
<ul><li><b>Generalization and specialization:</b> Customer (Customer-code, Customer name, Address, Purchase limit) is specialized into Individual (Customer-code, Tax ID, Birth date) and Company (Customer-code, Company ID, Number of partners, Number of branches).</li>
<li><b>Aggregate:</b> Doctor (License no., Doctor name) and Patient (Patient tax ID, Patient name, Birth date) are related through Appointment (Appointment number, License no., Patient tax ID, Appointment date, Appointment time, Diagnosis); the Appointment “generates prescription of” Medication (Appointment number, Sequence number, Medication name, Dosage).</li></ul>
<h3>Class diagram with several relationships</h3>
{{mmd:ava_consulta}}`);

LX('mapeamento', `
<h2>Object-Relational Mapping and vice versa (DB First)</h2>
<ul><li><b>Object Model (object-oriented):</b> Cliente (id: int, nome: string, endereço: string, telefone: string, dataNasc: DateTime) <code>1</code> — <code>0..*</code> Pedido (id: int, dataPedido: DateTime, valorTotal: decimal).</li>
<li><b>Relational Model (database):</b> CLIENTE (PK id INT, nome VARCHAR(100), endereço VARCHAR(200), telefone VARCHAR(20), dataNasc DATE) and PEDIDO (PK id INT, dataPedido DATETIME, valorTotal DECIMAL(10,2), clienteId INT, FK).</li></ul>
<h3>DB First in 3 steps</h3>
<ol class="steps"><li><b>Create/Define</b> the database schema (tables, columns, relationships, etc.).</li><li><b>Generate</b> the domain classes (POCOs/<i>Entities</i>) from the database.</li><li><b>Use</b> the classes in the application code, with the ORM to access the database.</li></ol>
<h3>Scaffolding example: table Country → class Country</h3>
${AVA_CODE.orm_country}`);

LX('projetobd', `
<h2>Case study: the library of a law firm</h2>
<p>The system to be developed must allow:</p>
<div class="tbl-wrap"><table><tr><th colspan="3">Functional Requirements Table</th></tr><tr><th>Ident.</th><th>Description</th><th>Actor</th></tr>
<tr><td>RF01</td><td>Find a book.</td><td>Office Employee.</td></tr>
<tr><td>RF02</td><td>Register a book, entering: (i) book identification; (ii) ISBN; (iii) book name; (iv) authors; (v) publisher; and (vi) acquisition date and (vii) price paid for the book, if available.</td><td>Secretary.</td></tr>
<tr><td>RF03</td><td>Acquire a book, including the entire in-person or <i>online</i> purchase process.</td><td>Secretary.</td></tr>
<tr><td>RF04</td><td>Import employee data from the office's HR System, containing the following data: (i) employee ID, (ii) employee name, (iii) OAB number (Brazilian Bar Association), if the employee has this document.</td><td>Office HR System.</td></tr>
<tr><td>RF05</td><td>Register a loan.</td><td>Secretary.</td></tr><tr><td>RF06</td><td>Register a return.</td><td>Secretary.</td></tr>
<tr><td>RF07</td><td>Receive a loan due-date alert.</td><td>Secretary.</td></tr><tr><td>RF08</td><td>Write off books, stating the reason.</td><td>Secretary.</td></tr>
<tr><td>RF09</td><td>Pay a subscription.</td><td>Secretary.</td></tr><tr><td>RF10</td><td>Renew a subscription.</td><td>Secretary.</td></tr>
<tr><td>RF11</td><td>Distribute a subscription.</td><td>Office Owner.</td></tr><tr><td>RF12</td><td>Receive a subscription usage report.</td><td>Office Owner.</td></tr></table></div>
<h3>Conceptual and logical design</h3>
<p>Entities in the ERD: Book, Publisher, Author, Copy, Write-off Reason, Write-off, Employee, Lawyer, Subscription, and the relationships Publishes, Writes, Owns, Borrows, Requests, Justifies, Receives, Can be, Has access to.</p>
{{mmd:ava_er_caso}}
<h3>Data dictionary (table, columns and key “K”)</h3>
<p>Table and column names are those of the script below (in Portuguese): ADVOGADO (lawyer), ASSINATURA (subscription), AUTOR (author), BAIXA (write-off), EDITORA (publisher), ESCREVE (writes), EXEMPLAR (copy), EMPRESTIMO (loan), FUNCIONARIO (employee), LIVRO (book), MOTIVO_BAIXA (write-off reason), ACESSO (access), REQUISICAO (request).</p>
<div class="tbl-wrap"><table><tr><th>Table</th><th>Columns</th></tr>
<tr><td>ADVOGADO</td><td><b>K</b> MATRICULA · NUMERO_OAB</td></tr>
<tr><td>ASSINATURA</td><td><b>K</b> COD_PUBLICACAO · NOME_PUBLICACAO · DATA_INICIAL_VIGENCIA · DATA_FINAL_VIGENCIA · DATA_PROXIMO_VENCIMENTO · DATA_ULTIMO_PAGAMENTO</td></tr>
<tr><td>AUTOR</td><td><b>K</b> COD_AUTOR · NOME_AUTOR</td></tr>
<tr><td>BAIXA</td><td><b>K</b> COD_LIVRO · DATA_BAIXA · COD_MOTIVO_BAIXA</td></tr>
<tr><td>EDITORA</td><td><b>K</b> COD_EDITORA · NOME_EDITORA</td></tr>
<tr><td>ESCREVE</td><td><b>K</b> ISBN · <b>K</b> COD_AUTOR</td></tr>
<tr><td>EXEMPLAR</td><td><b>K</b> COD_LIVRO · ISBN · DATA_AQUISICAO · PRECO</td></tr>
<tr><td>FAZ EMPRESTIMO DE</td><td><b>K</b> COD_EMPRESTIMO · MATRICULA · COD_LIVRO · DATA_RESERVA · DATA_EMPRESTIMO · DATA_RETORNO_EFETIVO · DATA_DEVOLUCAO</td></tr>
<tr><td>FUNCIONARIO</td><td><b>K</b> MATRICULA · NOME_FUNCIONARIO · TEM_OAB</td></tr>
<tr><td>LIVRO</td><td><b>K</b> ISBN · TITULO · COD_EDITORA · ANO_PUBLICACAO</td></tr>
<tr><td>MOTIVO BAIXA</td><td><b>K</b> COD_MOTIVO_BAIXA · DESC_MOTIVO_BAIXA</td></tr>
<tr><td>TEM ACESSO A</td><td><b>K</b> LOGIN · SENHA · MATRICULA · COD_PUBLICACAO · IND_INATIVO</td></tr>
<tr><td>REQUISITA</td><td><b>K</b> COD_REQUISICAO · MATRICULA · ISBN · QUANTIDADE_REQUISITADA · DATA_REQUISICAO · IND_AUTORIZACAO · DATA_DECISAO</td></tr></table></div>
<h3>Physical design: database script (DB Designer Fork)</h3>
${AVA_CODE.caso_script}
<h2>DB Designer Fork</h2>
<p>Download: sourceforge.net/projects/dbdesigner-fork. After installing, set up the environment:</p>
<ul><li>Remove the fixed menus: uncheck <i>Windows / Dock Palletes</i>.</li>
<li>Configure it not to show indexes and not to change field names automatically: <i>Options / Model Options / Editing Options</i> and <i>Options / DBDesigner Options / Default Model Options</i>: uncheck the last two checkboxes.</li>
<li>Set the tool to crow's foot: <i>Display / Notation / Crows Foot</i>.</li>
<li>Tables at the logical level: <i>Display / Table Columns</i>, uncheck <i>Physical Schema Level</i>.</li></ul>
<div class="defs"><div><b>Drawing and describing tables</b><span>Click the table icon and, with the right button, choose <i>Edit Object</i>.</span></div>
<div><b>Relating tables</b><span>For a 1-N (Strong) relationship: click the relationship icon, click the table on the 1 side and then the table on the N side. For 1-N (Weak Entity): use the weak-entity relationship icon, with the same sequence of clicks.</span></div>
<div><b>Changing relationship cardinality</b><span>Double-click the relationship; change the listbox to <i>Optional Relation</i>; change the cardinality (example: check <i>Relation optional at End</i>).</span></div>
<div><b>Removing relationship names</b><span>Menu <i>Display</i> and uncheck <i>Display Relation Names</i>.</span></div></div>
<p>To generate the script: <i>Export SQL Script</i> (in the slides, with <i>Target Data Base: SQLite</i>), and run the script in a DBMS (Letos / SQLiteStudio).</p>`);
