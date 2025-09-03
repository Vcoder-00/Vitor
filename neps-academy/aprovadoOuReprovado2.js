let input = '2\n2' 
let listaDeNotas = input.split('\n').map(Number)
let media = ((listaDeNotas[0] * 2) + (listaDeNotas[1] * 3)) / 5;
if (media >= 7){
    console.log('Aprovado');
}
else if (media < 7 && media >= 3){
    console.log('Final');
}
else {
    console.log('Reprovado');
}