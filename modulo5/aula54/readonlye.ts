class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario = new Funcionario(new Date(7, 9, 1999));

class Funcionario_01 {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

class Funcionario_02 {
  nome: string;
  readonly codigoFuncionario: number;

  constructor(nome: string, codigo: number) {
    this.nome = nome;
    this.codigoFuncionario = codigo;
  }
}

const func = new Funcionario_02("Gabriel", 2020);
// console.log(func.codigoFuncionario = 12);

interface Ifuncionario {
  codigoFuncionario: number;
  nomeFuncionario: string;
}

const funcionario_01: Readonly<Ifuncionario> = {
  codigoFuncionario: 2020,
  nomeFuncionario: "Gabriel",
};

// funcionario_01.codigoFuncionario = 1010;
// funcionario_01.nomeFuncionario = "alana";
