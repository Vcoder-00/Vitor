// 6 divisor(es): 1 2 4 7 14 28
// Soma de divisores = 56
// Nao primo

const fs = require("fs");

const input = Number(fs.readFileSync(0, "utf8"));

let lista = [];
contDiv = 0;
ehPrimo = true;

for (let i = 1; i <= input; i++) {
    if (input % i === 0) {
        lista.push(i);
    }
    if (lista.length > 2){
        ehPrimo = false;
    }
}

const somadiv = lista.reduce((valor, acumulador) => acumulador + valor);

console.log(`${lista.length} divisor(es): ${lista.join(" ")}\nSoma de divisores = ${somadiv}\n${(ehPrimo) ? 'Primo': 'Nao primo'}`);