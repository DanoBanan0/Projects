/*
Realiza una funcion que reciba un array NUMERICO y retorne un array
completamente nuevo solamente con los numeros que sean multiplo de 3
y que la suma de todos sus numeros de menos de 100
*/

//------------ Solucion ----------------

let numeros = [33,6,4,5,12,89,6,6,66];

function multiplos(num){
    if(num.length <= 1) return num;

    let arrayMultiplos = [];
    let suma = 0;

    for(let i = 0; i < num.length; i++){
        if(suma < 100){
            if(num[i] % 3 == 0){
                arrayMultiplos.push(num[i]);
                suma = suma + num[i];
            }
            if(suma >= 100){
                suma = suma - num[i];
            }
        }
        else {
            break;
        }
    }
    console.log("La suma de los numeros es: " + suma);
    
    return arrayMultiplos;
}

console.log(multiplos(numeros));
