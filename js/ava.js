/* Projeto Orientado a Objetos — complementos das aulas com o material do AVA (slides, códigos, quadros e estudos de caso) */
const LX = (id, html) => { const L = LESSONS.find(l => l.id === id); if (L) L.body += html; };
const LR = (id, from, to) => { const L = LESSONS.find(l => l.id === id); if (L && L.body.includes(from)) L.body = L.body.replace(from, to); };

Object.assign(MMD, {
  ava_pacote: `classDiagram
namespace hospital {
  class Paciente {
    -string cpf
    -string nome
    -date datanasc
    -double peso
    -double altura
    +calcularIdade() int
    +calcularIMC() double
    +pesquisarPorNome(string nome) list
  }
  class Medico
  class Cirurgia
}`,
  ava_dep: `classDiagram
direction LR
class Program {
  +Main()
}
class Validador {
  +string entrada
  +long numInteiro
  +validaEntrada() string
  +validaPrimo() bool
}
Program ..> Validador`,
  ava_interf: `classDiagram
direction LR
class ContaBancaria {
  -numero
  -saldo
  +criar()
  +bloquear()
  +desbloquear()
  +creditar()
  +debitar()
}
class Manipulavel {
  <<interface>>
  +creditar()
  +debitar()
}
class Administravel {
  <<interface>>
  +criar()
  +bloquear()
  +desbloquear()
}
Manipulavel <|.. ContaBancaria
Administravel <|.. ContaBancaria
Cliente ..> Manipulavel
Gerente ..> Administravel`,
  ava_poli: `classDiagram
class IPoligono {
  <<interface>>
  +calcularArea()
}
class Retangulo {
  +calcularArea()
}
class TrianguloRetangulo {
  +calcularArea()
}
class Pentagono {
  +calcularArea()
}
class Elipse {
  +calcularArea()
}
class Program {
  +Main()
}
IPoligono <|.. Retangulo
IPoligono <|.. TrianguloRetangulo
IPoligono <|.. Pentagono
IPoligono <|.. Elipse
Program ..> Retangulo
Program ..> TrianguloRetangulo
Program ..> Pentagono
Program ..> Elipse`,
  ava_locadora: `classDiagram
class Locadora {
  CNPJ
  Endereço
  EmitirNotaFiscal()
}
class Carro {
  Ano
  Código
  Modelo
  Quilometragem
  Tipo
  ValorDiária
  Disponibilidade
  Cor
  AlterarDisponibilidade()
  CadastrarCarro()
  PegarValorAluguel()
  VerificarDisponibilidade()
}
class Cliente {
  Contato
  CPF
  Endereço
  Nome
  RG
  Status
  Telefone
  AlterarStatus()
  CadastrarCliente()
  VerificarStatus()
  VerificarCadastro()
}
class Aluguel {
  DataAluguel
  QuilometragemPercorrida
  ValorAluguel
  Alugar()
  CalcularPreço()
  PegarDataAluguel()
}
class ClienteEspecial {
  QuilometragemExtra
  TaxaDesconto
  PegarDesconto()
  PegarQuilometragemExtra()
}
Locadora "1" o-- "0..*" Carro
Locadora "1" o-- "0..*" Aluguel
Locadora "1" o--> "0..*" Cliente
Aluguel "0..*" --> "1" Carro : Aluga
Aluguel "1..*" --> "1" Cliente : É feito por
Cliente <|-- ClienteEspecial`,
  ava_seq_cad: `sequenceDiagram
actor F as : Funcionário
participant C as : Cliente
F->>+C: CadastrarCliente()
C-->>-F: retorno`,
  ava_seq_alug: `sequenceDiagram
actor F as : Funcionário
participant C as : Cliente
participant Ca as : Carro
participant A as : Aluguel
F->>+C: VerificarCadastro()
C->>C: VerificarStatus()
C-->>-F: retorno
F->>+Ca: VerificarDisponibilidade()
Ca-->>-F: retorno
F->>+A: Alugar()
A->>+Ca: AlterarDisponibilidade()
Ca-->>-A: retorno
A-->>-F: retorno`,
  seq_mvc: `sequenceDiagram
actor F as : Funcionario
participant I as : Interface_Cinema
participant C as : Controlador_Cinema
participant S as Sessao
participant Sa as Sala
participant Fi as Filme
participant In as Ingresso
F->>I: 1: Selecionar venda de ingresso()
I->>C: 1.1: venda ingresso()
loop para cada sessao [Guard]
  C->>S: 1.1.1: SelSessao()
  S->>Sa: 1.1.1.1: ConSala()
  Sa-->>S: sala:int
  S->>Fi: 1.1.1.2: ConFilme()
  Fi-->>S: filme:String
  S-->>C: sessoes:String
end
C->>I: 1.1.2: Apresentar sessoes()
F->>I: 2: Informa sessao desejada()
I->>C: 2.1: Sessao()
C->>In: 2.1.1: GerIng()
In-->>C: verdadeiro:int
C->>I: 2.1.2: Emitir Ingresso()`,
  seq_http: `sequenceDiagram
actor U as Usuário / Cliente
participant V as Interface (View)
participant C as Controlador (Controller)
participant S as Regra de Negócio (Service)
participant B as Banco de Dados
autonumber
Note over U,B: FLUXO PRINCIPAL: Solicitação e Processamento com Sucesso
U->>V: Preenche dados e clica em "Enviar"
V->>C: Envia requisição (POST /dados)
C->>S: Executa validação e processamento
S->>B: Persiste informações (Insert/Update)
B-->>S: Confirma gravação dos dados
S-->>C: Retorna sucesso do processamento
C-->>V: Envia resposta HTTP 200 (OK)
V-->>U: Exibe mensagem de sucesso
Note over U,B: FLUXO DE EXCEÇÃO 1: Dados Inválidos / Falha de Validação
U->>V: Preenche dados incorretos e envia
V->>C: Envia requisição
C->>S: Solicita validação
S-->>C: Lança Exceção (Dados Inválidos / Campos Obrigatórios)
C-->>V: Retorna HTTP 400 (Bad Request)
V-->>U: Exibe alerta com os erros de validação
Note over U,B: FLUXO DE EXCEÇÃO 2: Indisponibilidade do Banco de Dados
U->>V: Envia requisição válida
V->>C: Envia requisição
C->>S: Executa processamento
S->>B: Tenta persistir dados
B-->>S: Erro de Conexão / Timeout
S-->>C: Lança Exceção de Infraestrutura (DatabaseException)
C-->>V: Retorna HTTP 500 (Internal Server Error)
V-->>U: Exibe mensagem de erro: "Sistema indisponível"`,
  ava_consulta: `classDiagram
direction LR
class Medico {
  -int CRM
  -string nomeMedico
}
class Consulta {
  -int numeroConsulta
  -date dataConsulta
  -string horaConsulta
  -text diagnostico
}
class Paciente {
  -long CPFPaciente
  -string nomePaciente
  -date dataNascimento
}
class Medicamento {
  -short numeroSequencia
  -string nomeMedicamento
  -string dosagem
}
Medico "1" -- "1..*" Consulta
Consulta "1..*" -- "1" Paciente
Consulta "1" *-- "1..*" Medicamento`,
  ava_er_caso: `erDiagram
EDITORA ||--o{ LIVRO : ""
LIVRO ||--o{ ESCREVE : ""
AUTOR ||--o{ ESCREVE : ""
LIVRO ||--o{ EXEMPLAR : ""
EXEMPLAR ||--o| BAIXA : ""
MOTIVO_BAIXA ||--o{ BAIXA : ""
FUNCIONARIO ||--o{ EMPRESTIMO : ""
EXEMPLAR ||--o{ EMPRESTIMO : ""
FUNCIONARIO ||--o{ REQUISICAO : ""
LIVRO ||--o{ REQUISICAO : ""
FUNCIONARIO ||--o| ADVOGADO : ""
ADVOGADO ||--o{ ACESSO : ""
ASSINATURA ||--o{ ACESSO : ""`
});

// ---------------- Unidade 0: softwares da disciplina ----------------
LX('ferramentas', `
<h2>Softwares da disciplina</h2>
<div class="tbl-wrap"><table><tr><th>Para</th><th>Software</th></tr>
<tr><td>Diagramas UML</td><td><b>ArgoUML</b> (argouml.br.uptodown.com/windows)</td></tr>
<tr><td>Modelagem de dados (modelo e dicionário de dados)</td><td><b>DB Designer Fork</b> (sourceforge.net/projects/dbdesigner-fork)</td></tr>
<tr><td>SGBD</td><td><b>SQLite Studio</b> (sqlitestudio.pl) — nos slides da Unidade 3 aparece como <b>Letos</b> (letos.org), o antigo SQLiteStudio</td></tr>
<tr><td>Protótipo de telas (interfaces visuais)</td><td><b>Pencil Project</b> (pencil.evolus.vn)</td></tr>
<tr><td>Desenho de arquitetura de software</td><td><b>draw.io</b> (github.com/jgraph/drawio-desktop/releases)</td></tr>
<tr><td>Programação (C#)</td><td>IDE <b>Visual Studio</b> (visualstudio.microsoft.com/pt-br/vs/community)</td></tr>
<tr><td>Programação (Java)</td><td>IDE <b>Apache NetBeans</b> (netbeans.apache.org)</td></tr>
<tr><td>Programação (JavaScript)</td><td>Sem IDE: no próprio browser (Google Chrome)</td></tr></table></div>
<p>Poderá haver formulários padrões em MS-Word. O pacote de softwares do AVA traz o ArgoUML 0.34 (Windows e Ubuntu), o DB Designer Fork 1.5 e o JRE 8u281.</p>`);

// ---------------- Unidade 1 ----------------
LX('modelos', `
<h2>Definições dos slides</h2>
<div class="defs"><div><b>Modelo</b><span>Representação em pequena escala de algo que se pretende executar em grande. (Dicionário Aurélio da Língua Portuguesa)</span></div>
<div><b>Artefato</b><span>Objeto que sofreu alteração provocada pelo homem, em oposição àquele que é resultado de fenômeno natural. (Michaelis UOL)</span></div></div>
<p>Modelos e artefatos permitem uma visão do sistema antes que ele seja implementado, de modo que clientes e profissionais de TI consigam expressar suas necessidades e projetar como elas serão atendidas com o novo sistema. <small>[Gonçalves, UECE, 2015 - Adaptado]</small></p>`);

LX('processo', `
<h2>Fluxo das fases</h2>
<div class="sim"><span>1</span><code>Especificação de Requisitos</code><span>2</span><code>Análise</code><span>3</span><code>Design</code><span>4</span><code>Implementação e Teste de Unidade</code><span>5</span><code>Testes</code><span>6</span><code>Entrega e Implantação</code></div>
<h2>Quadro resumo: fase, técnica, artefato e ferramenta</h2>
<div class="tbl-wrap"><table><tr><th>Fase</th><th>Paradigma</th><th>Técnica</th><th>Artefato</th><th>Ferramenta</th></tr>
<tr><td rowspan="4"><b>Análise de Requisitos</b></td><td>Engenharia de Requisitos</td><td>Levantamento de Requisitos</td><td>Lista de Requisitos e Atores</td><td><i>Template</i> de formulário em MS-Word</td></tr>
<tr><td rowspan="3">Engenharia de Requisitos/UML</td><td rowspan="3">Especificação de Requisitos</td><td>Modelo de Casos de Uso</td><td></td></tr>
<tr><td>Diagrama de Casos de Uso</td><td>ArgoUML</td></tr>
<tr><td>Descrição de Casos de Uso</td><td><i>Template</i> de formulário em MS-Word</td></tr>
<tr><td></td><td></td><td></td><td>Protótipo de Interfaces (Telas)</td><td>Pencil Project</td></tr>
<tr><td rowspan="5"><b>Análise e Modelagem</b></td><td rowspan="3">Modelagem de Dados</td><td rowspan="3">Modelagem Lógica de Dados</td><td>Modelo de Dados</td><td></td></tr>
<tr><td>Diagrama de Entidades e Relacionamentos</td><td>DB Designer Fork</td></tr>
<tr><td>Dicionário de Dados</td><td>DB Designer Fork</td></tr>
<tr><td>Orientação a Objetos/UML</td><td>Diagrama de Classes</td><td>Diagrama de Classes</td><td>ArgoUML</td></tr>
<tr><td>Orientação a Objetos/UML</td><td>Diagrama de Sequência</td><td>Diagrama de Sequência</td><td>ArgoUML</td></tr>
<tr><td></td><td>UML</td><td>Diagrama de Estados</td><td>Diagrama de Estados</td><td>ArgoUML</td></tr>
<tr><td rowspan="7"><b><i>Design</i></b></td><td rowspan="4">Modelagem de Dados</td><td rowspan="4">Modelagem Lógica de Dados</td><td>Modelo Relacional de Dados</td><td></td></tr>
<tr><td>Diagrama de Entidades e Relacionamentos</td><td>DB Designer Fork</td></tr>
<tr><td>Dicionário de Dados Detalhado</td><td>DB Designer Fork</td></tr>
<tr><td>Script para SGBD específico</td><td>DB Designer Fork</td></tr>
<tr><td>Arquitetura de Software</td><td>Projeto de Arquitetura de Software</td><td>Projeto de Arquitetura de Software (Desenho dos Componentes)</td><td>Draw.io</td></tr>
<tr><td>Orientação a Objetos/UML</td><td>Diagrama de Pacotes</td><td>Diagrama de Pacotes</td><td>ArgoUML</td></tr>
<tr><td>Orientação a Objetos/UML</td><td>Diagrama de Classes com detalhamento de implementação</td><td>Diagrama de Classes</td><td>ArgoUML</td></tr>
<tr><td></td><td><i>User Experience</i></td><td>Projeto de Interface com o Usuário</td><td><i>Wireframe</i></td><td>Draw.io</td></tr>
<tr><td></td><td></td><td></td><td>Desenho das Telas</td><td>MS-VisualStudio Community (HTML, CSS, JavaScript)</td></tr>
<tr><td><b>Implementação</b></td><td>Orientada a Objetos</td><td>Programação Orientada a Objetos</td><td>Programas-fonte</td><td>MS-VisualStudio Community (ASP.Net Core e C#)</td></tr></table></div>`);

// ---------------- Unidade 2 ----------------
LX('objetos', `
<h2>Definição geral de objeto</h2>
<p>Um objeto pode ser (1) uma coisa tangível e/ou visível; (2) alguma coisa que pode ser retida intelectualmente ou (3) alguma coisa em direção à qual pensamentos ou ações são dirigidas.</p>
<h2>Notação da classe</h2>
<div class="defs"><div><b>Atributos</b><span><code>visibilidade: nome tipo_de_dado = valor_default</code></span></div>
<div><b>Métodos</b><span><code>visibilidade: nome (lista_de_parâmetros): tipo_do_retorno</code></span></div></div>
<h2>Atributo de instância e método de instância</h2>
<ul><li><b>Atributo de instância:</b> ao ser criado um novo objeto, deve ser definido um valor para cada atributo.</li>
<li><b>Método:</b> conceito de função: recebe um ou mais parâmetros e retorna um único valor. Os parâmetros podem ser os atributos de uma classe. O método (função) pode ser executado por um objeto de uma classe.</li>
<li><b>Método de instância:</b> <code>+ calcularIMC(): double</code> — a função só pode ser executada por um determinado objeto da classe.</li></ul>
<p><b>Exemplo:</b> objeto paciente <code>p1 = &lt;CPF=“99212345678”; nome=“Vinícius”; datanasc=1968-11-08; peso=125,0; altura=1,80&gt;</code><br><code>imc = p1.calcularIMC();</code> → <code>imc = 38,58</code></p>
<h2>Pacote</h2>
<p>Também chamado de <i>Namespace</i> (ambiente Microsoft .Net). Organiza as classes de um sistema em grupos: módulos de um sistema ou componentes de uma arquitetura; grupos de classes de softwares externos que podem ser acessados por sistemas desenvolvidos por nós.</p>
{{mmd:ava_pacote}}
<h2>Prática em JavaScript</h2>
${AVA_CODE.paciente_js}
<h2>Prática em Java: classe, atributo, método e objeto</h2>
${AVA_CODE.engenheiro}`);

LX('encapsulamento', `
<h2>Troca de mensagens entre objetos</h2>
<p>“A pede para B fazer Ação” = “A pede para B executar Método X”.</p>
<h2>Métodos POJO</h2>
<p><b>Plain Old Java Objects</b> ou “Os Singelos Clássicos Objetos Java”: métodos <i>getters</i> e <i>setters</i> para acesso aos atributos de uma classe. Também chamados de métodos POJO ou POCO.</p>
<h2>Prática em Java: visibilidade, encapsulamento e métodos POJO</h2>
<p>Todos os atributos são privados: nenhuma outra classe pode acessar o conteúdo desses atributos. Os métodos são públicos, incluindo os métodos POJO.</p>
${AVA_CODE.pessoa_pojo}
<ul><li>Classe gerada no <b>ArgoUML</b>: menu <i>Geração › Gerar Todas as Classes…</i> (F7).</li><li>Métodos POJO criados no <b>Apache NetBeans</b>, ao clicar as teclas <b>Alt + Insert</b> (<i>Generate Getters and Setters</i>).</li></ul>`);

LR('associacao', '<tr><td><code>1..3</code></td><td>no mínimo 1 e no máximo 3</td></tr>', '<tr><td><code>n</code></td><td>montante específico</td></tr><tr><td><code>m..n</code></td><td>intervalo específico</td></tr><tr><td><code>1..3</code></td><td>no mínimo 1 e no máximo 3</td></tr>');
LX('associacao', `
<h2>Como se lê (slides)</h2>
<ul><li><code>1</code>: um objeto A está sempre associado a um e somente um objeto B.</li><li><code>1..*</code>: um objeto A está sempre associado a um ou mais objetos B.</li><li><code>0..1</code>: um objeto A está associado a zero ou um objeto B.</li><li><code>*</code>: um objeto A está associado a zero ou mais objetos B.</li></ul>
<h2>Prática em Java: associação Pessoa e Carro</h2>
<p>Uma pessoa pode ter <code>0..*</code> carros e cada carro pertence a uma pessoa (<code>1</code>).</p>
${AVA_CODE.assoc_pessoa}`);

LX('associativa', `
<h2>Prática em Java: classe associativa Turma</h2>
<p>Professor e Disciplina se associam por meio da classe associativa <b>Turma</b> (horário e sala).</p>
${AVA_CODE.associativa}`);

LX('todoparte', `
<h2>Agregação e composição (slides)</h2>
<div class="vs"><div><b>Agregação</b><span>Uma classe faz parte da outra (relação todo/parte), porém, não de modo exclusivo.</span></div><div><b>Composição</b><span>Uma classe faz parte da outra (relação todo/parte), de modo exclusivo.</span></div></div>
<h2>Prática em Java: agregação (Time e Jogador)</h2>
<p><code>Time</code> ◇— <code>Jogador</code> (<code>0..1</code> — <code>0..*</code>). Os jogadores são criados de forma independente e depois agregados ao time.</p>
${AVA_CODE.agregacao}
<h2>Prática em Java: composição (NotaFiscal e ItemNotaFiscal)</h2>
<p><code>NotaFiscal</code> ◆— <code>ItemNotaFiscal</code> (<code>1</code> — <code>0..*</code>). O objeto <code>ItemNotaFiscal</code> é criado dentro da <code>NotaFiscal</code>.</p>
${AVA_CODE.composicao}`);

LX('heranca', `
<h2>Prática em Java: herança e polimorfismo</h2>
<p>A classe abstrata <code>FormaPagamento</code> e as filhas <code>CartaoCredito</code> e <code>Boleto</code>; o mesmo método <code>pagar()</code> processa os dois tipos de pagamento.</p>
${AVA_CODE.heranca}`);

LX('dependencia', `
<h2>Conceito (PUC-Rio, 2016)</h2>
<p>Representa que a alteração de um objeto (o objeto independente) pode afetar outro objeto (o objeto dependente).</p>
<ul><li>A classe cliente depende de algum serviço da classe fornecedor;</li><li>A mudança de estado do fornecedor afeta o objeto cliente;</li><li>A classe cliente não declara nos seus atributos um objeto do tipo fornecedor;</li><li>Fornecedor é recebido por parâmetro de método.</li></ul>
<h2>Prática em C#: Program depende de Validador</h2>
{{mmd:ava_dep}}
${AVA_CODE.dependencia}`);

LX('interface', `
<h2>Notação UML (Bezerra, 2015)</h2>
<p>Uma classe pode implementar mais de uma interface. Na forma simplificada, a interface é representada por um “pirulito” (círculo) ligado à classe que a implementa.</p>
{{mmd:ava_interf}}
<p class="cap">ContaBancária implementa duas interfaces: Manipulável e Administrável.</p>
<h2>Prática em Java: Drawable e Circle</h2>
${AVA_CODE.interface_java}
<h2>Prática em C#: IReajuste</h2>
${AVA_CODE.interface_cs}
<h2>Prática em C#: polígonos</h2>
<p>A interface <code>IPoligono</code> define a assinatura <code>calcularArea()</code>; cada polígono a implementa com a sua fórmula (retângulo: A = b·h; triângulo retângulo: A = bh/2; pentágono: A = 5L·a; elipse: A = π·a·b).</p>
{{mmd:ava_poli}}
${AVA_CODE.poligonos}`);

LR('sequencia', '<h2>Exemplo: requisição HTTP com falha de validação</h2>', '<h2>Requisição HTTP: fluxo principal e fluxos de exceção</h2>');
LX('sequencia', `
<h2>Exemplo: Sistema de Aluguel de Veículos</h2>
<p><b>Casos de uso</b> (ator: Funcionário): Cadastrar Cliente, Cadastrar Carro, Efetuar Aluguel e Dar Baixa no Aluguel.</p>
<h3>Classes obtidas a partir dos casos de uso</h3>
<div class="tbl-wrap"><table><tr><th>Classe</th><th>Atributos</th><th>Operações</th></tr>
<tr><td>Cliente</td><td>Contato, CPF, Endereço, Nome, RG, Status, Telefone</td><td>Cadastrar Cliente, Verificar Status</td></tr>
<tr><td>Cliente Especial</td><td>Contato, CPF, Endereço, Nome, Quilometragem Extra, RG, Status, Taxa de Desconto, Telefone</td><td>Cadastrar Cliente, Pegar Valor de Desconto, Pegar Valor de Quilometragem Extra</td></tr>
<tr><td>Locadora</td><td>CNPJ, Endereço</td><td>Emitir nota fiscal</td></tr>
<tr><td>Carro</td><td>Ano, Código, Cor, Disponibilidade, Modelo, Quilometragem, Tipo, Valor do Aluguel Diária</td><td>Alterar Disponibilidade, Cadastrar Carro, Pegar o Valor do Aluguel, Verificar Disponibilidade</td></tr>
<tr><td>Aluguel</td><td>Data de Aluguel, Quilometragem Percorrida, Valor do Aluguel</td><td>Alugar, Calcular Preço, Confirmar Aluguel, Pegar a Data do Aluguel</td></tr></table></div>
<h3>Diagrama de classes</h3>
{{mmd:ava_locadora}}
<h3>Diagrama de sequência do caso de uso “Cadastrar Cliente”</h3>
{{mmd:ava_seq_cad}}
<h3>Diagrama de sequência do caso de uso “Efetuar Aluguel”</h3>
{{mmd:ava_seq_alug}}
<p class="cap">Exemplo da Revista SQL Magazine, Edição 13 (DevMedia).</p>
<h2>MVC em UML: venda de ingresso de cinema</h2>
<p>Fronteira (<i>Boundary</i>): <b>Interface_Cinema</b>; Controle (<i>Control</i>): <b>Controlador_Cinema</b>; Entidades: Sessao, Sala, Filme e Ingresso. Mapeamento: View = Boundary · Controller = Control · Model = Entity.</p>`);

// ---------------- Unidade 3 ----------------
LX('mer', `
<h2>Contexto histórico</h2>
<p>O Modelo de Entidades e Relacionamentos foi proposto por <b>Peter Chen</b> em 1976: “The Entity-Relationship Model — Toward a Unified View of Data” (Massachusetts Institute of Technology). <small>[Chen 1976]</small></p>`);

LX('der', `
<h2>Exemplo com dados: relacionamento 1:N</h2>
<div class="tbl-wrap"><table><tr><th colspan="2">Departamento</th></tr><tr><th>Cod-departamento (C)</th><th>Desc-departamento</th></tr><tr><td>G01</td><td>Gerência Técnica</td></tr><tr><td>G02</td><td>Gerência Administrativa</td></tr></table></div>
<div class="tbl-wrap"><table><tr><th colspan="4">Funcionário</th></tr><tr><th>Matrícula (C)</th><th>Nome</th><th>Data de nascimento</th><th>Cod-departamento</th></tr>
<tr><td>10</td><td>João</td><td>14/05/1980</td><td>G01</td></tr><tr><td>20</td><td>Pedro</td><td>18/03/2000</td><td>G02</td></tr><tr><td>30</td><td>Maria</td><td>17/11/1967</td><td>G01</td></tr><tr><td>40</td><td>Sebastião</td><td>12/12/1978</td><td>G01</td></tr><tr><td>50</td><td>Tereza</td><td>02/01/1990</td><td>G02</td></tr></table></div>
<h2>Relacionamento M:N: a entidade de ligação</h2>
<p>O relacionamento “Lota” passa ser uma entidade de ligação ou entidade de relacionamento, com os atributos Cod-departamento, Matrícula, Data de início e Data de término. No projeto lógico, “Lota” se transformará na tabela “Lotação”.</p>
<h2>Extensões: generalização/especialização e agregado</h2>
<ul><li><b>Generalização e especialização:</b> Cliente (Cod-cliente, Nome do cliente, Endereço, Margem de compra) é especializado em Pessoa Física (Cod-cliente, CPF, Data de nascimento) e Pessoa Jurídica (Cod-cliente, CNPJ, Número de sócios, Número de filiais).</li>
<li><b>Agregado:</b> Médico (CRM, Nome do médico) e Paciente (CPF do paciente, Nome do paciente, Data de nascimento) se relacionam por Consulta (Número da consulta, CRM, CPF do paciente, Data da consulta, Hora da consulta, Diagnóstico); a Consulta “gera prescrição de” Medicamento (Número da consulta, Número sequência, Nome medicamento, Dosagem).</li></ul>
<h3>Diagrama de classes com vários relacionamentos</h3>
{{mmd:ava_consulta}}`);

LX('mapeamento', `
<h2>Mapeamento Objeto-Relacional e vice-versa (DB First)</h2>
<ul><li><b>Modelo de Objetos (orientado a objetos):</b> Cliente (id: int, nome: string, endereço: string, telefone: string, dataNasc: DateTime) <code>1</code> — <code>0..*</code> Pedido (id: int, dataPedido: DateTime, valorTotal: decimal).</li>
<li><b>Modelo Relacional (banco de dados):</b> CLIENTE (PK id INT, nome VARCHAR(100), endereço VARCHAR(200), telefone VARCHAR(20), dataNasc DATE) e PEDIDO (PK id INT, dataPedido DATETIME, valorTotal DECIMAL(10,2), clienteId INT, FK).</li></ul>
<h3>DB First em 3 passos</h3>
<ol class="steps"><li><b>Criar/Definir</b> o esquema do banco de dados (tabelas, colunas, relacionamentos, etc.).</li><li><b>Gerar</b> as classes de domínio (POCOs/<i>Entities</i>) a partir do banco de dados.</li><li><b>Usar</b> as classes no código da aplicação, com o ORM para acessar o banco.</li></ol>
<h3>Exemplo de scaffolding: tabela Country → classe Country</h3>
${AVA_CODE.orm_country}`);

LX('projetobd', `
<h2>Estudo de caso: biblioteca de um escritório de advocacia</h2>
<p>O sistema a ser desenvolvido deve permitir:</p>
<div class="tbl-wrap"><table><tr><th colspan="3">Tabela de Requisitos Funcionais</th></tr><tr><th>Ident.</th><th>Descrição</th><th>Ator</th></tr>
<tr><td>RF01</td><td>Localizar livro.</td><td>Funcionário do Escritório.</td></tr>
<tr><td>RF02</td><td>Cadastrar livro, informando: (i) identificação do livro; (ii) ISBN; (iii) nome do livro; (iv) autores; (v) editora; e (vi) data de aquisição e (vii) preço pago pelo livro, se disponível.</td><td>Secretária.</td></tr>
<tr><td>RF03</td><td>Adquirir livro, incluindo todo o processo de compra presencial ou <i>online</i>.</td><td>Secretária.</td></tr>
<tr><td>RF04</td><td>Importar dados dos funcionários a partir do Sistema de RH do escritório, contendo os seguintes dados: (i) matrícula do funcionário, (ii) nome do funcionário, (iii) número da OAB (Ordem dos Advogados do Brasil), caso o funcionário tenha esse documento.</td><td>Sistema de RH do Escritório.</td></tr>
<tr><td>RF05</td><td>Registrar empréstimo.</td><td>Secretária.</td></tr><tr><td>RF06</td><td>Registrar devolução.</td><td>Secretária.</td></tr>
<tr><td>RF07</td><td>Receber alerta de vencimento de empréstimo.</td><td>Secretária.</td></tr><tr><td>RF08</td><td>Dar baixa em livros, indicando sua motivação.</td><td>Secretária.</td></tr>
<tr><td>RF09</td><td>Pagar assinatura.</td><td>Secretária.</td></tr><tr><td>RF10</td><td>Renovar assinatura.</td><td>Secretária.</td></tr>
<tr><td>RF11</td><td>Distribuir assinatura.</td><td>Proprietário do Escritório.</td></tr><tr><td>RF12</td><td>Receber relatório de consumo da assinatura.</td><td>Proprietário do Escritório.</td></tr></table></div>
<h3>Projeto conceitual e lógico</h3>
<p>Entidades do DER: Livro, Editora, Autor, Exemplar, Motivo Baixa, Baixa, Funcionário, Advogado, Assinatura, e os relacionamentos Edita, Escreve, Possui, Faz Empréstimo de, Requisita, Justifica, Recebe, Pode ser, Tem acesso a.</p>
{{mmd:ava_er_caso}}
<h3>Dicionário de dados (tabela, colunas e chave “C”)</h3>
<div class="tbl-wrap"><table><tr><th>Tabela</th><th>Colunas</th></tr>
<tr><td>ADVOGADO</td><td><b>C</b> MATRICULA · NUMERO_OAB</td></tr>
<tr><td>ASSINATURA</td><td><b>C</b> COD_PUBLICACAO · NOME_PUBLICACAO · DATA_INICIAL_VIGENCIA · DATA_FINAL_VIGENCIA · DATA_PROXIMO_VENCIMENTO · DATA_ULTIMO_PAGAMENTO</td></tr>
<tr><td>AUTOR</td><td><b>C</b> COD_AUTOR · NOME_AUTOR</td></tr>
<tr><td>BAIXA</td><td><b>C</b> COD_LIVRO · DATA_BAIXA · COD_MOTIVO_BAIXA</td></tr>
<tr><td>EDITORA</td><td><b>C</b> COD_EDITORA · NOME_EDITORA</td></tr>
<tr><td>ESCREVE</td><td><b>C</b> ISBN · <b>C</b> COD_AUTOR</td></tr>
<tr><td>EXEMPLAR</td><td><b>C</b> COD_LIVRO · ISBN · DATA_AQUISICAO · PRECO</td></tr>
<tr><td>FAZ EMPRESTIMO DE</td><td><b>C</b> COD_EMPRESTIMO · MATRICULA · COD_LIVRO · DATA_RESERVA · DATA_EMPRESTIMO · DATA_RETORNO_EFETIVO · DATA_DEVOLUCAO</td></tr>
<tr><td>FUNCIONARIO</td><td><b>C</b> MATRICULA · NOME_FUNCIONARIO · TEM_OAB</td></tr>
<tr><td>LIVRO</td><td><b>C</b> ISBN · TITULO · COD_EDITORA · ANO_PUBLICACAO</td></tr>
<tr><td>MOTIVO BAIXA</td><td><b>C</b> COD_MOTIVO_BAIXA · DESC_MOTIVO_BAIXA</td></tr>
<tr><td>TEM ACESSO A</td><td><b>C</b> LOGIN · SENHA · MATRICULA · COD_PUBLICACAO · IND_INATIVO</td></tr>
<tr><td>REQUISITA</td><td><b>C</b> COD_REQUISICAO · MATRICULA · ISBN · QUANTIDADE_REQUISITADA · DATA_REQUISICAO · IND_AUTORIZACAO · DATA_DECISAO</td></tr></table></div>
<h3>Projeto físico: script de banco de dados (DB Designer Fork)</h3>
${AVA_CODE.caso_script}
<h2>DB Designer Fork</h2>
<p>Download: sourceforge.net/projects/dbdesigner-fork. Depois da instalação, configure o ambiente:</p>
<ul><li>Tirar os menus fixos: desmarcar <i>Windows / Dock Palletes</i>.</li>
<li>Configurar para não exibir índices e alterar nomes de campos automaticamente: <i>Options / Model Options / Editing Options</i> e <i>Options / DBDesigner Options / Default Model Options</i>: desmarcar os dois últimos checkboxes.</li>
<li>Configurar a ferramenta para pés de galinha: <i>Display / Notation / Crows Foot</i>.</li>
<li>Tabelas no nível lógico: <i>Display / Table Columns</i>, desmarcar <i>Physical Schema Level</i>.</li></ul>
<div class="defs"><div><b>Desenhando e descrevendo tabelas</b><span>Clicar no ícone de tabela e, com o botão direito, escolher <i>Edit Object</i>.</span></div>
<div><b>Relacionando tabelas</b><span>Para relacionamento 1-N (Forte): clicar no ícone do relacionamento, clicar na tabela do lado do 1 e depois na tabela do lado do N. Para 1-N (Entidade Fraca): usar o ícone do relacionamento de entidade fraca, com a mesma sequência de cliques.</span></div>
<div><b>Alterando cardinalidade</b><span>Clicar 2 vezes no relacionamento; alterar para o listbox <i>Optional Relation</i>; alterar a cardinalidade (exemplo: marcar <i>Relation optional at End</i>).</span></div>
<div><b>Tirar nomes dos relacionamentos</b><span>Menu <i>Display</i> e desmarcar <i>Display Relation Names</i>.</span></div></div>
<p>Para gerar o script: <i>Export SQL Script</i> (nos slides, com <i>Target Data Base: SQLite</i>), e executar o script em um SGBD (Letos / SQLiteStudio).</p>`);
