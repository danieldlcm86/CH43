// Función para determinar si un número es par o es impar

const determinarParImpar = (numero) => {
    console.log(numero % 2 === 0 ? `El número ${numero} es par` : `El número ${numero} es impar`);
}

// Exportar mi función para que pueda ser utilizadas en cualquier parte de mi proyecto. 
export default determinarParImpar;