// busca binária 


input = [1,2,3,4,5]
input2 = [1,2,3,4,5,6,7,8,9,10]
input3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
teste = [1,2,3,4,5,6,7,8,9,10,11]

function buscaBinaria (array, itemBuscado){
    let low = 0;
    let high = array.length;
    let steps = 0; // opcional usei didáticamente para entender a quantidade de passos pra achar o itemBuscado

    while(low < high){ // enquanto os dois ponteiro não forem iguais (apontarem p/ o mesmo item o loop continua)
        steps += 1;
        let mid = parseInt((low+high)/2);
        console.log(mid); // histórico de posicao do mid

        if(array[mid] === itemBuscado){
            return console.log('Passos: ' + steps);
        }
        else if (array[mid] < itemBuscado) { // numero da posição [mid] menor que o valor buscado?
            low = mid + 1;
        }
        else { 
            high = mid; // posição menor que o mid
        }
        
    }
    return console.log(steps);
}

buscaBinaria(input, 3); // 1
buscaBinaria(input2, 3); // 2 
buscaBinaria(input3, 3); // 3

buscaBinaria(teste, 5)