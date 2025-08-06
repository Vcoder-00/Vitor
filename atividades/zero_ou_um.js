let entrada = input.split(' ').map(Number)
let [A, B, C] = entrada;
if(A !== B && A !== C){
    console.log("A")
}
else if(B !== A && B !== C){
    console.log("B")
}
else if(C !== A && C !== B){
    console.log("C")
}
else {
    console.log('*')
}
