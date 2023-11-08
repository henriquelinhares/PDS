let cursoo:{ //Objeto literal declarado, mas ainda sem valores. 
    tituloo:string;
    maxAlunos:number;
    aulas:number;
}

cursoo = {tituloo:'Typescript', maxAlunos: 25, aulas: 25,} //Atibuindo valores ao objeto.

console.log(cursoo);

//A maneira acima, no objeto literal, se quisermos criar um novo objeto para um outro curso, teremos que replicar a forma que foi feito para o cursoo. Se quisermos criar novos objetos a partir de um já existente, como é visto em classes, precisamos utilizar o recurso de interfces. 

//Interfaces. 

interface cursos { //Objeto criado utilizando interface. Permite criar outros objetos a partir dele. 
    nomeCurso:string,
    aulasCurso:number,
    maxAlunos:number,
}

let curso1:cursos = {nomeCurso:'Typescript', aulasCurso:35, maxAlunos: 25}; //Novo objeto criado. 
let curso2:cursos = {nomeCurso:'Javascript', aulasCurso: 35, maxAlunos: 25}; //Novo objeto criado. 
let curso3:cursos = {nomeCurso:'Java', aulasCurso: 35, maxAlunos: 25}; 