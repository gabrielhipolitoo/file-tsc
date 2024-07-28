export {};
// interfaces com extends

interface Animal {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro extends Animal {
  raca: string;
}

const cachorro: Cachorro = {
  nome: "Miojo",
  idade: 1,
  porte: "grande",
  raca: "hotviile",
};

// multiplas extensao

interface Cachorro_2 {
  nome: string;
}

interface Gato {
  nome: string;
}

interface Animal_01 extends Cachorro_2, Gato {
  idade: number;
}

const animal:Animal_01 = {
    nome: "Farofa",
    idade:2
}

// uso do omit

interface Funcionario {
    id: number;
    nome: string;
    salario:number
}

interface Desenvolvedor extends Omit<Funcionario, 'id'>{
    id:string
    linguagem:string
}

const desenvolvedor: Desenvolvedor = {
    id: "dss",
    linguagem: "Js",
    nome: "Gabriel",
    salario:1000
}