//Metodos das classes. 
//Os métodos são funções das classes. 

//As vezes é necessário proteger os parametros e os métodos, então utilizamos os modificadores de acesso. 

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

    info(): void{ //Método info. O metodo está publico. 
        console.log(`Nome.: ${this.nomeComp}.`);
        console.log(`ram.: ${this.ramComp} GB de ram.`);
        console.log(`CPU.: ${this.cpuComp} núcleos.`);
        console.log(`O computador está ligado?: ${this.ligado?"Sim":"Não"}.`);//Forma de ternar. 
        console.log('----------------------------------'); 
    }

    ligar():void{
        this.ligado = true;
    }
    desligar():void {
        this.ligado = false;
    }

}

const compe1 = new Computadorr('Primeiro Computador', 16, 8, true);

compe1.ligado = true; //Os atributos e metodos da classe estão publicos, permitindo a alteração dos valores.
compe1.desligar(); //Utilizando o método para desligar. 

compe1.info(); 

 