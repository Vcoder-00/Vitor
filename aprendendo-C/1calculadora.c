#include <stdio.h>

int soma();
int subtrai();
int multiplica();
int divide();

int main()
{
    int opcao;

    do
    {
        printf("\n---- Calculadora ----\n");
        printf("\n1. Somar\n");
        printf("\n2. Subtrair\n");
        printf("\n3. Multiplicar\n");
        printf("\n4. Dividir\n");
        printf("\n0. sair\n");
        printf("\nEscolha uma opcao:\n");
        scanf("%d", &opcao);

        switch (opcao)
        {
        case 1:
            soma();
            break;
        case 2:
            subtrai();
            break;
        case 3:
            multiplica();
            break;
        case 4:
            divide();
            break;
        }
    } while (opcao != 0);

    printf("Calculadora encerrada!");
    return 0;
}

int soma()
{
    int entrada1, entrada2;

    printf("Digite o primeiro numero:");
    scanf("%d", &entrada1);
    printf("Digite o primeiro numero:");
    scanf("%d", &entrada2);

    int resultado = entrada1 + entrada2;

    printf("Resultado: %d\n", resultado);
}

int subtrai()
{
    int entrada1, entrada2;

    printf("Digite o primeiro numero:");
    scanf("%d", &entrada1);
    printf("Digite o primeiro numero:");
    scanf("%d", &entrada2);

    int resultado = entrada1 - entrada2;

    printf("Resultado: %d\n", resultado);
}

int multiplica()
{
    int entrada1, entrada2;

    printf("Digite o primeiro numero:");
    scanf("%d", &entrada1);
    printf("Digite o primeiro numero:");
    scanf("%d", &entrada2);

    float resultado = entrada1 * entrada2;

    printf("Resultado da soma: %.2f\n", resultado);
}

int divide()
{
    int entrada1, entrada2;

    printf("Digite o primeiro numero:");
    scanf("%d", &entrada1);
    printf("Digite o primeiro numero:");
    scanf("%d", &entrada2);

    float resultado = entrada1 / entrada2;

    printf("Resultado da soma: %.2f\n", resultado);
}