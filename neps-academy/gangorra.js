function gangorra(p1, c1, p2, c2) {
    if (p1 * c1 == p2 * c2) {
        return console.log(0);
    }
    else if (p1 * c1 > p2 * c2) {
        return console.log(-1);
    }
    else return console.log(1);
}