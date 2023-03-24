/* Practica 1: Funciones y Condicionales
Ejercicio 8: Declarar una clase Cliente que permita: Registrar nombre, dinero en la cuenta y número de 
teléfono del cliente.
Agregar un método transferir Dinero(valor), que permita validar que el cliente tenga el dinero 
suficiente para el valor que quiere transferir. En caso de que no cuente con el dinero se deberá 
retornar fondos insuficientes. En caso de tener los fondos se deberá actualizar el valor del dinero 
en la cuenta y se deberá retornar el nuevo total de dinero en la cuenta. En caso de recibir un valor 
de 0 retornar un error que indique que debe poner un número mayor que cero.
*/

class Client {
    constructor(name, accountBalance, phoneNumber) {
      this.name = name
      this.accountBalance = accountBalance
      this.phoneNumber = phoneNumber
  }

  transferMoney(value){
    if (this.accountBalance < value){
        return 'Fondos Insuficientes';
    } else if (this.accountBalance >= value && value != 0){
        this.accountBalance = this.accountBalance - value;
        //console.log ('Transferencia realizada. El nuevo saldo en su cuenta es: ' + this.accountBalance);
        return this.accountBalance;
    }else if (value  == 0){
        return 'Error. Debe ingresar un valor mayor que 0';
    }
  }
}

const client = new Client('Diana Montes', 5000000, 3054418269);

client.transferMoney(2000000);

