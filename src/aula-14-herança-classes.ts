//Heranças em classes. 

//Herança é quando uma classe herda caracteristicas de outra classe. 

class Conta{
    numero:number;
    titular:string;
    constructor(numero:number, titular:string){
        this.numero = numero;
        this.titular = titular;
    }
    gerarNumeroConta():number{
       return Math.floor(Math.random()*100000) + 1 //Sistema para gerar numero aleatório. Caso seja implementado, não será mais necessãrio passar o atributo numero no construtor. Então deve ficar: this.numero = gerarNumeroConta();
    }
}

class ContaPessoaFisica extends Conta{//extends é utilizado para herdar atributos e metodos da classe Conta(classe mãe).
    cpf:number; //Parametro exclusivo desta classe filha.
    constructor(cpf:number, numero:number, titular:string){//Se precisar adicionar um atributo diferente na classe filha, é preciso criar um construtor com o novo parametro e com os parametros da classe mãe.
        super(numero,titular)//Utilizado para invocar a classe mãe da classe que estiver trabalhando.
        this.cpf = cpf;
    }
}
class ContaPessoaJuridica extends Conta{ //Classe filha. 
    cnpj:number;
    constructor(cnpj:number, numero:number, titular: string){
        super(numero, titular);
        this.cnpj = cnpj; 
    }
}

const cont1 = new ContaPessoaFisica(123456789, 12345, 'Henrique');
console.log(cont1);

const cont2 = new ContaPessoaJuridica(123456789, 67890, 'Alice');
console.log(cont2);

