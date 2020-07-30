//multiples promesas

let prom1 = new Promise((resolve,reject)=> setTimeout(resolve,500,'Hola mundo'))

let prom2 = new Promise((resolve,reject)=> setTimeout(resolve,600,'segundo Hola mundo'))


let saluda = ()=>console.log("Hola a todos");

prom1.then(console.log);

prom1.then(()=>{
    prom2.then(()=>{
        saluda()
    })
})

//Espera a que todas las promesas terminen par ejecutar lo de dentro,
//Si al menos una de ellas falla se termina
Promise.all([prom1,prom2]).then((resultados)=>{
    console.log(resultados)
    saluda()
})