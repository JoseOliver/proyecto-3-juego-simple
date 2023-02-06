class Jugador{
    constructor(nombre,ficha){
        this.nombre= nombre;
        this.tieneTurno= false;
        this.ganadas= 0;
        this.ficha=ficha;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre= nombre;
    }
    get getFicha(){
        return this.ficha;
    }
    set setFicha(ficha){
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