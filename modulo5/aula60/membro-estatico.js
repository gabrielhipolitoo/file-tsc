"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
}
Funcionario.contratacoes = 0;
// const pessoa = new Funcionario("Gabriel", 'Hipolito', 'Developer')
// const pessoa2 = new Funcionario("Gabriel", 'Hipolito', 'Developer')
// console.log(Funcionario.contratacoes)
class Funcionario_01 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario_01.contratacao++;
    }
    static retornarContracacoes() {
        console.log(Funcionario_01.contratacao);
    }
}
Funcionario_01.contratacao = 0;
const pessoa = new Funcionario_01("Gabriel", "Hipolito", "Developer");
const pessoa2 = new Funcionario_01("Gabriel", "Hipolito", "Developer");
console.log(Funcionario_01.retornarContracacoes());
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        console.log(Cachorro.qtd_cachorros.push(nome));
        console.log(Cachorro.qtd_cachorros);
    }
}
Cachorro.qtd_cachorros = [];
const cachorro01 = new Cachorro("Pipoca", 2, ["Raca1"]);
const cachorro02 = new Cachorro("miojo", 1, ["Raca2"]);
const cachorro03 = new Cachorro("miojo", 1, ["Raca2"]);
Cachorro.qtd_cachorros;
