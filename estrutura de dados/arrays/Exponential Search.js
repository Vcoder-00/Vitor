// pesquisa exponencia é muito parecida com a binária, a diferença é que ela se dá melhor com listas grandes
// onde o termo procurado esteja no começo

let array = []

for (let i = 0; i < 150; i++) {
    array.push(i);
}

input = array;

// ela usa a pesquisa benária quando o intervalo de left e rigth é encontrado (no caso quando right é maior) e
// é criado um array do ponteiro l (anterior) até o ponteiro r

function pesquisaBinaria(array, target, l = 0, r = array.length) { //deixei l e r como paraemtros opcionais
    // na pesquisa exponencial, como disse antes vamos encontrar um intervalo especifico e vamos partindo dele e seus respectivos ponteiros (l,r) fazer a pesquisa binária

    // let l = 0;                 caso mantesse sem comentar l e r seriam sempre esses valores
    // let r = array.lentgh;


    while (l < r) {
        mid = parseInt((r + l) / 2)
        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] < target) {
            l = mid + 1
        }
        else {
            r = mid;
        }
    }
    return -1;
}

// vamos para pesquisa exponencial

function pesquisaExponencial(array, target) {
    let steps = 0;

    if (array[0] === target) {
        return 0;
    }
    let r = 1;
    // cade o left? a ideia é que o left vai ser sempre o r anterior, ou seja em outras palavra ele nem 
    // precisa ser escrito ele é simplemente r/2 (revertendo a ultima multiplicação)
    let i = array.length;

    while (r < i && array[r] < target) {
        r *= 2;
    }

    if (array[r] === target) {
        return r;
    }

    return pesquisaBinaria(array, target, parseInt(r / 2), Math.min(r, i - 1)); // Se o array[r] é maior que target ou undefined caso sobrepasse o array realizamos a pesquisa binária cuidadando para que o ponteiro r da binária seja ou o r caso ele seja menor ou igual a i(array.lentgh) ou o prório i caso ele ultrapasse o array
}

console.log(pesquisaBinaria(input, 32));
console.log(pesquisaExponencial(input, 32));

// contando os passos

function binarySearch(array, target, l = 0, r = array.length) {
    let steps = 0;

    while (l < r) {
        steps++;
        let mid = Math.floor((l + r) / 2);

        if (array[mid] === target) {
            return { index: mid, steps };
        }
        else if (array[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return { index: -1, steps }; // (!) formato de dois retornos
}


function exponentialSearch(array, target) {
    let steps = 1; // conta a comparação com array[0]

    if (array[0] === target) {
        return { index: 0, steps };
    }

    let r = 1;
    let n = array.length;

    // fase exponencial
    while (r < n && array[r] < target) {
        steps++;   // cada comparação aqui conta
        r *= 2;
    }

    // checa se encontrou direto
    if (r < n && array[r] === target) {
        steps++;
        return { index: r, steps };
    }

    // fase binária
    let result = binarySearch(array, target, Math.floor(r / 2), Math.min(r, n));
    return { index: result.index, steps: steps + result.steps }; // acesso das propriedades do objeto resultante da 1ª função
}

// console.log(binarySearch(input, 0)) // 8
// console.log(exponentialSearch(input, 0)) //1 

console.log(binarySearch(input, 132)) // 3
console.log(exponentialSearch(input, 132))  // 13
