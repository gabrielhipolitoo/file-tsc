export {};
interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

function exibirPessoa(pessoa: Pessoa): void {
  const { nome, sobrenome, idade } = pessoa;

  console.log(nome, sobrenome, idade);
}

const eu: Pessoa = {
  nome: "Gabriel",
  sobrenome: "Hipolito",
  idade: 25,
};

interface Livro {
  titulo: string;
  autor: string;
  paginas?: number;
}

function meuLivro(livro: Livro): void {
  const { titulo, autor, paginas } = livro;

  console.log(titulo, autor, paginas ?? "");
}

const livro: Livro = {
  titulo: "O dono do mundo",
  autor: "Joseph Sants",
};

meuLivro(livro);

interface Carro {
  readonly modelo: string;
  ano: string | string;
  valor: number;
}

const carro: Carro = {
  modelo: "chevvete",
  ano: "2028",
  valor: 2,
};

// interface com classes e implaments

interface IAnimal {
  nome: string;
  idade: number;
  vivo: boolean;
  comer(tipoComida: string): void;
}

class Gato implements IAnimal {
  nome: string;
  idade: number;
  vivo: boolean;

  constructor(nome: string, idade: number, vivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.vivo = vivo;
  }

  comer(tipoComida: string) {
    console.log(`o Gato ${this.nome} esta comendo ${tipoComida}`);
  }
}

const gato = new Gato("Toto", 10, true);
gato.comer("Wiskas");

// interface vs Alias Type

interface Pessoa_02 {
  nome: string;
  sexo: string;
  idade: number;
}

type Pessoa_03 = {
  nome: string;
  sexo: string;
  idade: number;
};
