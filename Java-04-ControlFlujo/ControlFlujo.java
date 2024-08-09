package org.generation.controlDeFlujo;

import java.util.Scanner;

public class ControlFlujo {
	public static void main(String[] args) {
		/*
		 * Scanner. Método de java que me permite solicitar a un usuario cualquier tipo de dato.
		 * Tenemos que importar la clase Scanner en nuestra clase e instanciar un nuevo objeto de Scanner.
		 * */
		
		// 1. Instanciar un objeto de tipo Scanner
		Scanner scanner = new Scanner(System.in);
		
		// 2. Darle contexto al usuario
		System.out.println("Ingresa tu nombre");
		
		// 3. Guardar el objeto Scanner instanciado en una variable, según el tipo de datos que solicitamos
		String nombre = scanner.next();
		
		// 4. Imprimir el valor de la variable nombre
		System.out.println("Bienvenido " + nombre);
		
		// -- Si quiero solicitar al usuario otra información, puedo reutilizar el objeto de tipo Scanner instanciado
		System.out.println("Ingresa tu edad:");
		
		int edad = scanner.nextInt();
		
		System.out.println(nombre + " tu edad es de " + edad + " años");
	
		
		/*
		 * Control de flujo. Sentencias condicionales.
		 * if, else, else if, switch, operador ternario
		 * */
		// --- if, else if, else. Determinar si una persona es un bebé, un niño, adolescente, un adulto o adulto mayor
		if (edad >= 18 ) {
			if (edad < 60) {
				System.out.println("Es un adulto");
			} else {
				System.out.println("Es un adulto mayor");
			}
		} else if (edad >= 12 ) {
			System.out.println("Es un adolescente");
		} else if (edad >= 3 ) {
			System.out.println("Es un niño");
		} else {
			System.out.println("Es un bebé");
		}
		
		// -- switch. Ingresa un número del 1 al 7 para conocer a qué día de la semana corresponde
		System.out.println("Ingresa un número del 1 al 7 para conocer a qué día de la semana corresponde");
		int numeroDia = scanner.nextInt();
		
		switch (numeroDia) {
		case 1:
			System.out.println("Lunes");
			break;
		case 2:
			System.out.println("Martes");
			break;
		case 3:
			System.out.println("Miércoles");
			break;
		case 4:
			System.out.println("Jueves");
			break;
		case 5:
			System.out.println("Viernes");
			break;
		case 6:
			System.out.println("Sábado");
			break;
		case 7:
			System.out.println("Domingo");
			break;
			default:
				System.out.println("Número invalido");
				break;
		}
		
		// -- operador ternario. Tenemos que establecer el tipo de dato de la salida del código
		int hora = 16;
		String operadorTernario = (hora < 20) ? "Buen día" : "Buenas noches";
		System.out.println(operadorTernario);
		
		// Por buena práctica debemos cerrar el scanner
		scanner.close();
		
	}
}
