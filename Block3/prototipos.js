//Prototipos
//Las clases no existen
//los objetos se crean a partir de otros objetos

//__proto__

let user = { nombre: "Uriel" }

typeof user

user.__proto__ // en base a que objetos fue creado

let animal = Object.create(null)

animal.vivo = true;
animal.estVivo = function(){if(this.vivo) console.log("sigue vivo")}

//Herencia de Prototipos busca ob -> ob_P -> ob_P_P
let perro = Object.create(animal)

perro.estVivo()

//Las funciones en JS, tiene un atributo prototype

function User(){}

let user = new User();

console.log(user.__proto__);
console.log(user.prototype)

user.__proto__.saludar = function(){
    console.log("Hola");
}
user.saludar()