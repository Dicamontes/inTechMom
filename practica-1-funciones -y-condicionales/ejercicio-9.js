/* Practica 1: Funciones y Condicionales
Ejercicio 9: En un array, instanciar tres (3) clientes usando esta clase, después usar un loop para 
llamar al método transferencia. Imprimir en pantalla a todos los clientes que tienen fondos suficientes.
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
    } else if (value  == 0){
        return 'Error. Debe ingresar un valor mayor que 0';
    }
  }
}

const clients = [new Client('Pedro Perez', 5000000, 3054417069),
                 new Client('Maria Gonzalez', 10000000, 3228784278),
                 new Client('Jose Rodriguez', 8000000, 3007852014)];


for(let i = 0; i < clients.length; i++){
    if(clients[i].transferMoney(6000000) >= 0){
        console.log(clients[i].name);
    }
}