"use strict";
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUIN";
    Dia["Sexta"] = "SEXTA";
})(Dia || (Dia = {}));
function comida(c) {
    return 'Comida muuito apetitosa';
}
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const tarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabens, tarefa concluida'
};
if (tarefa.status === Tarefa.Done) {
    console.log('Tarefa concluida');
}
