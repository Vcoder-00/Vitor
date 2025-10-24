const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

let lista = input.split("\n").map(Number);
function mediaPond(num1, num2) {
    let result = ((num1 * 4) + (num2 * 6)) / 10;
    return result;
}
console.log(mediaPond(lista[0], lista[1]));