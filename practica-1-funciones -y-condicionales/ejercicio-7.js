/* Practica 1: Funciones y Condicionales
Ejercicio 7: Traer la clase Tienda del punto 8 de la práctica de Objetos y Ciclos. Agregarle un 
método con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre 
las 08 y 13, o entre las 14 y 18. Caso contrario, se retorna false.
*/

const { time } = require("console");

class Tienda {
    constructor(name, address, owner, businessActivity){
        this.name = name;
        this.address = address;
        this.owner = owner;
        this.businessActivity = businessActivity;
    }
    //option 1: passing a Date object
    isOpen1(hour){
        let currentHours = hour.getHours().toString();
        let currentMinutes = hour.getMinutes().toString();
        let currentTime = currentHours + ':' + currentMinutes;
        
        console.log('La hora actual es: ' + currentTime);
        
        if (currentTime >= '08:13' && currentTime <= '14:18') {
            console.log('La tienda está abierta');
            return true;
        } else {
            console.log('La tienda está cerrada');
            return false;
        }
    } 
    
    //Option 2: passing a String with the format HH:mm
    isOpen2(hour2){
        console.log('La hora ingresada es: ' + hour2);
                   
        if (hour2 >= '08:13' && hour2 <= '14:18') {
            console.log('La tienda está abierta');
            return true;
        } else {
            console.log('La tienda está cerrada');
            return false;
        }
    }
}
const hym = new Tienda('HyM', 'Multinacional', 'Stefan Persson','Tiendas de Ropa');

//Calling method isOpen1 passing a Date object
let currentDateAndTime = new Date();
console.log(hym.isOpen1(currentDateAndTime));

//Calling method isOpen2 passing a String with format HH:mm
console.log(hym.isOpen2('14:20'));