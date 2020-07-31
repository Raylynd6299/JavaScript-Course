//iterables con iteradores

function counter(){
    for(var i = 0; i < 5 ; i++ ){
        yield i
    }
}

let generador = counter()

let numeros = [1,2,4,5,6,7]

for (numero of numeros){console.log(numero);}

// @@iterator

console.log(Symbol.iterator);


//personalizar manejo

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

let contador = {
    [Symbol.iterador](){
        return {
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
    }
}

for(numero of contador){console.log(numero);}

//Range
let rango = {
    min:null,
    max:null,
    currentValue:null,
    [Symbol.iterator](){
        return this;
    },
    next(){
        if(this.currentValue == null) this.currentValue = this.min;

        let result = {}
        if (this.currentValue >= this.min && this.currentValue <= this.max){
            result = { value: this.currentValue,done:false}
            this.currentValue++
        } else{
            result = {done:true};
        }
    }
}

rango.max = 10
rango.min = 5

for (n in rango){console.log(n);}