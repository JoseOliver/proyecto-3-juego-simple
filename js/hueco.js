class Hueco{
    constructor(fila,columna){
        this.x=fila;
        this.y=columna;
        this.ficha=null;
    }
    setFicha(ficha){
        if(this.ficha===null && ficha=="circulo" || ficha=="cruz"){
            this.ficha=ficha;
            console.log("ficha creada: "+ ficha)
        }else{
            console.log("E:ficha incompatible");
        }
        if(this.ficha== "circulo" && ficha=="circulo"){
            console.log("E:ficha mal asignada");
        }
        if(this.ficha=="cruz" && ficha=="cruz"){
            console.log("E:ficha mal asignada");
        }
        if(this.ficha=="circulo"  && ficha=="cruz"){
            console.log("Ficha sobreescrita: cruz");
        }
        if(this.ficha=="cruz"  && ficha=="circulo"){
            console.log("Ficha sobreescrita: circulo");
        }
    }
    vaciarFicha(){
        this.ficha=null;
    }
    getFicha(){
        return this.ficha;
    }
}