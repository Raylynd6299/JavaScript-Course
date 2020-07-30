//Funciones asincronas

//const { reject } = require("async")
const fetch = require("node-fetch");


//Simpre retornan una promesa
async function suma(valor1,valor2){
    return valor1 + valor2
}

async function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5)
    })
}

//Cunando convertimos una funcion originalmente sincrono en asincrono,
//lo que devuelve es una promesa resuelta
// Promise.resolve( lo que tenia en el returno)

//la unica diferncia entre usar asyn y no usarlo pero retornar una promesa
//es que si usamos async, podemos usar funciones de sicronizacion como
//await

//La palabra reservada await, hace que la ejecucion del codigo se espere a que una promesa sea resuleta

//sin await
let promesa = new Promise ( (resolve,reject)=>{
    setTimeout(resolve,400,5)
} )

//promesa.then( (resultado) => {console.log(resultado);}); 

// con await
// (async function(){
//     let promesa = await new Promise ( (resolve,reject)=>{
//         setTimeout(resolve,400,5)
//     } );
//     console.log(promesa);

// })();



//Se crea la  funcion que se desee ejecutar de forma asincrona 
//Luego se manda a llamar dentro de una funcion asincrona para poder hacer uso de await 

//Ejemplo fuente: developer.mozilla.org
// function resolveAfter2Seconds(x) { 
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
  
//   async function f1() {
//     var x = await resolveAfter2Seconds(10);
//     console.log(x); // 10
//   }
//   f1();


async function showGithubInfo(){
    let response = await fetch('https://api.github.com/users/urielhdz/repos')
    let repos = await response.json()
    console.log('repos :>> ', repos);
}

showGithubInfo();