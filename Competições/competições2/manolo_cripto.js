const fs = require("fs");

const input = (fs.readFileSync(0, "utf8")).trim().split("\n");

lista = parseFloat(input[0]);
numeros = input[1].split(" ").map(Number);

precoVenda = numeros[numeros.length - 1]; // retira o 0 (no final)
precoCompra = numeros[0];

comprado = 100 * precoCompra;
vendido = 100 * precoVenda;
balanco = vendido - comprado;

console.log(balanco.toFixed(2));