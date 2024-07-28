function inforDados(id: number, nome: string, email?: string): void {
  console.log("id:", id, "...", "nome:", nome, "...");

  if (email != undefined) console.log("email:", email);
}

inforDados(98908, "gabriel", "c.gabmail.com");

type Pessoa2 = {
  id: number;
  nome: string;
  idade: number;
  email?: string;
};

function inforDados2(pessoa: Pessoa2): void {
  const { id, nome, idade } = pessoa;
  console.log("id:", id, "...", "nome:", nome, "...");
}
