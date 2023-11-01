"use strict";
class Computador {
    nomeComp = '';
    ramComp = 0;
    cpuComp = 0;
    ligado = true;
    constructor(nomeComp, ramComp, cpuComp, ligado) { }
}
const comp1 = new Computador('Primeiro Computador.', 16, 8, false);
console.log(comp1);
