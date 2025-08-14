//. Pida al usuario que ingrese un número.
//2. Verifique si el número es positivo, negativo o igual a cero.
//3. Muestre un mensaje indicando cuál es el caso.
//Requisitos:
//Utiliza una estructura de control de flujo (if, else if, else) para hacer las verificaciones.
//Usa parseFloat() para convertir la entrada del usuario a un número.

const prompt= require("prompt-sync")();

const numero = parseFloat(prompt("Ingrese su numero: "));
let resultado = ''; 

if (numero == 0) {
    resultado = 'Su numero es cero'

} else if (numero > 0) {
    resultado = 'Su numero es positivo'
    
} else {
    resultado = 'Su numero es negativo'
}

console.log(resultado);

