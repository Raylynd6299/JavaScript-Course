let iterador = {
    currentValue:1,

    next(){
        let result = {
            value:null, // nos dice si el iterador termino de iterar
            done:false // da el proximo valor a trabajar
        }
        // return{
        //     value:null, // nos dice si el iterador termino de iterar
        //     done:true // da el proximo valor a trabajar
        // }
        if(this.currentValue>0 && this.currentValue<5){
            result={
                value:this.currentValue, // nos dice si el iterador termino de iterar
                done:false // da el proximo valor a trabajar
            }
            this.currentValue++
        }else{
            result={ 
                done:true // da el proximo valor a trabajar
            }
        }
        return result
    }
}

console.log(iterador.next());

let item = iterador.next();

while(!item.done){
    console.log(item.value);
    item = iterador.next()
}