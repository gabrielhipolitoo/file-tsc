function somarNumeros(...numeros: number[]) {
  let total = 0;
  numeros.forEach((numero) => (total += numero));
  return total;
}

function listasfrutas(frase: string, ...frutas: string[]) {
  return frase + " " + frutas.join(", ");
}

console.log(listasfrutas("voce precisa comprarr", "pera", "maça"));

const prods = ["celular", "fone", "mouse", "teclado"];

class Produts {
  public exibirProdutos(...produtos: string[]): void {
    produtos.map((x) => console.log(x));
  }
}

const loja: Produts = new Produts();
loja.exibirProdutos("celular", "fone", "mouse", "teclado");
