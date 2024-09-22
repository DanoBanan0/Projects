export class Product {
    private id:number
    private nombre:string;
    private price:number;
    private cant:number;

    constructor(idParam:number,nombreParam:string,priceParam:number,cantParam:number){
        this.id = idParam;
        this.nombre = nombreParam;
        this.price = priceParam;
        this.cant = cantParam;
    }
}

