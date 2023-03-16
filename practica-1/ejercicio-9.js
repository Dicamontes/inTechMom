/* Practica 1.
Ejercicio 9: Obtener el valor de un promedio de cinco números. Una vez obtenido el valor, imprimir
el resultado en pantalla.
*/

//Option 1: using variables

const firstNumber = 25;
const secondNumber = 5;;
const thirdNumber = 13;
const fourthNumber = 12 ;
const fifthNumber = 43;

let average = (firstNumber + secondNumber + thirdNumber + fourthNumber +fifthNumber)/5;
console.log(average);

//Option 2: using a function

function numberAverage(numberArray){
    let i = 0;
    let sum = 0;
    while (i < numberArray.length){
        sum = sum + numberArray[i++];
    }
    return numberAverage = sum / numberArray.length;
}

console.log(numberAverage([25, 5, 13, 12, 43]));




