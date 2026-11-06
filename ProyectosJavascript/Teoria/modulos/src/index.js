// namedImport
import { nombre, calcularFactorial } from "./namedExports";
console.log(`El nombre del cliente es ${nombre}`);
calcularFactorial();

// nameSpaceImports
import * as operaciones from "./nameSpaceExports";
console.log(operaciones.sumar);
operaciones.funSumar(12, 13);

// defaultImports
import usuario from "./defaultExports";
console.log(usuario());

// emptyImports
import "./emptyExports";
