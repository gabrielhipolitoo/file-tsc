const nome: string = "gabriel"; // variaveis

let animais: string[] = ["gato", "cachorro"];
console.log(animais);

let carro: {
  combustivel: string;
  portas: number;
  marcar: string;
};

carro = { combustivel: "diesel", portas: 4, marcar: "hynday" };

function myName(name: string) {
  return name;
}

console.log(myName("Gabriel"));
