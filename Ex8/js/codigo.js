let numero = prompt("Introduce un numero entero");

const esPar = (num) => {
  let par = "";
  if (num % 2 == 0) {
    par = num + " es par";
  } else {
    par = num + " es impar";
  }
  return par;
};

console.log(esPar(numero));
alert(esPar(numero));
