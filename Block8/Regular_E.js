//Expresiones Regulares
//Caracteres literales y especiales (meta caracteres)

//Ejemplo : /hola/

//tipo caracteres, las aserciones, agrupamientos/rangos, cuantificadores, unicode property


//Busqueda

let texto =  "hola, me llamo Raymundo y tengo 21 años"

console.log(texto.search(/Raymundo/));
console.log(texto.search(/\d/));
console.log(texto.match(/\d+/g));

//remplazar patrones

console.log(texto.replace(/Raymundo/g,"Ray bb"));

let texto2 = "1000 numero disponibles"

console.log(texto2.replace(/(\d)(\d{3})/g,"$1,$2"));

// [abcd] el que salga en combinacionde algun otro

// + * . {} {1, } {1,4} [a-z] [1-4] ^