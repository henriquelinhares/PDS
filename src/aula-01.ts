//O comando tsc faz a compilação do arquivo em ts para js. Sempre utilizar para atualizar o arquivo js.

// Caso ocorra erro ao utilizar o tsc, utilizar o comando: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser; para reparar. 

// Para gerar o arquivo em js contentendo as configurações mais atualizadas, o código é: tsc nomedoarquivo.ts --target "ESNEXT" 
// Comando ts-node para imprimir o arquivo type em vez do js. 
// Para gerar um arquivo de configuração, o comando é: tsc --init
//Passos para modificar o arquivo gerado: modificar esnext em vez do ano no trecho target.
// Modificar no arquivo tsconfig.json o "removeComments": true, tirando ele de comentario.
//"rootDirs": ["./"] modificar de comentario e colocar a pasta de destino para arquivos ts
//"outDir": "./" modificar de comentario e colocar a pasta de destino para arquivos js
//Comandos importantes: tsc init -y e npm i -g typescript ts-node @types/node
//Agora apenas com o comando tsc vai ser compilado todos os arquivos. 

const nome = 'Bruno';
const canal = 'CFB';
const curso = 'typescript'

console.log(nome);
console.log(canal); 
console.log(curso);


class teste {
    canal:any
    curso:any
    constructor(canal:string, curso:string){
        this.canal = canal
        this.curso = curso
    }
}

let c1 = new teste('CFC', 'typescript')
console.log(c1); 
