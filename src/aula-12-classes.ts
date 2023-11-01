//Programação orientada a objetos. 

class Computador{ //Classe computador.
    nomeComp:string; //Parametro da classe. 
    ramComp:number;
    cpuComp:number;
    ligado:boolean = true;

    constructor(nomeComp:string, ramComp: number, cpuComp:number, ligado?:boolean){ //Metodo construtor.
        this.nomeComp = nomeComp; 
        this.ramComp = ramComp;
        this.cpuComp = cpuComp;
        this.ligado = false; 
    }  
}

//Embaixo foi instanciado(criado) um objeto da classe Computador.
const comp1 = new Computador('Primeiro Computador', 16, 8); //Objeto da classe computador. 

console.log(comp1); //Imprimindo o objeto criado associado a classe computador. 
