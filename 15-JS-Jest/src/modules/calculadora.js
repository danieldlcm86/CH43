// Aquí vamos a crear el código que se evaluará, es decir, una calculadora para sumar, restar, multiplicar y dividir dos números enteros.

const calculadora = {
    suma(a, b) {
        return a + b;
    },
    resta(a, b) {
        return a - b;
    }, 
    multiplicacion(a, b) {
        return a * b;
    },
    division(a, b) {
        return a / b;
    }
}

// ESModules: export default funcion

// CommonJs: module.exports = function;
module.exports = calculadora;