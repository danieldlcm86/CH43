# Utilizar Jest como framework de test unit

## Configurando Jest
1. Inicilizar node con la configuración personalizada, proporcionando la información solicitada: package name, version, description, entry point, **test comand: jest**, git repository, keywords, author, license, OK
```bash
npm init
```
2. Crear entry-point `ìndex.js`
3. Instalar jest como framework de pruebs unitarias para nuestro proyecto
```bash
npm install --save-dev jest
```
Podemos observar que se agregan los modulos de node (node_modules), el archivo package-lock.json y en el archivo package.json se agrega la dependencia de jest con la versión correspondiente.

## Configurando los archivos para ejecutar pruebas unitarias
1. Crear carpeta `src` y dentro las carpetas `modules` y `tests`
2. Dentro de modules, crear el archivo `calculadora.js` con funciones necesarias para sumar, restar, multiplicar y dividir dos números enteros.
3. Dentro de tests, crear el archivo `calculadora.test.js` donde vive el código que permite realizar las pruebas
4. Crear las funciones de prueba siguiendo la documentación oficial
5. Ejecutar las pruebas unitarias en el punto de entrada de mi proyecto (index.js) con el comando
```bash
npm test
```