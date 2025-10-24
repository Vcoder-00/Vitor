const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\r\n");

lista = input[0].map(Number);
parametro = input[1].map(Number);

console.log(lista);
console.log(parametro);

let parametro = lista[0];
let comandos = lista[1];

let estacoes = parametro[0];
let qntComandos = parametro[1];
let area = parametro[2];

acumulador = 0;
controle = 1;
contadorVisita = 0;

for (let i = 0; i < estacoes; i++) {
    if (controle == estacoes + 1) {
        controle = 1;
    }
    else if (controle == estacoes - 1) {
        controle = estacoes // 8
    }
    if (comandos[i] === 1) {
        controle++;
        if (controle == area) {
            contadorVisita++;
        }
    } else if (comandos[i] === -1) {
        controle--;
        if (controle == area) {
            contadorVisita++;
        }
    }

}
console.log(contadorVisita);