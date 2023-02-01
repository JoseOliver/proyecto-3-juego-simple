class hueco{
    constructor(fila,columna){
        this.x=fila;
        this.y=columna;
        this.ficha=null;
    }
    marcar(ficha){
        if(this.ficha===null && ficha=="circulo" || ficha=="cruz"){
            this.ficha=ficha;
        }else{
            console.log("E:ficha incompatible");
        }
    }
}