const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim().split("\n");
let numeros = input[1].split(" ").map(Number);
let l = 0, r = 0;
let _max = 1;
let contador = 1; // contador começa com 1 pois se conta as repetições de 1 mesmo numero que já ocorreu
for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] === numeros[i + 1]){
        contador += 1;
        _max = Math.max(_max, contador)
    }
    else {
        contador = 1;
    }
}
console.log(_max);
