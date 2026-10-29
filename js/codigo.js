/* Projeto Orientado a Objetos — códigos de exemplo do material do AVA (iguais em português e inglês) */
const escA = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const trimA = s => s.replace(/^\n/, '').replace(/\s+$/, '');
// bloco de código: nome do arquivo, código e (opcional) resultado da execução
const CB = (file, code, out) => `<div class="snip"><div class="snip-h"><span>${escA(file)}</span></div><pre>${escA(trimA(code))}</pre>${out ? `<div class="snip-h snip-o"><span>${T('avaOut')}</span></div><pre>${escA(trimA(out))}</pre>` : ''}</div>`;

const AVA_CODE = {
  paciente_js: CB('paciente.js', `
// Classe Paciente:
var Paciente = function(nome, peso, altura) {
	// Atributos:
	this.nome = nome;
	this.peso = peso;
	this.altura = altura;
	console.log('Classe criada com sucesso');
}

// Instanciação:
console.log('Exemplares da classe Paciente (objetos)');
var paciente1 = new Paciente('Vinícius', 122, 1.80);


// Mostrando as propriedades dos objetos:
console.log(paciente1.nome + ' tem ' + paciente1.peso + ' Kg e mede ' + paciente1.altura + ' m.');


// Cria método para calcular IMC em Paciente:
Paciente.prototype.calcularIMC = function()
{
	var imc = this.peso / (this.altura * this.altura);
	alert(imc);
};

// Executa método calcularIMC():
paciente1.calcularIMC();`),

  engenheiro: CB('Engenheiro.java', `
package capitulo4.exemplos.exemplo2;

public class Engenheiro {

    String nome;
    String crea;
    float salarioBruto;

    float calcularSalarioLiquido(float desconto, float bonus) {
        return (salarioBruto * desconto) + bonus;
    }

}`) + CB('Principal.java', `
package capitulo4.exemplos.exemplo2;

public class Principal {

    public static void main(String[] args) {
        Engenheiro e1 = new Engenheiro();
        e1.nome = "José";
        e1.salarioBruto = 10000;
        System.out.println("Salário Líquido: " + e1.calcularSalarioLiquido(0.8f, 400.70f));
    }
}`, `Salário Líquido: 8400.7`),

  pessoa_pojo: CB('Pessoa.java', `
package sistemasoo.poo;

public class Pessoa {
    private String nome;
    private String telefone;
    private String endereco;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}`),

  assoc_pessoa: CB('Pessoa.java', `
package sistemasoo.poo;

import java.util.List;
import java.util.ArrayList;

public class Pessoa {

    private String nome;
    private String telefone;
    private String endereco;
    private List<Carro> carros; // Coleção para armazenar os carros

    //Método construtor para incluir a lista de carros.
    public Pessoa() {
        carros = new ArrayList();
    }

    //Método Getter para List<Carro>
    public List<Carro> getCarros() {
        return carros;
    }

    //Método Setter para List<Carro>
    public void setCarros(List<Carro> carros) {
        this.carros = carros;
    }

    // Método para adicionar um carro à pessoa.
    public void adicionarCarro(Carro carro) {
        this.carros.add(carro);
    }

    // Método para remover um carro da pessoa.
    public void removerCarro(Carro carro) {
        this.carros.remove(carro);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}`) + CB('Carro.java', `
package sistemasoo.poo;

public class Carro {

    private String marca;
    private String modelo;
    private String cor;
    private String placa;
    private Pessoa pessoa;

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }
}`) + CB('Main.java', `
package sistemasoo.poo;

public class Main {
    public static void main(String[] args) {
        // Criando uma pessoa
        Pessoa joao = new Pessoa();
        joao.setNome("João da Silva");
        joao.setEndereco("Rua Mem de Sá, 40");
        joao.setTelefone("27 999991000");

        // Criando 2 carros
        Carro carroA = new Carro();
        carroA.setCor("branco");
        carroA.setMarca("Honda");
        carroA.setModelo("Civic");
        carroA.setPlaca("MTZ2625");
        //
        Carro carroB = new Carro();
        carroB.setCor("prata");
        carroB.setMarca("Ford");
        carroB.setModelo("Focus");
        carroB.setPlaca("PPA1718");

        // Associando os carros à pessoa
        joao.adicionarCarro(carroA);
        joao.adicionarCarro(carroB);

        // Imprimindo dados do João:
        System.out.println("Proprietário: " + joao.getNome() + ", residente em " + joao.getEndereco() + ", telefone: " + joao.getTelefone());

        // Imprimindo marca e modelo dos carros do João:
        System.out.println("Carros de " + joao.getNome() + ":");
        for (Carro c : joao.getCarros()) {
            System.out.println("- " + c.getMarca() + " " + c.getModelo());
        }
    }
}`, `
Proprietário: João da Silva, residente em Rua Mem de Sá, 40, telefone: 27 999991000
Carros de João da Silva:
- Honda Civic
- Ford Focus`),

  associativa: CB('Professor.java', `
package sistemasoo.poo;

import java.util.ArrayList;
import java.util.List;

public class Professor {

    private String nome;
    private String titulacao;
    private List<Turma> listaTurmas;

    public Professor() {
        listaTurmas = new ArrayList();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTitulacao() {
        return titulacao;
    }

    public void setTitulacao(String titulacao) {
        this.titulacao = titulacao;
    }

    public List<Turma> getListaTurmas() {
        return listaTurmas;
    }

    public void setListaTurmas(List<Turma> listaTurmas) {
        this.listaTurmas = listaTurmas;
    }

    public void adicionarTurma(Turma turma) {
        listaTurmas.add(turma);
    }

    public void removerTurma(Turma turma) {
        listaTurmas.remove(turma);
    }
}`) + CB('Disciplina.java', `
package sistemasoo.poo;

import java.util.ArrayList;
import java.util.List;

public class Disciplina {

    private String nome;
    private int quantidadeCreditos;
    private List<Turma> listaTurmas;

    public Disciplina() {
        listaTurmas = new ArrayList();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidadeCreditos() {
        return quantidadeCreditos;
    }

    public void setQuantidadeCreditos(int quantidadeCreditos) {
        this.quantidadeCreditos = quantidadeCreditos;
    }

    public List<Turma> getListaTurmas() {
        return listaTurmas;
    }

    public void setListaTurmas(List<Turma> listaTurmas) {
        this.listaTurmas = listaTurmas;
    }

    public void adicionarTurma(Turma turma) {
        listaTurmas.add(turma);
    }

    public void removerTurma(Turma turma) {
        listaTurmas.remove(turma);
    }
}`) + CB('Turma.java', `
package sistemasoo.poo;

public class Turma {

    private String horario;
    private short sala;
    private Professor professor;
    private Disciplina disciplina;

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public short getSala() {
        return sala;
    }

    public void setSala(short sala) {
        this.sala = sala;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public Disciplina getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }
}`) + CB('Main.java', `
public static void main(String[] args) {
    Disciplina d1 = new Disciplina();
    d1.setNome("Projeto Orientado a Objetos");
    d1.setQuantidadeCreditos(4);
    //
    Professor p1 = new Professor();
    p1.setNome("Vinícius de Freitas Soares");
    p1.setTitulacao("M.Sc.");
    //
    Turma t1 = new Turma();
    t1.setDisciplina(d1);
    t1.setProfessor(p1);
    t1.setHorario("Segunda-feira, 18h45 a 20h15");
    t1.setSala((short) 427);
    d1.adicionarTurma(t1);
    p1.adicionarTurma(t1);
    //
    //
    Turma t2 = new Turma();
    t2.setDisciplina(d1);
    t2.setProfessor(p1);
    t2.setHorario("Terça-feira, 20h30 a 22h00");
    t2.setSala((short) 427);
    d1.adicionarTurma(t2);
    p1.adicionarTurma(t2);
    //
    System.out.println(t2.getProfessor().getNome());
    System.out.println(t2.getProfessor().getTitulacao());
    System.out.println(t2.getDisciplina().getNome());
    System.out.println(t2.getDisciplina().getQuantidadeCreditos());
    System.out.println(t2.getSala());
    System.out.println(t2.getHorario());
}`, `
Vinícius de Freitas Soares
M.Sc.
Projeto Orientado a Objetos
4
427
Terça-feira, 20h30 a 22h00`),

  agregacao: CB('Jogador.java', `
package sistemasoo.poo;

public class Jogador {
    private String nome;
    private String posicao;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPosicao() {
        return posicao;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }
}`) + CB('Time.java', `
package sistemasoo.poo;

import java.util.ArrayList;
import java.util.List;

public class Time {

    private String nomeTime;
    private List<Jogador> jogadores; // Lista de Jogadores

    public String getNomeTime() {
        return nomeTime;
    }

    public void setNomeTime(String nomeTime) {
        this.nomeTime = nomeTime;
    }

    public List<Jogador> getJogadores() {
        return jogadores;
    }

    public void setJogadores(List<Jogador> jogadores) {
        this.jogadores = jogadores;
    }

    // Método para adicionar um jogador à equipe
    public void adicionarJogador(Jogador jogador) {
        if (this.jogadores == null) {
            this.jogadores = new ArrayList<>();
        }
        this.jogadores.add(jogador);
    }

    // Método para remover um jogador da equipe
    public void removerJogador(Jogador jogador) {
        if (this.jogadores.contains(jogador)) {
            this.jogadores.remove(jogador);
            System.out.println("Jogador " + jogador.getNome() + " foi removido do time.");
        } else {
            System.out.println("Jogador " + jogador.getNome() + " não encontrado no time.");
        }
    }

    public void mostrarJogadores() {
        System.out.println("Jogadores do Time " + this.nomeTime + ":");
        for (Jogador jogador : this.jogadores) {
            System.out.println("- " + jogador.getNome() + " (" + jogador.getPosicao() + ")");
        }
    }
}`) + CB('Agregacao.java', `
package sistemasoo.poo;

public class Agregacao {

    public static void main(String[] args) {
        // 1. Cria objetos Jogador de forma independente.
        Jogador Ferraresi = new Jogador();
        Ferraresi.setNome("Nahuel Ferraresi");
        Ferraresi.setPosicao("Zagueiro");
        //
        Jogador Medina = new Jogador();
        Medina.setNome("Cristian Medina");
        Medina.setPosicao("Meia");

        // 2. Cria o objeto Time.
        Time Botafogo = new Time();
        Botafogo.setNomeTime("Botafogo");

        // 3. Agrega os jogadores ao Time.
        Botafogo.adicionarJogador(Ferraresi);
        Botafogo.adicionarJogador(Medina);

        // 4. Mostra os jogadores da equipe
        Botafogo.mostrarJogadores();
    }
}`, `
Jogadores do Time Botafogo:
- Nahuel Ferraresi (Zagueiro)
- Cristian Medina (Meia)`),

  composicao: CB('ItemNotaFiscal.java', `
package sistemasoo.poo;

public class ItemNotaFiscal {

    private String descricao;
    private double valor;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
}`) + CB('NotaFiscal.java', `
import java.util.ArrayList;
import java.util.List;

public class NotaFiscal {

    private int numero;
    private List<ItemNotaFiscal> itens;
    private double valorTotal;

    public int getNumero() {
        return numero;
    }

    public NotaFiscal() {
        this.itens = new ArrayList<>();
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public List<ItemNotaFiscal> getItens() {
        return itens;
    }

    public void setItens(List<ItemNotaFiscal> itens) {
        this.itens = itens;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    // Método para adicionar um item à nota fiscal
    public void adicionarItem(String descricao, double valor) {
        // A chave da composição: o objeto ItemNotaFiscal é criado dentro da NotaFiscal
        ItemNotaFiscal novoItem = new ItemNotaFiscal();
        novoItem.setDescricao(descricao);
        novoItem.setValor(valor);
        //
        this.itens.add(novoItem);
        this.valorTotal += novoItem.getValor();
    }

    public void mostrarDetalhes() {
        System.out.println("--- Nota Fiscal N° " + this.numero + " ---");
        System.out.println("Itens:");
        for (ItemNotaFiscal item : this.itens) {
            System.out.println("- " + item.getDescricao() + ": R$ " + String.format("%.2f", item.getValor()));
        }
        System.out.println("--------------------");
        System.out.println("Valor Total: R$ " + String.format("%.2f", this.valorTotal));
    }
}`) + CB('Composicao.java', `
public class Composicao {

    public static void main(String[] args) {
        // 1. Cria o objeto NotaFiscal
        NotaFiscal nf = new NotaFiscal();
        nf.setNumero(123);

        // 2. Adiciona os itens diretamente na nota fiscal.
        // O objeto ItemNotaFiscal é criado internamente.
        nf.adicionarItem("Notebook", 5000.00);
        nf.adicionarItem("Mouse sem fio", 150.00);
        nf.adicionarItem("Cabo USB-C", 30.00);

        // 3. Mostra os detalhes da nota
        nf.mostrarDetalhes();
    }
}`, `
Itens:
- Notebook: R$ 5000,00
- Mouse sem fio: R$ 150,00
- Cabo USB-C: R$ 30,00
---------------------
Valor Total: R$ 5180,00`),

  heranca: CB('FormaPagamento.java', `
package sistemasoo.poo;

public abstract class FormaPagamento {

    protected double valor;

    public double getValor() {
        return valor;
    }

    // Método abstrato que será implementado pelas classes filhas
    public abstract void processarPagamento();

}`) + CB('CartaoCredito.java', `
public class CartaoCredito extends FormaPagamento {

    private String numeroCartao;

    public String getNumeroCartao() {
        return this.numeroCartao;
    }

    public void setNumeroCartao(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    // Setter herdado da classe pai
    public void setValor(double valor) {
        this.valor = valor;
    }

    @Override
    public void processarPagamento() {
        System.out.println("Processando pagamento via Cartão de Crédito...");
        System.out.println("Valor: R$ " + String.format("%.2f", this.valor));
        System.out.println("Cartão: " + this.numeroCartao);
        System.out.println("Pagamento Aprovado!");
    }
}`) + CB('Boleto.java', `
public class Boleto extends FormaPagamento {

    private String codigoDeBarras;

    public String getCodigoDeBarras() {
        return this.codigoDeBarras;
    }

    public void setCodigoDeBarras(String codigoDeBarras) {
        this.codigoDeBarras = codigoDeBarras;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    @Override
    public void processarPagamento() {
        System.out.println("Gerando pagamento via Boleto...");
        System.out.println("Valor: R$ " + String.format("%.2f", this.valor));
        System.out.println("Código de Barras: " + this.codigoDeBarras);
        System.out.println("Boleto gerado com sucesso! Vencimento em 3 dias úteis.");
    }
}`) + CB('ProcessadorDePedidos.java', `
public class ProcessadorDePedidos {

    public void pagar(FormaPagamento pagamento) {
        // O método processarPagamento() será chamado de forma diferente
        // dependendo do tipo real do objeto (CartaoDeCredito ou Boleto).
        pagamento.processarPagamento();
    }

    public static void main(String[] args) {
        ProcessadorDePedidos processador = new ProcessadorDePedidos();

        // Cria objetos de diferentes classes filhas

        //Polimorfismo: instanciando o tipo de pagamento Cartão de Crédito.
        CartaoCredito pagamentoCartao = new CartaoCredito();
        pagamentoCartao.setValor(150.75);
        pagamentoCartao.setNumeroCartao("1234-5678-9012-3456");

        //Polimorfismo: instanciando o tipo de pagamento Boleto.
        Boleto pagamentoBoleto = new Boleto();
        pagamentoBoleto.setValor(150.75);
        pagamentoBoleto.setCodigoDeBarras("9876543210987654321");

        // Utiliza o mesmo método 'pagar' para ambos os objetos
        // O Java se encarrega de chamar a implementação correta
        processador.pagar(pagamentoCartao);
        System.out.println("--------------------------------");
        processador.pagar(pagamentoBoleto);
    }
}`, `
Processando pagamento via Cartão de Crédito...
Valor: R$ 150,75
Cartão: 1234-5678-9012-3456
Pagamento Aprovado!
--------------------------------
Gerando pagamento via Boleto...
Valor: R$ 150,75
Código de Barras: 9876543210987654321
Boleto gerado com sucesso! Vencimento em 3 dias úteis.`),

  dependencia: CB('Validador.cs', `
namespace Primo
{
    class Validador
    {
        public string entrada { get; set; }
        public long numInteiro { get; set; }

        public string validaEntrada()
        {
            if (entrada.Length > 10)
            {
                return "Texto de entrada muito grande.";
            }
            else
            {
                bool deuCerto = long.TryParse(entrada, out var valor);
                if (!deuCerto)
                {
                    return "Não é um número inteiro.";
                }
                else
                {
                    numInteiro = valor;
                    if (numInteiro <= 0)
                    {
                        return "Não é um número positivo não nulo.";
                    }
                    else
                    {
                        return "OK";
                    }
                }
            }
        }

        public Boolean validaPrimo()
        {
            Boolean ePrimo = true;

            if (((numInteiro % 2 == 0) && (numInteiro != 2)) || (numInteiro == 1))
            {
                ePrimo = false;
            }
            else
            {
                for (long i = 3; i <= (long)Math.Sqrt(numInteiro); i = i + 2)
                {
                    if (numInteiro % i == 0)
                    {
                        ePrimo = false;
                        break;
                    }
                }
            }
            return ePrimo;
        }
    }
}`) + CB('Program.cs', `
namespace Primo
{
    class Program
    {
        static void Main(string[] args)
        {
            // Digitação de um número para verificar se é primo ou não.
            Console.WriteLine("Digite um número: ");

            string numero = Console.ReadLine();

            // Exibe se é número primo ou não.
            // Pode exibir uma mensagem de erro, indicando que é uma entrada inválida.

            // Instância de classe Validador.
            Validador meuNumero = new Validador();
            meuNumero.entrada = numero;

            // Validação da entrada.
            if (meuNumero.validaEntrada() != "OK")
            {
                Console.WriteLine(meuNumero.validaEntrada());
            }
            else
            {
                // Verifição se o número é primo ou não.
                if (meuNumero.validaPrimo())
                {
                    Console.WriteLine("É primo.");
                }
                else
                {
                    Console.WriteLine("Não é primo.");
                }
            }
        }
    }
}`),

  interface_java: CB('InterfaceChecker.java', `
interface Drawable {
    void draw();
}
class Circle implements Drawable {
    public void draw() {
        System.out.println("Círculo!");
    }
}
public class InterfaceChecker {
    public static void main(String[] args) {
        Drawable circle = new Circle();
        circle.draw();
    }
}`),

  interface_cs: CB('Funcionario.cs', `
public class Funcionario
{
    interface IReajuste
    {
        double Reajuste();
    }

    public class ReajusteFuncionario : IReajuste
    {
        //Propriedades públicas da minha classe
        public string nomeFuncionario;
        public double salarioFuncionario;

        //Implementação do método Reajuste, da interface IReajuste
        public double Reajuste()
        {
            salarioFuncionario = salarioFuncionario * 1.50;

            return salarioFuncionario;
        }
    }
}`),

  poligonos: CB('IPoligono.cs', `
using System;

namespace Poligonos
{
    public interface IPoligono
    {
        // Método sem implementação: Assinatura
        double calcularArea(double p1, double p2);
    }
}`) + CB('Retangulo.cs', `
using System;

namespace Poligonos
{
    public class Retangulo : IPoligono
    {
        public double calcularArea(double b, double h)
        {
            double S = b * h;
            return S;
        }
    }
}`) + CB('TrianguloRetangulo.cs', `
using System;

namespace Poligonos
{
    public class TrianguloRetangulo : IPoligono
    {
        public double calcularArea(double b, double h)
        {
            double S = (b * h)/2;
            return S;
        }
    }
}`) + CB('Pentagono.cs', `
using System;

namespace Poligonos
{
    public class Pentagono : IPoligono
    {
        public double calcularArea(double L, double a)
        {
            double S = (5 * L) * a;
            return S;
        }
    }
}`) + CB('Elipse.cs', `
using System;

namespace Poligonos
{
    internal class Elipse : IPoligono
    {
        public double calcularArea(double a, double b)
        {
            double S = Math.PI * a * b;
            return S;
        }
    }
}`) + CB('Program.cs', `
using System;

namespace Poligonos
{
    class Program
    {
        static void Main(string[] args)
        {
            double area;
            //
            Retangulo r1 = new Retangulo();
            area = r1.calcularArea(30, 20);
            Console.WriteLine("Área do Quadrado: " + area + " m2");
            //
            TrianguloRetangulo t1 = new TrianguloRetangulo();
            area = t1.calcularArea(30, 20);
            Console.WriteLine("Área do Triângulo Retângulo: " + area + " m2");
            //
            Pentagono p1 = new Pentagono();
            area = p1.calcularArea(30, 20);
            Console.WriteLine("Área do Pentágono: " + area + " m2");
            //
            Elipse e1 = new Elipse();
            area = e1.calcularArea(20, 20);
            Console.WriteLine("Área da Elipse: " + area + " m2");
        }
    }
}`),

  orm_country: CB('Country.sql', `
CREATE TABLE [dbo].[Country](
    [id] [int] IDENTITY(1,1) NOT NULL,
    [Name] [nvarchar](50) NULL,
    [Capital] [nvarchar](50) NULL,
    [Population] [int] NULL,
    [Economy] [numeric](18, 0) NULL,
    [Currency] [nvarchar](20) NULL,
 CONSTRAINT [PK_Country] PRIMARY KEY CLUSTERED
(
    [id] ASC
)
WITH (PAD_INDEX = OFF,
    STATISTICS_NORECOMPUTE = OFF,
    IGNORE_DUP_KEY = OFF,
    ALLOW_ROW_LOCKS = ON,
    ALLOW_PAGE_LOCKS = ON,
    OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]`) + CB('Country.cs', `
using System;
using System.Collections.Generic;

namespace CountryApp.Models;

public partial class Country
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Capital { get; set; }

    public int? Population { get; set; }

    public decimal? Economy { get; set; }

    public string? Currency { get; set; }
}`),

  caso_script: CB('biblioteca.sql', `
CREATE TABLE MOTIVO_BAIXA (
  COD_MOTIVO_BAIXA SMALLINT  NOT NULL  ,
  DESC_MOTIVO_BAIXA VARCHAR(50)      ,
PRIMARY KEY(COD_MOTIVO_BAIXA));
CREATE TABLE EDITORA (
  COD_EDITORA INT  NOT NULL  ,
  NOME_EDITORA VARCHAR(50)      ,
PRIMARY KEY(COD_EDITORA));
CREATE TABLE FUNCIONARIO (
  MATRICULA INT  NOT NULL  ,
  NOME_FUNCIONARIO VARCHAR(100)    ,
  TEM_OAB BOOL      ,
PRIMARY KEY(MATRICULA));
CREATE TABLE AUTOR (
  COD_AUTOR INT  NOT NULL  ,
  NOME_AUTOR VARCHAR(100)      ,
PRIMARY KEY(COD_AUTOR));
CREATE TABLE ASSINATURA (
  COD_PUBLICACAO INT  NOT NULL  ,
  NOME_PUBLICACAO VARCHAR(100)    ,
  DATA_INICIAL_VIGENCIA DATE    ,
  DATA_FINAL_VIGENCIA DATE    ,
  DATA_PROXIMO_VENCIMENTO DATE    ,
  DATA_ULTIMO_PAGAMENTO DATE      ,
PRIMARY KEY(COD_PUBLICACAO));
CREATE TABLE LIVRO (
  ISBN NUMERIC(13)  NOT NULL  ,
  COD_EDITORA INT  NOT NULL  ,
  TITULO VARCHAR(200)  NOT NULL  ,
  ANO_PUBLICACAO NUMERIC(4)      ,
PRIMARY KEY(ISBN),
  FOREIGN KEY(COD_EDITORA)
    REFERENCES EDITORA(COD_EDITORA)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE ADVOGADO (
  MATRICULA INT  NOT NULL  ,
  NUMERO_OAB INT    ,
  REGIONAL CHAR(2)      ,
PRIMARY KEY(MATRICULA),
  FOREIGN KEY(MATRICULA)
    REFERENCES FUNCIONARIO(MATRICULA)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE REQUISICAO (
  COD_REQUISICAO INT  NOT NULL  ,
  ISBN NUMERIC(13)  NOT NULL  ,
  MATRICULA INT  NOT NULL  ,
  QUANTIDADE_REQUISITADA SMALLINT    ,
  DATA_REQUISICAO DATE    ,
  IND_AUTORIZACAO BOOL    ,
  DATA_DECISAO DATE      ,
PRIMARY KEY(COD_REQUISICAO),
  FOREIGN KEY(MATRICULA)
    REFERENCES FUNCIONARIO(MATRICULA)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(ISBN)
    REFERENCES LIVRO(ISBN)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE ACESSO (
  LOGIN VARCHAR(30)  NOT NULL  ,
  SENHA VARCHAR(100)    ,
  COD_PUBLICACAO INT  NOT NULL  ,
  MATRICULA INT  NOT NULL  ,
  IND_INATIVO BOOL      ,
PRIMARY KEY(LOGIN),
  FOREIGN KEY(MATRICULA)
    REFERENCES ADVOGADO(MATRICULA)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(COD_PUBLICACAO)
    REFERENCES ASSINATURA(COD_PUBLICACAO)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE ESCREVE (
  ISBN NUMERIC(13)  NOT NULL  ,
  COD_AUTOR INT  NOT NULL    ,
PRIMARY KEY(ISBN, COD_AUTOR),
  FOREIGN KEY(ISBN)
    REFERENCES LIVRO(ISBN)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(COD_AUTOR)
    REFERENCES AUTOR(COD_AUTOR)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE EXEMPLAR (
  COD_LIVRO INT  NOT NULL  ,
  ISBN NUMERIC(13)  NOT NULL  ,
  DATA_AQUISICAO DATE    ,
  PRECO DECIMAL(7,2)      ,
PRIMARY KEY(COD_LIVRO),
  FOREIGN KEY(ISBN)
    REFERENCES LIVRO(ISBN)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE BAIXA (
  COD_LIVRO INT  NOT NULL  ,
  COD_MOTIVO_BAIXA SMALLINT  NOT NULL  ,
  DATA_BAIXA DATE      ,
PRIMARY KEY(COD_LIVRO),
  FOREIGN KEY(COD_LIVRO)
    REFERENCES EXEMPLAR(COD_LIVRO)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(COD_MOTIVO_BAIXA)
    REFERENCES MOTIVO_BAIXA(COD_MOTIVO_BAIXA)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
CREATE TABLE EMPRESTIMO (
  COD_EMPRESTIMO INT  NOT NULL  ,
  MATRICULA INT  NOT NULL  ,
  COD_LIVRO INT  NOT NULL  ,
  DATA_RESERVA DATE    ,
  DATA_EMPRESTIMO DATE    ,
  DATA_RETORNO_EFETIVO DATE    ,
  DATA_DEVOLUCAO DATE      ,
PRIMARY KEY(COD_EMPRESTIMO),
  FOREIGN KEY(MATRICULA)
    REFERENCES FUNCIONARIO(MATRICULA)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(COD_LIVRO)
    REFERENCES EXEMPLAR(COD_LIVRO)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);`)
};
