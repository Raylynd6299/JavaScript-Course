//String

//primitivo u objeto
//ambos usan cuarcionde tipos

//Primitivo 
let cadena = "Raymumdo"

//Longitud
console.log(cadena.length);

//objeto
let cadena_obj = new String("Raymundo")

//comparacion de cadenas

console.log("A" > "B");
console.log("a" > "B");
console.log("A" == "a");

//local compare
//iguales = 0
// A > B = -1
// B > A = 1


//Subcadenas y caracteres
//navegar
for (const caracteres of cadena){
    console.log(caracteres);
}
console.log(cadena.substring(0,4));
console.log("Hoal");
console.log(cadena.slice(-4,0));

//Buscar subcadenas

console.log(cadena.indexOf("a")); // regresa el indice

cadena.includes("ay") // regresa true o false

cadena.split("a")

//si tenomo sun arreglo de cadenas, par volverlo una cadena en general
let arr = ["Hola","Ray","Nos","Vemos"]

console.log(arr.join(" "));

//strip