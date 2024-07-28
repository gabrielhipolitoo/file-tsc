"use strict";
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
function listasfrutas(frase, ...frutas) {
    return frase + " " + frutas.join(", ");
}
console.log(listasfrutas("voce precisa comprarr", "pera", "maça"));
const prods = ["celular", "fone", "mouse", "teclado"];
class Produts {
    exibirProdutos(...produtos) {
        produtos.map((x) => console.log(x));
    }
}
const loja = new Produts();
loja.exibirProdutos("celular", "fone", "mouse", "teclado");
