// Crear pruebas unitarias para cada método del objeto calculadora (sumar, restar, multiplicar, dividir), para evaluar división entre 0 y para obtener un valor cercano al esperado
// Importar la función u objeto que voy a testear.
const calculator = require('../modules/calculadora')

// Estructura de una prueba unitaria en Jest: test('string', callback => {expect(function).toBe(resultado)})
test('Suma de dos números', () => {
    expect(calculator.suma(10, 20)).toBe(31);
});

test('Suma de dos números', () => {
    expect(calculator.suma(55, 1)).toBe(56);
});

test('Suma de dos números', () => {
    expect(calculator.suma(5, 1)).toBe(56);
});

// resta, multiplicación, división, división entre 0 y la de número aproximado