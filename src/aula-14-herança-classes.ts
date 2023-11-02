//Heranças em classes. 

//Herança é quando uma classe herda caracteristicas de outra classe. 

class Conta{
    numero:number;
    titular:string;
    constructor(numero:number, titular:string){
        this.numero = numero;
        this.titular = titular;
    }
}

class ContaPessoaFisica extends Conta{//extends é utilizado para herdar atributos e metodos da classe Conta(classe mãe).
}
class ContaPessoaJuridica extends Conta{

}

const cont1 = new ContaPessoaFisica(12345, 'Henrique');
console.log(cont1);

const cont2 = new ContaPessoaJuridica(67890, 'Alice');
console.log(cont2);

