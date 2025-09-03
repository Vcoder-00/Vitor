const produtos = [
  { id: 1, nome: 'Notebook', categoria: 'Eletrônicos' },
  { id: 2, nome: 'Camiseta', categoria: 'Vestuário' },
  { id: 3, nome: 'Mouse', categoria: 'Eletrônicos' },
  { id: 4, nome: 'Tênis', categoria: 'Vestuário' },
  { id: 5, nome: 'Teclado', categoria: 'Eletrônicos' }
];

const contador = {'Eletrônicos': 0, 'Vestuário': 0}

for (let item of produtos){
    contador[item.categoria]++;
}

console.log(contador);