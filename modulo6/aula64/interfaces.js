"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirPessoa(pessoa) {
    const { nome, sobrenome, idade } = pessoa;
    console.log(nome, sobrenome, idade);
}
const eu = {
    nome: "Gabriel",
    sobrenome: "Hipolito",
    idade: 25,
};
function meuLivro(livro) {
    const { titulo, autor, paginas } = livro;
    console.log(titulo, autor, paginas ?? "");
}
const livro = {
    titulo: "O dono do mundo",
    autor: "Joseph Sants",
};
meuLivro(livro);
const carro = {
    modelo: "chevvete",
    ano: "2028",
    valor: 2,
};
class Gato {
    constructor(nome, idade, vivo) {
        this.nome = nome;
        this.idade = idade;
        this.vivo = vivo;
    }
    comer(tipoComida) {
        console.log(`o Gato ${this.nome} esta comendo ${tipoComida}`);
    }
}
const gato = new Gato("Toto", 10, true);
gato.comer("Wiskas");
