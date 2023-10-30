// Array e Readonly

let numeros: Array<number|string> = [10, 20, 30, 40, 'Luiz'];
    numeros.push(50)// Metodo para adicionar algo no final do array.
    numeros.unshift(5)// Metodo para adicionar algo no inicio do array.
    numeros.pop()// Metodo para retirar o ultimo elemento do array.
    numeros.shift()// Metodo para tirar o primeiro elemento do array.

//Outra maneira de declarar array seria da maneira abaixo. Ambas as formas estão corretas, basta alterar o tipo do array. 

//Caso queira informar que o array pode ser, por exemplo, do tipo number ou string, no exemplo abaixo é preciso colocar number | string entre colchetes. 

let numeros2: (number|string)[] = [10, 20, 30, 40, 'Luiz']; 

console.log(numeros);
console.log(numeros2);

//Algumas vezes será preciso utilizar um array especifico. 



