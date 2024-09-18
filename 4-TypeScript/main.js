//Declaracion de variable en JS
var variable = "Daniel";
//Declaracion de variable + tipo de dato en TS
var cadenaTexto = "Daniel";
var numero = 1.5;
var boleano = false;
//Declaracion de array
var arraycito = ["adad", "sfasd"];
//NUNCA UTILIZAR ESTO
var array = ["asda", 12, false];
//Array numerico o string
var arrayNumString = ["adas", 23];
//Declaracion de Tuplas
//Es un array con indices limitado y con sus tipos de datos declarados previamente
var datosUsuario;
datosUsuario = ["Daniel", 75];
//Funciones en TS
function tipoVoid() {
    console.log("Chauchis");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 2 + "5";
}
function saludar(nombre) {
    //Template String -> Plantilla literales ->Ingresar un dato de JS en un String
    return "Hola como estas? ".concat(nombre);
}
console.log(saludar("Daniel"));
