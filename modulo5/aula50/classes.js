"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa4 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        console.log("seu nome completo é " + this.nome + " " + this.sobrenome);
    }
}
const eu = new Pessoa4("Gabriel", "Hipolito");
eu.nomeCompleto();
class Estudante {
    constructor(codigo, nome) {
        this.codigoEstudante = codigo;
        this.nomeEstudante = nome;
    }
    exibirEstudante() {
        console.log(this.codigoEstudante, this.nomeEstudante);
    }
}
const estudante = new Estudante(1020, 'Gabriel');
estudante.exibirEstudante();
