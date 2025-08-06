flipper.js
function flipper(port1, port2) {

    let saida1 = 'A';
    let saida2 = 'B';
    let saida3 = 'C';

    if (port1 == 0) {
        return console.log(saida3);
    }
    else if (port1 == 1) {
        if (port2 == 0) {
            return console.log(saida2);
        }
        else if (port2 == 1) {
            return console.log(saida1);
        }
    }
}