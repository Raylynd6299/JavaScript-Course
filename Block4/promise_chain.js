//Cuando se necesita que termina una para empesar otra

function Calcular(){
    return new Promise( (resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
}

function segundo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,"segunda promesa")
    })
}
//de calculo regresa 5, ese 5 entra a segundo y de segundo sale la cadena
Calcular().then(segundo).then(console.log)