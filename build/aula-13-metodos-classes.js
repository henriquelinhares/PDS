"use strict";
class Computadorr {
    nomeComp;
    ramComp;
    cpuComp;
    ligado = true;
    constructor(nomeComp, ramComp, cpuComp, ligado) {
        this.nomeComp = nomeComp;
        this.ramComp = ramComp;
        this.cpuComp = cpuComp;
        this.ligado = false;
    }
    info() {
        console.log(`Nome.: ${this.nomeComp}.`);
        console.log(`ram.: ${this.ramComp} GB de ram.`);
        console.log(`CPU.: ${this.cpuComp} núcleos.`);
        console.log(`O computador está ligado?: ${this.ligado ? "Sim" : "Não"}.`);
        console.log('----------------------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const compe1 = new Computadorr('Primeiro Computador', 16, 8, true);
compe1.ligado = true;
compe1.desligar();
compe1.info();
