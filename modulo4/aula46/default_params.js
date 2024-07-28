"use strict";
function descontoCompra(preco, desconto = 0.08) {
    return Math.floor(preco * (1 - desconto));
}
function exibirMensagem(nome, msg = "Iae, galera") {
    console.log(nome, msg);
}
exibirMensagem("Gabriel");
