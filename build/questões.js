"use strict";
const medicos = [];
console.log(medicos);
function adicionar(nome, crm) {
    let n = nome;
    let c = crm;
    let med = nome + crm;
    medicos.push(med);
}
console.log(adicionar('Luiz', 12345));
console.log(medicos);
