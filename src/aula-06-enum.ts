//Enumeradores são conjuntos de dados que podemos utilizar e classificar por valores numerais ou textuais. 

enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6,
}

console.log(dias.domingo); //Imprimindo o valor da chave domingo.
console.log(dias['domingo']); //Outra forma de imprimir o valor da chave domingo. 
console.log(dias[1]);//Imprimindo domingo, que é a chave que possui o valor 1. 

const dia = dias[2]; //Atibuido 2, valor da chave segunda do nosso enum, onde dia passara a ter o valor segunda. 
console.log(dia);

const dia2 = new Date(); //Metodo para imprimir a data atual. 
console.log(dia2); //Imprimindo a data atual. 

console.log(dia2.getDate()); //Imprimindo a data atual. 
console.log(dia2.getDay()); //Imprimindo o número do dia atual. 

console.log(dias[dia2.getDay()]); //Imprimindo a chave do nosso enum que corresponda com o número atual que o getDay() traz. 








