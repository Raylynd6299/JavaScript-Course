// las funciones estaticas, son funciones que 
// unicamente seran llamadas dentro de la clase y no 
// seran accesables por la instancia de la clase
class Usuario{
    constructor(permisos="lectura"){this.permisos=permisos}
    static CreateAdmin(){
        return new Usuario("administrador")
    }
}

let admin= Usuario.CreateAdmin();