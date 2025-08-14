/*1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
 Utiliza el operador módulo (%) para comprobar si el número es divisible
por 2.
 Usa una estructura if-else para mostrar el mensaje adecuado*/

const prompt = require ('prompt-sync')();

const numero = parseFloat(prompt("Ingrese un numero natural "));

let resultado = '';

if (numero % 2 == 0 ) {
    resultado = 'Su número es PAR'
} else {
    resultado = 'Su número es IMPAR'
}

console.log(resultado);