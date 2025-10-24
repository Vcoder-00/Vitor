input = '4\n1 4 9 0.25';

const lista = input.split('\n');
const numeros = lista[1].split(' ').map(Number);
// console.log(numeros);
let raizes = numeros.map((n) => Math.sqrt(n));
// console.log(raizes);
for (let i = 0; i < Number(lista[0]); i++) {
    console.log(raizes[i].toFixed(4));
}