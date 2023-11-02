"use strict";
class Monitor {
    nome;
    id;
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    info() {
        console.log(`O nome do monitor é:${this.nome}.`);
        console.log(`O número de identificação do monitor é:${this.id}.`);
    }
}
class Monitor20Po extends Monitor {
    polegadas;
    constructor(nome, id, polegadas) {
        super(nome, id);
        this.polegadas = polegadas;
        console.log('Monitor de 20 polegadas criado. Nome: ' + this.nome);
    }
}
class Monitor15Po extends Monitor {
    polegadas;
    constructor(nome, id, polegadas) {
        super(nome, id);
        this.polegadas = polegadas;
        console.log('Monitor de 15 polegadas criado. Numero de identi.: ' + this.id);
    }
}
const moni20 = new Monitor20Po('Grandão', 2, 20);
console.log(moni20.nome);
const moni15 = new Monitor15Po('15 polegadas', 3, 15);
