//Imprimir todas las posiciones de un array numerico
function recorrerArray() {
if(array.length == 0){
    return array;
}

    for(let i = 0; i < array.length; i++){
        console.log(array[i]);        
    }
}
let array = [1,2,3,4,];
recorrerArray(array)

//Recorrer un array y devolver un array con los numero pares
function numParesArray(arr){
    let i = 0;
    let arrayAux = [];
    if(arr.length == 0){
        return arr;
    }

    while(i < arr.length){
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
            arrayAux.push(arr[i]);
        }
        i++
    }
    return arrayAux;
}
let arraycito = [1,2,3,4,5,6,7,8];
console.log(numParesArray(arraycito));
