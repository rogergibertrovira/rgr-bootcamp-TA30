let valores = [true, 5, false, "hola", "adiós", 2];
let textoMayor
if (valores[3].length < valores[4].length) {
    textoMayor = valores[4];
}
else {
    textoMayor = valores[3];
}

console.log("Palabra de mayor tamaño:", textoMayor);

console.log("Resultado true: operador || ->", valores[0] || valores[2]);
console.log("Resultado false: operador && ->", valores[0] && valores[2]);

console.log("Valores: ", valores[1], "," ,valores[5]);
console.log("Suma: ", valores[1] + valores[5]);
console.log("Resta: ", valores[1] - valores[5]);
console.log("Multiplicación: ", valores[1] * valores[5]);
console.log("División: ", valores[1] / valores[5]);
console.log("Potencia: ", Math.pow(valores[1], valores[5]))