const flor: string = "rosa";
console.time();

const flores: any = {
  rosa: "sao rosas",
  violeta: "violeta",
};
// switch (flor) {
//   case "rosa":
//     console.log("São rosas");
//     break;

//   default:
//     console.log("Essa flor não existe nesse banco de dados");
// }

console.log(flores[flor]);
console.timeEnd();
