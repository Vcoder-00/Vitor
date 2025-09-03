const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Your code goes here
function diasParaOPremio(input) {
    let listaDeAcessos = input.split('\n').map(Number);
    let somaDias = 0;
    for (i = 1; somaDias <= 1000000; i++){
        somaDias += listaDeAcessos[i];
        if (somaDias >= 1000000){
            console.log(i);
            break; // saida rapida, mesmo que o valor dê 1.300.000 o js para de contar no 1.000.000 e return i (dia) que ocorreu deixa o código mais eficiente
        }
    }
}
diasParaOPremio(input);