"use strict";
// //get
// export {};
// class Quadrado {
//   private _largura: number = 6;
//   private _altura: number = 6;
//   get calcularArea(): number {
//     return this._altura * this._largura;
//   }
// }
// console.log(new Quadrado().calcularArea);
// //set
// class Pessoa {
//   nome: string;
//   retornarNome(setNome: string) {
//     this.nome = setNome;
//   }
// }
// const pessoa = new Pessoa();
// pessoa.retornarNome("Gabriel");
// class Estudante {
//   private _nome = "Gabriel";
//   private _semestre: number;
//   private _curso: string;
//   public get nomeEstudante() {
//     return this._nome;
//   }
// }
// const estudante = new Estudante();
// const resultado = estudante.nomeEstudante;
// class Estudante_01 {
//   nome: string;
//   semestre: number;
//   curso: string;
//   constructor(nome: string, semestre: number, curso: string) {
//     this.nome = nome;
//     this.semestre = semestre;
//     this.curso = curso;
//   }
//   public get exibirCurso() {
//     return this.curso;
//   }
//   public set cursos(SetCurso: string) {
//     this.curso = SetCurso;
//   }
// }
// const est = new Estudante_01("Gabriel", 4, "Ciencia da computacao");
// console.log(est.exibirCurso);
// est.cursos = "Analise e desenvolvimento de sistemas";
// console.log(est.exibirCurso);
