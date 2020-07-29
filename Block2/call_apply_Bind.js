function executor(funcion){
    //funcion.call(tutor)
    funcion()
}


let tutor = {
    nombre :"Uriel",
    apellido:"Hernandez",
    nombreCompleto:function(){
            console.log(this.nombre+" "+ this.apellido)
    }
} 

//executor(tutor.nombreCompleto);
executor(tutor.nombreCompleto.bind(tutor))

function saluda(nombre){console.log("Hola"+ nombre)}

saluda.call(window,"Raymundo")
saluda.apply(window,["Raymundo","Daniela"])