import { Product } from './clases/product';
import { Tienda } from './clases/tienda';
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <h1>Gestion de Tienda</h1>

      <form id="form-product">
        <section>
          <label>Nombre de Producto</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa Nombre de producto">
        </section>

        <section>
          <label>Precio</label>
          <input type="text" id="precio" name="precio" placeholder="Ingresa su precio">
        </section>

        <section>
          <label>Cantidad</label>
          <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa su cantidad">
        </section>

        <button type="submit">Agregar Producto</button>
      </form>

  </div>
`
//Inicializamos la Tienda para poder manipular los productor
const tienda = new Tienda();


//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Esto es texto desde el p";
const form = document.getElementById("form-product") as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
    e.preventDefault();
    console.log("Holiwis");
    
    const id = Date.now();
    //sleccionaos los elementos a mostrar
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
    const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);
    
    console.log(id);
    console.log(nombre);
    console.log(precio);
    console.log(cantidad);
    
    let productito = new Product(id,nombre,precio,cantidad)
    console.log(productito);
    tienda.agregarProducto(productito);
  });

