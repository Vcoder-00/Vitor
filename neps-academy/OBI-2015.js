input = '17\n1 1 1 0 1 0 0 1 0 1 0 0 1 1 1 1 0'

lista = input.split('\n')
num = lista[1].replace(/ /g, '');
function qnt100 (num){
    l = 0;
    r = 2;
    contadorDe100 = 0;

    if (num.slice(l, r+1) === '100'){
        contadorDe100++;
    }
    while(r < num.length - 1){
        l += 1;
        r += 1;
        if (num.slice(l, r+1) === '100'){
            contadorDe100++;
        }
    }
    return contadorDe100;
}

console.log(qnt100(num));