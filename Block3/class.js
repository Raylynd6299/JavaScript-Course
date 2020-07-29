//Clases

//Class declarations
class Alumno{}

//Class expressions
let Curso = class{ }

let Usuario= class Usuario{}

//Funcionan igual ambas

class Curso{

    constructor(titulo){
        this.titulo = titulo
    }

    inscribir(Usuario){
        console.log(Usuario + " se ha inscrito")
    }
}

let JS = new Curso("Curso de JS")

//Constructores

class Persona{
    constructor(titulo,duracion){
        //recuerda el arreglo arguments
        this.titulo=titulo;
        this.duracion=duracion
        this.dificultad = "Dificil"
    }
}