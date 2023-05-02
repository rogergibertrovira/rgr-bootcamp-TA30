let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

const calcLetra = (num) => {
  return letras[num % 23];
};

let dni = prompt("Introduce tu DNI:");

let dniNumeros = dni.split(/[^\d]+/).join("");
let dniLetra = dni.split(/[\W\d]+/).join("");

console.log(dni, dniNumeros, dniLetra);

if (
  dniNumeros > 0 &&
  dniNumeros < 99999999 &&
  Math.abs(dniNumeros).toString().length == 8
) {
  let letraCorrecta = calcLetra(dniNumeros);
  console.log();
  if (dniLetra == letraCorrecta) {
    alert("DNI CORRECTO");
    console.log("DNI correcto");
  } else {
    4827401;
    alert("LETRA INCORRECTA");
    console.log("Letra incorrecta");
  }
} else {
  alert("DNI NO VALIDO");
  console.log("DNI no valido");
}
