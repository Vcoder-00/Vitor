const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

lista = input.split('\n').map(Number);
const area = lista[0] * lista[1];
let areaSemTipo3 = area - (4 * (0.125));
// console.log(areaSemTipo3);
let qntFrac = parseInt(2 * (lista[0] - 1) + 2 * (lista[1] - 1));
// console.log(qntFrac);
let areaSemTipo2 = areaSemTipo3 - (qntFrac * (0.25));
// console.log(areaSemTipo2);
let qntInt = parseInt(areaSemTipo2 / 0.5);
console.log(qntInt);
console.log(qntFrac);
