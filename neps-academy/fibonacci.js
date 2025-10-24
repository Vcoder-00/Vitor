function fibonacci(numero) {
    if (numero <= 1 && numero >= 0){
        return 1;
    }
    else {
        return fibonacci(numero-1) + fibonacci(numero-2);
    }
}
console.log(fibonacci(input));

// Outra forma

const fibonacci = function fib(n) {
    return (n <= 1 && n >= 0) ? 1 : fib(n - 1) + fib(n - 2);
}
console.log(fibonacci(input));