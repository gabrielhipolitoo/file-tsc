"use strict";
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(7, 9, 1999));
class Funcionario_01 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
class Funcionario_02 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}
const func = new Funcionario_02("Gabriel", 2020);
const funcionario_01 = {
    codigoFuncionario: 2020,
    nomeFuncionario: "Gabriel",
};
// funcionario_01.codigoFuncionario = 1010;
// funcionario_01.nomeFuncionario = "alana";
