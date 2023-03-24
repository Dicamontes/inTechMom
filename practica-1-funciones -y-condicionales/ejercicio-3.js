/* Practica 1: Funciones y Condicionales
Ejercicio 3: Imprimir en pantalla el índice del día miércoles.
*/

const weekDays = ['lunes','martes','miercoles','jueves','viernes'];

for (let i = 0; i < weekDays.length; i++){
    if (weekDays[i] === 'miercoles'){
        console.log(i);
    }
    else continue;
}