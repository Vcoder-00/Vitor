const fac = function f(n) {
    return n < 2 ? 1 : n * f(n-1);
}
console.log(fac(input));