//Scopes
function mayor_de_edad(edad) {
    if(edad >= 18){
        var resultado = "Eres mayor de edad"
    }else{
        var resultado = "Eres menor de edad"
    }

    console.log(resultado)
}

//let y const tienen el scope al blocque de codigo mas proximo

//var tiene por scope al de la funcion más proxima