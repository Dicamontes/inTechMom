/* Practica 1: Objetos y ciclos.
Ejercicio 10: Dado el objeto:
const lion = {
    'species': 'Panthera leo',
    'foots': 4,
    'hasTail': true,
    'weight': '190kg',
    'isMamal': true
}
Obtener e imprimir por separado el valor de 3 propiedades usando notación de punto y de corchetes.
*/

const lion = {
    'species': 'Panthera leo',
    'foots': 4,
    'hasTail': true,
    'weight': '190kg',
    'isMamal': true
}

console.log(lion.foots);
console.log(lion['foots']);

console.log(lion.species);
console.log(lion['species']);

console.log(lion.hasTail);
console.log(lion['hasTail']);