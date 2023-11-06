"use strict";
class Met {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    set nomew(n) {
        this.nome = n;
    }
    get Idade() {
        return this.idade;
    }
}
let m1 = new Met('Luiz', 30);
console.log(m1.Idade);
m1.nomew = 'Henrique';
console.log(m1.nome);
