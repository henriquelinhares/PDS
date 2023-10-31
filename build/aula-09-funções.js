"use strict";
function teste() {
    console.log('Teste');
}
teste();
function logar(user, senha) {
    console.log('User: ' + user);
    console.log('Senha: ' + senha);
}
;
logar('Luiz', 12345);
function somar(n1, n2) {
    let r = n1 + n2;
    return r;
}
const res = somar(10, 10);
console.log(res);
function soma(n3 = 0, n4 = 0) {
    return n3 + n4;
}
console.log(soma(5));
function novoUser(user, senha, nome) {
    console.log(`User:${user}, Senha:${senha} e Nome:${nome}`);
}
novoUser('Linhares', 'cavalo');
