let lista = ''
for(i=1; i <= input; i++){
    if (input % i === 0){
        lista += ` ${i}`
    }
}
console.log(lista.slice(1,lista.length));