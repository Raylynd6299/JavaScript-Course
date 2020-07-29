//Funcniones Contructoras

function Alumno(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.presentarse = () =>{
        console.log(this.nombre+" "+this.apellido+" Tengo "+this.edad+" años")
    }
}

let Raymundo = new Alumno("Raymundo","Pulido",21);
