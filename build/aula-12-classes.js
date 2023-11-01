"use strict";
class Computador {
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
}
const comp1 = new Computador('Primeiro Computador', 16, 8);
console.log(comp1);
