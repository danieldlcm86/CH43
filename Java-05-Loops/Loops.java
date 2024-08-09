package org.generation.loops;

import java.util.Scanner;

public class Loops {
	public static void main(String[] args) {
		// --- Loops, bucles, ciclos: for, while, do-while
		
		// 1. Crear un programa que realice una cuenta de 1 a n, donde n es el número que el usuario proporciona
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingresa un número final");
		
		// Podemos inicializar múltiples variables del mismo tipo en una sola línea
		int numInicial, numFinal;
		numInicial = 1;
		numFinal = scanner.nextInt();
		
		while ( numInicial <= numFinal ) {
			System.out.println(numInicial);
			numInicial++;
		}
		
		// 2. Crear un programa que solicite al usuario un número entre 1 y 999, para determinar cuántos dígitos posee dicho número. El programa se ejecuta sin terminar el proceso hasta que el usuario ingrese el número 0
		int numero;
		
		do {
			System.out.println("Ingresa un número entre el 1 y 999 para conocer cuántos dígitos tiene. \nAl ingresar el 0 se termina el programa");
			numero = scanner.nextInt();
			
			if ( numero >= 100 && numero <= 999) {
				System.out.println("El número " + numero +  " posee 3 dígitos");
			} else if ( numero >= 10 && numero <= 99 ) {
				System.out.println("El número " + numero +  " posee 2 dígitos");
			} else if ( numero >= 1 && numero <= 9 ){
				System.out.println("El número " + numero +  " posee 1 dígito");
			} else {
				System.out.println("Tu número no entra en el rango");
			}
			
		} while( numero != 0 );
		System.out.println("\u001B[33mEl programa ha finalizado\u001B[37m");
		
		// 3. Determinar un cliente ganador
		for (int contador = 1; contador <= 10; contador++) {
		    //Sentencia continue
		    if (contador == 5) {
		        System.out.println("Cliente ganador");
		        continue;
		    }
		    System.out.println("Cliente número " + contador);
		}
				
		// 4. Crear un programa que nos permita calcular el área de un círculo, solicitando al usuario el valor del radio de la circunferencia
		System.out.println("Ingresa el radio de la circunferencia para calcular el área de un círculo");
		double radio = scanner.nextDouble();
		
		// Pi * r^2
		double area = Math.PI * Math.pow(radio, 2);
		
		System.out.println("El área de la circunferencia es de " + area);
		
		scanner.close();
	}
}
