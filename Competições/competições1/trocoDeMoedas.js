// menor troco com um real, cinquenta centavos, vinte e cinco centavos, dez centavos, cinco centavos e de um centavo.

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").split("\n").map(Number);

function trocoMoedas(valor) {

    let um_real = Math.floor(valor / 100);
    valor %= 100;

    let cinquenta_centavos = Math.floor(valor / 50);
    valor %= 50;

    let vinte_e_cinco_centavos = Math.floor(valor / 25);
    valor %= 25;

    let dez_centavos = Math.floor(valor / 10);
    valor %= 10;

    let cinco_centavos = Math.floor(valor / 5);
    valor %= 5;

    let um_centavo = valor; // o que sobrar é em centavos de 1

    const total = um_real + cinquenta_centavos + vinte_e_cinco_centavos + dez_centavos + cinco_centavos + um_centavo;

    console.log(`${total}\n${um_real}\n${cinquenta_centavos}\n${vinte_e_cinco_centavos}\n${dez_centavos}\n${cinco_centavos}\n${um_centavo}`);
}
trocoMoedas(input[0]);