const pedidos: Array<number[]> = [
  [10, 25, 5],     // Pedido válido. Total: 40
  [12, 18, -2, 5], // Contém item inválido (-2). Deve ser pulado (continue).
  [20, 30, 10],    // Pedido válido. Total: 60
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Excede o limite de 10 itens. Deve interromper tudo (break).
  [50, 60]         //
];

const pedidos2: Array<number[]> = [
  [10, 25, 5],     
  [12, 18, 2, 5], 
  [20, 30, 10],    
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  [50, 60]
];

function processarPedidos(pedidos: Array<number[]>): number | string {
  let total : number = 0; 

  let somaPedido: number = 0; // acumulador não validado
  let invalidItem: boolean = false; // flag

  for (let i = 0; i < pedidos.length; i++) {
    somaPedido = 0; // reset do acumulador 
    invalidItem = false; // reset da flag

    if (pedidos[i].length > 10) {
      console.error('Quantidade de itens por pedido excedida');
      return "Processamento interrompido: limite de itens excedido.";
    }

    for (let j = 0; j < pedidos[i].length; j++) {

      if (pedidos[i][j] <= 0) {
        invalidItem = true;
        break;
      }
      else {
        somaPedido += pedidos[i][j];
      }
    }
    // lógica de contagem caso não haja itens invalidos
    if (invalidItem == true){
      continue;
    }
    else {
      total += somaPedido
    }
  }
  return total;
}

console.log(processarPedidos(pedidos));