// exemplo basico do object
export {}
const pessoa = {
  nome: "gabriel",
  sobrenome: "Hipolito",
  iadde: 25,
  profissao: "desenvolvedor full stack",
};

function onboarding01(funcionario: { nome: string }) {
  return "Seja bem-vinda" + funcionario.nome;
}

// objeto nomeado
interface Pessoa {
  nome: string;
  idade: number;
}
function onboarding02(funcionario: Pessoa) {
  return "Seja bem-vinda" + funcionario.nome;
}

console.log(onboarding02({ nome: "gabriel", idade: 25 }));

// type

type Pessoa02 = {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
};

function onboarding03(funcionario: Pessoa02) {
  return funcionario.nome + funcionario.funcao + funcionario.linguagem;
}

console.log(
  onboarding03({
    nome: "Gabriel",
    funcao: "full stack",
    linguagem: "node.js",
    email: "gabrielhipolito@gmail.com",
  }),
);
interface Mae {
  nome: string;
}

interface Pai {
  sobrenone: string;
}

interface Filhos extends Mae, Pai {
  idade: number;
}
const filha: Filhos = {
  nome: "Gabriel",
  sobrenone: "Hipolito",
  idade: 25,
};

interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

const animaiss: Animal = { tipo: "cachorro" };
type Admin = {
  nome: string;
  email: string;
  admin: true;
};

type Usuario = {
  nome: string;
  email: string;
};

const usuario: Usuario = {
  nome: "Gabriel",
  email: "gabrielHipoli@gmail",
};

const admin: Admin = {
  nome: "Gabriel",
  email: "gabrielHipoli@gmail",
  admin: true,
};
function acessarSistema<T>(usuario: T): T {
  return usuario;
}

// function acessarSistema(usuario: Usuario): Usuario{
//     return usuario
// }
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));
