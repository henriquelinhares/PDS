"use strict";
const teste2 = () => {
    console.log('Teste!');
};
teste2();
const teste3 = (t) => {
    let res = 0;
    t.forEach((e) => {
        res += e;
    });
    return res;
};
let nums = [10, 20, 30, 40];
console.log(teste3(nums));
