/* Projeto Orientado a Objetos — Aulas, diagramas, exercícios, testes e projetos (dados) */
// ================= CONTEÚDO: Projeto Orientado a Objetos =================
const UNITS = {
  0: { name: 'Comece aqui', color: 'var(--acc)', soft: 'var(--acc-s)' },
  1: { name: 'Aspectos Gerais de Projeto', color: 'var(--u1)', soft: 'var(--u1s)' },
  2: { name: 'Projeto Orientado a Objetos', color: 'var(--u2)', soft: 'var(--u2s)' },
  3: { name: 'Projeto de Dados e Persistência', color: 'var(--u3)', soft: 'var(--u3s)' }
};
const J = s => s.replace(/^\n/, '');
const N = (t, x) => `<div class="note"><b>${t}</b><span>${x}</span></div>`;

const LESSONS = [
/* ---------- MÓDULO INICIAL ---------- */
{ id: 'ferramentas', unit: 0, title: 'Como estudar e ferramentas da disciplina',
lead: 'Esta disciplina mistura modelagem (desenhar diagramas UML e de banco) com programação orientada a objetos. Aqui você vê o mapa do conteúdo e as ferramentas usadas em cada parte.',
body: `
${N('Pense assim', 'antes de construir uma casa, alguém desenha a planta. <b>Projeto de software</b> é desenhar a planta do sistema: quais classes existem, como conversam e onde os dados ficam guardados.')}
<h2>O mapa da disciplina</h2>
{{fig:mapa}}
<h2>Ferramentas</h2>
<div class="tbl-wrap"><table><tr><th>Para</th><th>Ferramenta</th><th>O que você faz nela</th></tr>
<tr><td>Diagramas UML</td><td><b>ArgoUML</b> (ou draw.io)</td><td>Diagrama de classes e de sequência</td></tr>
<tr><td>Modelo de dados</td><td><b>DB Designer Fork</b></td><td>Desenhar tabelas, relacionamentos (pé de galinha) e gerar o script SQL</td></tr>
<tr><td>Banco de dados</td><td><b>SQLiteStudio</b></td><td>Rodar o script e criar as tabelas</td></tr>
<tr><td>Implementação</td><td><b>NetBeans</b> ou Eclipse</td><td>Implementar as classes do diagrama</td></tr>
<tr><td>Diagramas em texto</td><td><b>Mermaid</b> (mermaid.live)</td><td>Gerar diagramas escrevendo código</td></tr></table></div>
${N('Neste site', 'todos os diagramas são desenhados com Mermaid, no mesmo estilo das caixas de classe do ArgoUML.')}
<h2>Diagrama de classes no ArgoUML</h2>
<p>A caixa da classe no ArgoUML tem os mesmos três compartimentos do diagrama: nome, atributos e métodos.</p>
{{fig:argouml}}`,
codes: {}, ex: [] },

/* ---------- UNIDADE 1 ---------- */
{ id: 'modelos', unit: 1, title: 'Modelos, artefatos e projeto',
lead: 'Por que desenhar antes de programar? Porque modelos deixam todo mundo ver o sistema antes de ele existir.',
body: `
<h2>Dois conceitos que caem</h2>
<div class="defs"><div><b>Modelo</b><span>Representação em pequena escala de algo que se pretende executar em grande. Ex.: a maquete de um prédio, um diagrama de classes.</span></div>
<div><b>Artefato</b><span>Qualquer produto criado durante o desenvolvimento: diagramas, documentos de requisitos, código, scripts, casos de teste.</span></div></div>
${N('Pense assim', 'o modelo é a <b>planta da casa</b>; os artefatos são <b>todos os papéis</b> que a obra produz: planta, orçamento, cronograma, a própria casa.')}
<p>Modelos e artefatos permitem enxergar o sistema <b>antes</b> de implementá-lo, para que cliente e equipe de TI concordem sobre o que será construído.</p>
<div class="note warn"><b>Frase de prova</b><span>Modelos devem ser usados para projetar o <b>FUTURO</b>, e não para documentar o <b>PASSADO</b>.</span></div>
<h2>Com projeto × sem projeto</h2>
{{fig:comsem}}
<h2>Design × Project</h2>
<p>Em português as duas viram “projeto”, mas são coisas diferentes:</p>
<div class="tbl-wrap"><table><tr><th></th><th>Design</th><th>Project</th></tr>
<tr><td>O que é</td><td>O <b>desenho técnico</b> da solução</td><td>O <b>empreendimento</b>: prazo, custo, equipe</td></tr>
<tr><td>Pergunta</td><td>“Como o sistema vai funcionar?”</td><td>“Quando, quanto e quem?”</td></tr>
<tr><td>Exemplo</td><td>Diagrama de classes, modelo do banco</td><td>Cronograma, orçamento</td></tr></table></div>
<p>Esta disciplina trata do <b>design</b>.</p>`,
codes: {}, ex: [
  { t: 'Classifique os artefatos', l: 'f', d: 'Diga se cada item é artefato de <b>design</b> ou de <b>project</b>: (a) cronograma de entregas, (b) diagrama de classes, (c) orçamento da equipe, (d) script de criação do banco, (e) diagrama de sequência.', h: 'Design responde “como funciona”; project responde “quando, quanto e quem”.', ans: '<b>Design:</b> (b) diagrama de classes, (d) script do banco, (e) diagrama de sequência.<br><b>Project:</b> (a) cronograma, (c) orçamento.' }
] },

{ id: 'processo', unit: 1, title: 'Processo de software e atividades de design',
lead: 'Software é feito seguindo um processo: um conjunto de passos previsíveis, com atividades, controles e artefatos.',
body: `
<h2>Processo de software</h2>
<ul><li>Conjunto de <b>passos previsíveis</b>.</li><li>Contém <b>atividades, controles e artefatos</b>.</li><li>Estabelece um <b>fluxo</b> de processo.</li><li>Usa <b>padrões</b> (ex.: padrões de interface).</li></ul>
<h2>As 5 atividades metodológicas</h2>
{{viz:processo}}
<h2>O que se faz no design (projeto)</h2>
<div class="chipsgrid">${['Detalhar aspectos <b>dinâmicos, estáticos e estruturais</b>', 'Projeto de <b>banco de dados</b>', 'Projeto de <b>arquitetura</b> de software', 'Projeto de <b>integração</b>', 'Projeto de <b>interface</b> com o usuário', '<b>Padrões</b> de projeto'].map(x => `<div>${x}</div>`).join('')}</div>
${N('Para não confundir', '<b>Análise</b> descreve <i>o que</i> o sistema precisa fazer (o problema). <b>Projeto</b> descreve <i>como</i> ele vai fazer (a solução técnica). Os dois fazem parte da Modelagem.')}`,
codes: {}, ex: [
  { t: 'Coloque em ordem', l: 'f', d: 'Ordene as atividades: Construção, Comunicação, Entrega, Modelagem, Planejamento. Depois diga em qual delas fica a programação e em qual fica o diagrama de classes.', h: 'Primeiro se conversa com o cliente; por último se entrega.', ans: 'Comunicação → Planejamento → Modelagem → Construção → Entrega.<br>Programação, testes e depuração ficam na <b>Construção</b>. O diagrama de classes fica na <b>Modelagem</b> (análise e projeto).' }
] },

{ id: 'uml', unit: 1, title: 'UML e seus diagramas',
lead: 'UML é a linguagem padrão para desenhar sistemas orientados a objetos. Saber classificar os diagramas cai com frequência.',
body: `
<h2>Definição</h2>
<p><b>UML</b> (Unified Modeling Language, Linguagem de Modelagem Unificada) é um <b>metamodelo</b> que fornece ferramentas para análise, projeto e implementação de sistemas de software, e também para modelar negócios e processos.</p>
${N('Pense assim', 'UML é como a <b>notação musical</b>: qualquer músico do mundo lê a mesma partitura. Qualquer desenvolvedor lê o mesmo diagrama.')}
<h2>Classificação dos diagramas</h2>
{{fig:umltree}}
<h2>Treine a classificação</h2>
{{viz:umlclass}}
${N('Na disciplina', 'os mais usados são o <b>Diagrama de Classes</b> (estrutural), o <b>Diagrama de Sequência</b> (interação) e o <b>Diagrama de Máquina de Estados</b> (comportamental).')}`,
codes: {}, ex: [] },

{ id: 'mer', unit: 1, title: 'Modelagem de dados: o MER',
lead: 'Além das classes, o sistema precisa guardar dados. O Modelo de Entidades e Relacionamentos descreve isso.',
body: `
<h2>Os três elementos</h2>
<div class="defs"><div><b>Entidade</b><span>Armazena dados. Um ou mais atributos identificam cada ocorrência: a <b>chave</b>. Ex.: Funcionário (matrícula).</span></div>
<div><b>Relacionamento</b><span>Liga duas entidades. Pode ser <b>1:1, 1:N ou M:N</b> e obedece à integridade referencial.</span></div>
<div><b>Entidade fraca</b><span>Depende de outra entidade para existir. Ex.: Dependente só existe se existir o Funcionário.</span></div></div>
<h2>Notação pé de galinha (James Martin)</h2>
{{fig:crowfoot}}
<h2>Exemplo</h2>
{{mmd:er_1n}}
<p class="cap">Lê-se: <b>um</b> departamento contém <b>zero ou vários</b> funcionários; cada funcionário está em <b>um e somente um</b> departamento.</p>`,
codes: {}, ex: [
  { t: 'Leia o relacionamento', l: 'f', d: 'Escreva em português a leitura de: <code>CLIENTE ||--o{ PEDIDO</code>.', h: 'Leia cada ponta: || = um e somente um; o{ = zero ou vários.', ans: 'Um cliente faz <b>zero ou vários</b> pedidos; cada pedido pertence a <b>um e somente um</b> cliente.' }
] },

/* ---------- UNIDADE 2 ---------- */
{ id: 'objetos', unit: 2, title: 'Objeto, classe, atributo e método',
lead: 'A base de tudo: a classe é o molde, o objeto é a coisa criada a partir dele.',
body: `
${N('Pense assim', 'a <b>classe</b> é a forma de bolo; cada <b>objeto</b> é um bolo assado nela. Todos têm o mesmo formato (atributos), mas cada um tem seu sabor (valores).')}
<h2>Definições</h2>
<div class="defs"><div><b>Objeto</b><span>Tem <b>estado</b> (informação), <b>comportamento</b> (operações) e <b>identidade</b> única. “Instância” e “objeto” são sinônimos.</span></div>
<div><b>Classe</b><span>Define a estrutura e o comportamento comuns a um conjunto de objetos.</span></div>
<div><b>Atributo</b><span>Característica de cada objeto. Todos os objetos da classe têm os <b>mesmos atributos</b>, mas não os mesmos <b>valores</b>.</span></div>
<div><b>Método</b><span>Função da classe: pode receber parâmetros e retornar um valor. Executado por um objeto.</span></div></div>
<h2>Como a classe aparece no diagrama</h2>
{{mmd:cls_paciente}}
<p class="cap">Três compartimentos: <b>nome</b>, <b>atributos</b> e <b>métodos</b>.</p>
<h2>Crie objetos você mesmo</h2>
{{viz:objetos}}
<h2>Pacote</h2>
<p>O <b>pacote</b> (namespace) organiza as classes em grupos: módulos do sistema, componentes da arquitetura ou bibliotecas externas.</p>`,
codes: {}, ex: [
  { t: 'Modele a classe Produto', l: 'f', d: 'Desenhe a caixa de classe (UML) de <code>Produto</code>, com os atributos nome, preço e quantidade (privados), e o método <code>valorEmEstoque()</code> (preço × quantidade).', h: 'Três compartimentos: nome da classe, atributos (−) e métodos (+).', ans: '<b>Produto</b><br>− nome<br>− preco<br>− quantidade<br>+ valorEmEstoque()' },
  { t: 'Atributo de classe', l: 'm', d: 'A classe Produto precisa contar quantos produtos já foram criados ao todo — um número que é <b>da classe</b>, não de cada objeto. Como esse atributo e esse método aparecem no diagrama?', h: 'Atributo e método que pertencem à classe, e não a cada objeto, são sublinhados no diagrama de classes.', ans: 'Um atributo <b>de classe</b> (ex.: <code>total</code>) e um método <b>de classe</b> (ex.: <code>getTotal()</code>) aparecem <b>sublinhados</b> na caixa — é a notação UML para “pertence à classe como um todo”, não a cada objeto.' }
] },

{ id: 'encapsulamento', unit: 2, title: 'Visibilidade, encapsulamento e POJO',
lead: 'Quem pode ver o quê? Os símbolos + − # ~ respondem isso, e o encapsulamento protege os dados do objeto.',
body: `
<h2>Os 4 níveis de visibilidade</h2>
{{viz:visibilidade}}
<h2>Encapsulamento</h2>
<p>Princípio que <b>esconde do cliente os detalhes de implementação</b> e devolve só o que ele pediu. É o conceito de <b>cápsula</b>: os dados só são acessados <b>por meio de métodos</b>.</p>
{{viz:capsula}}
<h2>Métodos POJO (getters e setters)</h2>
<p><b>POJO</b> é o nome dado aos métodos <code>get</code> e <code>set</code> que dão acesso controlado aos atributos, sem expor os campos diretamente.</p>
<div class="note warn"><b>Convenção de prova</b><span>No diagrama de classes de projeto, os métodos <b>POJO não são desenhados</b>, mas <b>devem ser declarados na implementação</b>. Também não se desenham os atributos que representam referências a outras classes: isso fica implícito nas linhas de relacionamento.</span></div>`,
codes: {}, ex: [
  { t: 'Por que não acessar direto?', l: 'f', d: 'A classe Conta tem o atributo <code>saldo</code> (privado). Por que um código de fora da classe não pode simplesmente fazer <code>conta.saldo = 1000000;</code>?', h: 'Visibilidade privada (−) só permite acesso de dentro da própria classe.', ans: 'Porque <code>saldo</code> é <b>privado</b> (−): só a própria classe <code>Conta</code> enxerga esse atributo. Qualquer alteração precisa passar por um método público, como <code>depositar()</code> ou <code>sacar()</code>, que pode aplicar regras (ex.: não deixar o saldo ficar negativo).' },
  { t: 'Modele a classe Aluno encapsulada', l: 'm', d: 'Desenhe a caixa de classe de <code>Aluno</code> com nome e nota (ambos privados) e os métodos POJO correspondentes. Explique por que <code>setNota</code> deveria validar o valor antes de gravar.', h: 'Visibilidade privada = símbolo "−"; públicos = "+".', ans: '<b>Aluno</b><br>− nome<br>− nota<br>+ getNome()<br>+ setNome(nome)<br>+ getNota()<br>+ setNota(nota)<br><br>O <code>setNota</code> deve validar o valor (0 a 10) porque o encapsulamento só funciona se o próprio método proteger a regra de negócio; se o atributo fosse público, qualquer código poderia atribuir um valor inválido direto.' }
] }
];

LESSONS.push(
{ id: 'associacao', unit: 2, title: 'Multiplicidade e associação',
lead: 'Classes se relacionam. A associação é a ligação mais simples, e a multiplicidade diz quantos objetos participam de cada lado.',
body: `
<h2>Os relacionamentos que você vai estudar</h2>
{{fig:rels}}
<h2>Multiplicidade</h2>
<div class="tbl-wrap"><table><tr><th>Notação</th><th>Significa</th></tr>
<tr><td><code>1</code></td><td>exatamente um</td></tr><tr><td><code>0..1</code></td><td>zero ou um (opcional)</td></tr>
<tr><td><code>*</code> ou <code>0..*</code></td><td>zero ou muitos (são idênticos)</td></tr><tr><td><code>1..*</code></td><td>um ou muitos</td></tr>
<tr><td><code>1..3</code></td><td>no mínimo 1 e no máximo 3</td></tr><tr><td><code>10..15</code></td><td>no mínimo 10 e no máximo 15</td></tr></table></div>
<div class="note warn"><b>Pegadinha de prova</b><span>“No mínimo 1 e no máximo 3” é <code>1..3</code>, e não <code>1**3</code>. E <code>*</code> e <code>0..*</code> são a mesma coisa.</span></div>
{{viz:multi}}
<h2>Associação</h2>
<p>Uma classe <b>conhece</b> a outra e guarda uma referência a ela. Linha contínua simples.</p>
{{mmd:cls_assoc}}
${N('Na implementação', 'a associação vira um <b>atributo do tipo da outra classe</b> (ou uma coleção dela, quando a multiplicidade é muitos). No diagrama, esse atributo não é desenhado: a linha já representa a referência.')}`,
codes: {}, ex: [
  { t: 'Leia as multiplicidades', l: 'f', d: 'Escreva a leitura de: <code>Departamento "1" -- "1..*" Funcionario</code>.', h: 'Leia de cada lado: o número perto da classe B diz quantos B se ligam a um A.', ans: 'Um departamento tem <b>um ou muitos</b> funcionários; cada funcionário pertence a <b>exatamente um</b> departamento.' },
  { t: 'Turma e alunos', l: 'm', d: 'Modele Turma (código) associada a Aluno (nome), onde uma turma tem 0..* alunos. Desenhe a caixa de cada classe e a linha de associação com as multiplicidades.', h: 'Na Turma, a associação com Aluno não aparece como atributo desenhado — a linha já representa isso.', ans: '<b>Turma</b> "1" —— "0..*" <b>Aluno</b>. Na implementação, Turma guarda uma coleção de Aluno (o atributo não é desenhado no diagrama).' }
] },

{ id: 'associativa', unit: 2, title: 'Classe associativa',
lead: 'Quando a própria ligação entre duas classes tem dados, essa ligação vira uma classe.',
body: `
${N('Pense assim', 'um professor dá aula de uma disciplina, mas <b>em qual semestre? em qual sala?</b> Essas informações não são do professor nem da disciplina: são da <b>turma</b>, que é a ligação entre os dois.')}
{{fig:associativa}}
<p>A classe associativa aparece ligada ao <b>meio da linha</b> da associação por uma linha <b>tracejada</b>. Normalmente surge em relacionamentos <b>muitos-para-muitos</b>.</p>
${N('No banco de dados', 'a classe associativa equivale à <b>entidade de ligação</b> do M:N (veja a Unidade 3: “Lota” vira a tabela “Lotação”).')}`,
codes: {}, ex: [
  { t: 'Autoria (da prova)', l: 'm', d: 'Um artigo pode ser escrito por vários autores e um autor escreve vários artigos. A <b>ordem de publicação</b> do autor no artigo é guardada onde?', h: 'O dado depende do par (autor, artigo).', ans: 'Em uma <b>classe associativa Autoria</b>, ligada à associação Autor *—* Artigo, com o atributo <code>ordemPublicacao</code>. Não fica em Autor (que tem vários artigos) nem em Artigo (que tem vários autores).' }
] },

{ id: 'todoparte', unit: 2, title: 'Agregação e composição',
lead: 'Relações todo-parte. A diferença entre as duas é a pergunta mais clássica das provas.',
body: `
<h2>A diferença em uma frase</h2>
<div class="vs"><div><b>Agregação ◇</b><span>A parte <b>pode existir sem o todo</b>. Losango <b>vazio</b> no lado do todo.</span><small>Time ◇— Jogador: o time acaba, o jogador continua existindo.</small></div>
<div><b>Composição ◆</b><span>A parte <b>não existe sem o todo</b> (exclusiva). Losango <b>preenchido</b> no lado do todo.</span><small>NotaFiscal ◆— Item: apagou a nota, os itens somem junto.</small></div></div>
{{viz:todoparte}}
{{mmd:cls_todoparte}}
<div class="note warn"><b>Da prova</b><span>O losango fica do lado do <b>todo</b>. Em <code>Y ◇— X ◆— Z</code>: X é parte de Y (agregação) e Z é parte exclusiva de X (composição), então <b>Z depende de X para existir</b>.</span></div>
${N('Diferença na implementação', 'na <b>composição</b>, o todo <b>cria</b> as partes dentro dele. Na <b>agregação</b>, as partes já existem prontas e são só <b>passadas</b> ao todo.')}`,
codes: {}, ex: [
  { t: 'Agregação ou composição?', l: 'f', d: 'Classifique: (a) Pedido — ItemPedido, (b) Biblioteca — Livro, (c) Casa — Cômodo, (d) Playlist — Música, (e) Revista — Edição (da prova).', h: 'Pergunte: se o todo for apagado, a parte ainda faz sentido sozinha?', ans: '(a) <b>composição</b>, (b) <b>agregação</b>, (c) <b>composição</b>, (d) <b>agregação</b> (a música existe fora da playlist), (e) <b>composição</b> (a edição só existe dentro daquela revista).' },
  { t: 'Pedido com itens', l: 'm', d: 'Modele Pedido em composição com ItemPedido (nome, quantidade, preço). Desenhe o diagrama com o losango preenchido do lado certo.', h: 'O item não existe sem o pedido: o losango preenchido (◆) fica do lado de Pedido.', ans: '<b>Pedido</b> ◆—— <b>ItemPedido</b>. O losango preenchido fica em Pedido (o todo): se o pedido for apagado, os itens somem junto — é composição, não agregação.' }
] },

{ id: 'heranca', unit: 2, title: 'Herança, classe abstrata e polimorfismo',
lead: 'A filha herda tudo da mãe e pode se comportar de um jeito próprio. Essa é a base da resposta mais pedida em prova.',
body: `
{{mmd:cls_heranca}}
<div class="defs"><div><b>Herança</b><span>A classe filha (<code>extends</code>) herda atributos e métodos da mãe. Seta com triângulo <b>vazio</b> apontando para a mãe. Relação “<b>é um</b>”: Boleto <i>é uma</i> FormaPagamento.</span></div>
<div><b>Classe abstrata</b><span>Não pode ser instanciada (<code>new</code> dá erro). Serve de molde. Nome em <i>itálico</i> ou com «abstract» no diagrama.</span></div>
<div><b>Método abstrato</b><span>Só tem a assinatura; cada filha concreta é <b>obrigada</b> a implementá-lo.</span></div>
<div><b>Polimorfismo</b><span>A mesma chamada (<code>processarPagamento()</code>) executa versões diferentes conforme o objeto real.</span></div></div>
{{viz:polimorfismo}}
<div class="note warn"><b>Resposta padrão de prova</b><span>Ganho do polimorfismo: <b>reutilização de código e baixo acoplamento</b>. Novos meios de pagamento entram <b>criando novas subclasses</b>, sem mexer na implementação de <code>processarPagamento()</code> da mãe. Sem polimorfismo, o método seria <b>monolítico</b>, cheio de condicionais, e cada novo tipo alteraria uma implementação que já estava estável.</span></div>
${N('Cuidado', 'nem toda herança tem polimorfismo (Falso na prova!). Só há polimorfismo quando a filha <b>sobrescreve</b> um método e ele é chamado pela referência da mãe.')}`,
codes: {}, ex: [
  { t: 'Teste a classe abstrata', l: 'f', d: 'No diagrama de FormaPagamento (abstrata) e suas filhas CartaoCredito, Boleto e Pix, o que acontece se alguém tentar instanciar <code>new FormaPagamento(10)</code> diretamente? E se uma filha não implementar <code>processarPagamento()</code>?', h: 'Os dois são erros clássicos de prova: instanciar uma classe abstrata e não cumprir o “contrato” do método abstrato.', ans: 'Os dois dão <b>erro de compilação</b>: uma classe abstrata <b>não pode ser instanciada</b> com <code>new</code>; e toda classe concreta que herda de uma abstrata é <b>obrigada</b> a implementar os métodos abstratos dela, senão também não compila.' },
  { t: 'Folha de pagamento', l: 'm', d: 'Modele a classe abstrata Funcionario (nome, método abstrato <code>calcularSalario()</code>) e as filhas Mensalista (salário fixo) e Horista (horas × valor da hora). Desenhe o diagrama de herança completo.', h: 'FormaPagamento do exemplo acima segue o mesmo molde: mãe abstrata com o método sem corpo, filhas concretas que o implementam cada uma a seu jeito.', ans: '<b>Funcionario</b> «abstract» no topo, com <code>−nome</code> e <code>+calcularSalario(): double</code> em itálico (abstrato). <b>Mensalista</b> e <b>Horista</b> herdam dela (seta de triângulo vazio) e cada uma implementa <code>calcularSalario()</code> à sua maneira — é o mesmo polimorfismo do exemplo de FormaPagamento.' }
] },

{ id: 'dependencia', unit: 2, title: 'Dependência',
lead: 'Uma classe usa outra só de passagem, sem guardá-la como atributo.',
body: `
<p>A <b>dependência</b> indica que a alteração de um objeto (o fornecedor, independente) pode afetar outro (o cliente, dependente). Linha <b>tracejada</b> com seta aberta apontando para o fornecedor.</p>
{{mmd:cls_dep}}
<ul><li>A classe cliente <b>depende de algum serviço</b> da classe fornecedor.</li><li>O cliente <b>não declara</b> o fornecedor nos seus atributos.</li><li>O fornecedor é <b>recebido por parâmetro</b> de método (ou criado dentro dele).</li></ul>
${N('Associação × dependência', 'associação = <b>atributo</b> (relação duradoura). Dependência = <b>parâmetro</b> ou variável local (relação passageira).')}`,
codes: {}, ex: [
  { t: 'Que relação é essa?', l: 'f', d: 'A classe Relatorio tem o método <code>imprimir(Impressora i)</code> e não tem nenhum atributo do tipo Impressora. Qual o relacionamento e como desenhar?', h: 'Parâmetro de método, sem atributo.', ans: '<b>Dependência</b>: Relatorio ┈┈> Impressora (linha tracejada com seta aberta apontando para Impressora, o fornecedor).' }
] },

{ id: 'interface', unit: 2, title: 'Interface',
lead: 'Um contrato: diz quais métodos uma classe precisa ter, sem dizer como.',
body: `
<p>No dia a dia, interface é o que permite que coisas diferentes se comuniquem. Em OO, ela é a <b>“cara” que um objeto mostra aos outros</b>: os serviços que ele fornece.</p>
<ul><li>Define um <b>comportamento obrigatório</b> (ideia de <b>contrato</b>).</li><li>Contém <b>apenas assinaturas</b> de métodos, sem implementação.</li><li>Uma ou mais classes a <b>implementam</b> e se comprometem a escrever todos os métodos.</li><li>Captura comportamentos em comum entre classes <b>não relacionadas</b>, sem forçar herança.</li><li>Facilita o <b>desacoplamento</b>.</li></ul>
{{mmd:cls_interface}}
<p class="cap">Notação: «interface» no topo da caixa e linha <b>tracejada com triângulo vazio</b> (realização). Também existe a notação de “pirulito” (círculo).</p>
<h2>Interface × classe abstrata</h2>
<div class="tbl-wrap"><table><tr><th></th><th>Interface</th><th>Classe abstrata</th></tr>
<tr><td>Palavra reservada</td><td><code>implements</code></td><td><code>extends</code></td></tr>
<tr><td>Quantas por classe</td><td>várias</td><td>só uma</td></tr>
<tr><td>Atributos</td><td>não (só constantes)</td><td>sim</td></tr>
<tr><td>Métodos com corpo</td><td>não (exceto default)</td><td>sim, misturados com abstratos</td></tr>
<tr><td>Relação</td><td>“sabe fazer”</td><td>“é um”</td></tr></table></div>`,
codes: {}, ex: [
  { t: 'Interface Autenticavel', l: 'm', d: 'Crie a interface <code>Autenticavel</code> com o método <code>autenticar(senha)</code>. Desenhe Gerente e Cliente — duas classes sem herança entre si — implementando essa interface, cada uma com sua própria lógica de autenticação.', h: 'Interface = «interface» no topo, linha tracejada com triângulo vazio até cada classe que implementa.', ans: '<b>«interface» Autenticavel</b> com <code>+autenticar(senha): boolean</code>. <b>Gerente</b> e <b>Cliente</b> ligados a ela por linha tracejada com triângulo vazio (realização) — são classes não relacionadas entre si, mas que compartilham o mesmo contrato.' }
] },

{ id: 'sequencia', unit: 2, title: 'Diagrama de sequência',
lead: 'Mostra a ordem no tempo das mensagens trocadas entre objetos para cumprir um caso de uso.',
body: `
<p><b>Objetivo:</b> enfatizar a <b>ordem temporal</b> da troca de mensagens entre objetos (sequência de eventos). Serve para detalhar um caso de uso, modelar a lógica de uma operação complexa e entender como os objetos colaboram.</p>
<h2>Elementos</h2>
{{fig:seqelems}}
<h2>Acompanhe um diagrama passo a passo</h2>
{{viz:sequencia}}
<h2>Fragmentos (operadores de interação)</h2>
<div class="tbl-wrap"><table><tr><th>Operador</th><th>Significa</th><th>Equivale a</th></tr>
<tr><td><code>alt</code></td><td>execução condicional (um ou outro)</td><td>if / else</td></tr>
<tr><td><code>opt</code></td><td>execução opcional (um ou nada)</td><td>if sem else</td></tr>
<tr><td><code>loop</code></td><td>repetição</td><td>for / while</td></tr>
<tr><td><code>par</code></td><td>execução paralela</td><td>threads</td></tr>
<tr><td><code>strict</code></td><td>ordem sequencial estrita</td><td>—</td></tr>
<tr><td><code>neg</code></td><td>negação (sequência inválida)</td><td>—</td></tr>
<tr><td><code>break</code></td><td>quebra de execução (exceção)</td><td>break / throw</td></tr></table></div>
<h2>Exemplo: requisição HTTP com falha de validação</h2>
{{mmd:seq_http}}
<h2>MVC no diagrama: fronteira, controle e entidade</h2>
<div class="defs"><div><b>Fronteira (Boundary)</b><span>Interface entre o sistema e o usuário, ou entre sistemas (telas, APIs).</span></div>
<div><b>Controle (Control)</b><span>Separa regras de negócio e sequenciamento de tarefas da interface.</span></div>
<div><b>Entidade (Entity)</b><span>Armazena e gerencia os dados do sistema.</span></div></div>
{{mmd:seq_mvc}}`,
codes: {}, ex: [
  { t: 'Sequência: incluir artigo (da atividade)', l: 'd', d: 'O editor inclui um artigo. Se for o 1º artigo da edição, a edição é cadastrada. Depois, <b>enquanto</b> houver autor a vincular, cria-se a autoria; se for a 1ª publicação do autor, o autor é cadastrado. Quais fragmentos você usa e onde?', h: '“Se” vira alt/opt; “enquanto” vira loop. Um fragmento pode ficar dentro do outro.', ans: 'Um <b>alt/opt</b> “[Se 1º artigo da edição]” em volta de <code>cadastrarEdicao()</code>; um <b>loop</b> “[Enquanto tiver autor a ser vinculado]” em volta de <code>vincularAutoria()</code>; e, dentro do loop, outro <b>alt/opt</b> “[Se 1ª publicação do autor]” em volta de <code>cadastrarAutor()</code>. Veja o diagrama completo na simulação desta aula.' }
] },

/* ---------- UNIDADE 3 ---------- */
{ id: 'der', unit: 3, title: 'Do MER às tabelas',
lead: 'Cada tipo de relacionamento vira tabelas de um jeito. Essa conversão é a base do projeto lógico.',
body: `
${N('A regra de ouro', 'a chave estrangeira (FK) vai para o lado <b>N</b>. Quando os dois lados são N (M:N), nasce uma <b>tabela de ligação</b>.')}
<h2>Converta cada caso</h2>
{{viz:mer2tab}}
<h2>Conversão de notação: classes × relacional</h2>
<div class="tbl-wrap"><table><tr><th>Diagrama de classes</th><th>Pé de galinha</th><th>Significa</th></tr>
<tr><td><code>0..1</code></td><td><code>o|</code></td><td>zero ou um</td></tr><tr><td><code>1</code></td><td><code>||</code></td><td>um e somente um</td></tr>
<tr><td><code>*</code></td><td><code>o{</code></td><td>zero ou vários</td></tr><tr><td><code>1..*</code></td><td><code>|{</code></td><td>um ou vários</td></tr></table></div>`,
codes: {}, ex: [
  { t: 'Converta para tabelas', l: 'm', d: 'Médico e Paciente se relacionam por Consulta (data, hora, diagnóstico); um médico atende vários pacientes e um paciente consulta vários médicos. Quais tabelas e chaves?', h: 'É M:N com atributos no relacionamento.', ans: '<b>MEDICO</b>(<u>CRM</u>, nome) · <b>PACIENTE</b>(<u>CPF</u>, nome, data_nasc) · <b>CONSULTA</b>(<u>numero_consulta</u>, CRM → MEDICO, CPF → PACIENTE, data, hora, diagnostico). Consulta é a entidade de ligação (no diagrama de classes, uma classe associativa).' }
] },

{ id: 'mapeamento', unit: 3, title: 'Classes × tabelas e ORM',
lead: 'O diagrama de classes e o modelo relacional descrevem a mesma realidade com regras diferentes. O ORM faz a ponte.',
body: `
<h2>Cada relacionamento nos dois mundos</h2>
<div class="tbl-wrap"><table><tr><th>No MER / tabelas</th><th>No diagrama de classes</th></tr>
<tr><td>Relacionamento 1:N (FK no lado N)</td><td><b>Associação</b></td></tr>
<tr><td>Relacionamento M:N (tabela de ligação com atributos)</td><td><b>Classe associativa</b></td></tr>
<tr><td>Relacionamento 1:1 “se subdivide em” / generalização</td><td><b>Herança</b></td></tr>
<tr><td>Entidade fraca (PK composta com a do dono)</td><td><b>Composição</b></td></tr>
<tr><td>Autorrelacionamento (FK para a própria tabela)</td><td><b>Autoassociação</b></td></tr></table></div>
{{mmd:cls_orgao}}
<p class="cap">Autoassociação: um Órgão está vinculado a um órgão-pai.</p>
<div class="note warn"><b>Da prova (V)</b><span>Podemos gerar classes a partir de tabelas e vice-versa, <b>mas</b> o Diagrama de Classes e o Diagrama de Entidades e Relacionamentos são artefatos diferentes, com características próprias. Ex.: no MER aparecem as FKs; no diagrama de classes, não.</span></div>
<h2>ORM: Mapeamento Objeto-Relacional</h2>
<p>Técnica que converte <b>objetos ↔ linhas de tabelas</b> automaticamente (ex.: Hibernate, Entity Framework). Há duas abordagens:</p>
<div class="vs"><div><b>Code First</b><span>Escreve as classes; a ferramenta gera as tabelas.</span></div><div><b>Database First</b><span>Projeta o banco primeiro; a ferramenta gera as classes (<b>scaffolding</b>).</span></div></div>
<h2>Database First na prática</h2>
{{viz:dbfirst}}`,
codes: {}, ex: [
  { t: 'Qual o equivalente?', l: 'f', d: 'A tabela LOTACAO(cod_departamento, matricula, data_inicio, data_termino) liga Departamento e Funcionário. No diagrama de classes, ela vira o quê?', h: 'Relacionamento M:N com atributos próprios.', ans: 'Uma <b>classe associativa</b> Lotação (dataInicio, dataTermino) presa à associação Departamento *—* Funcionário. As FKs não aparecem como atributos.' }
] },

{ id: 'chaves', unit: 3, title: 'Chave natural × chave substituta',
lead: 'Toda tabela precisa de uma chave primária. Mas usar um dado do mundo real ou um número gerado pelo sistema?',
body: `
<div class="vs"><div><b>Chave natural</b><span>Baseada em valores do mundo real; reflete como o objeto é identificado fora do sistema.</span><small>Ex.: CPF, placa do carro, número de documento oficial.</small></div>
<div><b>Chave substituta (surrogate)</b><span>Número inteiro, único, gerado pelo sistema só para ser a PK. Também chamada de chave sintética ou pseudo-chave.</span><small>Ex.: id INT IDENTITY / AUTOINCREMENT.</small></div></div>
<h2>Características da substituta</h2>
<ul><li>O valor <b>nunca é reutilizado</b> e é gerado pelo próprio sistema.</li><li>Não tem significado (sem semântica).</li><li>Não é manipulado nem visto pelo usuário.</li></ul>
<div class="duo2"><div class="good-b"><b>✓ Vantagens</b><ul><li>Garantia de valores não repetidos.</li><li>Acelera junções e indexação (performance).</li><li>Mudanças nas regras de negócio não afetam a chave.</li><li>Substitui chaves compostas grandes.</li></ul></div>
<div class="bad-b"><b>✕ Desvantagens</b><ul><li>Normalmente não serve como chave de consulta.</li><li>Sem relação semântica com a tabela: viola a 3FN.</li><li>Implementação varia entre SGBDs.</li><li>Pode dar problema em migração e integração de dados.</li></ul></div></div>
${N('Exemplo', 'se a PK de Cliente fosse o CPF e o cliente corrigisse um CPF digitado errado, todas as FKs que apontam para ele teriam de mudar. Com <code>id_cliente</code> substituto, só o campo CPF muda.')}`,
codes: {}, ex: [] },

{ id: 'projetobd', unit: 3, title: 'Projeto de banco: conceitual, lógico e físico',
lead: 'Do mundo real ao script SQL rodando no banco, em etapas.',
body: `
{{fig:etapas}}
<h2>Conceitual: DER + dicionário de dados</h2>
<p>O DER mostra entidades e relacionamentos; o <b>dicionário de dados</b> descreve cada atributo (nome, tipo, tamanho, se é obrigatório, descrição).</p>
<div class="tbl-wrap"><table><tr><th>Atributo</th><th>Tipo</th><th>Tam.</th><th>Obrig.</th><th>Descrição</th></tr>
<tr><td>isbn</td><td>numérico</td><td>13</td><td>sim</td><td>Identificador do livro (PK)</td></tr>
<tr><td>titulo</td><td>texto</td><td>200</td><td>sim</td><td>Título do livro</td></tr>
<tr><td>cod_editora</td><td>inteiro</td><td>—</td><td>sim</td><td>Editora (FK → EDITORA)</td></tr></table></div>
<h2>Físico: o script SQL</h2>
{{code:sql}}
<ul><li><code>PRIMARY KEY</code> identifica cada linha; chave composta em tabelas de ligação (ESCREVE).</li><li><code>FOREIGN KEY ... REFERENCES</code> cria a integridade referencial.</li><li><code>ON DELETE NO ACTION</code>: não deixa apagar um pai que tem filhos.</li></ul>
{{mmd:er_biblio}}
<h2>Ferramentas</h2>
<p><b>DB Designer Fork</b> para desenhar e gerar o script (configure a notação <i>Crow's Foot</i> em Display › Notation) e <b>SQLiteStudio</b> para executá-lo.</p>`,
codes: { sql: J(`
CREATE TABLE EDITORA (
  COD_EDITORA   INT NOT NULL,
  NOME_EDITORA  VARCHAR(50),
  PRIMARY KEY (COD_EDITORA));

CREATE TABLE LIVRO (
  ISBN            NUMERIC(13) NOT NULL,
  COD_EDITORA     INT NOT NULL,
  TITULO          VARCHAR(200) NOT NULL,
  ANO_PUBLICACAO  NUMERIC(4),
  PRIMARY KEY (ISBN),
  FOREIGN KEY (COD_EDITORA) REFERENCES EDITORA(COD_EDITORA)
    ON DELETE NO ACTION ON UPDATE NO ACTION);

CREATE TABLE AUTOR (
  COD_AUTOR   INT NOT NULL,
  NOME_AUTOR  VARCHAR(100),
  PRIMARY KEY (COD_AUTOR));

-- M:N entre LIVRO e AUTOR: tabela de ligação com PK composta
CREATE TABLE ESCREVE (
  ISBN       NUMERIC(13) NOT NULL,
  COD_AUTOR  INT NOT NULL,
  PRIMARY KEY (ISBN, COD_AUTOR),
  FOREIGN KEY (ISBN) REFERENCES LIVRO(ISBN),
  FOREIGN KEY (COD_AUTOR) REFERENCES AUTOR(COD_AUTOR));`) },
ex: [
  { t: 'Escreva o script', l: 'm', d: 'Escreva o CREATE TABLE de DEPARTAMENTO(cod, descricao) e FUNCIONARIO(matricula, nome, data_nasc, cod_departamento) com a FK.', h: 'A FK fica em FUNCIONARIO (lado N) e referencia DEPARTAMENTO.', ans: `<pre class="mini">CREATE TABLE DEPARTAMENTO (
  COD_DEPARTAMENTO INT NOT NULL,
  DESC_DEPARTAMENTO VARCHAR(60),
  PRIMARY KEY (COD_DEPARTAMENTO));

CREATE TABLE FUNCIONARIO (
  MATRICULA INT NOT NULL,
  NOME VARCHAR(100) NOT NULL,
  DATA_NASC DATE,
  COD_DEPARTAMENTO INT NOT NULL,
  PRIMARY KEY (MATRICULA),
  FOREIGN KEY (COD_DEPARTAMENTO)
    REFERENCES DEPARTAMENTO(COD_DEPARTAMENTO));</pre>` }
] }
);

// ================= DIAGRAMAS (Mermaid), FIGURAS, PROVA, TESTES =================
const MMD = {
  cls_paciente: `classDiagram
class Paciente {
  -String cpf
  -String nome
  -double peso
  -double altura
  +calcularIMC() double
}`,
  cls_assoc: `classDiagram
direction LR
class Pessoa { -String nome }
class Carro { -String modelo
  -int ano }
Pessoa "1" --> "0..*" Carro : possui`,
  cls_todoparte: `classDiagram
direction LR
Time "1" o-- "11..*" Jogador : agregação
NotaFiscal "1" *-- "1..*" ItemNotaFiscal : composição
class Time { -String nome }
class Jogador { -String nome }
class NotaFiscal { -int numero
  +total() double }
class ItemNotaFiscal { -int qtd
  -double preco }`,
  cls_heranca: `classDiagram
class FormaPagamento {
  <<abstract>>
  #double valor
  +processarPagamento()* void
}
class CartaoCredito { -String numeroCartao
  +processarPagamento() void }
class Boleto { -String codigoDeBarras
  +processarPagamento() void }
FormaPagamento <|-- CartaoCredito
FormaPagamento <|-- Boleto`,
  cls_dep: `classDiagram
direction LR
class Pedido { -double valor
  +totalComFrete(CalculadoraFrete c, String uf) double }
class CalculadoraFrete { +calcular(double v, String uf) double }
Pedido ..> CalculadoraFrete : usa`,
  cls_interface: `classDiagram
class Tributavel {
  <<interface>>
  +calcularImposto() double
}
class Produto { -double preco
  +calcularImposto() double }
class Servico { -double valor
  +calcularImposto() double }
Tributavel <|.. Produto
Tributavel <|.. Servico`,
  cls_orgao: `classDiagram
class Orgao { -String nome
  -String sigla }
Orgao "0..*" --> "0..1" Orgao : vinculado a (pai)`,
  cls_revista: `classDiagram
class Revista { -long issn
  -String titulo
  -String periodicidade }
class Edicao { -int numero
  -short volume
  -Date data }
class Artigo { -short numero
  -String titulo
  -String texto }
class Autor { -String email
  -String nome }
class Autoria { -short ordemPublicacao
  +vincularAutoria() }
Revista "1" *-- "0..*" Edicao
Edicao "1" *-- "10..15" Artigo
Autor "*" -- "*" Artigo
Artigo .. Autoria
Autor .. Autoria`,
  cls_ecommerce: `classDiagram
class Cliente { -String nome
  -String email
  -String telefone
  -String cpf
  -String senha }
class Endereco { -String logradouro
  -String cidade }
class Pedido { -Date data
  -int numero
  -String status }
class ItemPedido { -int quantidade
  -double preco }
class Produto { -String descricao
  -double precoVenda
  -int qtdEstoque }
class Categoria { -String descricao }
class FormaPagamento { -String descricao }
Cliente "1" *-- "1..*" Endereco
Cliente "1" -- "0..*" Pedido
Pedido "0..*" --> "1" Endereco : entrega em
Pedido "1" *-- "1..*" ItemPedido
ItemPedido "0..*" --> "1" Produto
Produto "0..*" --> "1" Categoria
Pedido "0..*" --> "1" FormaPagamento`,
  seq_artigo: `sequenceDiagram
actor Editor
participant A as :Artigo
participant E as :Edicao
participant AU as :Autoria
participant AT as :Autor
Editor->>A: incluirArtigo()
alt Se 1º artigo da edição
  A->>E: cadastrarEdicao()
  E-->>A: Edição aberta
end
loop Enquanto tiver autor a ser vinculado
  A->>AU: vincularAutoria()
  alt Se 1ª publicação do autor
    AU->>AT: cadastrarAutor()
    AT-->>AU: Autor cadastrado
  end
  AU-->>A: Autor vinculado
end
A-->>Editor: Artigo cadastrado`,
  seq_http: `sequenceDiagram
actor U as Usuário
participant API as API
participant S as Serviço
participant DB as Banco
U->>API: POST /pedidos
API->>API: validar(dados)
alt dados válidos
  API->>S: criarPedido(dados)
  S->>DB: INSERT pedido
  DB-->>S: ok
  S-->>API: pedido criado
  API-->>U: 201 Created
else dados inválidos
  API-->>U: 400 Bad Request
end`,
  seq_mvc: `sequenceDiagram
actor C as Cliente
participant T as TelaVenda «fronteira»
participant V as ControleVenda «controle»
participant S as Sessao «entidade»
participant I as Ingresso «entidade»
C->>T: escolher sessão e assento
T->>V: venderIngresso(sessao, assento)
V->>S: verificarDisponibilidade(assento)
S-->>V: disponível
V->>I: new Ingresso(sessao, assento)
I-->>V: ingresso
V-->>T: confirmação
T-->>C: mostrar ingresso`,
  er_1n: `erDiagram
DEPARTAMENTO ||--o{ FUNCIONARIO : contem
DEPARTAMENTO { int cod_departamento PK
  string desc_departamento }
FUNCIONARIO { int matricula PK
  string nome
  date data_nascimento
  int cod_departamento FK }`,
  er_biblio: `erDiagram
EDITORA ||--o{ LIVRO : publica
LIVRO ||--o{ ESCREVE : tem
AUTOR ||--o{ ESCREVE : escreve
LIVRO ||--o{ EXEMPLAR : possui
EDITORA { int cod_editora PK
  string nome_editora }
LIVRO { numeric isbn PK
  int cod_editora FK
  string titulo
  numeric ano_publicacao }
AUTOR { int cod_autor PK
  string nome_autor }
ESCREVE { numeric isbn PK, FK
  int cod_autor PK, FK }
EXEMPLAR { int cod_livro PK
  numeric isbn FK
  date data_aquisicao
  decimal preco }`
};

const FIG2 = {
  argouml: () => `<figure class="fig"><img src="data:image/png;base64,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" alt="Caixa de classe no ArgoUML" style="max-width:260px;border-radius:8px;border:1px solid var(--line);background:#fff" loading="lazy"><figcaption>A caixa de classe (Paciente) desenhada no ArgoUML: nome, atributos (−) e métodos (+) — os mesmos três compartimentos do diagrama UML.</figcaption></figure>`,
  mapa: () => `<figure class="fig"><div class="umap">
    <div style="--c:var(--u1)"><small>Unidade 1</small><b>Aspectos gerais</b><span>modelo · artefato · processo · UML · MER</span></div>
    <div style="--c:var(--u2)"><small>Unidade 2</small><b>Projeto OO</b><span>classes · relacionamentos · herança · interface · sequência</span></div>
    <div style="--c:var(--u3)"><small>Unidade 3</small><b>Dados</b><span>MER → tabelas · ORM · chaves · SQL</span></div></div>
    <figcaption>Da ideia ao banco: primeiro entender o processo e a notação, depois projetar as classes, por fim projetar onde os objetos ficam guardados.</figcaption></figure>`,
  comsem: () => `<figure class="fig"><div class="duo2"><div class="bad-b"><b>✕ Sem projeto</b><ul><li>Cada um entende o sistema de um jeito.</li><li>Erros descobertos só no código, quando é caro mudar.</li><li>Retrabalho e “gambiarras”.</li></ul></div><div class="good-b"><b>✓ Com projeto</b><ul><li>Todos veem o mesmo modelo antes de programar.</li><li>Problemas aparecem no papel, quando é barato corrigir.</li><li>Código organizado e reaproveitável.</li></ul></div></div></figure>`,
  umltree: () => `<figure class="fig"><div class="utree">
    <div class="ut-root">Diagramas UML</div>
    <div class="ut-cols">
      <div><b>Estruturais</b><small>a estrutura estática</small><span>Classes</span><span>Objetos</span><span>Componentes</span><span>Estrutura composta</span><span>Implantação</span><span>Pacotes</span></div>
      <div><b>Comportamentais</b><small>o que acontece</small><span>Casos de uso</span><span>Atividades</span><span>Máquina de estados</span>
        <div class="ut-sub"><b>de Interação</b><span>Sequência</span><span>Comunicação</span><span>Visão geral de interação</span><span>Tempo</span></div></div>
    </div></div><figcaption>Os diagramas de interação são um subgrupo dos comportamentais.</figcaption></figure>`,
  crowfoot: () => `<figure class="fig"><div class="crow">${[['o|', 'zero ou um', 'M0 20H60M40 10V30M52 20a8 8 0 1 0 0.01 0', '0..1'], ['||', 'um e somente um', 'M0 20H60M40 10V30M48 10V30', '1'], ['o{', 'zero ou vários', 'M0 20H60M44 20L60 8M44 20L60 32M30 20a8 8 0 1 0 0.01 0', '0..*'], ['|{', 'um ou vários', 'M0 20H60M44 20L60 8M44 20L60 32M34 10V30', '1..*']].map(([c, t, d, u]) => `<div><svg viewBox="-4 0 70 40" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg><b>${t}</b><small>Mermaid <code>${c}</code> · classes <code>${u}</code></small></div>`).join('')}</div>
    <figcaption>O símbolo mais perto da entidade é o <b>máximo</b>; o mais distante é o <b>mínimo</b>. Círculo = zero, traço = um, “pé de galinha” = vários.</figcaption></figure>`,
  rels: () => `<figure class="fig"><div class="rels">${[
    ['Associação', 'line', '', 'conhece / usa como atributo'], ['Agregação', 'line', 'odia', 'todo-parte, parte independente'], ['Composição', 'line', 'fdia', 'todo-parte, parte exclusiva'],
    ['Herança', 'line', 'tri', '“é um”'], ['Realização', 'dash', 'tri', 'implementa interface'], ['Dependência', 'dash', 'arrow', 'usa de passagem (parâmetro)']
  ].map(([n, l, h, d]) => `<div><svg viewBox="0 0 120 24" aria-hidden="true"><line x1="4" y1="12" x2="${h === 'tri' ? 102 : h ? 96 : 116}" y2="12" stroke="currentColor" stroke-width="2" ${l === 'dash' ? 'stroke-dasharray="5 4"' : ''}/>${h === 'odia' ? '<path d="M96 12l10-6 10 6-10 6z" fill="var(--bg)" stroke="currentColor" stroke-width="2"/>' : h === 'fdia' ? '<path d="M96 12l10-6 10 6-10 6z" fill="currentColor"/>' : h === 'tri' ? '<path d="M102 4l14 8-14 8z" fill="var(--bg)" stroke="currentColor" stroke-width="2"/>' : h === 'arrow' ? '<path d="M104 5l12 7-12 7" fill="none" stroke="currentColor" stroke-width="2"/>' : ''}</svg><b>${n}</b><small>${d}</small></div>`).join('')}</div>
    <figcaption>O símbolo fica na ponta do <b>todo</b> (losangos) ou da <b>mãe / interface / fornecedor</b> (setas e triângulos).</figcaption></figure>`,
  associativa: () => `<figure class="fig"><svg class="fsvg" viewBox="0 0 340 190" role="img" aria-label="Professor e Disciplina ligados por uma associação muitos-para-muitos; a classe Turma liga-se ao meio da linha por uma linha tracejada">
    <rect x="6" y="20" width="100" height="44" rx="8" class="s-box"/><text x="56" y="47" class="s-t b">Professor</text>
    <rect x="234" y="20" width="100" height="44" rx="8" class="s-box"/><text x="284" y="47" class="s-t b">Disciplina</text>
    <line x1="106" y1="42" x2="234" y2="42" class="s-ln"/><text x="114" y="34" class="s-lab">*</text><text x="222" y="34" class="s-lab">*</text>
    <line x1="170" y1="42" x2="170" y2="104" class="s-ln" stroke-dasharray="5 4"/>
    <rect x="105" y="104" width="130" height="78" rx="8" class="s-box ok"/><text x="170" y="124" class="s-t b">Turma</text><line x1="105" y1="132" x2="235" y2="132" class="s-ln"/>
    <text x="116" y="150" class="s-lab" style="text-anchor:start">-semestre: String</text><text x="116" y="168" class="s-lab" style="text-anchor:start">-sala: String</text></svg>
    <figcaption>Turma guarda os dados que só existem quando um professor e uma disciplina se encontram.</figcaption></figure>`,
  seqelems: () => `<figure class="fig"><div class="selems">${[
    ['Ator', 'Quem está fora do sistema e inicia a interação (bonequinho).'], ['Objeto', 'Caixa no topo: <code>:Classe</code> ou <code>nome:Classe</code>.'], ['Linha da vida', 'Linha tracejada vertical: o tempo corre de cima para baixo.'],
    ['Caixa de ativação', 'Retângulo fino na linha da vida: o objeto está executando.'], ['Mensagem síncrona', 'Seta cheia ▶: chama e espera a resposta.'], ['Mensagem de retorno', 'Seta tracejada ⇠: a resposta.'],
    ['Automensagem', 'Seta que sai e volta ao mesmo objeto: chama um método dele mesmo.'], ['Criação / destruição', 'Seta para a caixa do novo objeto · X no fim da linha da vida.']
  ].map(([t, d]) => `<div><b>${t}</b><span>${d}</span></div>`).join('')}</div></figure>`,
  etapas: () => `<figure class="fig"><div class="steps4">${[
    ['Mundo real', 'foco nos requisitos; coleta de dados, restrições e relacionamentos'], ['Conceitual', 'DER + dicionário de dados, independente do SGBD'],
    ['Lógico', 'tabelas, tipos, tamanhos e chaves, ainda independente do SGBD'], ['Físico', 'conversão para o SGBD escolhido e geração do script SQL'], ['Implementação', 'rodar o script e colocar em produção']
  ].map(([t, d], i) => `<div><i>${i + 1}</i><b>${t}</b><span>${d}</span></div>`).join('')}</div></figure>`
};

// exemplos de execução dos exercícios de código
const EXAMPLES = {
  'objetos:0': ['', 'Caneta: 100.0\nCaderno: 180.0'],
  'objetos:1': ['', 'Produtos criados: 3'],
  'encapsulamento:1': ['', 'Nota inválida\nBia: 8.5'],
  'associacao:1': ['', 'Turma POO-01:\n - Ana\n - Caio'],
  'todoparte:1': ['', 'Total: 114.0'],
  'heranca:1': ['', 'Ana: 4500.0\nCaio: 4200.0'],
  'interface:0': ['', 'true\nfalse'],
  'ferramentas:0': ['', 'Olá, eu sou Ana\nOlá, eu sou Bruno']
};

const PROVA = {
  ferramentas: ['Saber qual ferramenta serve para quê: ArgoUML (UML), DB Designer Fork (modelo de dados), SQLiteStudio (SGBD).'],
  modelos: ['Definir <b>modelo</b> e <b>artefato</b>.', '“Modelos projetam o futuro, não documentam o passado.”', 'Diferença entre <b>design</b> e <b>project</b>.'],
  processo: ['As 5 atividades: comunicação, planejamento, modelagem, construção, entrega.', 'O que é feito no design: BD, arquitetura, integração, interface, padrões.'],
  uml: ['Definição de UML (metamodelo).', 'Classificar diagramas em <b>estruturais</b>, <b>comportamentais</b> e <b>de interação</b>.'],
  mer: ['Entidade, relacionamento, entidade fraca.', 'Ler a notação pé de galinha.'],
  objetos: ['Objeto = estado + comportamento + identidade.', 'Diferença entre classe e objeto; atributos iguais, valores diferentes.', 'Desenhar a caixa de classe com atributos e métodos.'],
  encapsulamento: ['Símbolos <b>+ − # ~</b> e quem enxerga cada um.', 'Encapsulamento = acesso aos dados só por métodos.', 'POJO não aparece no diagrama, mas é declarado no código.'],
  associacao: ['Ler e escrever multiplicidades (<code>*</code> = <code>0..*</code>; <code>1..3</code>).', 'Associação vira atributo do tipo da outra classe.'],
  associativa: ['Reconhecer quando o dado é da ligação (classe associativa), típico de M:N.'],
  todoparte: ['<b>Agregação</b> (◇, parte independente) × <b>composição</b> (◆, parte exclusiva).', 'O losango fica do lado do todo.', 'Na composição, excluir o todo exclui as partes.'],
  heranca: ['Classe abstrata não é instanciada; método abstrato obriga as filhas.', 'Polimorfismo: <b>reutilização e baixo acoplamento</b>; novas subclasses sem alterar o código.', 'Nem toda herança tem polimorfismo.'],
  dependencia: ['Dependência = recebe por parâmetro, sem atributo; linha tracejada com seta.'],
  interface: ['Interface = contrato, só assinaturas; <code>implements</code>.', 'Interface × classe abstrata.'],
  sequencia: ['Elementos: ator, objeto, linha da vida, ativação, mensagens, retorno.', 'Operadores <b>alt, opt, loop, par, strict, neg, break</b>.', 'Montar o diagrama a partir de um cenário.'],
  der: ['Converter 1:N (FK no N), M:N (tabela de ligação), 1:1, entidade fraca, autorrelacionamento.'],
  mapeamento: ['Equivalências MER × diagrama de classes.', 'ORM; Code First × Database First (scaffolding).', 'Diagrama de classes e DER são artefatos diferentes.'],
  chaves: ['Natural × substituta; vantagens e desvantagens da substituta.'],
  projetobd: ['Etapas: conceitual, lógico, físico, implementação.', 'Escrever CREATE TABLE com PRIMARY KEY e FOREIGN KEY.']
};

const QUIZ = {
  ferramentas: [['Qual ferramenta a disciplina usa para desenhar o modelo de dados e gerar o script SQL?', ['ArgoUML', 'DB Designer Fork', 'SQLiteStudio'], 1, 'DB Designer Fork desenha tabelas e relacionamentos e gera o script. O SQLiteStudio executa o script.']],
  modelos: [['“Representação em pequena escala de algo que se pretende executar em grande” define…', ['artefato', 'modelo', 'processo'], 1, 'Essa é a definição de modelo.'],
    ['Modelos e artefatos devem ser usados para…', ['documentar o passado', 'projetar o futuro', 'substituir o código'], 1, 'Frase clássica: projetar o FUTURO, não documentar o PASSADO.']],
  processo: [['Em qual atividade metodológica ficam programação, testes e depuração?', ['Modelagem', 'Construção', 'Entrega'], 1, 'Construção = programar, testar e depurar.'],
    ['Qual destes NÃO é uma atividade do design?', ['Projeto de banco de dados', 'Projeto de arquitetura', 'Levantamento do orçamento da equipe'], 2, 'Orçamento é “project” (gestão), não design.']],
  uml: [['O diagrama de sequência é…', ['estrutural', 'comportamental de interação', 'de implantação'], 1, 'Sequência e comunicação são diagramas de interação, um subgrupo dos comportamentais.'],
    ['Qual destes é estrutural?', ['Casos de uso', 'Máquina de estados', 'Pacotes'], 2, 'Pacotes, classes, objetos, componentes, estrutura composta e implantação são estruturais.']],
  mer: [['Uma entidade que depende de outra para existir é…', ['entidade fraca', 'entidade associativa', 'chave estrangeira'], 0, 'Ex.: Dependente depende de Funcionário.'],
    ['No pé de galinha, <code>|{</code> significa…', ['zero ou um', 'um ou vários', 'zero ou vários'], 1, 'Traço = mínimo 1; pé de galinha = máximo vários.']],
  objetos: [['Um objeto possui…', ['apenas atributos', 'estado, comportamento e identidade', 'apenas métodos'], 1, 'Definição de Booch: estado, comportamento e identidade.'],
    ['Dois objetos da mesma classe têm…', ['os mesmos atributos e os mesmos valores', 'os mesmos atributos, com valores possivelmente diferentes', 'atributos diferentes'], 1, 'A classe define os atributos; cada objeto tem seus valores.']],
  encapsulamento: [['O símbolo <code>#</code> significa…', ['público', 'privado', 'protegido'], 2, '# protegido: a própria classe e as filhas enxergam.'],
    ['Métodos POJO (get/set) no diagrama de classes de projeto…', ['devem ser desenhados', 'não são desenhados, mas são declarados na implementação', 'não existem em nenhuma linguagem'], 1, 'Convenção cobrada na prova (Verdadeiro).']],
  associacao: [['As multiplicidades <code>*</code> e <code>0..*</code> são…', ['idênticas', 'diferentes', 'inválidas'], 0, 'Verdadeiro na prova: são a mesma coisa.'],
    ['“No mínimo 1 e no máximo 3” se escreve…', ['1**3', '1..3', '1-3'], 1, 'A notação UML usa dois pontos: 1..3.']],
  associativa: [['Quando a própria associação tem atributos, usa-se…', ['herança', 'classe associativa', 'dependência'], 1, 'Os dados da ligação ficam na classe associativa.']],
  todoparte: [['Em <code>X ◆— Z</code> (losango cheio junto de X)…', ['X depende de Z para existir', 'Z depende de X para existir', 'nenhuma depende'], 1, 'Composição: Z é parte exclusiva de X.'],
    ['Agregação e composição, na implementação, são…', ['sempre idênticas', 'diferentes: na composição o todo cria as partes', 'impossíveis de implementar'], 1, 'Falso na prova que “possuem a mesma implementação”.'],
    ['As cardinalidades das relações todo-parte são sempre 1 para N?', ['Sim', 'Não'], 0, 'Segundo o gabarito da disciplina: Verdadeiro.']],
  heranca: [['Todo relacionamento de herança possui polimorfismo?', ['Sim', 'Não'], 1, 'Falso: só há polimorfismo se a filha sobrescrever o método.'],
    ['Ao criar uma nova forma de pagamento num projeto com polimorfismo, é preciso…', ['alterar o método da classe mãe', 'apenas criar uma nova subclasse', 'adicionar um if em cada uso'], 1, 'Esse é o ganho: reutilização e baixo acoplamento.'],
    ['<code>new FormaPagamento()</code> com FormaPagamento abstrata…', ['funciona', 'dá erro de compilação', 'cria um objeto vazio'], 1, 'Classe abstrata não pode ser instanciada.']],
  dependencia: [['Mudanças no fornecedor podem causar mudanças no cliente. Que relação é essa?', ['Dependência', 'Herança', 'Multiplicidade'], 0, 'Questão da prova (SEFAZ-RR): dependência.']],
  interface: [['Uma interface contém…', ['atributos e métodos completos', 'apenas assinaturas de métodos', 'apenas construtores'], 1, 'É um contrato: só assinaturas.'],
    ['Uma classe pode implementar…', ['só uma interface', 'várias interfaces', 'nenhuma, se herdar'], 1, '<code>implements</code> várias interfaces é permitido; <code>extends</code> (herança) é só uma.']],
  sequencia: [['O diagrama de sequência enfatiza…', ['a estrutura das classes', 'a ordem temporal das mensagens', 'as tabelas do banco'], 1, 'Ordem no tempo, de cima para baixo.'],
    ['Qual operador representa “um ou outro”?', ['loop', 'alt', 'opt'], 1, 'alt = alternativa (if/else). opt = opcional (um ou nada).']],
  der: [['Num relacionamento 1:N, a chave estrangeira vai…', ['para o lado 1', 'para o lado N', 'para uma nova tabela'], 1, 'A FK sempre vai para o lado N.'],
    ['Um relacionamento M:N vira…', ['uma FK em cada tabela', 'uma tabela de ligação', 'herança'], 1, 'Ex.: Lota vira a tabela Lotação.']],
  mapeamento: [['Uma entidade fraca equivale, no diagrama de classes, a…', ['composição', 'agregação', 'interface'], 0, 'A parte (dependente) não existe sem o todo.'],
    ['Gerar classes a partir das tabelas existentes é a abordagem…', ['Code First', 'Database First', 'Model View'], 1, 'Database First (scaffolding).']],
  chaves: [['Uma desvantagem da chave substituta é…', ['acelerar junções', 'violar a 3FN por não ter relação semântica', 'nunca se repetir'], 1, 'As outras duas são vantagens.']],
  projetobd: [['Em qual etapa é gerado o script SQL para o SGBD?', ['Conceitual', 'Lógico', 'Físico'], 2, 'O projeto físico converte o modelo para o SGBD escolhido.']]
};

const PROJECTS = [
  { u: 2, t: 'Clínica', d: 'Paciente, Médico e Consulta (classe associativa com data e diagnóstico). Calcule o IMC do paciente.', k: ['classe associativa', 'encapsulamento'] },
  { u: 2, t: 'Locadora de veículos', d: 'Cliente, Veículo e Aluguel. Faça o diagrama de classes e o de sequência de “Efetuar Aluguel”.', k: ['associação', 'sequência'] },
  { u: 2, t: 'Banco com exceções', d: 'Conta abstrata, ContaCorrente e Poupança; saque lança SaldoInsuficienteException.', k: ['herança', 'abstrata', 'exceção'] },
  { u: 2, t: 'Folha de pagamento', d: 'Funcionario abstrato com Mensalista, Horista e Comissionado; total da folha com polimorfismo.', k: ['polimorfismo'] },
  { u: 2, t: 'Revista científica', d: 'Revista ◆ Edição ◆ Artigo, Autor *–* Artigo com Autoria (questão da prova).', k: ['composição', 'classe associativa'] },
  { u: 2, t: 'E-commerce', d: 'Cliente, Endereço, Pedido, Item, Produto, Categoria e Forma de pagamento (questão da prova).', k: ['multiplicidade', 'composição'] },
  { u: 3, t: 'Biblioteca jurídica', d: 'Livro, Editora, Autor, Exemplar, Empréstimo: DER, dicionário e script SQL.', k: ['DER', 'SQL'] },
  { u: 3, t: 'Campeonato', d: 'Times que jogam entre si: autorrelacionamento N:N com a tabela Partida e o placar.', k: ['autorrelacionamento'] },
  { u: 3, t: 'DB First', d: 'Pegue o script da biblioteca e desenhe as classes correspondentes.', k: ['ORM', 'scaffolding'] }
];
const PLAN = [
  ['Sem 1', 'Unidade 1: modelos, processo, UML e MER. Faça os testes rápidos.'],
  ['Sem 2', 'Objetos e encapsulamento: modele classes com atributos, métodos e visibilidade.'],
  ['Sem 3', 'Associação, multiplicidade e classe associativa.'],
  ['Sem 4', 'Agregação × composição (a questão nº 1 da prova). Projeto: e-commerce.'],
  ['Sem 5', 'Herança, abstrata, polimorfismo e interface. Projeto: folha de pagamento.'],
  ['Sem 6', 'Diagrama de sequência com alt/loop. Refaça o “incluir artigo”.'],
  ['Sem 7', 'MER → tabelas, chaves e mapeamento para classes.'],
  ['Sem 8', 'Script SQL e DB First. Revise o resumo e as provas anteriores.']
];
const METODO = `<div class="method">
  <div class="method-h"><b>Para modelar qualquer cenário</b><button class="btn" data-method>Ver exemplo</button></div>
  <ol class="steps"><li><b>Grife os substantivos</b> do enunciado: viram candidatos a classes e atributos.</li><li><b>Grife os verbos</b> que ligam substantivos: viram relacionamentos (e métodos).</li><li><b>Pergunte a quantidade</b> dos dois lados: viram as multiplicidades.</li><li><b>Pergunte se a parte vive sem o todo</b>: decide agregação ou composição.</li></ol>
  <div class="method-ex"><div>
    <p><b>Cenário:</b> “Um <u>cliente</u> faz <u>pedidos</u>; cada pedido tem vários <u>itens</u>, e cada item é de um <u>produto</u>.”</p>
    <p><b>1. Classes:</b> Cliente, Pedido, Item, Produto.</p>
    <p><b>2. Relações:</b> cliente <i>faz</i> pedido; pedido <i>tem</i> itens; item <i>é de</i> produto.</p>
    <p><b>3. Quantidades:</b> Cliente 1 — 0..* Pedido · Pedido 1 — 1..* Item · Item 0..* — 1 Produto.</p>
    <p><b>4. Todo-parte:</b> o item não existe sem o pedido → <b>composição</b>. O produto existe sozinho → <b>associação</b>.</p>
  </div></div>
</div>`;

