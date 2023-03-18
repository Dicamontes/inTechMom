/* Practica 1: Objetos y ciclos.
Ejercicio 4: Sumale 2 a cada elemento del siguiente array:const numbers = [1,3,5,7,9]
*/

const numbers = [1,3,5,7,9];
let resultArray = [];

// Option 1:
for (let i = 0; i < numbers.length; i++ ){
    resultArray.push(numbers[i] + 2);
}
console.log(resultArray);

// Option 2:

resultArray = numbers.map(value => value + 2);
console.log(resultArray);