//Array
//Una colesccion ordenada de Datos

//Crear un array
let numeros = [1,2,3,4,5,"6"] 

//Longitud mutable
//No es de un solo tipado

//Recorrerlo

for(let i= 0;i< numeros.length;i++){
    console.log(numeros[i])
}

//Metodos y operaciones con Arreglo
numeros.forEach(function(elemento){
    console.log(elemento)
});


//Filter
let lenguajes = ["Ruby","Python","Java","JavaScript"]

arreglo = lenguajes.filter(function(el){
    return el != "Ruby"
})

//En filter se ejecuta la funcion pasada por cada elemento en el arreglo
arreglo2 = lenguajes.filter((el)=> el != "Ruby")


//Find
let el = lenguajes.find(el => el == "JavaScript") 

//Map
let cuadrados  = numeros.map(numero => numero* numero )