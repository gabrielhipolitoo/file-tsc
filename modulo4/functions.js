"use strict";
// exemplo 1
function somar(x, y) {
    return x + y;
}
const resultado = somar(2, 5);
//  funcoes anonimas
const saudar = function (mensagem) {
    return mensagem;
};
const saudar2 = (mensagem) => {
    return mensagem;
};
console.log(saudar2("Ola mundo"));
