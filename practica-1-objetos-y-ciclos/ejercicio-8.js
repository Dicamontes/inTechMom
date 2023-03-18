/* Practica 1: Objetos y ciclos.
Ejercicio 8: Declarar una clase Tienda que permita registrar: 
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
*/
class Tienda {
    constructor(name, address, owner, businessActivity){
        this.name = name;
        this.address = address;
        this.owner = owner;
        this.businessActivity = businessActivity;
    }
}