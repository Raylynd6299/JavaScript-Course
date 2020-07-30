

const fetch = require("node-fetch");


//Directo con la promesa
//let promesa = fetch('https://api.github.com/users/urielhdz/repos')

// promesa.then(()=>{
//     /* EN caso de Exito */
// }).catch((err)=>{
//     console.log(err);
// })

//usando wait
(async function(){
    try{
        let promesaa = await Promise.reject("Error")
    }catch(err){
        console.log(err);
    }
})();
