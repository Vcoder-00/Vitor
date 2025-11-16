#include <stdio.h>

int somar(int a, int b); // "Ainda vou fazer a função!" não hoisting automático como no js

int main() {
    int entrada1, entrada2;

    printf("Digite o primeiro numero:");
    scanf("%d", &entrada1);
    printf("Digite o primeiro numero:");
    scanf("%d", &entrada2);

    int resultado = somar(entrada1, entrada2);

    printf("Resultado da soma: %d\n", resultado);
}

int somar(int a, int b){
    int resultado = a + b;
    return resultado;
}