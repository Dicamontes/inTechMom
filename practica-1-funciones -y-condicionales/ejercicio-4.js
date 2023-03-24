/* Practica 1: Funciones y Condicionales
Ejercicio 4: Vamos a eliminar el día martes y en su lugar agregar el día domingo con ayuda del 
comando splice. El nuevo array debe ser [‘lunes’,‘domingo,‘miercoles’,‘jueves’,‘viernes’
*/

const weekDays = ['lunes','martes','miercoles','jueves','viernes'];

weekDays.splice(1, 1, 'domingo');

console.log(weekDays);