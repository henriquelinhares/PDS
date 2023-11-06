"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    idade;
    email;
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}
exports.Pessoa = Pessoa;
class Aluno extends Pessoa {
    matricula;
    constructor(nome, idade, email, matricula) {
        super(nome, idade, email);
        this.matricula = matricula;
    }
}
class Retangulo {
    largura;
    altura;
    constructor(altura, largura) {
        this.largura = largura;
        this.altura = altura;
    }
    calculoArea(largura, altura) {
        let calc = largura * altura;
        return calc;
    }
    calculoPerimetro(l1, l2, l3, l4) {
        let calc = l1 * l2 * l3 * l4;
        return calc;
    }
}
class ContaBancaria {
    saldo;
    numeroConta;
    constructor(saldo, numeroConta) {
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }
    deposito(n) {
        if (n > 0 && n < 1000) {
            this.saldo = n;
        }
        else {
            console.log('Valor não permitido.');
        }
    }
    saque(n) {
        if (n > this.saldo) {
            console.log('Saldo insuficiente.');
        }
        else {
            this.saldo = this.saldo - n;
        }
    }
    saldoCon() {
        console.log(`Seu saldo atual é: ${this.saldo}`);
    }
}
let cont10 = new ContaBancaria(0, 123456);
cont10.deposito(150);
cont10.saque(140);
cont10.saldoCon();
