//Metodos das classes. 
//Os métodos são funções das classes. 

//As vezes é necessário proteger os parametros e os métodos, então utilizamos os modificadores de acesso. 

//O modificador PUBLIC ele é publico, o padrão. Os métodos ou propriedades que sejam do tipo public, podem ser acessados de qualquer lugar. De dentro da classe, de fora e dos filhos(herança) das classes. 

//Private

//Protected  não permite mudar por fora, mas permite alterar por classes que sejam filhas. 

class Computadorr{ 
    nomeComp:string;  
    private ramComp:number;
    private cpuComp:number;
    private ligado:boolean; //Estando private, o computador só pode ser ligado atraves do metodo apropriado. 

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

    upRam(qtde:number):void{
        if(qtde >= 0 && qtde <= 1000){
            this.ramComp = qtde;
        }else{
            console.log(`A quantidade ${qtde} não é permitido para este computador.`);
        }       
    }

}

const compe1 = new Computadorr('Primeiro Computador', 16, 8);

// compe1.ligado = true; //Os atributos e metodos da classe estão publicos, permitindo a alteração dos valores.

compe1.desligar(); //Utilizando o método para desligar. 
compe1.ligar();

compe1.upRam(1001);

compe1.info(); 

 