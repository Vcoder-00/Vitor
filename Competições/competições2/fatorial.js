const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

lista = input.split('\n').map(Number);

function fatorial(num){
    return (num <= 1) ? 1: num * fatorial(num - 1);
}

console.log(fatorial(lista[0]));