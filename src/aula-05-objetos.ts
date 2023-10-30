//Objetos 

//Em objetos, o tipo da variavel instanciada vai ser de acordo com o valor que atribuimos a ela.

//A sintaxe do objeto pode ser: 
// let dados: object = {} ou let dados = {}

let dados = {
    nomeAluno: 'Henrique',
    idade: 30,
    estatos: 'Ativo',
}
dados.nomeAluno = 'Linhares';

console.log(typeof(dados));
console.log(dados);

console.log(dados.nomeAluno); 

//Criando função dentro do object: 

let dados2 = {
    nome: 'Luiz',
    idade: 30,
    estatos:'Ativo',
    ola(){ //A função no objeto também pode ser declarada assim: ola:()=> console.log()...
        console.log('Oi!'); 
    },
    info:(p:number) => {console.log(p)}, //O parametro da função também precisa receber uma atribuição do tipo de dado que ele vai receber. 
    
}

console.log(dados2);
dados2.ola();
dados2.info(dados2.idade);

