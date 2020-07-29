//JSON
//Js orientado a prototipos
//Definicion
//{
//   nombre_del_campo:Valor
//}
//Como valor se acepta cualquier tipo de datos

let curso = {
    titulo:"Curso Profesional de JavaScript",
    duracion:9,
    formato:"Video",
    bloque:["introduccion","Funciones"],
    inscribir: (usuario) => {
        console.log(usuario + "ahora esta inscrito");
    }
}

//Como obtener esos valores
console.log(curso.titulo);
console.log(curso["titulo"]);
usuario.inscribir("Ray")

//asignar valores

curso.titulo = "Curso de Python"