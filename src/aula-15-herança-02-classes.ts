//Heranças

//Caso os atributos da classe mãe estejam como private, as classes filhas não conseguiram acessar diretamente esses atributos, mesmo que seja de forma interna delas.

//Para uma classe mãe permitir que suas classes filhas utilizem seus atributos ou metodos, o protected é utilizado para isso. 

class Monitor{
    public nome:string;
    protected id:number; //Permitindo apenas classes filhas acessarem o id.
    constructor(nome:string, id:number){
        this.nome = nome;
        this.id = id;
    }
    protected info(){ //Metodo disponivel apenas para a classe mãe e as classes filhas. 
        console.log(`O nome do monitor é: ${this.nome}.` );
        console.log(`O número de identificação do monitor é: ${this.id}.`);
    }
}

class Monitor20Po extends Monitor{
    polegadas:number
    constructor(nome:string, id:number, polegadas:number){
        super(nome,id)
        this.polegadas = polegadas;
        console.log('Monitor de 20 polegadas criado. Nome: ' + this.nome);//Devido a classe mãe ser do tipo public, é possivel acessar os atributos fora da classe e também atraves das classes filhas.
    }
    info(){//Metodo info da classe filha. 
        super.info()//Utilizando o super.info() para acessar as informações do metodo info da classe mae.
        console.log(`Quantidade de polegadas: ${this.polegadas}`);
        //Será impresso as informações de info da classe mae + as de info da classe filha. 
    }
}

class Monitor15Po extends Monitor{
    polegadas:number
    constructor(nome:string, id:number, polegadas:number){
        super(nome,id)
        this.polegadas = polegadas;
        console.log('Monitor de 15 polegadas criado. Numero de identi.: ' + this.id);//Acessando o id internamente
    }
}

const moni20 = new Monitor20Po('Grandão', 2, 20);
// console.log(moni20.nome);//Acesso externo

const moni15 = new Monitor15Po('15 polegadas', 3, 15);
// console.log(moni15.id); Gera erro ao tentar acessar o id(protected) externamente.

console.log(moni20.info());




