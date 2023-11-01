
class Computadorr{ 
    nomeComp:string;  
    ramComp:number;
    cpuComp:number;
    ligado:boolean = true;

    constructor(nomeComp:string, ramComp: number, cpuComp:number, ligado?:boolean){ 
        this.nomeComp = nomeComp; 
        this.ramComp = ramComp;
        this.cpuComp = cpuComp;
        this.ligado = false; 
    }  
}


const compe1 = new Computador('Primeiro Computador', 16, 8); 

console.log(comp1); 