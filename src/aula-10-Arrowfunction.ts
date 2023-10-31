//Arrow function ou função de seta, que são funções anonimas. Podemos utilizar sempre que não quisermos declarar uma função.

//Uma grande diferença de uma arrow function para as funções tradicionais, é que na arrow não conseguimos chama-la antes da sua declaração.

//Sintaxe
const teste2 = ():void =>{//Funções de seta sempre serão feitas associadas a uma variavel ou constante, porque ela não tem uma declaração, ela é anonima.
    console.log('Teste!');
    
}
teste2();

const teste3 = (t:number[]):Number=>{//Sintaxe da função de seta com retorno.
    let res:number = 0;
        t.forEach((e)=>{ //Maneira de somar numeros de um array, utilizando função de seta com forEach. 
            res += e;
        }); 
    return res; 
}

let nums:Array<number> = [10, 20, 30, 40];

console.log(teste3(nums));



 