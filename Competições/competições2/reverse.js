const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

// input = "1\n2\n3\n4"

lista = input.split('\n').map(Number);
listInvertida = lista.reverse().slice(1, lista.length);

for (let i = 0; i < listInvertida.length; i++){
    console.log(listInvertida[i]);
}
