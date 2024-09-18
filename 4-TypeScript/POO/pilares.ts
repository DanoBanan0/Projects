//4 Pilares de POO

/*
    HERENCIA -> Capacidad de una subclase de obtener todo de su Clase Padre
    POLIMORFISMO -> 

    ENCAPSULAMIENTO -> Limitar el acceso a algo a traves de modificadores
    ABSTRACCION -> Nos da herramientas para interactuar con lo que esté limitado de una clase
*/

/* 
    Modificadores de acceso
    Public -> Todo el mundo puede acceder
    Private -> Solo ella misma va a tener acceso
    Protected -> Va a tener acceso la misma clase y sus hijos
*/

class Person {
    private name:string;
    private age:number;
    private dui:string;

    constructor(nameParam:string,ageParam:number,duiParam:string) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    respirar(){
        console.log("Affff");
    }
    
    setAge(ageParam:number) {
        this.age = ageParam;
    }
    getName():string {
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getDui(){
        return this.dui;
    }

}

let personita = new Person("Daniel Villatoro",26,"8765432-8");
//personita.name = "Messi";
console.log(personita);
console.log(personita.getName());

class Developer extends Person {
    private exp:number;
    private techSkills:string[];
    private softSkills:string[];
    private gitUser:string;
    private area:string;
    private proyectos:string[];

    constructor(nameParam:string,ageParam:number,duiParam:string,expParam:number,techSkillsParam:string[],softSkillsParam:string[],gitUserParam:string,areaParam:string,proyectosParam:string[]){
        super(nameParam,ageParam,duiParam);
        this.exp = expParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.proyectos = proyectosParam;
    }

    getArea(){
        return this.area;
    }

    respirar(): void {
        console.log("Sniff sniff");
        
    }
}

let developercito = new Developer("Daniel",26,"1123456-2",3,["JavaScript","HTML","CSS","Bootstrap","TypeScript"],["Comunicacion","Proactivo","Liderazgo","Autocritica"],"DanielGitUser","BackEnd Developer",["dsds"]);
developercito.getArea();

personita.respirar();
developercito.respirar();