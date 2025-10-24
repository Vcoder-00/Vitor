// let vetor = [-5, 7, 9, -2, 3, 6, 10];

// vetor.reduce((acc, valorAtual, index) => {
//     if (valorAtual < vetor[index]) {
//         menor = valorAtual
//     }
//     return menor;
// }
// )

let vetor = [-5, 7, 9, -2, 3, 6, 10];

let teste = vetor.reduce((acc, valorAtual, index) => {
    let menor;
    if (valorAtual < vetor[index]) {
        menor = valorAtual
    }
    return menor;
})

console.log(teste);  