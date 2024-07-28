export {};

abstract class Funcionario {
  constructor(private nome: string, private sobrenome: string) {}

  abstract retornarSalario(): number;

  get retornarNome(): string {
    return this.nome + this.sobrenome;
  }

  emitirContraCheque(): number {
    return this.retornarSalario();
  }
}

class FuncionarioClt extends Funcionario {
  constructor(nome: string, sobrenome: string, private salario: number) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPj extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private valorHora: number,
    private horasTrabalhadas: number,
  ) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const func1 = new FuncionarioClt("Gabriel", "Hipolito", 7000);
const func2 = new FuncionarioPj("Gabriel", "Hipolito", 90, 160);
console.log(func1.emitirContraCheque())
console.log(func2.emitirContraCheque())