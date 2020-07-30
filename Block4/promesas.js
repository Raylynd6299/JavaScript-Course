//Funciones desplegadas al realizarse una accion
//fullfield
//rejected
//pending
// setled

const rp = require('request-promise')

rp('http://google.com')
   .then(function(html){
       console.log("termine la  peticion de google")
   }).catch(function(err){
       console.error(err)
   })

//Crear promesas propias
//Valor que eventualmente existira
const request = require('request');
// function asincrono(){
//     return new Promise(function(resolve,reject){
//         //resolve se manda a llamar cuando termino
//         resolve("Todo salio bien")

//         //rejected cuando hay problemas con la promesa
//         reject(new Error("No se pudo completar"))
//     })
// }

function leer(url){
    return new Promise(function(resolve,reject){
        //Aqui
        request(url,function(err,response){
            if  (err){
                reject(err)
            }else{
                resolve(response)
            }
        })
    })
}

leer('http://google.com').then(function(response){
    console.log(response)
}).catch(function(err){
    console.log(err)
})