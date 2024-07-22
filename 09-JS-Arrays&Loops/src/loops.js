// --- Ciclo for. Permite iterar sobre un bloque de código, evaluando condiciones e incrementando/decrementar un contador

// Ciclo for con variable local
for (let cuenta = 1; cuenta <= 5; cuenta++) {
    console.log(cuenta);
}

// Ciclo for con variable global
let numeroDecremento = 5;

for (numeroDecremento; numeroDecremento >= 1; numeroDecremento--) {
    console.log(numeroDecremento);
}

//Sumar todos los números del 1 al 100 = 5050

let suma = null;
for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log(suma);

// Ciclo for para recorrer un Array
const ch43 = ['miriam', 'alan', 'miguel', 'mitzi', 'juan', 'liz', 'diego', 'mariscal', 'emily', 'arturo', 'sadrak', 'josue', 'saul', 'fernando', 'oscar', 'salvador', 'erick', 'monica', 'cristian', 'felipe', 'pablo', 'cintia', 'brandon'];

for (let i = 0; i < ch43.length; i++) {
    console.log(ch43[i]);
}

// Ciclos para Array: `for in` (devuelve índices) y `for of` (devuelve los elementos del Array)
for (let developer of ch43) {
    console.log(`Hola soy el desarrollador/a ${developer}`);
}

for (let developer in ch43) {
    console.log(developer);
}

// Encontrar los números pares del 247 al 361
for (let i = 247; i <= 361; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es número par`);
    }
}

// --- Ciclo While. Permite recorrer un bloque de código mientras se cumpla una condición.
// Realizar una cuenta del 1 al 5
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

/* Otra manera de realizar las instrucciones
let i = 0;

while (i < 5) {
    i++;
    console.log(i);
}
*/

// Tomando nuestro Array de ch43, mostrar los elementos utilizando un ciclo while
let developer = 0;
while (developer < ch43.length) {
    console.log(ch43[developer]);
    developer++;
}

// Imprimir una secuencia de asteriscos, desde 1 a 5 asteriscos
let limite = 5;
let inicio = 0;
let asterisco = '';

while (inicio < limite) {
    asterisco += "*";
    console.log(asterisco);
    inicio++;
}

// --- Ciclo Do-While. Recorre un bloque de código mientra se cumpla una condición específica, pero antes de evaluar dicha condición ejecutar al menos una vez la instrucción
let j = 1;

do {
    console.log(j);
    j++
} while (j <= 5);

let k = 1

do {
    console.log(k);
    k++;
} while (k < 1);

// -- Contro de ciclos. Existen dos sentencias que nos permiten controlar los ciclos: break y continue. Break detiene un ciclo en un punto específico y continue permite que el ciclo continúe pero ejecutando una acción específica en un punto dado.
let cuenta = 0;

while (cuenta < 100) {
    cuenta++;
    console.log(cuenta);
    // Sentencia break
    if (cuenta === 22) {
        break;
    }
}

for (let contador = 1; contador <= 10; contador++) {
    //Sentencia continue
    if (contador === 5) {
        console.log(`Cliente ganador`);
        continue;
    }
    console.log(`Cliente número ${contador}`);
}