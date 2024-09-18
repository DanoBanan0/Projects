//4 Pilares de POO
/*
    HERENCIA
    POLIMORFISMO

    ENCAPSULAMIENTO -> Limitar el acceso a algo a traves de modificadores
    ABSTRACCION -> Nos da herramientas para interactuar con lo que esté limitado de una clase
*/
/*
    Modificadores de acceso
    Public -> Todo el mundo puede acceder
    Private -> Solo ella misma va a tener acceso
    Protected -> Va a tener acceso la misma clase y sus hijos
*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("Estoy respirando");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    return Person;
}());
var personita = new Person("Daniel Villatoro", 26, "8765432-8");
//personita.name = "Messi";
console.log(personita);
console.log(personita.getName());
