const recogiendoOrigen=1;
const recogiendoDestino=2;
const listo=3;

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
function haceFaltaOrigen(){ // terminado
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
function leer(x,y){
    let origen=haceFaltaOrigen();
    let ficha=getJugadorJugando.getFicha()
    if(fase==recogiendoDestino){
        if (tablero.getFichaEn(x,y)==null){
            casillaDestino.x=x;
            casillaDestino.y=y;
            fase++;
            log.innerHTML+="destino seleccionado <br>";
            siguiente.disabled= false;
        }
    }
    if(fase==1){
        if (!tablero.haceFaltaOrigen()){
            
            if(tablero.getFichaEn(x,y)==null)
            casillaDestino.x= x;
            casillaDestino.y= y;
            fase= 3;
            siguiente.disabled= false;
            borrar.disabled
        }
        else{
            casillaOrigen.x=x;
            casillaOrigen.y=y;
            log.innerHTML+="origen seleccionado <br>";
            fase++;
        }
    }
}
function ejecutar(){
    if(fase=="3"){
        if(!tablero.haceFaltaOrigen){
            tablero.setFicha(casillaDestino.x,casillaDestino.y,getJugadorJugando().ficha);
            log.innerHTML+= getJugadorJugando().ficha + "a posicion "+casillaDestino.x +"-" + casillaDestino.y + "<br>";
        }else{
            tablero.cambiarFicha(getJugadorJugando().ficha,casillaOrigen.x,casillaOrigen.y,casillaDestino.x,casillaDestino.y);
            log.innerHTML+= getJugadorJugando().ficha + "de posicion "+ casillaOrigen.x +"-" + casillaOrigen.y+", a posicion "+casillaDestino.x +"-" + casillaDestino.y + "<br>";
        }
        casillaOrigen={x:"",y:"",set:false};
        casillaDestino= {x:"",y:"", set:false};
    }
    else {
        console.log("E: llamada a ejecutarJugada sin definir las casillas de la jugada");
    }
    if(comprobarVictoria()){
        proclamarVictoria(getJugadorJugando());
    }else{
        cambiarTurno();
        jugada++;
        fase=1;
        log.innerHTML+="turno de "+getJugadorJugando().ficha, ": <br>";
    }
}
function dibujarCambios(){
    for (let fila=1;fila<=3;fila++){
        for (let columna=1;columna<=3;columna++){
            fichaActual= tablero.getFicha(fila,columna);
            fichaId="#row"+fila+"col"+columna;
            switch(fichaActual.ficha){
                case null:
                    document.querySelector(fichaId).innerHTML= vacio.innerHTML;
                    break;
                case "circulo":
                    document.querySelector(fichaId).innerHTML= circulo.innerHTML;
                    break;
                case "cruz":
                    document.querySelector(fichaId).innerHTML= cruz.innerHTML;
            }
        }
    }
}
function borrar(){
    fase=1;
    casillaOrigen={x:"",y:""};
    casillaDestino={x:"",y:""};
}
function proclamarVictoria(ganador){
    log.innerHTML+= "El ganador es "+ganador.nombre+"!!!"+ "<br> pulsa comenzar para nueva partida."
}