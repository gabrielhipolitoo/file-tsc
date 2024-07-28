export {};

//public

class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;

  constructor(codigo: number, nome: string) {
    (this.codigoEstudante = codigo), (this.nomeEstudante = nome);
  }

  exibirEstudante() {
    console.log(this.codigoEstudante, this.nomeEstudante);
  }
}
//private
class Estudante_2 {
  codigoEstudante: number;
  nomeEstudante: string;
  private idade: number;

  constructor(codigo: number, nome: string, idade: number) {
    (this.codigoEstudante = codigo),
      (this.nomeEstudante = nome),
      (this.idade = idade);
  }

  exibirEstudante() {
    console.log(this.codigoEstudante, this.nomeEstudante, this.idade);
  }
}

//protected
class Estudante_3 {
  codigoEstudante: number;
  nomeEstudante: string;
  protected idade: number;

  constructor(codigo: number, nome: string, idade: number) {
    (this.codigoEstudante = codigo),
      (this.nomeEstudante = nome),
      (this.idade = idade);
  }

  exibirEstudante() {
    console.log(this.codigoEstudante, this.nomeEstudante, this.idade);
  }
}

class Pessoa2 extends Estudante_3 {
  private curso: string;

  constructor(
    codigoEsutante: number,
    nomeEstudante: string,
    idade: number,
    curso: string,
  ) {
    super(codigoEsutante, nomeEstudante, idade);
    this.curso = curso;
  }

  exibirEstudante() {
    console.log(
      this.codigoEstudante,
      this.nomeEstudante,
      this.idade,
      this.curso,
    );
  }
}

const pessoa = new Pessoa2(2020, "gabriel", 25, "ciencia da computação");
pessoa.exibirEstudante();
