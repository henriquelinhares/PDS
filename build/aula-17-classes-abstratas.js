"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abs = void 0;
class Abs {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Abs = Abs;
class AbsFilha extends Abs {
    idade;
    id;
    constructor(nome, idade) {
        super(nome);
        this.idade = idade;
        this.id = 34;
    }
    ids(n) {
        n = 35;
        return this.id = n;
    }
}
const abs1 = new AbsFilha('Eu', 12);
const abs2 = new Abs('Luiz');
const abs3 = new AbsFilha('Henrique', 34);
