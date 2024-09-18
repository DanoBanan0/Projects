//Estructuras de CONTROL -> CONDICIONALES

//IF - EVALUA CASOS VERDADEROS
//IF ELSE -> EVALUA CASOS FALSOS

let condicion = 10 === "10"; 
if(condicion){
    console.log("Este codigo se ejeccuta en caso TRUE"); 
}
else{
    console.log("Este codigo se ejecuta si es FALSE");
}

/*
    Mayor que   " > "
    Menor que   " < "
    Menor o igual  " <= "
    Mayor o igual  " >= "
*/

if( 10 <= 10 ){
    console.log("Afirmativo");
}
else{
    console.log("Negativo");    
}

//Operador Ternario -> Reemplazo de sitaxis para el IF ELSE
// CONDICION ? CODIGO TRUE : CODIGO FALSE

10 < 10 ? console.log("Afirmativo") : console.log("Negativo");

//IF ELSEIF
let variableAux = 3;
if(variableAux > 10){
    console.log("Afirmativo");    
}else if(variableAux > 5){
    console.log("Si es mayor");    
}else{
    console.log("No cumplio las espectativas");
}

// ".trim" remueve los espacios


//Estructuras repetitivas o Bucles

//While -> Mientras

//let numero =1;
while(numero < 10 && numero > 2){
    console.log(numero);
    numero++;
}

//DO WHILE

let numero =1;
do{
    console.log(numero);
    numero++;    
}while(numero < 10 && numero >= 2)

//FOR 
for(let numero = 1; numero < 10; numero++){
    console.log(numero);
}

// FASE 1 = INICIALIZACION + CONDICION DE CORTE + EJECUTAR + INCREMENTO/DECREMENTO
// FASE 2 = CONDICION DE CORTE + EJECUTAR + INCREMENTO/DECREMENTO

//Estructura de dato COMPLEJA

//ARRAY
//let variableCompleja = [];
let corteFSJ25 = ["Erick","Iris","Guille","Eduardo","Karla","Claudia","Jared"];
console.log(variableCompleja);
console.log(corteFSJ25);

// "-- Metodos de ARRAYS --"
//Agregar valores al final de un array
let variableCompleja = [];
variableCompleja.push("Jairo");
variableCompleja.push(26)
console.log(variableCompleja);

//Eliminar el valor al finalde un array
variableCompleja.pop()
console.log(variableCompleja);

//Agregar un valor al principio de un array
variableCompleja.unshift("Jorge")
console.log(variableCompleja);

//Eliminar el valor del principio de un array
variableCompleja.shift()
console.log(variableCompleja);

//PROPIEDAD DE ARRAY
//Averiguar el largo de un array
console.log("--- LARGO DEL ARRAY ---");


let largo = variableCompleja.length;
console.log(largo);
