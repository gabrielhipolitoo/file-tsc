export {};

class Animal {
  mover(distancia = 0) {
    console.log(`O animal se moveu...:${distancia}`);
  }
}

class Gato extends Animal {
  miar() {
    console.log("Miu mimimiau");
  }
}

const miau = new Gato();
console.log(miau.miar());
miau.mover(20);

class Pessoa {
  constructor(private nome: string, private sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  retornarNomeCompleto(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  }

  saudarPessoa() {
    console.log("Ola, meu nomé", this.nome);
  }
}

class Funcionario extends Pessoa {
  constructor(nome: string, sobrenome: string) {
    super(nome, sobrenome);
  }
}

const funcionario = new Funcionario("Gabriel", "Hipolito");
funcionario.retornarNomeCompleto()
funcionario.saudarPessoa()