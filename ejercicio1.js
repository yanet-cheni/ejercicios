const prompt = require ('prompt-sync')();

const numero = parseFloat(prompt('Ingrese un numero: '));

let calculo = numero * 2;

console.log('El doble de su numero es: ' + calculo);
