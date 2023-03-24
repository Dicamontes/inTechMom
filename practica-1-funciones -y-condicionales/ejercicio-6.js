/* Practica 1: Funciones y Condicionales
Ejercicio 6: Codificar dos funciones: 
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo 
retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su 
equivalente en pesos argentinos.
Luego crear una nueva función quoteCurrency(moneda), la cual recibe un valor de si quiere cotizar 
pesos o dolares, en la que dependiendo de la moneda ingresada, se llame a la función correspondiente.
*/

function quoteDollar(argentinePesos){
   let dollarConversion = argentinePesos * 0.0049;
   return dollarConversion;
}

function quoteArgentinePesos(dollar){
   let argentinePesosConversion = dollar * 205.02;
   return argentinePesosConversion;
}

function quoteCurrency(currencyToObtain, amountToConvert){
    let conversion;
    if (currencyToObtain == 'dolares'){
        conversion  = quoteDollar(amountToConvert);
        console.log ('El equivalente en dolares de ' + amountToConvert + ' pesos argentinos es: ' + conversion.toFixed(3) + ' dolares.');
    } else if (currencyToObtain == 'pesos'){
        let conversion = quoteArgentinePesos(amountToConvert);
        console.log ('El equivalente en pesos argentinos de ' + amountToConvert + ' dolares es: ' + conversion.toFixed(3) + ' pesos argentinos.');
    }
}

quoteCurrency('dolares', 5);
quoteCurrency('pesos', 5);