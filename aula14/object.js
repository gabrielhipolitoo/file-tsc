"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: "gabriel",
    sobrenome: "Hipolito",
    iadde: 25,
    profissao: "desenvolvedor full stack",
};
function onboarding01(funcionario) {
    return "Seja bem-vinda" + funcionario.nome;
}
function onboarding02(funcionario) {
    return "Seja bem-vinda" + funcionario.nome;
}
console.log(onboarding02({ nome: "gabriel", idade: 25 }));
function onboarding03(funcionario) {
    return funcionario.nome + funcionario.funcao + funcionario.linguagem;
}
console.log(onboarding03({
    nome: "Gabriel",
    funcao: "full stack",
    linguagem: "node.js",
    email: "gabrielhipolito@gmail.com",
}));
const filha = {
    nome: "Gabriel",
    sobrenone: "Hipolito",
    idade: 25,
};
const animaiss = { tipo: "cachorro" };
const usuario = {
    nome: "Gabriel",
    email: "gabrielHipoli@gmail",
};
const admin = {
    nome: "Gabriel",
    email: "gabrielHipoli@gmail",
    admin: true,
};
function acessarSistema(usuario) {
    return usuario;
}
// function acessarSistema(usuario: Usuario): Usuario{
//     return usuario
// }
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
