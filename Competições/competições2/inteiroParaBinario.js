const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim(); // remove espaços e quebras de linha

const decimal = parseInt(input); // converte para número decimal
const binario = decimal.toString(2); // converte para binário

console.log(binario);
