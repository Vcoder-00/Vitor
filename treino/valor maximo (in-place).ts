let num1: number = parseFloat(prompt('digite um número') || '0');
let num2: number = parseFloat(prompt('digite um número') || '0');
let num3: number = parseFloat(prompt('digite um número') || '0');
let num4: number = parseFloat(prompt('digite um número') || '0');
let num5: number = parseFloat(prompt('digite um número') || '0');

let lista: Array<number> = [];
lista.push(num1, num2, num3, num4, num5);

function maxValue(lista: Array<number>): number | undefined {
    let l = 0;
    let r = lista.length - 1;

    while (l != r) {
        if (lista[l] > lista[r]) {
            r--;
        }
        else if (lista[l] < lista[r]) {
            l++;
        }
        else {
            r--;
        }
    }
    return lista[l];
}

console.log(maxValue(lista));