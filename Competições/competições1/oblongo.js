const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

let lista = input.split("\n").map(Number);
function formaOblongo(num1, num2) {
    if (Math.abs(num1 - num2) === 1) {
        return num1 * num2;
    }
    else {
        return 'NAO FORMA OBLONGO!';
    }
}
console.log(formaOblongo(lista[0], lista[1]));