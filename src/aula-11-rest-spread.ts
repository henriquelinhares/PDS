//Parametros rest em com spread 

//Exemplo de função normal.
function reste(v1:number, v2:number):number{
    return v1 + v2;
}

console.log(reste(10, 20));

//Exemplo de função com parametro rest. 

function dfsoma(...n:number[]):number{ //Maneira de declarar o parametro rest. Como o rest é espalhador, precisa ser declado como array. 
    let s:number = 0;
    
    // for (let et of n) {     Maneira de realizar a mesma função com for of. 
    //     s+=et;
    // }

    n.forEach((en)=>{
        s+=en;
    }) 
    return s;
}
console.log(dfsoma(10, 20, 30));// A vantagem de rest é que pode ser adicionado quantos valores quisermos, sem precisar ter um numero fixo de parametros na função.
