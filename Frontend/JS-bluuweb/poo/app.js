// console.log("funcionando");

// function Persona(nombre){
//     this.nombre=nombre
//     this.saludar = function(){
//         return `${this.nombre} dice hola`
//     }
// }
// const juanito = new Persona("juanito")
// console.log(juanito.saludar());

class Persona {
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    get getNombre(){
        return this.nombre
    }
    set setNombre(nombre){
        return this.nombre
    }
    saludar(){
        return `${this.nombre} doce Hola!`
    }
    static probarSaludo(nombre){
        return `${nombre}  probando saludo`
    }
}
class Estudiante extends Persona{
    constructor(nombre,edad,notas=[]){
        super(nombre,edad)
        this.notas=notas
    }
    set setNotas(nota){
        this.notas.push(nota)
    }
    get getNotas(){
        return this.notas
    }
    saludar(){
        return `${this.nombre} desde Estudiante`
    }
}

const jon = new Estudiante("jon",28)
jon.setNotas=7
jon.setNotas=5
jon.setNotas=1

console.log(jon.getNotas);

// console.log(Persona.probarSaludo("jon"));

// const juan = new Persona("juan")
// juan.setNombre="pedrito"
// console.log(juan.getNombre);
// console.log(juan.saludar());
