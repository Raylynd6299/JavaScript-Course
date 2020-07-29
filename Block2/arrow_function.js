let demo = ()=>{
    console.log("Hola mundo")
}

let saludar = ()=>console.log("Hola mundo")

let tutor = {
    nombre :"Uriel",
    apellido:"Hernandez",
    nombreCompleto:function(){
        setTimeout(()=>{
            console.log(this.nombre+" "+ this.apellido)
        },1000);
    }
} 