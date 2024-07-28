export {};

class Pessoa4 {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): void {
    console.log("seu nome completo é " + this.nome + " " + this.sobrenome);
  }
}

const eu = new Pessoa4("Gabriel", "Hipolito");
eu.nomeCompleto();

class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;

  constructor(codigo: number, nome: string) {
    this.codigoEstudante = codigo;
    this.nomeEstudante = nome;
  }

  exibirEstudante() {
    console.log(this.codigoEstudante, this.nomeEstudante);
  }
}

const estudante = new Estudante(1020,'Gabriel');
estudante.exibirEstudante()
