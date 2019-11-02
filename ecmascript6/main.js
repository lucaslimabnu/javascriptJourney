function soma (a = 3, b = 6){
    return a + b;
}

console.log(soma(1)); // retorna um Not a Number
console.log(soma()); // retorna um Not a Number

const novaSoma = (a = 3, b = 6) => a + b;

console.log(novaSoma(1)); // retorna um Not a Number
console.log(novaSoma()); // retorna um Not a Number
