enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
};


enum Dia {
    Segunda = "SEG",
    Terca = "TER",
    Quarta = "QUA",
    Quinta = "QUIN",
    Sexta = "SEXTA"
}

const enum Comida {
    Hamburguer,
    Torta,
    Pizza,
    Lasanha,
    Churrasco
}


function comida(c: Comida) {
    return 'Comida muuito apetitosa'
}


enum Tarefa {
    Todo,
    Progress,
    Done
}

const tarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao:'Parabens, tarefa concluida'
}

if (tarefa.status === Tarefa.Done) {
    console.log('Tarefa concluida')
}