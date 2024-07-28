// ex1
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 124;
valorVariavel = [];
valorVariavel = "OI TUDO BEM?";

// ex2 com erro
let valor: unknown;

// let valor1: true = valor;
// diferenca entre any e unknown

let testeany: any;
let testeunknown: unknown;

console.log(testeany.toFixed(2));
if (typeof testeunknown === "number") console.log(testeunknown.toFixed(2));
