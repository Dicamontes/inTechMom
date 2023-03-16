/* Practica 1.
Ejercicio 8: La cajera de un supermercado necesita implementar un algoritmo que le imprima 
en pantalla el precio con descuento de un producto. Si el precio del producto es 100 y el porcentaje 
de descuento es 20%, el precio del producto con descuento es 80. 
El programa debe imprimir en pantalla:
Su producto tiene un precio de 80, el descuento fue del 20%
*/

const productPrice = 100;
let discount = 20;

let discountedPrice = productPrice * (1 - (discount / 100));

console.log("Su producto tiene un precio de " + discountedPrice + ", el descuento fue del " + discount + "%");
