//Programação orientada a objetos. 

class Computador{ //Classe computador.
    nomeComp:string = ''; //Parametro da classe. 
    ramComp:number = 0;
    cpuComp:number = 0;
    ligado:boolean = true;
    constructor(nomeComp:string, ramComp: number, cpuComp:number, ligado:boolean){}
}

const comp1 = new Computador('Primeiro Computador.', 16, 8, false); //Objeto da classe computador. 

console.log(comp1);
