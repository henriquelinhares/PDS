"use strict";
let dados = {
    nomeAluno: 'Henrique',
    idade: 30,
    estatos: 'Ativo',
};
dados.nomeAluno = 'Linhares';
console.log(typeof (dados));
console.log(dados);
console.log(dados.nomeAluno);
let dados2 = {
    nome: 'Luiz',
    idade: 30,
    estatos: 'Ativo',
    ola() {
        console.log('Oi!');
    },
    info: (p) => { console.log(p); },
};
console.log(dados2);
dados2.ola();
dados2.info(dados2.idade);
