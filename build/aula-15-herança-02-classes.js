"use strict";
class Monitor {
    nome;
    id;
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
}
class Monitor20Po extends Monitor {
    polegadas;
    constructor(nome, id, polegadas) {
        super(nome, id);
        this.polegadas = polegadas;
    }
}
class Monitor15Po extends Monitor {
    polegadas;
    constructor(nome, id, polegadas) {
        super(nome, id);
        this.polegadas = polegadas;
    }
}
const moni20 = new Monitor20Po('Grandão', 2, 20);
console.log(moni20.nome);
