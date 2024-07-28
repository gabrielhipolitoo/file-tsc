// exemplo 1
function somar(x: number, y: number): number {
  return x + y;
}

const resultado = somar(2, 5);

//  funcoes anonimas
const saudar = function (mensagem: string): string {
  return mensagem;
};

const saudar2 = (mensagem: string) => {
  return mensagem;
};

console.log(saudar2("Ola mundo"));
