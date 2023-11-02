"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPessoaFisica extends Conta {
}
class ContaPessoaJuridica extends Conta {
}
const cont1 = new ContaPessoaFisica(12345, 'Henrique');
console.log(cont1);
const cont2 = new ContaPessoaJuridica(67890, 'Alice');
console.log(cont2);
