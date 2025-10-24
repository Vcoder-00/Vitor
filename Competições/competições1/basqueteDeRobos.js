const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

distancia = input.split('\n').map(Number);
// console.log(distancia);

switch (true) {
    case distancia[0] <= 800:
        console.log(1);
        break;
    case (distancia[0] > 800 && distancia[0] <= 1400):
        console.log(2);
        break;
    case (distancia[0] > 1400):
        console.log(3)
        break;
}