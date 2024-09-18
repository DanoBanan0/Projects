//Declaracion de variable en JS
let variable = "Daniel";

//Declaracion de variable + tipo de dato en TS
let cadenaTexto:string = "Daniel";
let numero:number = 1.5;
let boleano:boolean = false;

//Declaracion de array
let arraycito:string[] = ["adad","sfasd"];

//NUNCA UTILIZAR ESTO
let array:any[] = ["asda",12,false]

//Array numerico o string
let arrayNumString:(number|string)[] = ["adas",23]

//Declaracion de Tuplas
//Es un array con indices limitado y con sus tipos de datos declarados previamente
let datosUsuario:[string,number];
datosUsuario = ["Daniel",75];

//Funciones en TS
function tipoVoid():void{
    console.log("Chauchis");
}

function sumar():number {
    return 2 + 2;
}

function sumarOConcatenar():number|string {
    return 2 + "5";
}

function saludar(nombre:string):string{
    //Template String -> Plantilla literales ->Ingresar un dato de JS en un String
    return `Hola como estas? ${nombre}`
}

console.log(saludar("Daniel"));
