function descontoCompra(preco: number, desconto = 0.08) {
  return Math.floor(preco * (1 - desconto));
}

function exibirMensagem(nome: string, msg = "Iae, galera"): void {
  console.log(nome, msg);
}

exibirMensagem("Gabriel");
