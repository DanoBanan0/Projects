import { Product } from "./product";

export class Tienda {
    private productos: Product[] = [];

    constructor(){
        this.productos = JSON.parse(localStorage.getItem('productos') || '[]')
    }

    agregarProducto(producto:Product){
        this.productos.push(producto)
        this.refreshLocal();
    }
    /*
        Guardamos todos los prodcutos de this.productos
        dentrp del LocalStorage Key "productos"
    */
    refreshLocal(){
        //Este guardado lo que hace es actualizr la lista de prosuctos en el localStorage
        localStorage.setItem('prodcutos',JSON.stringify(this.productos));
    }


}