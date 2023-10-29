// Utilizando o comando tsc -w, ativa o modo  Watch input files, criando e modificando automaticamente os arquivos em JS.

//Tipagem em typescript 

let nome1 = 'Luiz';
let nome2: string = 'Henrique';
let idade1: number = 30; 

console.log(nome2 + ' ' + idade1);

class pessoa {
    constructor(nome:string, idade:number, profissão:string){

    }
}

let p1 = new pessoa('Linhares', 30, 'Biólogo');
console.log(p1);


