class Medico {
    id
    crm
    nome 
    especialidade
    constructor(id:number, crm:number, nome:string, especialidade?:string) {
        this.id = id;
        this.crm = crm;
        this.nome = nome;
        this.especialidade = especialidade;
    }
}

const medicos:Array<any> = []; 

console.log(medicos);

function adicionar():any {
    let id = 1;
    let crm = 12345;
    let nom = 'Luiz';
    let esp = 'Qualquer';
    let med = new Medico(id, crm, nom, esp)
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
listarMedicos() 
