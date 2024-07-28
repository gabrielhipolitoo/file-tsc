"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
    saudarPessoa() {
        console.log("Ola, meu nomé", this.nome);
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome) {
        super(nome, sobrenome);
    }
}
const funcionario = new Funcionario("Gabriel", "Hipolito");
funcionario.retornarNomeCompleto();
funcionario.saudarPessoa();
