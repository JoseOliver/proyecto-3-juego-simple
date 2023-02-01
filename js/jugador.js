class Jugador{
    constructor(nombre,ficha){
        this.nombre= nombre;
        this.tieneTurno= false;
        this.ganadas= 0;
        this.ficha=ficha;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
        this.nombre= nombre;
    }
    get ficha(){
        return this.ficha;
    }
    set ficha(ficha){
        this.ficha=ficha;
    }
    darTurno(){
        if(!this.turno){
            this.turno= true;
        }else{
            console.log("E:error asignando turno a jugador ",this.nombre,", ya tiene el turno");
        }
    }
    quitarTurno(){
        if(this.turno){
            this.turno= false;
        } else{
            console.log("E:error asignando turno a jugador ",this.nombre,", no tenía el turno");
        }
    }
}