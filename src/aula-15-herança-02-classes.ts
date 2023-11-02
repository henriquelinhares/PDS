//Heranças

//

class Monitor{
    nome:string;
    id:number;
    constructor(nome:string, id:number){
        this.nome = nome;
        this.id = id;
    }
}

class Monitor20Po extends Monitor{
    polegadas:number
    constructor(nome:string, id:number, polegadas:number){
        super(nome,id)
        this.polegadas = polegadas;
    }
}

class Monitor15Po extends Monitor{
    polegadas:number
    constructor(nome:string, id:number, polegadas:number){
        super(nome,id)
        this.polegadas = polegadas;
    }
}

const moni20 = new Monitor20Po('Grandão', 2, 20); 
console.log(moni20.nome);
