/* Object-Oriented Project — Past exams (English). Overrides the Portuguese data in js/provas.js */
Object.assign(MMD, {
  pv26_q2: `classDiagram
class Patient {
  code
  name
  phone
  birth_date
}
class Exam {
  code
  name
  collection_date
}
class Imaging {
  region_type
  region_area
  image_quality
}
class Laboratory {
  material
  tube_id
  volume
}
class Preparation {
  description
  validity
}
Patient "*" -- "1..*" Exam
Exam <|-- Imaging
Exam <|-- Laboratory
Preparation "1" -- "*" Imaging`,
  pv26_q3: `classDiagram
direction LR
class ClassA {
  +String attributeA
  +boolean attributeB
  +method1(boolean) String
  +method2(boolean) String
}
class ClassB {
  +String attributeC
  -String attributeD
  +methodOne(String) boolean
}
ClassA *--> ClassB`,
  pv26_q5: `classDiagram
class PaymentMethod {
  <<abstract>>
  #double amount
  +processPayment()* void
}
class CreditCard {
  -String cardNumber
  +processPayment() void
}
class BankSlip {
  -String barcode
  +processPayment() void
}
PaymentMethod <|-- CreditCard
PaymentMethod <|-- BankSlip`,
  pv26_q6: `classDiagram
class Magazine {
  -long ISSNMagazine
  -string magazineTitle
  -string frequency
  +registerMagazine()
}
class Issue {
  -int issueNumber
  -short issueVolume
  -date issueDate
  +registerIssue()
}
class Article {
  -short articleNumber
  -string articleTitle
  -string articleText
  +registerArticle()
}
class Author {
  -string authorEmail
  -string authorName
  +registerAuthor()
}
class Authorship {
  -short articleNumber
  -string authorEmail
  -short publicationOrder
  +linkAuthorship()
}
Magazine "1" *-- "0..*" Issue
Issue "1" *-- "10..15" Article
Author "*" -- "*" Article
Article .. Authorship
Author .. Authorship`,
  pv25_q2: `classDiagram
class Account {
  balance Currency
  deposit(amount Currency)
  calculateInterest()
}
class CheckingAccount {
  maxLimit Currency
  calculateInterest()
}
class Investment {
  calculateInterest()
}
Account <|-- CheckingAccount
Account <|-- Investment`,
  pv25_q3: `classDiagram
class A {
  <<abstract>>
  #int attributeX
  #int attributeY
  +operation1()* boolean
}
class B {
  -int attributeW
  +operation1() boolean
}
class C {
  -int attributeZ
  +operation1() boolean
}
class E {
  +char attributeK
  +operation4() float
}
class F {
  +operation3() void
}
class D {
  +operation2() float
}
A <|-- B
A <|-- C
B "0..1" -- "1..*" F
C "1" *-- "*" E
D ..> C`,
  pv25_q6: `classDiagram
class Payment_method {
  -description
}
class Category {
  -description
}
class Customer {
  -name
  -address
  -e_mail
}
class Purchase_order {
  -date
  -number
  -status
}
class Order_item {
  -quantity
  -price
}
class Product {
  -description
  -sale_price
  -stock_quantity
}
class Corporate {
  -company_id
}
class Individual {
  -tax_id
}
Payment_method "1" -- "0..*" Purchase_order
Category "1" -- "0..*" Product
Customer "1" -- "0..*" Purchase_order
Purchase_order "1" o-- "1..*" Order_item
Order_item "0..*" -- "1" Product
Customer <|-- Corporate
Customer <|-- Individual`,
  pv261_q1: `classDiagram
direction LR
class Part {
  name String
  request_purchase() void
}
class Vehicle {
  year Integer
  request_purchase() void
}
class Wheel {
  rim Integer
  color String
}
Part <|-- Vehicle
Vehicle "1" *--> "1..*" Wheel`,
  pv261_q2: `classDiagram
direction LR
class Employee {
  - name String
}
class Department {
  - deptName String
}
class Professor {
  - degree String
}
Employee <|-- Professor
Employee "*" --o "1" Department`,
  pv261_q5: `classDiagram
class Person {
  -int taxId
  #String name
  #char gender
  -String idCard
  -Date birthDate
  -String email
  +calculateAge(int birthDate) int
}
class Student {
  -int enrollment
}
class Instructor {
  -int enrollment
  +listAssociatedCourses() Course[]
}
class Course {
  -String name
  -String shift
  +listAssociatedSubjects() Subject[]
}
class Department {
  -String name
}
class Subject {
  -String name
}
Person <|-- Student
Person <|-- Instructor
Student "1" -- "0..1" Course
Instructor "1" -- "1..*" Course
Instructor "1" -- "1..*" Department
Course "*" -- "*" Subject`,
  pv261_q6: `classDiagram
class Payment_method {
  -description
}
class Customer {
  -name
  -address
  -e_mail
}
class Purchase_order {
  -date
  -number
  -status
}
class Order_item {
  -quantity
  -price
}
class Product {
  -description
  -sale_price
  -stock_quantity
}
class Corporate {
  -company_id
}
class Individual {
  -tax_id
}
Payment_method "1" -- "0..*" Purchase_order
Customer "1" -- "0..*" Purchase_order
Purchase_order "1" o-- "1..*" Order_item
Order_item "0..*" -- "1" Product
Customer <|-- Corporate
Customer <|-- Individual`
});

// figure for the association class question (Mermaid has no association classes)
PV_FIG.empreL = () => `<figure class="fig"><svg class="fsvg" viewBox="0 0 560 270" role="img" aria-label="Product and ShoppingCart linked by an association; the ProductSelection class attaches to the middle of the line by a dashed line">
    <rect x="8" y="10" width="170" height="104" rx="6" class="s-box"/><text x="93" y="30" class="s-t b">Product</text><line x1="8" y1="38" x2="178" y2="38" class="s-ln"/>
    <text x="16" y="55" class="s-lab" style="text-anchor:start">-productId: int</text><text x="16" y="70" class="s-lab" style="text-anchor:start">-productName: string</text><line x1="8" y1="78" x2="178" y2="78" class="s-ln"/>
    <text x="16" y="94" class="s-lab" style="text-anchor:start">+setProduct(): void</text><text x="16" y="108" class="s-lab" style="text-anchor:start">+getProduct(): void</text>
    <rect x="382" y="10" width="170" height="104" rx="6" class="s-box"/><text x="467" y="30" class="s-t b">ShoppingCart</text><line x1="382" y1="38" x2="552" y2="38" class="s-ln"/>
    <text x="390" y="58" class="s-lab" style="text-anchor:start">-cartId: int</text><text x="390" y="73" class="s-lab" style="text-anchor:start">-cartValue: currency</text><line x1="382" y1="82" x2="552" y2="82" class="s-ln"/>
    <text x="390" y="100" class="s-lab" style="text-anchor:start">+calculateValue(): void</text>
    <line x1="178" y1="62" x2="382" y2="62" class="s-ln"/><text x="224" y="55" class="s-lab" style="text-anchor:start">ProductSelection ▶</text>
    <line x1="280" y1="62" x2="280" y2="150" class="s-ln" stroke-dasharray="5 4"/>
    <rect x="175" y="150" width="210" height="104" rx="6" class="s-box ok"/><text x="280" y="170" class="s-t b">ProductSelection</text><line x1="175" y1="178" x2="385" y2="178" class="s-ln"/>
    <text x="183" y="196" class="s-lab" style="text-anchor:start">-productQuantity: int</text><text x="183" y="211" class="s-lab" style="text-anchor:start">-productUnitPrice: currency</text><line x1="175" y1="220" x2="385" y2="220" class="s-ln"/>
    <text x="183" y="238" class="s-lab" style="text-anchor:start">+removeProductFromList(): void</text></svg></figure>`;

PROVAS.splice(0, PROVAS.length,
{ id: 'p262', title: 'Exam C1.A2 · 2026/2', sub: 'Class 4DC1 · individual exam · up to 8 points', q: [
  { t: 'mc', src: 'IF-SP 2024 · Professor · adapted', pts: '1 point', mmd: 'pv26_q1',
    text: 'In a class diagram, aggregation and composition relationships are types of association that represent a “whole/part” relationship in which the part may or may not exist independently of the whole. From the following class diagram, it is correct to state that:',
    opts: ['Class Z depends on class X to exist.', 'Class X depends on class Z to exist.', 'Class Y depends on class X to exist.', 'Class X depends on classes Y and Z to exist.'], ans: 0 },
  { t: 'mc', src: 'AL-PR 2024 · Systems Analyst · adapted', pts: '1 point', mmd: 'pv26_q2',
    text: 'The analysis class model below, specified using UML, has the following configuration. Choose the option that reflects a correct interpretation of the reading semantics of the diagram.',
    opts: ['There is a composition relationship between the classes “Preparation” and “Imaging”.', 'The class “Imaging” has a total of six attributes.', 'There is an association class between the classes “Patient” and “Exam”.', 'The model lacks multiplicities between the classes “Exam” and “Imaging”.', 'A patient may not be associated with an “Exam” object.'], ans: 1 },
  { t: 'mc', src: 'IF Sul Rio-Grandense 2025 · Professor · adapted', pts: '1 point', mmd: 'pv26_q3',
    text: 'A UML Class Diagram is the representation of the structure and relationships of the classes that serve as a model for objects. It is the basis for building other diagrams, such as communication, sequence and state diagrams. Look at the diagram beside and, based on it, analyze the following statements:<br>I. All methods of ClassA return data of type boolean.<br>II. ClassB\'s attributeD is of type <i>String</i> and has private visibility.<br>III. The filled diamond represents a composition association between ClassA and ClassB.<br>IV. When an object of ClassA is deleted in its implementation, the object of ClassB will also be deleted.<br>Only the following statements are correct:',
    opts: ['I and III.', 'II and IV.', 'I, II and IV.', 'II, III and IV.', 'All the alternatives are correct.'], ans: 3 },
  { t: 'tf', pts: '2 points', text: 'Mark with F (False) or T (True) the sentences below:', items: [
    ['Every inheritance relationship between classes has polymorphism (0.5 point).', false],
    ['Although we can generate classes from database tables and vice versa, the Class Diagram and the Entity-Relationship Diagram are different artifacts and have their own characteristics (0.5 point).', true],
    ['When dealing with multiplicity in a relationship between two classes, the symbols “*” and “0..*” are identical (0.5 point).', true],
    ['When we want to represent at least 1 and at most 3 occurrences in a relationship between classes, we use the symbol “1**3” (0.5 point).', false]] },
  { t: 'open', pts: '1 point', mmd: 'pv26_q5', text: 'Look at the Class Diagram used during the classes. What kind of gain does using polymorphism bring to the project in this specific case?',
    padrao: 'Code reuse and low coupling. The adopted solution (inheritance with polymorphism) allows new payment methods to be added just by creating new subclasses of PaymentMethod, with no need to modify the code of the “processPayment()” method of the “PaymentMethod” class. Had the inheritance-with-polymorphism solution not been used, we would have the processPayment() method in a monolithic form, forcing us to use <i>if</i> structures or more complex conditional structures, riskily changing code that was already stable.' },
  { t: 'open', src: 'based on the ENADE 2014 exam · Technology in Systems Analysis and Development', pts: '2 points',
    text: 'Look at the following premises:<br>I. A scientific magazine has a title, an ISSN and a frequency;<br>II. This magazine publishes several issues with the following attributes: issue number, issue volume and issue date. It is important to note that each instance of the issue class relates uniquely and exclusively to one instance of the scientific magazine class, and cannot relate to any other;<br>III. An article has a title. An article is exclusive content of one issue. And an issue must necessarily have at least 10 and at most 15 articles.<br>IV. An article can be written by more than one author and an author can write several articles.<br>To satisfy these premises, an analyst made a Class Diagram. This diagram has inconsistencies and needs conceptual adjustments. Based on the techniques and concepts learned in the course, draw another diagram correcting whatever is necessary. It is not necessary to describe the data types of each attribute in the new diagram.',
    padraoMmd: 'pv26_q6', padrao: '' }
] },
{ id: 'p252', title: 'Exam C1 · 2025/2', sub: 'Class 4DC1 · individual exam · up to 8 points', q: [
  { t: 'mc', src: 'SEFAZ-RR 2023 · Software Developer · adapted', pts: '1 point',
    text: 'In UML, a class diagram describes the types of objects present in the system and the various types of static relationships that exist between them. Select the UML class diagram property that exists if changes in the definition of one element (the supplier) may cause changes to the other (the client).',
    opts: ['Dependency.', 'Inheritance.', 'Multiplicity.', 'Association.', 'Attribute.'], ans: 0 },
  { t: 'mc', src: 'IBGE 2019 · Census Analyst · Systems Analysis · Application Development · adapted', pts: '1 point', mmd: 'pv25_q2',
    text: 'Regarding the UML Class Diagram below, analyze the assertions and choose the alternative that points out the correct one(s):<br>I. The calculateInterest() method of the CheckingAccount class is an overridden abstract method.<br>II. The deposit (amount: Currency) method of the Account class is an overridden concrete method.<br>III. The Account class is an abstract class while the CheckingAccount and Investment classes are concrete.',
    opts: ['Only I.', 'Only II.', 'Only III.', 'Only I and II.', 'All the alternatives are correct.'], ans: 2 },
  { t: 'mc', src: 'FOZPREV 2018 · Social Security Analyst · Information Systems · adapted', pts: '1 point', mmd: 'pv25_q3',
    text: 'Consider the Class Diagram in the figure. Based on this diagram, choose the correct alternative.',
    opts: ['The system can have any number of instances of class A, which will have operation1() as their behavior.', 'Class F can use attributeX, since it is protected in its parent class.', 'Class D depends on class C, which means that if C is modified, it may affect class F.', 'If an instance of class C is deleted, all instances of class E related to it will also be deleted.', 'AttributeX, attributeY and attributeZ are public.'], ans: 3 },
  { t: 'tf', n: 5, pts: '2 points', text: 'Mark with F (False) or T (True) the sentences below:', items: [
    ['POJO or POCO methods, by convention, are not represented in a Class Diagram, but must be explicitly declared in the programming (0.5 point).', true],
    ['Composition and Aggregation are represented in different ways in class diagrams but, in practice, have the same code in Java applications (0.5 point).', false],
    ['Encapsulation is constantly disobeyed in day-to-day programming, because having all attributes public makes programming easier, especially in large systems (0.5 point).', false],
    ['The cardinalities of whole-part relationships (aggregation and composition) are always of the 1-to-N type (0.5 point).', true]] },
  { t: 'open', n: 6, src: 'based on the ENADE 2014 exam · Information Systems', pts: '3 points',
    text: 'A company wants to launch an e-commerce system to sell its products. This company sells products from several categories, such as clothing, perfumes and electronics, and accepts several payment methods, such as credit card, bank slip and PIX. In the sales system, each product must be registered with its description, sale price, stock quantity and respective category. Each customer who wants to make purchases has to register in the system, giving their name, e-mail, mobile phone, tax ID and password. They must also register one or more addresses for order delivery. The registered customer can place a purchase order for the products in stock in the quantity they wish. The customer chooses an available payment method and receives, by e-mail, the order number and information on the order status. The customer also chooses one of the registered addresses, indicating where that specific order will go. After payment is confirmed, the store delivers the requested items to the address selected by the customer and sends, by e-mail, the electronic invoice.<br>Considering this scenario, draw a Class Diagram, according to UML (<i>Unified Modeling Language</i>), indicating the name of each class, their attributes and the relationships between the classes with their cardinalities. It is not necessary to design the methods (operations) of each class.',
    padraoMmd: 'pv25_q6', padrao: 'Customer: {name, e-mail, mobile_phone, tax ID and password}; Address class, related to Customer as composition. A simple association will also be accepted. Relate Purchase_order to Address. There will be no inheritance.' }
] },
{ id: 'p261', title: 'Final Exam of Object-Oriented Analysis · 2026/1', sub: 'Review questions from the Unit 2 slides · the AVA only provides the answer key for some', q: [
  { t: 'mc', src: 'POSCOMP 2016 · adapted', pts: '1 point', mmd: 'pv261_q1',
    text: 'According to the UML class diagram, choose the alternative that is directly related to the concept of Polymorphism in Object Orientation.',
    opts: ['The relationship between the classes “Vehicle” and “Wheel”.', 'The “request_purchase()” method of the classes “Part” and “Vehicle”.', 'The “year: Integer” attribute of the “Vehicle” class.', 'The “rim: Integer” and “color: String” attributes of the “Wheel” class.', 'The “name: String” attribute of the “Part” class.'] },
  { t: 'mc', src: 'POSCOMP 2009', pts: '1 point', mmd: 'pv261_q2',
    text: 'Consider the class diagram below. Choose the <b>FALSE</b> alternative:',
    opts: ['Every Professor is associated with a Department.', 'Every Employee is associated with a Department.', 'A Department may have no associated Professor.', 'A Department may have no associated Employee.', 'Every Department has at least one Employee.'] },
  { t: 'mc', src: 'EMPREL 2019 · Systems Analyst · adapted', pts: '1 point', fig: 'empreL',
    text: 'Considering the following figure, analyze the assertions and choose the alternative that points out the correct one(s):<br>I. The figure presents a type of relationship between classes known as an association class.<br>II. The figure presents the attributes and methods of the classes involved.<br>III. The calculateValue() method can only be accessed by its own class.',
    opts: ['Only I.', 'Only II.', 'Only III.', 'Only I and II.', 'Only II and III.'] },
  { t: 'mc', src: 'CISCOPAR 2023 · IT Analyst · adapted', pts: '1 point',
    text: 'Imagine the following hypothetical situation: a restaurant is going through an expansion of its business and the owner took the opportunity to improve the computer system, which was limited and did not meet all the business requirements, and hired you for this task. In the development, it was observed that all access to the data contained in the objects is done through methods, and that it is not necessary to know the internal details of these operations to use their outputs in improving the software. Which object-orientation concept is described in the hypothetical situation above? Choose the CORRECT alternative.',
    opts: ['Inheritance.', 'Polymorphism.', 'Encapsulation.', 'Relationship.', 'Abstraction.'] },
  { t: 'tf', src: 'UFRN 2023 · Information Technology Analyst · Development · adapted', pts: '2 points', mmd: 'pv261_q5', text: 'Based on the Class Diagram below, mark with F (False) or T (True) the sentences below:', items: [
    ['A course must be associated with only one instructor (0.5 point).', true],
    ['The “Instructor” class must override the “calculateAge()” method of “Person”, since this method is abstract (0.5 point).', false],
    ['The “Student” class has no access to the name and gender attributes of the “Person” class (0.5 point).', false],
    ['There should be an association class between the “Course” and “Subject” classes (0.5 point).', true]] },
  { t: 'sub', src: 'ENADE 2014 · Information Systems', pts: '2 points each', mmd: 'pv261_q6',
    text: 'Look at the Class Diagram below, taken from the ENADE 2014 exam for the Information Systems course. It represents an E-commerce System of a company that sells products from several categories, such as clothing, perfumes and electronics.',
    subs: [
      { text: 'How do I change the diagram above so that products can be classified into categories, as presented in the statement: clothing, perfumes, electronics, sporting goods, etc.?' },
      { text: 'Since this is a class diagram produced in 2014, Pix did not exist yet. According to what was designed, what must be changed in the diagram to support this new payment method? Justify your answer.', padrao: 'Nothing. Just add (instantiate) a new object in the “Payment Method” class.' }
    ] }
] }
);
