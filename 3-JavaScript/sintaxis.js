console.log("Holis estoy imprimiendo en la consola");

// ----- Operadores Matematicos ------

let suma = 2 + 2;
let resta = 4 - 3;
let divisiones = 135 / 5;
let multiplicacion = 1354 * 356;
let residuo = 10 % 2;

console.log(suma);
console.log(resta);
console.log(divisiones);
console.log(multiplicacion);
console.log(residuo);


// Concatenacion
let sumaFalsa = 2 + "2";
console.log(sumaFalsa);

// ------- Operadores Logicos ----------

let igualdad = 10 == "10";
console.log(igualdad);

let igualdadEsctricta = 10 === 10;
console.log(igualdadEsctricta);

// Desigualdad
let desigualdad = 10 != "10";
console.log(desigualdad);

let desigualdadEstricta = 10 !== "10";
console.log(desigualdadEstricta);

let operadorAND = 10 == "10" & 10 === "10";
console.log(operadorAND);

let operadorOR = 10 == "10" || 10 === "10";
console.log(operadorOR);

 
// Declaracion de funciones
function functionName(){

    console.log("Hola te saludo desde la funcion");
    
}
functionName();

// Funcion tipo VOID
function voidType() {
    console.log("Soy una funcion tipo VOID");    
}

//voidType();

// Tipo Return
function returnType(params) {
    return "Soy una funcion de tipo Return"
}
//console.log(returnType());

let ejecucion1 = voidType();
let ejecucion2 = returnType();

console.log(ejecucion1);
console.log(ejecucion2);


// Funciones con parametros -> Funciones que trabajan con datos que vienen de fuera

function sumar(num1, num2){
    return num1 + num2;
}


let resultado = sumar(15, 5);
console.log(resultado);


// Funcion Flecha
//Declaracion

/*
Constante nombreFuncion = () =>{
    }
*/
const arrowFunction = (num1, num2) => {
    return num1 - num2;
}

//Funcion Callback
function calBackFunction (funcion){
    funcion();
}

function auxiliarFunction (){
    console.log("Estoy funcionando desde el callback");

}
calBackFunction(auxiliarFunction);

// CallBack con funcionFlecha ANONIMA
funcionCalBack();