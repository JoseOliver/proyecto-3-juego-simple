//variables
    //variables de partida inicializadas segun necesidades iniciales del juego
let tablero = new Tablero;
let jugadores= JSON.parse(sessionStorage.getItem("jugadores"));
let victoria= false;
let numJugadas= 0;
    //variables de fase inicializadas segun necesidades iniciales del juego
let casillaOrigen={x:"",y:""};
let casillaDestino={x:"",y:""};
let fase= recogiendoDestino;
let jugadorJugando;
let turno;
    //variables visuales de div's
let log= document.querySelector('.log');
let j1= document.querySelector('j1');
let j2= document.querySelector('j2');
    //variables de interfaz de botonera
let siguiente= document.querySelector('.siguiente');
let borrador= document.querySelector('.borrar');
    //variables de casilla predefinidas
let cruz= '<div id="cruz">x</div>';
let circulo= '<div id="circulo">o</div>';
let vacio= '<div id="vacio"> </div>';
//funciones
const sortearTurnoInicial=()=>{  //setea el primer turno a suertes
    switch(math.round(Math.random())){ //numero aleatorio entre el 0 y el 1, redondea al mas cercano, emulando un 50% de probabilidades
        case 0:
            turno= jugadores.jugador1.ficha;
            log.innerHTML+= "Empieza ",jugadores.jugador1.nombre,"<br>";
            j1.classList+="focus";
            jugadorJugando= Jugador1;
            break;
        case 1:
            turno= jugadores.jugador2.ficha;
            log.innerHTML+= "Empieza ",jugadores.jugador2.nombre,"<br>";
            j2.classList+="focus";
            jugadorJugando=Jugador2;
            break;
        default:
            console.log("E(fatal):error inesperado inicializando el primer turno");
    }
}
const cambiarTurno=()=>{  //cambia el turno al otro jugador, resetea las variables de fase y setea las variables de interfaz visual 
    switch(turno){
        case CRUZ:
            turno=CIRCULO;
            break;
        case CIRCULO:
            turno=CRUZ;
            break;
        default:
            console.log("E:error inesperado en cambio del turno");
    }
    switch(jugadorJugando){
        case Jugador1:
            jugadorJugando= Jugador2;
            break;
        case Jugador2:
            jugadorJugando=Jugador1;
            break;
        default:
            console.log("E:error inesperado en cambio del jugador que esta jugando");
    }
    log.innerHTML+="Le toca a ", jugadorJugando,"<br>";
    siguiente.disabled= true; 
    borrador.disabled=true;
    if(tablero.haceFaltaOrigen()){
        fase= RecogiendoOrigen;
        casillaOrigen={x:"",y:""};
        casillaDestino={x:"",y:""};
    } else {
        fase= RecogiendoDestino;
        casillaDestino={x:"",y:""};
    }
}
const clickar=(x,y)=>{  //prepara la fase para recoger todos los datos de origen y destino
    let ficha= tablero.getFicha();
    switch(fase){
        case RecogiendoOrigen:
            if (ficha==null || turno==ficha){
                casillaOrigen.x=x;
                casillaOrigen.y=y;
                log.innerHTML+="origen seleccionado <br>"
                borrador.disabled=false;
                fase=RecogiendoDestino;
            }
            break;
        case RecogiendoDestino:
            if (ficha==null){
                casillaDestino.x=x;
                casillaDestino.y=y;
                fase++;
                log.innerHTML+="destino seleccionado, puedes realizar tu movimiento <br>";
                siguiente.disabled= false;
                fase=Listo;
            }
            break;
        default: //nothing
    }
}
const ejecutarTurno= ()=>{ //ejecuta el turno con los datos existentes, si procede
    if(fase==Listo){
        if(tablero.haceFaltaOrigen()){
            tablero.cambiaFicha(casillaOrigen,casillaDestino,turno);
        }else{
            tablero.setFicha(casillaDestino.x,casillaDestino.y,turno);
        }
        if(tablero.hayVictoria()){
            proclamarVictoria(getNombreJugador());
        }
        numJugadas++;
        cambiarTurno();
    }
}
const getJugadorJugando= ()=>{ //recupera el jugador que tiene turno a traves de la ficha que esta jugando
    switch(turno){
        case CIRCULO:
            if(jugadores.jugador1.ficha == CIRCULO){
                return jugadores.jugador1;
            }else{
                return jugadores.jugador2;
            }
        case CRUZ:
            if(jugadores.jugador1.ficha == CRUZ){
                return jugadores.jugador1;
            }else{
                return jugadores.jugador2;
            }
        default:
            console.log("E:Error inesperado obteniendo el jugador que tiene el turno");
            return false;
    }
}
const dibujarCambios=()=>{ //dibuja los cambios en el tablero visual
    let fichaActual;
    let fichaId;
    let divFichaActual;
    for (let fila=1;fila<=FILAS;fila++){
        for (let columna=1;columna<=COLUMNAS;columna++){
            divFichaActual = document.querySelector(fichaId);
            fichaId="#row"+fila+"col"+columna;
            fichaActual= tablero.getFicha(fila,columna);
            switch(fichaActual){
                case null:
                    divFichaActual.innerHTML= vacio.innerHTML;
                    break;
                case "circulo":
                    divFichaActual.innerHTML= circulo.innerHTML;
                    break;
                case "cruz":
                    divFichaActual.innerHTML= cruz.innerHTML;
            }
        }
    }
}
const borrar= () =>{ //borra el turno para seleccionar nuevamente las fichas origen y destino, si procede
    if(tablero.haceFaltaOrigen()){
        fase=RecogiendoOrigen;
    }else{
        fase=RecogiendoDestino;
    }
    casillaOrigen={x:"",y:""};
    casillaDestino={x:"",y:""};
}
function proclamarVictoria(ganador){ //sin revisar
    log.innerHTML+= "El ganador es "+ganador.nombre+"!!!"+ "<br> pulsa comenzar para nueva partida."
}