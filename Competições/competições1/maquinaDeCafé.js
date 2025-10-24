const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

let lista = input.split('\n').map(Number);

// Converte os itens do array (que são strings) para números
const A1 = parseInt(lista[0]);
const A2 = parseInt(lista[1]);
const A3 = parseInt(lista[2]);

// --- Calcula o tempo total para cada um dos 3 cenários possíveis ---

// Cenário 1: Máquina no primeiro andar
const tempoAndar1 = (A2 * 2) + (A3 * 4);

// Cenário 2: Máquina no segundo andar
const tempoAndar2 = (A1 * 2) + (A3 * 2);

// Cenário 3: Máquina no terceiro andar
const tempoAndar3 = (A1 * 4) + (A2 * 2);

// --- Encontra o menor tempo entre os três cenários ---
const tempoMinimo = Math.min(tempoAndar1, tempoAndar2, tempoAndar3);

// Imprime o resultado final
console.log(tempoMinimo);
