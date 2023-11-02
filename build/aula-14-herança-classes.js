"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPessoaFisica extends Conta {
    cpf;
    constructor(cpf, numero, titular) {
        super(numero, titular);
        this.cpf = cpf;
    }
}
class ContaPessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, numero, titular) {
        super(numero, titular);
        this.cnpj = cnpj;
    }
}
const cont1 = new ContaPessoaFisica(123456789, 12345, 'Henrique');
console.log(cont1);
const cont2 = new ContaPessoaJuridica(123456789, 67890, 'Alice');
console.log(cont2);
