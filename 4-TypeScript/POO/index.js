//Programacion orientada a objetos
//es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
//Declaracion de Clases
var Auto = /** @class */ (function () {
    //Consturctor -> metodo reservado que nos sirve para instanciar el obeto
    function Auto(numChasisParam, motorParam, colorParam, tipoCombustibleParam, transmisionParam, plazasParam, frenosParam, modeloParam, anioFabParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCombustibleParam;
        this.transmision = transmisionParam;
        this.plazas = plazasParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.anioFab = anioFabParam;
    }
    //Metodos -> Accion
    Auto.prototype.encender = function () {
        console.log("Cuchau");
    };
    Auto.prototype.apagar = function () {
        console.log("Chauchis");
    };
    return Auto;
}());
//Instanciar objetos a traves de una clase -> crear un objeto
var autito = new Auto(123456, "V8", "azul", "Gasolina", "Manual", 2, "ABC", "Huayra", 2018);
console.log(autito);
//autito.modelo = "R8";
//console.log(autito);
autito.motor = "V12";
console.log(autito);
