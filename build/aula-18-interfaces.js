"use strict";
let cursoo;
cursoo = { tituloo: 'Typescript', maxAlunos: 25, aulas: 25, };
function iniciarCurso() {
    console.log('Teste!');
}
;
let curso1 = { nomeCurso: 'Typescript', aulasCurso: 35, maxAlunos: 25 };
let curso2 = { nomeCurso: 'Javascript', aulasCurso: 35, maxAlunos: 25 };
let curso3 = { nomeCurso: 'Java', aulasCurso: 35, maxAlunos: 25 };
let curso4 = { nomeCurso: 'PHP', aulasCurso: 35, maxAlunos: 25 };
console.log(iniciarCurso());
let cursoEnfermagem = { nomeCurso: 'Enfermagem', aulasCurso: 50, maxAlunos: 40, materias: 10, meses: 12 };
let cursoFisica = { nomeCurso: 'Fisica', aulasCurso: 50, maxAlunos: 40, materias: 15, meses: 15 };
console.log(cursoEnfermagem);
console.log(cursoFisica);
class Livros {
    titulo;
    autor;
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}
class livrosBiologia extends Livros {
    taxaPagar = 0;
    assunto;
    capitulos;
    constructor(titulo, autor, assunto, capitulos) {
        super(titulo, autor);
        this.assunto = assunto;
        this.capitulos = capitulos;
    }
    pagar(valor) {
        return valor + this.taxaPagar;
    }
}
const l1bio = new livrosBiologia('Genetica', 'Henrique', 'Evolução genetica', 15);
l1bio.pagar(10);
