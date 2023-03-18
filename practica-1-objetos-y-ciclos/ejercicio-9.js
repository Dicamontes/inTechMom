/* Practica 1: Objetos y ciclos.
Ejercicio 9: Instanciar 5 tiendas usando la clase Tienda que se creó en el punto anterior.
*/

class Tienda {
    constructor(name, address, owner, businessActivity){
        this.name = name;
        this.address = address;
        this.owner = owner;
        this.businessActivity = businessActivity;
    }
}

const hym = new Tienda('HyM', 'Multinacional', 'Stefan Persson','Tiendas de Ropa');

const exito = new Tienda('Grupo Exito', 'Multinacional', 'Gustavo Toro Quintero', 'Almacenes de cadena');

const homecenter = new Tienda('Sodimac Homecenter', 'Multinacional', 'Grupo Falabella', 'Artículos para el hogar y materiales de construcción');

const payless = new Tienda('Payless ShoeSource', 'Multinacional', 'Collective Brands, Inc.', 'Calzado, accesorios');

const kfc = new Tienda('Kentucky Fried Chicken', 'Multinacional', 'Yum! Brands', 'Comida rápida');

console.log(hym);
console.log(exito);
console.log(homecenter);
console.log(payless);
console.log(kfc);