let entrada = input.split('\n').map(Number)
if (entrada[0] === 0 || entrada[1] === 0){
    console.log('eixos')
}
else if (entrada[0] > 0){
    if (entrada[1] > 0){
        console.log('Q1')
    }
    else {
        console.log('Q4') 
    }
}
else {
    if (entrada[1] > 0){
        console.log('Q2')
    }
    else{
        console.log('Q3')
    }
}