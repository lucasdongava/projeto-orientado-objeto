const MMD = {
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

