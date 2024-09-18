//Programacion orientada a objetos
//es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos


//Declaracion de Clases

class Auto{
    //Caracteristicas generales -> Propiedades o atributos
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    cantKilometros:string;
    plazas:number;
    frenos:string;
    modelo:string;
    anioFab:number;

    //Consturctor -> metodo reservado que nos sirve para instanciar el obeto
    constructor(numChasisParam:number,motorParam:string,colorParam:string,tipoCombustibleParam:string,transmisionParam:string,plazasParam:number,frenosParam:string,modeloParam:string,anioFabParam:number){
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
    encender():void{
        console.log("Cuchau");
    }
    apagar():void{
        console.log("Chauchis");
    }
}

//Instanciar objetos a traves de una clase -> crear un objeto
let autito:Auto = new Auto(123456,"V8","azul","Gasolina","Manual",2,"ABC","Huayra",2018);
console.log(autito);

//autito.modelo = "R8";
//console.log(autito);

autito.motor = "V12"
console.log(autito);
