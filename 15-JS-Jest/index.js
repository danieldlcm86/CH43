// Importar el módulo de calculadora utilizando CommonJs
const calculator = require('./src/modules/calculadora')

console.log(calculator.suma(10, -20));
console.log(calculator.resta(-10, 30));
console.log(calculator.multiplicacion(-152, 36));
console.log(calculator.division(55, 77));