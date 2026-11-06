'use strict';

// named
const calcularFactorial = () => {
  console.log("Factorial calculado");
};

const nombre = "pedro";

// nameSpace
const funSumar = (num1, num2) => {
  console.log(`Sumando ${num1} + ${num2} = ${num1 + num2}`);
};

const sumar = "suma";

// default
var usuario = () => {
  return {
    nombre: "Juan",
    edad: 27,
  };
};

// empty
//logica de funcionamiento
console.log("Estamos ejecutando");

// namedImport
console.log(`El nombre del cliente es ${nombre}`);
calcularFactorial();
console.log(sumar);
funSumar(12, 13);
console.log(usuario());
