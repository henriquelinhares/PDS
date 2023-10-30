//Type assertion é uma afirmação de tipo. É quando precisamos afirmar que um tipo desconhecido é de um tipo conhecido. 

let nvalor: number;
let svlaor:string;
let uvalor:unknown;

uvalor = 10; //Tipo inicial unknown passando a ser number e contendo o valor 10. 
console.log(typeof(uvalor)); //Imprimindo o tipo de uvalor. 
console.log(uvalor); //Imprimindo o valor. 

nvalor = uvalor; //Erro! Não é possivel atribuir um valor unknown a um tipo number. O mesmo ocorrera se for tipo string. A não ser que seja feita uma afirmação de tipo. 

nvalor = <number> uvalor; //Agora é possivel associar um tipo 
console.log(typeof(nvalor));
console.log(nvalor);

svlaor = uvalor; //erro
console.log(svlaor);


svlaor = <string> uvalor; 