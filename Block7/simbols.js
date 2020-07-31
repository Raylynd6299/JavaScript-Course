//Identificadores realmmente unicos

let simbol = Symbol('mi-simbolo')

let obj = {};

obj[simbol] = ()=>console.log("Hola Simbolos");
//los simbol eos se utilizan tambien como claves de un objeto

//obj.simbol()
obj[simbol]()