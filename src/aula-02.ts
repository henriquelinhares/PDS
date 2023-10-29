// Utilizando o comando tsc -w, ativa o modo  Watch input files, criando e modificando automaticamente os arquivos em JS.

//Tipagem em typescript 

let nome2: string = 'Henrique';
let idade1: number = 30;
let algo: null
let boleana: boolean = true;
let grupo: Array<number> = [1, 2, 3, 4];
class carro {
    nome3: string = this.nome3; 
    idade3: number = this.idade3;
    constructor(nome3: string, idade3: number){
        this.nome3 = nome3
        this.idade3 = idade3;
    }
}
let c2 = new carro('Peugeot', 15); 

console.log(nome2 + ' ' + idade1);
console.log(grupo);
console.log(c2.nome3);




