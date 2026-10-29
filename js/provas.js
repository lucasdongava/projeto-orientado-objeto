/* Projeto Orientado a Objetos — Provas anteriores (questões e gabaritos do material do AVA) */
// Diagramas das questões (Mermaid)
Object.assign(MMD, {
  pv26_q1: `classDiagram
direction LR
class Y
class X
class Z
Y o-- X
X *-- Z`,
  pv26_q2: `classDiagram
class Paciente {
  codigo
  nome
  telefone
  data_nascimento
}
class Exame {
  codigo
  nome
  data_coleta
}
class Imagem {
  tipo_regiao
  area_regiao
  qualidade_imagem
}
class Laboratorial {
  material
  id_tubo
  volume
}
class Preparo {
  descricao
  validade
}
Paciente "*" -- "1..*" Exame
Exame <|-- Imagem
Exame <|-- Laboratorial
Preparo "1" -- "*" Imagem`,
  pv26_q3: `classDiagram
direction LR
class ClasseA {
  +String atributoA
  +boolean atributoB
  +metodo1(boolean) String
  +metodo2(boolean) String
}
class ClasseB {
  +String atributoC
  -String atributoD
  +metodoUm(String) boolean
}
ClasseA *--> ClasseB`,
  pv26_q5: `classDiagram
class FormaPagamento {
  <<abstract>>
  #double valor
  +processarPagamento()* void
}
class CartaoCredito {
  -String numeroCartao
  +processarPagamento() void
}
class Boleto {
  -String codigoDeBarras
  +processarPagamento() void
}
FormaPagamento <|-- CartaoCredito
FormaPagamento <|-- Boleto`,
  pv26_q6: `classDiagram
class Revista {
  -long ISSNRevista
  -string tituloRevista
  -string periodicidade
  +cadastrarRevista()
}
class Edicao {
  -int numeroEdicao
  -short volumeEdicao
  -date dataEdicao
  +cadastrarEdicao()
}
class Artigo {
  -short numeroArtigo
  -string tituloArtigo
  -string textoArtigo
  +cadastrarArtigo()
}
class Autor {
  -string emailAutor
  -string nomeAutor
  +cadastrarAutor()
}
class Autoria {
  -short numeroArtigo
  -string emailAutor
  -short ordemPublicacao
  +vincularAutoria()
}
Revista "1" *-- "0..*" Edicao
Edicao "1" *-- "10..15" Artigo
Autor "*" -- "*" Artigo
Artigo .. Autoria
Autor .. Autoria`,
  pv25_q2: `classDiagram
class Conta {
  saldo Currency
  deposito(valor Currency)
  calcularInteresse()
}
class VerificarConta {
  limiteMax Currency
  calcularInteresse()
}
class Investimento {
  calcularInteresse()
}
Conta <|-- VerificarConta
Conta <|-- Investimento`,
  pv25_q3: `classDiagram
class A {
  <<abstract>>
  #int atributoX
  #int atributoY
  +operação1()* boolean
}
class B {
  -int atributoW
  +operação1() boolean
}
class C {
  -int atributoZ
  +operação1() boolean
}
class E {
  +char atributoK
  +operação4() float
}
class F {
  +operação3() void
}
class D {
  +operação2() float
}
A <|-- B
A <|-- C
B "0..1" -- "1..*" F
C "1" *-- "*" E
D ..> C`,
  pv25_q6: `classDiagram
class Forma_pagamento {
  -descricao
}
class Categoria {
  -descricao
}
class Cliente {
  -nome
  -endereco
  -e_mail
}
class Pedido_Compra {
  -data
  -numero
  -status
}
class Item_pedido {
  -quantidade
  -preco
}
class Produto {
  -descricao
  -preco_venda
  -quantidade_estoque
}
class Corporativo {
  -CNPJ
}
class Indivíduo {
  -CPF
}
Forma_pagamento "1" -- "0..*" Pedido_Compra
Categoria "1" -- "0..*" Produto
Cliente "1" -- "0..*" Pedido_Compra
Pedido_Compra "1" o-- "1..*" Item_pedido
Item_pedido "0..*" -- "1" Produto
Cliente <|-- Corporativo
Cliente <|-- Indivíduo`,
  pv261_q1: `classDiagram
direction LR
class Peça {
  nome String
  solicita_compra() void
}
class Veículo {
  ano Integer
  solicita_compra() void
}
class Roda {
  aro Integer
  cor String
}
Peça <|-- Veículo
Veículo "1" *--> "1..*" Roda`,
  pv261_q2: `classDiagram
direction LR
class Funcionário {
  - nome String
}
class Departamento {
  - nomeDept String
}
class Professor {
  - titulação String
}
Funcionário <|-- Professor
Funcionário "*" --o "1" Departamento`,
  pv261_q5: `classDiagram
class Pessoa {
  -int cpf
  #String nome
  #char sexo
  -String rg
  -Date dataNascimento
  -String email
  +calcularIdade(int dataNascimento) int
}
class Aluno {
  -int matricula
}
class Instrutor {
  -int matricula
  +listaCursosAssociados() Curso[]
}
class Curso {
  -String nome
  -String turno
  +listaDisciplinasAssociadas() Disciplina[]
}
class Departamento {
  -String nome
}
class Disciplina {
  -String nome
}
Pessoa <|-- Aluno
Pessoa <|-- Instrutor
Aluno "1" -- "0..1" Curso
Instrutor "1" -- "1..*" Curso
Instrutor "1" -- "1..*" Departamento
Curso "*" -- "*" Disciplina`,
  pv261_q6: `classDiagram
class Forma_pagamento {
  -descricao
}
class Cliente {
  -nome
  -endereco
  -e_mail
}
class Pedido_Compra {
  -data
  -numero
  -status
}
class Item_pedido {
  -quantidade
  -preco
}
class Produto {
  -descricao
  -preco_venda
  -quantidade_estoque
}
class Corporativo {
  -CNPJ
}
class Indivíduo {
  -CPF
}
Forma_pagamento "1" -- "0..*" Pedido_Compra
Cliente "1" -- "0..*" Pedido_Compra
Pedido_Compra "1" o-- "1..*" Item_pedido
Item_pedido "0..*" -- "1" Produto
Cliente <|-- Corporativo
Cliente <|-- Indivíduo`
});

// Cada questão: t = tipo ('mc' múltipla escolha | 'tf' verdadeiro/falso | 'open' discursiva)
// ans = índice da alternativa correta (omitido quando o AVA não traz o gabarito)
const PROVAS = [
{ id: 'p262', title: 'Prova C1.A2 · 2026/2', sub: 'Turma 4DC1 · prova individual · até 8 pontos', q: [
  { t: 'mc', src: 'IF-SP 2024 · Professor · adaptada', pts: '1 ponto', mmd: 'pv26_q1',
    text: 'Em um diagrama de classes, as relações de agregação e composição são tipos de associações que representam uma relação “todo/parte” onde a parte pode existir independentemente do todo ou não. A partir do seguinte diagrama de classes, é correto afirmar que:',
    opts: ['A classe Z depende da classe X para existir.', 'A classe X depende da classe Z para existir.', 'A classe Y depende da classe X para existir.', 'A classe X depende das classes Y e Z para existir.'], ans: 0 },
  { t: 'mc', src: 'AL-PR 2024 · Analista de Sistemas · adaptada', pts: '1 ponto', mmd: 'pv26_q2',
    text: 'O modelo de classes de análise a seguir, especificado utilizando a UML, possui a seguinte configuração. Assinale a opção que reflete uma interpretação correta da semântica de leitura do diagrama.',
    opts: ['Existe um relacionamento de composição entre as classes “Preparo” e “Imagem”.', 'A classe “Imagem” possui um total de seis atributos.', 'Existe uma classe associativa entre as classes “Paciente” e “Exame”.', 'O modelo carece de multiplicidades entre as classes “Exame” e “Imagem”.', 'Um paciente pode não estar associado a um objeto “Exame”.'], ans: 1 },
  { t: 'mc', src: 'IF Sul Rio-Grandense 2025 · Professor · adaptada', pts: '1 ponto', mmd: 'pv26_q3',
    text: 'Um Diagrama de Classes da UML é a representação da estrutura e relações das classes que servem de modelo para objetos. Ele é a base para a construção de outros diagramas, como o de comunicação, de sequência e de estados. Observe o diagrama ao lado e, baseado nele, analise as seguintes afirmações:<br>I. Todos os métodos da classe ClasseA possuem retorno de dados do tipo boolean.<br>II. O atributoD da ClasseB é do tipo <i>String</i> e possui visibilidade privada.<br>III. O losango preenchido representa uma associação por composição entre a ClasseA e a ClasseB.<br>IV. Ao excluir um objeto da ClasseA em sua implementação, também será excluído o objeto da ClasseB.<br>Estão corretas apenas as afirmativas:',
    opts: ['I e III.', 'II e IV.', 'I, II e IV.', 'II, III e IV.', 'Todas as alternativas estão corretas.'], ans: 3 },
  { t: 'tf', pts: '2 pontos', text: 'Marque com F (Falso) ou V (Verdadeiro) as frases abaixo:', items: [
    ['Todo relacionamento de herança entre classes possui polimorfismo (0,5 ponto).', false],
    ['Embora possamos gerar classes a partir de tabelas de um banco de dados e vice-versa, o Diagrama de Classes e o Diagrama de Entidades e Relacionamentos são artefatos diferentes e possuem características próprias (0,5 ponto).', true],
    ['Quando tratamos a multiplicidade em um relacionamento entre duas classes, as simbologias “*” e “0..*” são idênticas (0,5 ponto).', true],
    ['Quando queremos representar no mínimo 1 e no máximo 3 ocorrências em um relacionamento entre classes, utilizamos a simbologia “1**3” (0,5 ponto).', false]] },
  { t: 'open', pts: '1 ponto', mmd: 'pv26_q5', text: 'Observe o Diagrama de Classes utilizado durante as aulas. Usar polimorfismo nesse caso específico traz qual tipo de ganho ao projeto?',
    padrao: 'Reutilização de código e baixo acoplamento. A solução adotada (herança com polimorfismo) permite a incorporação de novos métodos de pagamento somente criando novas subclasses de FormaPagamento, sem necessidade de modificar o código do método “processarPagamento()” da classe “FormaPagamento”. Caso não tivesse sido utilizada a solução de herança com polimorfismo, teríamos o método processarPagamento() de forma monolítica, nos obrigando a utilizar estrutura de <i>if</i> ou estruturas condicionais mais complexas, alterando de forma arriscada um código que já estava estável.' },
  { t: 'open', src: 'baseada na prova do ENADE 2014 · Tecnologia em Análise e Desenvolvimento de Sistemas', pts: '2 pontos',
    text: 'Observe as premissas a seguir:<br>I. Uma revista científica possui título, ISSN e periodicidade;<br>II. Essa revista publica diversas edições com os seguintes atributos: número da edição, volume da edição e data de edição. Importante destacar que cada instância da classe edição relaciona-se única e exclusivamente a uma instância da classe revista científica, não podendo relacionar-se com nenhuma outra;<br>III. Um artigo possui título. Um artigo é um conteúdo exclusivo de uma edição. E uma edição obrigatoriamente tem que possuir no mínimo 10 e no máximo 15 artigos.<br>IV. Um artigo pode ser escrito por mais de um autor e um autor pode escrever vários artigos.<br>Para satisfazer a essas premissas, um analista fez um Diagrama de Classes. Esse diagrama possui inconsistências e necessita de ajustes conceituais. Baseando nas técnicas e conceitos aprendidos na disciplina, desenhe outro diagrama corrigindo o que for necessário. Não é necessário descrever os tipos de dados de cada atributo no novo diagrama.',
    padraoMmd: 'pv26_q6', padrao: '' }
] },
{ id: 'p252', title: 'Prova C1 · 2025/2', sub: 'Turma 4DC1 · prova individual · até 8 pontos', q: [
  { t: 'mc', src: 'SEFAZ-RR 2023 · Desenvolvedor de Software · adaptada', pts: '1 ponto',
    text: 'Em UML, um diagrama de classes descreve os tipos de objetos presentes no sistema e os vários tipos de relacionamentos estáticos existentes entre eles. Selecione a propriedade de diagrama de classes UML que existe se mudanças na definição de um elemento (o fornecedor) podem causar mudanças ao outro (o cliente).',
    opts: ['Dependência.', 'Herança.', 'Multiplicidade.', 'Associação.', 'Atributo.'], ans: 0 },
  { t: 'mc', src: 'IBGE 2019 · Analista Censitário · Análise de Sistemas · Desenvolvimento de Aplicações · adaptada', pts: '1 ponto', mmd: 'pv25_q2',
    text: 'A respeito do Diagrama de Classes da UML a seguir, analise as assertivas e assinale a alternativa que aponta a(s) correta(s):<br>I. O método calcularInteresse() da classe VerificarConta é abstrato sobreposto.<br>II. O método deposito (valor: Currency) da classe Conta é um método concreto sobreposto.<br>III. A classe Conta é uma classe abstrata enquanto as classes Verificacao_Conta e Investimento são concretas.',
    opts: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'Todas as alternativas estão corretas.'], ans: 2 },
  { t: 'mc', src: 'FOZPREV 2018 · Analista Previdenciário · Sistema de Informação · adaptada', pts: '1 ponto', mmd: 'pv25_q3',
    text: 'Considere o Diagrama de Classes fornecido na figura. Com base nesse diagrama, assinale a alternativa correta.',
    opts: ['Pode haver no sistema qualquer quantidade de instâncias da classe A, que terão como comportamento operação1().', 'A classe F pode utilizar o atributoX, uma vez que ele é protegido em sua classe-mãe.', 'A classe D depende da classe C, o que significa que se C for modificada, pode afetar a classe F.', 'Se uma instância da classe C for excluída, todas as instâncias da classe E relacionadas também serão.', 'Os atributoX, atributoY e atributoZ são públicos.'], ans: 3 },
  { t: 'tf', n: 5, pts: '2 pontos', text: 'Marque com F (Falso) ou V (Verdadeiro) as frases abaixo:', items: [
    ['Métodos POJO ou POCO, por convenção, não são representados em um Diagrama de Classes, mas devem ser declarados explicitamente na programação (0,5 ponto).', true],
    ['Composição e Agregação são representadas de formas diferentes nos diagramas de classes, mas, na prática, possuem o mesmo código em aplicações Java (0,5 ponto).', false],
    ['O encapsulamento é constantemente desobedecido na programação do dia a dia, pois possuir todos os atributos públicos facilita a programação, sobretudo em grandes sistemas (0,5 ponto).', false],
    ['As cardinalidades dos relacionamentos todo-parte (agregação e composição) são sempre do tipo 1 pra N (0,5 ponto).', true]] },
  { t: 'open', n: 6, src: 'baseado na prova do ENADE 2014 · Sistemas de Informação', pts: '3 pontos',
    text: 'Uma empresa deseja lançar um sistema de comércio eletrônico para vender seus produtos. Essa empresa vende produtos de diversas categorias, como roupas, perfumes e eletrônicos, e aceita diversas formas de pagamento, como cartão de crédito, boleto bancário e PIX. No sistema de vendas implementado, cada produto deve ser cadastrado com sua descrição, preço de venda, quantidade em estoque e respectiva categoria. Cada cliente que deseja realizar compras tem de se cadastrar no sistema indicando seu nome, e-mail, telefone celular, CPF e senha. Deverá cadastrar também um ou mais endereços para entrega de pedidos. O cliente cadastrado pode realizar um pedido de compra dos produtos em estoque na quantidade que desejar. O cliente escolhe uma forma de pagamento disponível e recebe, por e-mail, o número do pedido e informações do status do pedido. O cliente também escolhe um dos endereços cadastrados, indicando o local para onde aquele pedido específico irá. Após a confirmação do pagamento, a loja realiza a entrega dos itens solicitados no endereço selecionado pelo cliente e envia, por e-mail, a nota fiscal eletrônica.<br>Considerando esse cenário, desenhe um Diagrama de Classes, segundo a UML (<i>Unified Modeling Language</i>), indicando nome de cada classe, respectivos atributos e relacionamentos entre as classes com as respectivas cardinalidades. Não é necessário projetar os métodos (operações) de cada classe.',
    padraoMmd: 'pv25_q6', padrao: 'Cliente: {nome, e-mail, telefone_celular, CPF e senha}; Classe Endereco, relacionada com Cliente como composição. Aceitarei também associação simples. Relacionar Pedido_Compra com Endereco. Não haverá herança.' }
] },
{ id: 'p261', title: 'Prova Final de Análise Orientada a Objetos · 2026/1', sub: 'Questões de revisão dos slides da Unidade 2 · o AVA traz o gabarito só de algumas', q: [
  { t: 'mc', src: 'POSCOMP 2016 · adaptada', pts: '1 ponto', mmd: 'pv261_q1',
    text: 'De acordo com o diagrama de classes UML, assinale a alternativa que se relaciona diretamente com o conceito de Polimorfismo da Orientação a Objetos.',
    opts: ['A relação entre as classes “Veículo” e “Roda”.', 'O método “solicita_compra()” das classes “Peça” e “Veículo”.', 'O atributo “ano: Integer” da classe “Veículo”.', 'Os atributos “aro: Integer” e “cor: String” da classe “Roda”.', 'O atributo “nome: String” da classe “Peça”.'] },
  { t: 'mc', src: 'POSCOMP 2009', pts: '1 ponto', mmd: 'pv261_q2',
    text: 'Considere o diagrama de classes abaixo. Assinale a alternativa <b>FALSA</b>:',
    opts: ['Todo Professor está associado a um Departamento.', 'Todo Funcionário está associado a um Departamento.', 'Um Departamento pode ter nenhum Professor associado.', 'Um Departamento pode ter nenhum Funcionário associado.', 'Todo Departamento tem ao menos um Funcionário.'] },
  { t: 'mc', src: 'EMPREL 2019 · Analista de Sistemas · adaptada', pts: '1 ponto', fig: 'empreL',
    text: 'Considerando a seguinte figura, analise as assertivas e assinale a alternativa que aponta a(s) correta(s):<br>I. A figura apresenta um tipo de relacionamento entre classes conhecido como classe associativa.<br>II. A figura apresenta os atributos e métodos das classes envolvidas.<br>III. O método calcularValor() só pode ser acessado pela sua classe.',
    opts: ['Apenas I.', 'Apenas II.', 'Apenas III.', 'Apenas I e II.', 'Apenas II e III.'] },
  { t: 'mc', src: 'CISCOPAR 2023 · Analista em Informática · adaptada', pts: '1 ponto',
    text: 'Imagine a seguinte situação hipotética: um restaurante está passando por uma expansão de seus negócios e o proprietário aproveitou a oportunidade para melhorar o sistema informatizado, que era limitado e não atendia a todos os requisitos do negócio, e o(a) contratou para esta atividade. No desenvolvimento, foi observado que todo o acesso aos dados contidos nos objetos é realizado por métodos, e que não é preciso conhecer os detalhes internos dessas operações para utilizar as suas saídas no aprimoramento do software. Que conceito de orientação a objetos está descrito na situação hipotética acima? Assinale a alternativa CORRETA.',
    opts: ['Herança.', 'Polimorfismo.', 'Encapsulamento.', 'Relacionamento.', 'Abstração.'] },
  { t: 'tf', src: 'UFRN 2023 · Analista de Tecnologia da Informação · Desenvolvimento · adaptada', pts: '2 pontos', mmd: 'pv261_q5', text: 'Com base no Diagrama de Classes a seguir, marque com F (Falso) ou V (Verdadeiro) as frases abaixo:', items: [
    ['Um curso deve ser associado a apenas um instrutor (0,5 ponto).', true],
    ['A classe “Instrutor” deve sobrescrever o método “calculaIdade()” de “Pessoa”, já que esse método é abstrato (0,5 ponto).', false],
    ['A classe “Aluno” não tem acesso aos atributos nome e sexo da classe “Pessoa” (0,5 ponto).', false],
    ['Deveria haver uma classe associativa entre as classes “Curso” e “Disciplina” (0,5 ponto).', true]] },
  { t: 'sub', src: 'ENADE 2014 · Sistemas de Informação', pts: '2 pontos cada', mmd: 'pv261_q6',
    text: 'Observe o Diagrama de Classes a seguir, extraído da prova do ENADE 2014 do Curso de Sistemas de Informação. Trata-se da representação de um Sistema de Comércio Eletrônico de uma empresa que vende produtos de diversas categorias, como roupas, perfumes e eletrônicos.',
    subs: [
      { text: 'Como altero o Diagrama acima para ser possível classificar os produtos em categorias, como apresentado no enunciado: roupas, perfumes, eletrônicos, material esportivo etc.?' },
      { text: 'Como se trata de um diagrama de classes produzido em 2014, não havia ainda o Pix. De acordo com o que foi projetado, o que deve ser alterado no diagrama para suportar essa nova forma de pagamento? Justifique sua resposta.', padrao: 'Nada. Basta acrescentar (instanciar) novo objeto na classe “Forma de Pagamento”.' }
    ] }
] }
];

// figura da classe associativa (não existe em Mermaid): Produto — CarrinhoCompras, com SelecaoProduto ligada ao meio da linha
const PV_FIG = {
  empreL: () => `<figure class="fig"><svg class="fsvg" viewBox="0 0 560 270" role="img" aria-label="Produto e CarrinhoCompras ligados por uma associação; a classe SelecaoProduto liga-se ao meio da linha por uma linha tracejada">
    <rect x="8" y="10" width="170" height="104" rx="6" class="s-box"/><text x="93" y="30" class="s-t b">Produto</text><line x1="8" y1="38" x2="178" y2="38" class="s-ln"/>
    <text x="16" y="55" class="s-lab" style="text-anchor:start">-idProduto: int</text><text x="16" y="70" class="s-lab" style="text-anchor:start">-nomeProduto: string</text><line x1="8" y1="78" x2="178" y2="78" class="s-ln"/>
    <text x="16" y="94" class="s-lab" style="text-anchor:start">+setProduto(): void</text><text x="16" y="108" class="s-lab" style="text-anchor:start">+getProduto(): void</text>
    <rect x="382" y="10" width="170" height="104" rx="6" class="s-box"/><text x="467" y="30" class="s-t b">CarrinhoCompras</text><line x1="382" y1="38" x2="552" y2="38" class="s-ln"/>
    <text x="390" y="58" class="s-lab" style="text-anchor:start">-idCarrinho: int</text><text x="390" y="73" class="s-lab" style="text-anchor:start">-valorCarrinho: currency</text><line x1="382" y1="82" x2="552" y2="82" class="s-ln"/>
    <text x="390" y="100" class="s-lab" style="text-anchor:start">+calcularValor(): void</text>
    <line x1="178" y1="62" x2="382" y2="62" class="s-ln"/><text x="224" y="55" class="s-lab" style="text-anchor:start">SelecaoProduto ▶</text>
    <line x1="280" y1="62" x2="280" y2="150" class="s-ln" stroke-dasharray="5 4"/>
    <rect x="175" y="150" width="210" height="104" rx="6" class="s-box ok"/><text x="280" y="170" class="s-t b">SelecaoProduto</text><line x1="175" y1="178" x2="385" y2="178" class="s-ln"/>
    <text x="183" y="196" class="s-lab" style="text-anchor:start">-quantidadeProduto: int</text><text x="183" y="211" class="s-lab" style="text-anchor:start">-precoUnitarioProduto: currency</text><line x1="175" y1="220" x2="385" y2="220" class="s-ln"/>
    <text x="183" y="238" class="s-lab" style="text-anchor:start">+excluirProdutoLista(): void</text></svg></figure>`
};

// ---------- página "Provas anteriores" ----------
const PV_LETTER = i => String.fromCharCode(65 + i);
function pvState() { return store.get('provas', {}); }
function pvSave(k, v) { const st = pvState(); if (v === null) delete st[k]; else st[k] = v; store.set('provas', st); }
function pvScore(P, st) {
  let ok = 0, tot = 0;
  P.q.forEach((q, qi) => {
    if (q.t === 'mc' && q.ans !== undefined) { tot++; if (st[`${P.id}|${qi}`] === q.ans) ok++; }
    if (q.t === 'tf') q.items.forEach((it, k) => { tot++; const c = st[`${P.id}|${qi}|${k}`]; if (c !== undefined && c === it[1]) ok++; });
  });
  return [ok, tot];
}
function pvFig(q) { return q.mmd ? `<div class="mmd" data-mmd="${q.mmd}"></div>` : q.fig ? PV_FIG[q.fig]() : ''; }
function pvPadrao(q, id) {
  const body = (q.padraoMmd ? `<div class="mmd" data-mmd="${q.padraoMmd}"></div>` : '') + (q.padrao ? `<p>${q.padrao}</p>` : '');
  return `<div class="qx pva" id="${id}"><div><b>${T('prPadrao')}</b>${body}</div></div>`;
}
function renderProvas() {
  const st = pvState();
  let h = `<div class="crumb">${T('prCrumb')}</div><h1>${T('prTitle')}</h1><p class="lead">${T('prLead')}</p>
  <nav class="rs-nav">${PROVAS.map(P => { const [a, b] = P.title.split(' · '); return `<button data-jump="pv-${P.id}" style="--c:var(--acc)">${a}<small>${b || ''}</small></button>`; }).join('')}</nav>`;
  for (const P of PROVAS) {
    const [ok, tot] = pvScore(P, st);
    h += `<section class="rs-unit" id="pv-${P.id}"><h2 style="--c:var(--acc)"><span class="rs-dot"></span>${P.title}</h2><p class="pn">${P.sub}</p>
    <div class="pv-bar"><span class="pv-score">${tot ? T('prScore', ok, tot) : ''}</span><button class="btn" data-pv-reset="${P.id}">${T('prRedo')}</button></div><div class="quiz">`;
    P.q.forEach((q, qi) => {
      const key = `${P.id}|${qi}`;
      h += `<div class="q pq"><div class="pq-h"><b>${T('prQ', q.n || qi + 1)}</b>${q.src ? `<span>${q.src}</span>` : ''}${q.pts ? `<em>${q.pts}</em>` : ''}</div><p class="pq-t">${q.text}</p>${pvFig(q)}`;
      if (q.t === 'mc') {
        const c = st[key], has = c !== undefined;
        h += `<div class="opts">${q.opts.map((o, i) => `<button class="opt ${has ? (q.ans === undefined ? (i === c ? 'chosen' : '') : i === q.ans ? 'ok' : i === c ? 'bad' : '') : ''}" data-pvo="${key}|${i}" ${has ? 'disabled' : ''}><b>${PV_LETTER(i)})</b> ${o}</button>`).join('')}</div>
        <div class="qx ${has ? 'open' : ''}"><div>${has ? (q.ans === undefined ? `<span class="pv-nokey">${T('prNoKey')}</span>` : `<b style="color:var(--${c === q.ans ? 'ok' : 'o-err'})">${c === q.ans ? T('qRight') : T('qWrong')}</b> ${T('prKey')} <b>${PV_LETTER(q.ans)})</b> ${q.opts[q.ans]}`) : ''}</div></div>`;
      } else if (q.t === 'tf') {
        h += `<div class="pv-tf">${q.items.map((it, k) => { const ik = `${key}|${k}`, c = st[ik], has = c !== undefined;
          return `<div class="pv-row ${has ? (c === it[1] ? 'ok' : 'bad') : ''}"><p>${String.fromCharCode(97 + k)}) ${it[0]}</p><div class="pv-vf"><button class="opt ${has && c === true ? (it[1] ? 'ok' : 'bad') : ''}" data-pvt="${ik}|1" ${has ? 'disabled' : ''}>${T('prTrue')}</button><button class="opt ${has && c === false ? (!it[1] ? 'ok' : 'bad') : ''}" data-pvt="${ik}|0" ${has ? 'disabled' : ''}>${T('prFalse')}</button></div>${has ? `<small>${T('prKey')} <b>${it[1] ? T('prTrue') : T('prFalse')}</b></small>` : ''}</div>`; }).join('')}</div>`;
      } else if (q.t === 'open') {
        h += `<div class="ex-act"><button class="btn pri" data-pva="pva-${P.id}-${qi}">${T('prSeePadrao')}</button></div>${pvPadrao(q, `pva-${P.id}-${qi}`)}`;
      } else if (q.t === 'sub') {
        h += q.subs.map((s, si) => `<div class="pv-sub"><p><b>${String.fromCharCode(97 + si)})</b> ${s.text}</p>${s.padrao ? `<div class="ex-act"><button class="btn pri" data-pva="pva-${P.id}-${qi}-${si}">${T('prSeePadrao')}</button></div>${pvPadrao(s, `pva-${P.id}-${qi}-${si}`)}` : `<p class="pv-nokey">${T('prNoKey')}</p>`}</div>`).join('');
      }
      h += `</div>`;
    });
    h += `</div></section>`;
  }
  return h;
}
document.querySelector('#lessonIn').addEventListener('click', e => {
  const t = e.target.closest('button'); if (!t) return;
  if (t.dataset.pvo) { const [eid, qi, i] = t.dataset.pvo.split('|'); pvSave(`${eid}|${qi}`, +i); go('provas', true); }
  else if (t.dataset.pvt) { const [eid, qi, k, v] = t.dataset.pvt.split('|'); pvSave(`${eid}|${qi}|${k}`, v === '1'); go('provas', true); }
  else if (t.dataset.pva) { const x = document.getElementById(t.dataset.pva); const o = x.classList.toggle('open'); t.textContent = o ? T('prHidePadrao') : T('prSeePadrao'); }
  else if (t.dataset.pvReset) { const st = pvState(); Object.keys(st).forEach(k => { if (k.startsWith(t.dataset.pvReset + '|')) delete st[k]; }); store.set('provas', st); go('provas', true); }
});