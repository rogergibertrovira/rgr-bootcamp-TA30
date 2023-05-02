let cadenaTexto = prompt("Introduce una cadena de texto");

const analizarCadena = (cadena) => {
  tieneMayus = false;
  tieneMinus = false;
  long = cadena.length;
  i = 0;
  while (i < long) {
    if (/[a-z]/.test(cadena)) {
      tieneMinus = true;
    }
    if (/[A-Z]/.test(cadena)) {
      tieneMayus = true;
    }
    i++;
  }
  let res = "";
  if (tieneMayus && tieneMinus) {
    res = "La cadena tiene mayusculas y minusculas";
  } else if (tieneMayus && !tieneMinus) {
    res = "La cadena solo tiene mayusculas";
  } else {
    res = "La cadena solo tiene minusculas";
  }

  return res;
};

console.log(analizarCadena(cadenaTexto));
alert(analizarCadena(cadenaTexto));
