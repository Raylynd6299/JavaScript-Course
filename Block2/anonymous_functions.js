 function executor(funcion){
     funcion()
 }
 function decirHola(){
     console.log("Hola")
 }
executor(decirHola)
executor(function(){
    console.log("Hola")
}) 


let usuario = {
    nombre: 'Uriel',
    apellido: 'Hernandez',
    nombreCompleto: function(){
        console.log(this.nombre+' '+this.apellido);
    }
}

let executorr = {
    funcion: null,
    execute: function(f){
        this.funcion = f;
        this.funcion();
    }
}

executorr.execute(usuario.nombreCompleto);