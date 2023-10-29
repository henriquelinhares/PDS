"use strict";
const nome = 'Bruno';
const canal = 'CFB';
const curso = 'typescript';
console.log(nome);
console.log(canal);
console.log(curso);
class teste {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new teste('CFC', 'typescript');
console.log(c1);
