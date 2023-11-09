let cursoo:{ //Objeto literal declarado, mas ainda sem valores. 
    tituloo:string;
    maxAlunos:number;
    aulas:number;
}

cursoo = {tituloo:'Typescript', maxAlunos: 25, aulas: 25,} //Atibuindo valores ao objeto.


//A maneira acima, no objeto literal, se quisermos criar um novo objeto para um outro curso, teremos que replicar a forma que foi feito para o cursoo. Se quisermos criar novos objetos a partir de um já existente, como é visto em classes, precisamos utilizar o recurso de interfces. 

//Interfaces. 

interface cursos { //Objeto criado utilizando interface. Permite criar outros objetos a partir dele. 
    nomeCurso:string,
    aulasCurso:number,
    maxAlunos?:number, //A interrogação informa que esse é um parametro opcional. 

    iniciarCurso?(teste:string):void; //Criando uma função com parametro em interface. 
}
function iniciarCurso():void{
    console.log('Teste!');
};


let curso1:cursos = {nomeCurso:'Typescript', aulasCurso:35, maxAlunos: 25}; //Novo objeto criado. 
let curso2:cursos = {nomeCurso:'Javascript', aulasCurso: 35, maxAlunos: 25}; //Novo objeto criado. 
let curso3:cursos = {nomeCurso:'Java', aulasCurso: 35, maxAlunos: 25};
let curso4:cursos = {nomeCurso:'PHP', aulasCurso: 35, maxAlunos: 25};  

console.log(iniciarCurso());


//Herança em interfaces. 

//Tamém conseguimos uteilzar herança em interfaces de forma semelhante como é em classes. Exemplo. 

interface cursosSaude extends cursos{ //Criamos uma nova interface que vai se basear a partir da interface cursos. 
    materias:number,                  //Nas interfaces "filhas" os parametros herdados não precisam ser repetidos, eles já serão solicitados
    meses:number,                     //de forma automatica na criação do objeto. Ex: linha 48. 
}

interface cursosExatas extends cursos{
    materias:number,
    meses:number,
}

let cursoEnfermagem:cursosSaude = {nomeCurso:'Enfermagem', aulasCurso:50, maxAlunos:40, materias:10, meses:12}; //
let cursoFisica:cursosExatas = {nomeCurso:'Fisica', aulasCurso:50, maxAlunos:40, materias:15, meses:15};

console.log(cursoEnfermagem);
console.log(cursoFisica);


//Também podemos implementar interfaces em classes. Por exemplo: 

abstract class Livros{
    titulo:string;
    autor: string;
    constructor(titulo:string, autor:string){
        this.titulo = titulo; 
        this.autor = autor;
    }
}

interface pagarLivro{
    taxaPagar:number;
    pagar(valor:number):number; 
}

class livrosBiologia extends Livros implements pagarLivro{ //Implements é utilizado para importar interfaces.
    taxaPagar:number = 0; 
    assunto:string;
    capitulos:number;
    constructor(titulo:string, autor:string, assunto:string, capitulos:number){
        super(titulo,autor);
        this.assunto = assunto;
        this.capitulos = capitulos;
    }
    pagar(valor:number):number {
        return valor + this.taxaPagar
    }
}

const l1bio = new livrosBiologia('Genetica', 'Henrique', 'Evolução genetica', 15); 

l1bio.pagar(10); 
