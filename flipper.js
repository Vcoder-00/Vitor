flipper.js
function flipper(port1, port2) {

    let saida1 = 'A';
    let saida2 = 'B';
    let saida3 = 'C';

    if (port1 == 0) {
        return console.log(saida3);
    }
    else if (port1 == 1) {
        if (port2 == 0) {
            return console.log(saida2);
        }
        else if (port2 == 1) {
            return console.log(saida1);
        }
    }
}

function viagemOk(alunos, supervisores) {
    if ((alunos + supervisores) <= 50) {
        return console.log('S');
    }
    return console.log('N');
}
viagemOk(A, B);

function parOuImpar(num1, num2) {
    if ((num1 + num2) % 2 == 0) {
        return console.log('Bino');
    }
   return console.log('Cino')
}

function gangorra(p1, c1, p2, c2) {
    if (p1 * c1 == p2 * c2) {
        return console.log(0);
    }
    else if (p1 * c1 > p2 * c2) {
        return console.log(-1);
    }
    else return console.log(1);
}

{

    listaDeAcessos = input.split('\n');
    if (listaDeAcessos.reduce((acumulador, elemento) = elemento + acumulador) >= 1000000) {
        return console.log(listaDeAcessos.lenght);
    }
}

const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Your code goes here
function diasParaOPremio(input) {
    let listaDeAcessos = input.split('\n').map(Number);
    let somaDias = 0;
    for (i = 1; somaDias <= 1000000; i++){
        somaDias += listaDeAcessos[i];
    }
    return console.log(i);
}
diasParaOPremio(input);