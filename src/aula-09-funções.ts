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

