//Js es un lenguaje de programacion asincrona
 
const request = require('request')

request('http://google.com',function(){
    console.log("Temrmine la peticion a google")
})