//Herencia

class Player{
    play(){this.video.play();}
    duration(){ return this.video.duration/100;}
}

class Vimeo extends Player{
    open(){this.redirecToVimeo(this.video);}
}
class Youtube extends Player{
    open(){this.redirecToYoutube(this.video);}
}

let video = new Youtube();

class CustomDate extends Date{ }

//Override

class User{
    constructor(nombre){
        this._name=nombre
    }
    saludar(){
        console.log("Hola usuario"+this._name)
    }

    //pojo
    get name(){
        return this._name.charAt(0).toUpperCase() + this._name.slice(1)
    }
    set name(nombre){
        this._name = nombre
    }
}
class Admin extends User{
    constructor(nombre){
        super(nombre);

    }
    saludar(){
        super.saludar();
        console.log("Aqui esta el panel de administracion")
    }
}