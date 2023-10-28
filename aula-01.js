//O comando tsc faz a compilação do arquivo em ts para js. Sempre utilizar para atualizar o arquivo js.
// Caso ocorra erro ao utilizar o tsc, utilizar o comando: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser; para reparar. 
// Para gerar o arquivo em js contentendo as configurações mais atualizadas, o código é: tsc nomedoarquivo.ts --target "ESNEXT" 
// Para gerar um arquivo de configuração, o comando é: tsc --init
//Passos para modificar o arquivo gerado: implementar esnext em vez do ano no trecho target. 
var nome = 'Bruno';
var canal = 'CFB';
var curso = 'typescript';
console.log(nome);
console.log(canal);
console.log(curso);
var teste = /** @class */ (function () {
    function teste(canal, curso) {
        this.canal = '';
        this.curso = '';
        this.canal = canal;
        this.curso = curso;
    }
    return teste;
}());
var c1 = new teste('CFC', 'typescript');
console.log(c1);
