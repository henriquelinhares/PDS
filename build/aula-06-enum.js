"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[1]);
const dia = dias[2];
console.log(dia);
const dia2 = new Date();
console.log(dia2);
console.log(dia2.getDate());
console.log(dia2.getDay());
console.log(dias[dia2.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["user"] = 15] = "user";
    tipoUsuario[tipoUsuario["admin"] = 16] = "admin";
    tipoUsuario[tipoUsuario["super"] = 17] = "super";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.admin);
const tp = tipoUsuario.super;
console.log(tp);
