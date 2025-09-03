// Exercicio pede o a primeira letra que não se repete dentro de uma palavra

// Vamos usar um input para o teste
const input = "leetcode"; // Resultado esperado: 0 (o 'l' é o primeiro único)
const input2 = "loveleetcode"; // Resultado esperado: 2 (o 'v' é o primeiro único)
const input3 = "aabb"; // Resultado esperado: -1 (nenhum é único)

function firstUniqChar(s) {
    // Usar Map é uma ótima escolha, pois ele mantém a ordem de inserção.
    const d = new Map();

    // --- PRIMEIRO PASSO: Montar o mapa de contagem e índice ---

    // Laço 'for' tradicional para ter acesso ao índice (idx) e ao caractere (ch)
    for (let idx = 0; idx < s.length; idx++) {
        const ch = s[idx];

        // Verifica se o caractere AINDA NÃO está no mapa
        if (!d.has(ch)) {
            // Se não está, adiciona com o índice atual e contagem 1
            d.set(ch, [idx, 1]);
        } else {
            // Se já está, pega o valor antigo [indice_antigo, contagem_antiga]
            const valorAntigo = d.get(ch); // ch 'character' é key que tem  acesso ao array [indice_antigo, contagem_antiga]

            // Atualiza a contagem
            valorAntigo[1]++;
            // Salva de volta no mapa. (O índice original é mantido)
            d.set(ch, valorAntigo);
        }
    }

    // --- SEGUNDO PASSO: Encontrar o primeiro com contagem 1 ---

    // Percorre o mapa para encontrar o primeiro caractere com contagem 1
    // A sintaxe "for (const [chave, valor] of mapa)" é a forma moderna de iterar
    for (const [char, val] of d) {
        // val[1] é a contagem. Verifica se é igual a 1
        if (val[1] === 1) {
            // Se for, retorna o índice, que é val[0]
            // Como Map mantém a ordem, o primeiro que encontrarmos é a resposta correta.
            return val[0];
        }
    }

    // Se o loop terminar e não encontrarmos nenhum, significa que não há únicos.
    return -1;
}

// console.log(`Para "${input}": ${firstUniqChar(input)}`);
// console.log(`Para "${input2}": ${firstUniqChar(input2)}`);
// console.log(`Para "${input3}": ${firstUniqChar(input3)}`);

// Outra forma de responder:

function firstUniqCharAlternativa(s) {
    const d = new Map();

    // 1. Primeiro passo é igual: contar a frequência de cada caractere
    for (const ch of s) {
        d.set(ch, (d.get(ch) || 0) + 1); //*^1
    }
    console.log(d); //vendo o mapa
    // Map(6) { 'l' => 1, 'e' => 3, 't' => 1, 'c' => 1, 'o' => 1, 'd' => 1 }
    // nessa versão APENAS a contagem está sendo armazenada no mapa
    // Não confunda! nesse contexto d.get(ch) é relativo a um único valor (contagem)*^1

    // 2. Segundo passo: percorrer a string original
    for (let idx = 0; idx < s.length; idx++) {
        const ch = s[idx];
        // Verifica no mapa se a contagem daquele caractere é 1
        if (d.get(ch) === 1) {
            // Se for, este é o primeiro caractere único. Retorna seu índice.
            return idx; //indice obtido da iteração do loop
        }
    }

    return -1;
}

console.log(firstUniqCharAlternativa(input));