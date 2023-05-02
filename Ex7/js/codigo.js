let numero = prompt("Entra un numero entero");

const factorial = (num) => {
  let res = 1;
  for (i = num; i > 1; i--) {
    res = res * i;
  }
  return res;
};

alert("Factorial: " + numero + "! = " + factorial(numero));
console.log("Factorial: ", numero, "! = ", factorial(numero));
