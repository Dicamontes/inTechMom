/* Practica 1: Funciones y Condicionales
Ejercicio 1: Teniendo el array const weekDays = ['lunes','martes','miercoles','jueves','viernes'];
Iterar por todos los elementos del array hasta que llegue al día jueves, imprimir por consola
`llegamos al dia ${[nombreDelItem]}`y después salir del loop.
*/

const weekDays = ['lunes','martes','miercoles','jueves','viernes'];

for (let i = 0; i < weekDays.length; i++){
    if (weekDays[i] === 'miercoles'){
        console.log('Llegamos al día ' + weekDays[i]);
    }
    else continue;
}