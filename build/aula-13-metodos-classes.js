"use strict";
class Computadorr {
    nomeComp;
    ramComp;
    cpuComp;
    ligado;
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
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ramComp = qtde;
        }
        else {
            console.log(`A quantidade ${qtde} não é permitido para este computador.`);
        }
    }
}
const compe1 = new Computadorr('Primeiro Computador', 16, 8);
compe1.desligar();
compe1.ligar();
compe1.upRam(1001);
compe1.info();
