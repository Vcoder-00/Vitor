const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

let lista = input.split(' ').map(Number);

function LerCobra(cores) {
    const [a, b, c, d] = cores; // marcação
    // regra: verdadeira se a==c ou b==d (considerando rotações)
    if (a === c || b === d) {
        console.log('V');
    } else {
        console.log('F');
    }
}
LerCobra(lista);