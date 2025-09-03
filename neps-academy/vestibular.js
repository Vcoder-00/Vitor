let input = '7\nAEDBCCE\nADDCCBE';

let lista = input.split('\n');
let resposta = lista[1];
let gabarito = lista[2];
let contadorAcertos = 0;

for (let i = 0; i < resposta.length; i++){
    if (resposta[i] === gabarito[i]){
        contadorAcertos++;
    }
}
console.log(contadorAcertos);