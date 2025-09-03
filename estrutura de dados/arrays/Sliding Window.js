// percorre um array e retorna o valor da maior subtring com uma determinada condição
// no caso a condição é que o subarray deve ter no máximo 2 termos repetidos como uma
// janela que aumenta e se contrai percorrendo o array

// anotação
// while r++ (expansão da janela)
// while interno l++ (contração da janela)

let input = ['b', 'c', 'b', 'b', 'b', 'c', 'b', 'a','c','q','a','a'];

function maiorSubstring(array) { 
    let r = 0, l = 0;
    _max = 1 // tamanho minimo do maior subarray
    let counter = {};

    counter[array[0]] = 1; //definindo o primeiro termo do counter: counter{b:1} (array[0] === 'b')

    while (r < array.length - 1) { // diminuo 1 pois o acesso do array precisa ir até length - 2 pois quando 
    // for esse valor logo dps virá r += 1 que é o ultimo acesso que queremos array[array.length - 1].
        r += 1;
        if (counter[array[r]]) { // aqui o r está apontando para o 2º elemento e perguntando: ele já existe? (essa estrutura de acesso a key no objeto. objeto[array[r]])
            counter[array[r]] += 1; // caso já exista adicione um a contagem
        }

        else counter[array[r]] = 1; // caso não exista crie e atribua 1 ao seu valor ao criar

        while (counter[array[r]] == 3) { // enquanto o tamanho da janela que possui mais que 2 elementos iguais estiver assim
            counter[array[l]] -= 1; // reduz o valor do ultimo termo pois a janela avançará
            l += 1; // ponteiro left avança

        }
        _max = Math.max(_max, r - l + 1) // 2º termo corresponde ao tamanho atual (enquanto contador máximo é 3) do array dentro da janela resolvido o problema de off-by-one. Caso: se o l fosse 0 e o r 1, a subtração dos dois seria 1, mesmo que o array tivesse 2 elementos. A atualização do _max deve ser feita quando a janela está em seu tamanho máximo válido, ou seja, fora do while loop interno. O cálculo Math.max(_max, l - r + 1) dentro do loop interno não vai funcionar como esperado, pois ele será executado enquanto a janela está sendo encurtada.
    }
    return _max;
}

console.log(maiorSubstring(input));