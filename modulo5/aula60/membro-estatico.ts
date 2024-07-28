export {};

class Funcionario {
  static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.titulo = titulo;

    Funcionario.contratacoes++;
  }
}

// const pessoa = new Funcionario("Gabriel", 'Hipolito', 'Developer')
// const pessoa2 = new Funcionario("Gabriel", 'Hipolito', 'Developer')
// console.log(Funcionario.contratacoes)

class Funcionario_01 {
  private static contratacao = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.titulo = titulo;

    Funcionario_01.contratacao++;
  }

  public static retornarContracacoes() {
    console.log(Funcionario_01.contratacao);
  }
}

const pessoa = new Funcionario_01("Gabriel", "Hipolito", "Developer");
const pessoa2 = new Funcionario_01("Gabriel", "Hipolito", "Developer");
console.log(Funcionario_01.retornarContracacoes());

type Raca = "Raca1" | "Raca2" | "raca3";

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static qtd_cachorros:string[] = [];

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;

      console.log(Cachorro.qtd_cachorros.push(nome));
      console.log(Cachorro.qtd_cachorros)
  }
}

const cachorro01 = new Cachorro("Pipoca", 2, ["Raca1"]); 
const cachorro02 = new Cachorro("miojo", 1, ["Raca2"]);
const cachorro03 = new Cachorro("miojo", 1, ["Raca2"]);

Cachorro.qtd_cachorros
