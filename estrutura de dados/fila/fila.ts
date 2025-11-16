class Fila {
    private lista: Array<Number>;
    capacidade: number;
    constructor(capacidade: number) {
        this.lista = [];
        this.capacidade = capacidade;
    }

    adicionar(num: number) {
        if (this.estaCheia() === true){
            console.log("Fila cheia");
        }
        this.lista.push(num);
        console.log(`elemento ${num} inserido`);

    }

    remover() {
        if (this.estaVazia()){
            console.log("Fila já está vazia");
        }
        const el = this.lista.shift();
        console.log(`elemento ${el} removido`);
    }

    exibir() {
        console.log(this.lista);
    }

    tamanho() {
        this.lista.length;
    }

    estaVazia(){
        if (this.lista.length === 0){
            return true
        }
        return false;
    }

    estaCheia(){
        if (this.lista.length > this.capacidade) {
            return true;
        }
        return false;
    }


}

let f1: Fila = new Fila(2);

f1.adicionar(1);
f1.adicionar(1);
f1.exibir();

