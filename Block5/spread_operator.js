//spread sintax

//combinar arreglos hashes entre otros

let numeros = [2,3,5];

function sumar(n1,n2,n3){
    return n1+n2+n3;
}

//apply resive como primer argumento el  contexto para aplicar la funcion
// y como segundo argumento una arreglo, donde pasara cada elemento del arreglo como argumento de la funcion

let resultado = sumar.apply(this,numeros)

console.log(resultado);

//usando el spread_operator like Go
resultado = sumar(...numeros)
console.log(resultado)

//combinar dos arreglos

let otro = ["Hola","Mundo"]

console.log([...numeros,...otro]);

console.log([1,6,9,...numeros,10,11,12]);

//Combiar objetos

let objeto = {
    clave:3
}

let segundo = {
    otraclave:4
}

let obj_con = {
    ...objeto,
    ...segundo
}

console.log(objeto,segundo);

console.log('obj_con :>> ', obj_con);