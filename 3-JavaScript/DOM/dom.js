console.log("Estoy andando soy Dinamic");

//Agarrar un elementodel DOM
let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

//Propiedades mas utilizadas
//Extrae todo el contenido HTML de etiqueta
console.log(elementoDOM.innerHTML);
//Extrae  todo el contenido de texto de la etiqueta
console.log(elementoDOM.innerText);   

elementoDOM.innerText = "Te cambie desde el JS";
console.log(elementoDOM.innerHTML);
elementoDOM.innerHTML = "<span>Cambie otra vez</span>";
console.log(elementoDOM.innerHTML);
 

//Agarrar otro elemento del HTML
const contenido = document.querySelector('#content')

console.log(contenido);

contenido.innerHTML = ' <article><h1> Ingresado desde JS </h1><h2>Y soy el hermano</h2></article>';
console.log(contenido);








//Modificando un botón
const boton1 = document.getElementById('btn')
boton1.addEventListener('click' , () => { 
    alert('Valar Morghulis');
    console.log("Despues del Aler");
    
})

function apretandoBoton(){
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    alert(nombre + " " + apellido);
}

function cambiandoInput(e){
    console.log(e.target.value);
    console.log("Cambie");
}

