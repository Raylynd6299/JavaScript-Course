//Tiene mejor sintaxis que de iteradores
//no debemos hacernos cargo del estado

//Sintaxis = function* name(){}
function* counter(){
    console.log("Estoy aqui");
    yield 1;
    console.log("Ahora estoy aqui");
    yield 2;
}

let generator = counter();

console.log( generator.next());

console.log( generator.next());

console.log( generator.next());


function* counterr(){
    for(var i = 0;i<5;i++){
        yield i;
    }
}

let gg = counterr();
let a = 0

while(!((a = gg.next()).done)){
    console.log(a.value);
    console.log("Ray");
}

//Delegar genaradores

function* retornador(){
    yield*counterr();
}

let gggg = retornador()


console.log(gggg.next())
console.log(gggg.next())
console.log(gggg.next())
console.log(gggg.next())