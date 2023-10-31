"use strict";
class Medico {
    id;
    crm;
    nome;
    especialidade;
    constructor(id, crm, nome, especialidade) {
        this.id = id;
        this.crm = crm;
        this.nome = nome;
        this.especialidade = especialidade;
    }
}
const medicos = [];
console.log(medicos);
function adicionar() {
    let id = 1;
    let crm = 12345;
    let nom = 'Luiz';
    let esp = 'Qualquer';
    let med = new Medico(id, crm, nom, esp);
    medicos.push(med);
}
adicionar();
console.log(medicos[0]);
function listarMedicos() {
    for (const m of medicos) {
        console.log(`id: ${m.id}`);
        console.log(`Nome do médico: ${m.nome}`);
        console.log(`CRM: ${m.crm}`);
        console.log(`Especialidade: ${m.especialidade}`);
        console.log("-------------------------------------");
    }
}
listarMedicos();
