/* Practica 1: Funciones y Condicionales
Ejercicio 2: Usar el comando slice para hacer una copia del array que no contenga los dias
“lunes” ni “jueves”.
*/

const weekDays = ['lunes','martes','miercoles','jueves','viernes'];

const weekDaysLessMonday = weekDays.slice(0,-2);

const fridayArray = weekDays.slice(-1);

console.log(weekDaysLessMonday.concat(fridayArray));