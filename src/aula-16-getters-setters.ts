//Metodos getters e setters são utilizados como propriedades, sem precisar utilizar como funções.

//Os metodos setters servem para modificar algo na classe. 

//Já os metodos getters são para obter algo da classe. 


class Met{
    nome:string;
    idade:number;
    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }
    set nomew(n:string){//Sintaxe correta do set. O setter precisa de um valor para setar.
        this.nome = n;
    }
    get Idade():number{//Sintaxe correta de get.
        return this.idade; //Vai retornar a idade através do get Idade. 
    }
}

let m1 = new Met('Luiz', 30);

console.log(m1.Idade); //Chamando o get Idade para imprimir a idade do objeto criado. 

m1.nomew = 'Henrique'; //Setando o nome Henrique para o lugar do nome Luiz, no objeto m1. 

console.log(m1.nome);
