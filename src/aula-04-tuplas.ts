// Javascript não implementa tuplas. Isso se torna uma vantagem para o typescript. Tuplas são array que podemos definir tipos especificos para posições especificas. 

let coisas:Array<number|string> = ['Luiz', 30];
console.log(coisas);


//No exemplo acima temos um array normal, onde ele pode receber elementos do tipo number e do tipo string. Porem, não especifica onde deve ser number e onde deve ser string. Exemplo:

let coisas2:[string, number] = ['Luiz', 30,];
console.log(coisas2);
coisas[0] = 30; 

//No exemplo do array tupla, caso tente inserior um terceiro valor, ocasionara um erro. É preciso definir, também, o tipo deste terceiro elemento que quer inserir.

console.log(coisas[0]); //Imprimindo valor de acordo com indice. 

//Tomar cuidado com o uso de tuplas...

