//for_of en elementos

let arreglo = [2,3,4]

for (numero of arreglo){
    console.log(numero);
}

function saludar(){
    for (nombre of arguments) {
        console.log("Hola " + nombre);
    }
}
saludar("Mundo","Mexico","CDMX")
console.log("Hola");
//for_in en propiedades

let usuario = {
    nombre : "Raymundo",
    edad:21
}

for(propiedad in usuario){
    console.log(propiedad);
}