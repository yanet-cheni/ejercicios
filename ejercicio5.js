/*1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
 Utiliza prompt() para recibir el nombre del usuario.
 Muestra un mensaje utilizando concatenación de cadenas.*/

const prompt = require ('prompt-sync')();

let nombre = prompt("Ingrese su nombre completo: ");

console.log('Bienvenido ' + nombre + ' al curso de Backend en ADA');