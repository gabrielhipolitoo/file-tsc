"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNome() {
        return this.nome + this.sobrenome;
    }
    emitirContraCheque() {
        return this.retornarSalario();
    }
}
class FuncionarioClt extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPj extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const func1 = new FuncionarioClt("Gabriel", "Hipolito", 7000);
const func2 = new FuncionarioPj("Gabriel", "Hipolito", 90, 160);
console.log(func1.emitirContraCheque());
console.log(func2.emitirContraCheque());
