// exemplo 1
let pessoa: [string, string, number]; //tuplas
pessoa = ["Gabriel Hipolito", "fullstack", 25];

let pessoa2: [string, ...string[]]; // tuplas com spread operator
pessoa2 = ["Gabriel Hipolito", "fullstack", "joao"];
console.log(...pessoa2);

let pessoa3: [nome: string, profissao: string, idade: number]; //labels
pessoa3 = ["Gabriel Hipolito", "fullstack", 25];
console.log(pessoa3);

//Lista Heterogênea de tupla
let pessoa4: [number, boolean, ...string[]] = [5, true, ...pessoa2];
console.log(pessoa4);
//4:31
