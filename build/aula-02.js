"use strict";
const entrada = require('readline-sync');
let nome2 = 'Henrique';
let idade1 = 30;
let algo;
let boleana = true;
let grupo = [1, 2, 3, 4];
class carro {
    nome3 = this.nome3;
    idade3 = this.idade3;
    constructor(nome3, idade3) {
        this.nome3 = nome3;
        this.idade3 = idade3;
    }
}
let c2 = new carro('Peugeot', 15);
const cachorro = {
    nome: 'Luck',
    idade: 12,
    raça: 'Vira-lata'
};
console.log(cachorro.nome);
var diaSemana;
(function (diaSemana) {
    diaSemana[diaSemana["segunda"] = 0] = "segunda";
    diaSemana[diaSemana["ter\u00E7a"] = 1] = "ter\u00E7a";
    diaSemana[diaSemana["quarta"] = 2] = "quarta";
    diaSemana[diaSemana["quinta"] = 3] = "quinta";
    diaSemana[diaSemana["sexta"] = 4] = "sexta";
    diaSemana[diaSemana["s\u00E1bado"] = 5] = "s\u00E1bado";
    diaSemana[diaSemana["domingo"] = 6] = "domingo";
})(diaSemana || (diaSemana = {}));
const diaHoje = diaSemana.domingo;
console.log(nome2 + ' ' + idade1);
console.log(grupo);
console.log(c2.nome3);
console.log(diaHoje);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["administrador"] = 0] = "administrador";
    tipoUsuario[tipoUsuario["comum"] = 1] = "comum";
    tipoUsuario[tipoUsuario["convidado"] = 2] = "convidado";
})(tipoUsuario || (tipoUsuario = {}));
function verificarUsuario(usuario) {
    if (usuario === tipoUsuario.administrador) {
        'Realizar ações administrativas';
    }
    else {
        'Acesso restrito para administradores.';
    }
}
console.log(verificarUsuario);
