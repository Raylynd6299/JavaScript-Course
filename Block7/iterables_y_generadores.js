//La mejor version es con generator

let rango = {
    min:null,max:null,
    [Symbol.iterator](){
        return this.generator();
    },
    generator: function* (){
        for(var i = this.min; i<= this.max; i++){
            yield i
        }
    }
}

rango.min = 5
rango.max = 10

for (numero of rango){
    console.log(numero);
}