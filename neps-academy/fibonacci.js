function fibonacci(numero) {
    if (numero <= 1 && numero >= 0){
        return 1;
    }
    else {
        return fibonacci(numero-1) + fibonacci(numero-2);
    }
}
console.log(fibonacci(input));