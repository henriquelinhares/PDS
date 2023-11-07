//Classes abstratas são utilizadas para serem apenas classes bases(classe mãe) de outras classes.

//Tranformando uma classe do tipo abstrata, vamos impedir que objetos sejam criados a partir dela(classe mãe). Para isso, basta apenas utilizar a sintaxe a seguir: abstract class NomeClasse{}.

//O readonly serve para "bloquearmos" um parametro para que ele seja apenas lido, sem poder alterar seu valor independente de classe mãe ou classe filha. Exemplo na classe AbsFilha.

export abstract class Abs{ //Como utilizar o abstract para bloquear a criação de objetos. 
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
}

class AbsFilha extends Abs{
    idade:number;
    private readonly id:number; //Readonly utilizado para que o valor de id apenas seja lido.
    constructor(nome:string, idade:number){
        super(nome);
        this.idade = idade;
        this.id = 34;
    }
    ids(n:number):number{
        n = 35;
        return this.id = n; //Erro, o valor de id não pode ser alterado mesmo dentro da classe. Fora também não será permitido. 
    }
}

const abs1 = new AbsFilha('Eu', 12);
const abs2 = new Abs('Luiz'); //Não mais permitido instanciar nesta classe. 

const abs3 = new AbsFilha('Henrique', 34); 


