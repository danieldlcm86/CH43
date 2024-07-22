console.log("--- Control de flujo -----");

// Declaración if - else
let edad = 8;

if (edad >= 18) {
    console.log("Bienvenido");
} else {
    console.log("Video de Youtube");
} //Input: 19, Output: Bienvenido

// Declaración if
if (edad >= 10) {
    console.log("Puedes usar internet");
} //Input 8, Output: false

//edad = null;
/* Para evaluar que un usuario está ingresando su edad, podemos utilizar una sentencia condicional que evalúa algo diferente a null */
if (edad != null) {
    console.log("El usuario si está ingresando su edad");
} else {
    console.log("Ingresa tu edad");
}

// Ejemplo con modificación de una variable. 
//--- Crear un programa que determine si nos encontramos en pérdidas o en ganancias
let saldoInicial = 500;
let saldoFinal = 500;
let balance;

if (saldoInicial < saldoFinal) {
    balance = "Estamos en ganancias";
} else {
    balance = "Estamos en pérdidas";
}

// ECMAScript 6 (ES6). Interpolación de cadenas, nos permite unir una cadena de caracteres con variables, utilizando backticks `` y ${variables}
// console.log("En este momento " + balance);
console.log(`En este momento ${balance}`);

if (saldoInicial < saldoFinal) {
    balance = `Ganando como siempre`;
} else if (saldoInicial === saldoFinal) {
    balance = `Estamos tablas`;
} else {
    balance = `Perdiendo como nunca`;
}

console.log(`${balance}`);

// --- Determinar si un número es par o impar
let numero = 369236587;

if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El número ${numero} es impar`);
}

// --- Operador ternario. Es una forma concisa de escribir una sentencia condicional (if-else). Se utilizan caracteres para evaluar la condición y ejecutar los bloques de código necesarios.
// (condition) ? true : false;
// Determinar si un número es par o impar, pero usando un operador ternario
let num = 45286933;

let parImpar = (num % 2 === 0) ? `El número ${num} es par` : `El número ${num} es impar`;

console.log(parImpar);

// --- Determinar si una persona es un bebé (<= 3 años), niño (4 y 11), adolescente (12 a 17), adulto (=> 18), pero si es un adulto, determinar si es un adulto joven (18 a 59) o adulto mayor (> 60)
let edadPersona = 65;

if (edadPersona >= 18) {
    // console.log("Es un adulto");
    // Anidación de sentencias condicionales (code hell)
    if (edadPersona < 60) {
        console.log("Es un adulto joven");
    } else {
        console.log("Es un adulto mayor");
    }
} else if (edadPersona >= 12) {
    console.log("Es un adolescente");
} else if (edadPersona >=4) {
    console.log("Es un niño");
} else {
    console.log("Es un bebé");
}

// **** Sentencia switch ***** //
console.log("*** Switch ***");

//Determinar si el día de la semana es laborable (lunes a viernes) o es de descanso (sabado y domingo)
let diaSemana = "miercoles";

switch (diaSemana) {
    case "lunes":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "martes":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "miercoles":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "jueves":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "viernes":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "sabado":
        console.log(`El ${diaSemana} es descanso`);
        break;
    case "domingo":
        console.log(`El ${diaSemana} es descanso`);
        break;
        default:
            console.log("No es un día de la semana");
}