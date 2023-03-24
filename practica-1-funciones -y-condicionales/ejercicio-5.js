/* Practica 1: Funciones y Condicionales
Ejercicio 5: Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne. 
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.

Luego, invocar las tres funciones. La llamada de las funciones debe coincidir con dicho orden.
*/

function input(){
    // Run npm install prompt -- save
   const prompt = require("prompt-sync")({sigint:true}); 
   let number = prompt("Ingrese un número: ");
   return number;
}

function processing(value){
    let result = value * 2;
    return result;
}

function output(value){
    // Install the alert module: npm install alert
    let alert = require('alert'); 
    alert('El doble del número ingresado es : ' + value );
}

output(processing(input()));