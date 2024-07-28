function error(message: string): never {
  throw new Error(message);
}

console.log(error("Erro mensagem"));

//ex2
function rejectMessage() {
  return error("mesaew");
}

//loop infinito

const loop = () => {
  while (true) {
    console.log("Ola ,developers");
  }
};

// const algo: void = null;
// const algoNever: never = null;
