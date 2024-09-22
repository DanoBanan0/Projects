import { Product } from "./product";

class Tienda {
    private productos: Product[] = [];

    constructor(){
        this.productos = JSON.parse(localStorage.getItem('productos') || '[]')
    }
}