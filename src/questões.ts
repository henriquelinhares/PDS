const medicos:Array<any> = []; 
console.log(medicos);

function adicionar(nome: string, crm:number): void {
    let n = nome;
    let c = crm;
    let med = nome + crm;
    medicos.push(med);
}
console.log(adicionar('Luiz', 12345));

console.log(medicos);

