"use strict";
function reste(v1, v2) {
    return v1 + v2;
}
console.log(reste(10, 20));
function dfsoma(...n) {
    let s = 0;
    n.forEach((en) => {
        s += en;
    });
    return s;
}
console.log(dfsoma(10, 20, 30));
