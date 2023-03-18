/* Practica 1: Objetos y ciclos.
Ejercicio 5: Haz un algoritmo que cuente el número de veces que aparece la letra r en la frase 
“Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del 
ferrocarril”. Imprime el resultado en pantalla.
*/

const text = 'Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril';

const letters = text.split('');

let quantityOfRs = 0;

for (i = 0; i < letters.length; i++){
    if (letters[i] == 'r'){
        quantityOfRs++;
    }
}
console.log('El numero de veces que aparece la letra r en la frase es: ' + quantityOfRs);