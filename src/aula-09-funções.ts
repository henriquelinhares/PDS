//Funções 

//Sintaxe 

function teste():void{ //Funções com void indicam que estã função não retorna algo.
    console.log('Teste');
}
teste(); //Chamada da função. 

function logar(user:string, senha:number|string): void{//função contendo paremetros. 
    console.log('User: ' + user);
    console.log('Senha: ' + senha);
    
};
logar('Luiz', 12345); //Chamada da função com parametro. A ordem dos valores colocados precisam seguir a ordem dos parametros inseridos na função. 


function somar(n1: number, n2:number):number{//Aqui temos uma função com parametros e que retorna um valor para o usuario.
    let r = n1 + n2
    return  r; //Aqui precisamos usar o return para retornar o valor. 
}

const res:Number = somar(10,10);
console.log(res); 


//Podemos criar funções com parametros opcionais e parametros com valores padrão. O valor padrão serve pra incrementrar um valor caso o solicitado não seja implementado pelo usuario.

function soma(n3:number=0, n4:number=0):number {//Parametros com valor padrão.
    return n3 + n4; 
}
console.log(soma(5));//O resultado será impresso, mesmo sem colocar o segundo parametro, já que foi definido 0 como seu valor inicial. 


//Parametros opcionais:

function novoUser(user:string, senha:string, nome?:string): void{//Para indicar que um parametro é opcional é preciso colocar uma interrogação na frente dele.
    console.log(`User:${user}, Senha:${senha} e Nome:${nome}`);
    
}
novoUser('Linhares', 'cavalo'); 
