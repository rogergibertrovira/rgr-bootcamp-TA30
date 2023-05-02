let cadenaTexto = prompt("Introduce una cadena de texto");

const analizarCadena = (cadena) => {
  long = cadena.length;
  ini = 0;
  fin = cadena.length - 1;
  palindromo = true;

  while (ini < long && palindromo) {
    if (cadena.charAt(ini) != cadena.charAt(fin)) {
      palindromo = false;
    }
    ini++;
    fin--;
  }
  let res = "";
  if (palindromo) {
    res = "La cadena es un palindromo";
  } else {
    res = "La cadena no es un palindromo";
  }

  return res;
};

console.log(analizarCadena(cadenaTexto));
alert(analizarCadena(cadenaTexto));
