function cambiarTurno(){  //terminado
    switch(turno){
        case "1":
            turno="2";
            jugador1.quitarTurno();
            jugador2.darTurno();
            break;
        case "2":
            turno="1";
            jugador2.quitarTurno();
            jugador1.darTurno();
            break;
        default:
            console.log("E:error inesperado en cambio de turno del jugador");
    }
}
function getJugadorJugando(){  //terminado
    var jugadorJugando;
    switch(turno){
        case "1":
            jugadorJugando= jugador1;
            break;
        case "2":
            jugadorJugando= jugador2;
            break;
        default:
            console.log('E(fatal):El turno no esta asignado correctamente');
    }
    return jugadorJugando;
}
haceFaltaOrigen(){ // terminado
    var jugadorJugando= getJugadorJugando();
    var fichaJugando= jugadorJugando.ficha;
    if (fichaJugando=="circulo" && tablero.circulos==0){
        return true;
    }else if(fichaJugando=='cruz' && tablero.cruces==0){
        return true;
    }else{
        return false;
    }
}