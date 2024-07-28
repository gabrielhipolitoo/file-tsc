"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//public
class Estudante {
    constructor(codigo, nome) {
        (this.codigoEstudante = codigo), (this.nomeEstudante = nome);
    }
    exibirEstudante() {
        console.log(this.codigoEstudante, this.nomeEstudante);
    }
}
//private
class Estudante_2 {
    constructor(codigo, nome, idade) {
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
    constructor(codigo, nome, idade) {
        (this.codigoEstudante = codigo),
            (this.nomeEstudante = nome),
            (this.idade = idade);
    }
    exibirEstudante() {
        console.log(this.codigoEstudante, this.nomeEstudante, this.idade);
    }
}
class Pessoa2 extends Estudante_3 {
    constructor(codigoEsutante, nomeEstudante, idade, curso) {
        super(codigoEsutante, nomeEstudante, idade);
        this.curso = curso;
    }
    exibirEstudante() {
        console.log(this.codigoEstudante, this.nomeEstudante, this.idade, this.curso);
    }
}
const pessoa = new Pessoa2(2020, "gabriel", 25, "ciencia da computação");
pessoa.exibirEstudante();
