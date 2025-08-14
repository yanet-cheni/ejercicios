/*1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
 Utiliza prompt() para recibir los números.
 Utiliza parseFloat() para convertir las entradas a números.
 Almacena los resultados en variables adecuadas y muestra el resultado*/

const prompt = require ('prompt-sync')();

const numero1 = parseFloat(prompt("Ingrese el primer numero: "));

const numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

let suma = numero1 + numero2;

console.log('La suma de sus numeros es: ' + suma);