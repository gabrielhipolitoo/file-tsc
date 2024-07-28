export {};
interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosClientes = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosClientes: DadosClientes = {
  conta: 20394,
  agencia: 9066,
  banco: "itau",
  nome: "Gabriel",
  email: "c.gabriel",
  cpf: 1223223323,
};

console.log(dadosClientes)