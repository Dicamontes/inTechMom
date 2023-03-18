/* Practica 1: Objetos y ciclos.
Ejercicio 6: Con el siguiente array realiza las operaciones que se presentan a continuación:
let people = ["Ana","Carolina","Laura","Natalia",“Fernanda”];
*/

let people = ["Ana","Carolina","Laura","Natalia","Fernanda"];

// a. Usando un for loop itera el array e imprime el nombre de cada persona.
//Option 1:
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

//b. Escribe el comando para eliminar a Carolina del array. Imprime en pantalla la variable people.
//Option 1:
delete people[1];
console.log(people);

//option 2:
people.splice(1, 1);
console.log(people);

// c. Escribe el comando para eliminar a Fernanda. Imprime en pantalla la variable people.
people.pop();
console.log(people);

// d. Escribe el comando para agregar a Francisco al array. Imprime en pantalla la variable people.
people.unshift('Francisco'); //added to the beginning of the array because it was not specified in the statement
console.log(people);

// e.Escribe el comando para agregar tu nombre al final del array. Imprime en pantalla la variable people.
people.push('Diana');
console.log(people);

// f.Escribe el comando para retornar el indice de Natalia(indexOf) e imprimelo en pantalla.
console.log(people.indexOf('Natalia'));

/* g. Hay 2 formas para acceder al indice de tu nombre (que es el último valor del array), 
describe cuáles son. */
console.log(people.indexOf('Diana'));
console.log(people.lastIndexOf('Diana'));