const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

lista = input.split('\n').map(Number);

let acumulador = 0;
for (let i= 1; i < lista.length; i++){
    acumulador += lista[i];
    if (acumulador >= 1000000){
        console.log(i);
        break;
    }
}
