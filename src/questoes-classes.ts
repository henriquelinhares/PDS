export class Pessoa{
    nome:string;
    idade:number;
    email:string;
    constructor(nome:string, idade:number, email:string) {
        this.nome = nome; 
        this.idade = idade;
        this.email = email;
    }
}

class Aluno extends Pessoa{
    matricula:number; 
    constructor(nome: string, idade: number, email:string, matricula:number){
        super(nome, idade, email);
        this.matricula = matricula;
    }
}

class Retangulo{
    largura:number;
    altura:number;
    constructor(altura:number, largura:number){
        this.largura = largura;
        this.altura = altura;
    }
    
    public calculoArea(largura:number, altura:number): number{
        let calc = largura * altura;
        return calc;
    }

    public calculoPerimetro(l1:number, l2:number, l3:number, l4:number): number{ //Perimetro com quatro lados.
        let calc = l1 * l2 * l3 * l4;
        return calc;
    }
}
// let ret = new Retangulo(10, 35);
// console.log('A área possui ' + ret.calculoArea(10, 35) + 'm2.');

class ContaBancaria{
    saldo:number;
    numeroConta:number;
    constructor(saldo:number, numeroConta:number){
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }
    deposito(n:number): void{
        if(n > 0 && n < 1000){
            this.saldo = n;
        }else{
            console.log('Valor não permitido.');
        }
    }
    saque(n:number): void{
        if(n > this.saldo){
            console.log('Saldo insuficiente.');
            
        }else{
            this.saldo = this.saldo - n; 
        }
    }
    saldoCon(): void{
     console.log(`Seu saldo atual é: ${this.saldo}`);

    }
}

let cont10 = new ContaBancaria(0, 123456);

cont10.deposito(150);
cont10.saque(140);
cont10.saldoCon();





