class Jugador{
    constructor(nombre,ficha){
        this.nombre= nombre;
        this.tieneTurno= false;
        this.ganadas= 0;
        this.ficha=ficha;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre= nombre;
    }
    getFicha(){
        return this.ficha;
    }
    setFicha(ficha){
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