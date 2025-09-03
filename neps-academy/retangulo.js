input = '2\n3';
let lista = input.split('\n').map(Number).filter((n) => !isNaN(n)); // filter exclui os NaN, caso ache interessante para novas questões;
let areaRetangulo = lista[0] * lista[1];
console.log(areaRetangulo);