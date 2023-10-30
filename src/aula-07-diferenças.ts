//Diferença entre Null(nulo), undefined(indefinido) e unknown(desconhecido).

//Null é um valor, porem um valor nulo. Podemos atribuir null a uma variavel. Null não quer dizer que a variavel está vazia, mas sim que é null. Null é um tipo! 

let vnome:string|null; //Aqui informamos que vnome pode receber string e null. 
    vnome = null; //vnome recebe null. Se tirarmos null na tipagem inicial, aqui o vnome não podera receber null. 
console.log(vnome); 


//Undefined. Quando não atribuimos um valor para uma variavel, ela será undefined. 

let vnome2; //Aqui a variavel não tem um valor definido, então não tem tipo. 
console.log(vnome2);

//Unknown é um tipo desconhecido. 

let vnome3:unknown = 10; //vnome3 está como tipo desconhecido e contem um numero. Unknown só pode ser atribuido a variaveis do tipo unknown ou any. 
console.log(vnome3);
