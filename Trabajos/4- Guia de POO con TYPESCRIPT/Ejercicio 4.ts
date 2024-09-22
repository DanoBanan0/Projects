class Cuenta {
    nombre:string;
    cantidad:number;
    tipo:string;
    numeroCuenta:string;

    constructor (nombreParam:string,cantidadParam:number,tipoParam:string,numeroCuentaParam:string){
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipo = tipoParam;
        this.numeroCuenta = numeroCuentaParam;
    }

    depositar () {
        if(this.cantidad < 5)
            return console.log("La cantidad a depositar debe ser mayor a $5.00");
        else{
            return console.log("Su deposito ha sido exitosa.\n\nCantidad: $" + this.cantidad);            
        }
    }

    retirar (valor:number) {
        if(valor >= 5 && this.cantidad >= 5)
            return "Retiro exitoso.\n\nSe ha retirado: $" + valor + "\nSaldo Anterior: $" + this.cantidad + "\nNuevo Saldo: $" + (this.cantidad - valor);
        else{
            return console.log("Eres pobre y no tienes suficiente dinero en tu cuenta");
            
        }
    }

    datosCuenta () {
        console.log("Nombre: " + this.nombre + "\nTipo de Cuenta: " + this.tipo + "\nNumero de Cuenta: " + this.numeroCuenta);
        
    }
}

let cuentita:Cuenta = new Cuenta("Daniel",20.00,"Ahorro","2828282828");

console.log(cuentita.depositar());
console.log(cuentita.retirar(10));
console.log(cuentita.datosCuenta);


