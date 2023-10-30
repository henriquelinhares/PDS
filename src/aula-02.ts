// Utilizando o comando tsc -w, ativa o modo  Watch input files, criando e modificando automaticamente os arquivos em JS.

//Tipagem em typescript 
 
const entrada= require('readline-sync');

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

const cachorro = {
    nome: 'Luck',
    idade: 12,
    raça: 'Vira-lata'
}
console.log(cachorro.nome);


enum diaSemana{
    segunda, terça, quarta, quinta, sexta, sábado, domingo,
}
const diaHoje: diaSemana = diaSemana.domingo

console.log(nome2 + ' ' + idade1);
console.log(grupo);
console.log(c2.nome3);
console.log(diaHoje);

enum tipoUsuario {
    administrador, 
    comum,
    convidado
}
function verificarUsuario(usuario: tipoUsuario): void{
    if (usuario === tipoUsuario.administrador) {
        'Realizar ações administrativas';
    }else{
        'Acesso restrito para administradores.'
    }
}

let cursos: Array<string> = ['Javascript', 'Typescript', 'Java'];
console.log(cursos);
cursos.push('Lógica');
console.log(cursos);






