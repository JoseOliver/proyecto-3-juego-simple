//variables
    //variables de partida inicializadas segun necesidades iniciales del juego
let tablero = new Tablero;
let jugadores= JSON.parse(sessionStorage.getItem("jugadores"));
let victoria= false;
let numJugadas= 0;
    //variables de fase inicializadas segun necesidades iniciales del juego
let casillaOrigen={x:"",y:""};
let casillaDestino={x:"",y:""};
let fase= RecogiendoDestino;
let jugadorJugando;
let turno;
    //variables visuales de div's
// let log= document.querySelector('#log');
let j1= document.querySelector('#j1');
let j2= document.querySelector('#j2');
    //variables de interfaz de botonera
let siguiente= document.querySelector('.siguiente');
let borrador= document.querySelector('.borrar');
    //variables de casilla predefinidas
let cruz= '<div class="cruz">x</div>';
let circulo= '<div class="circulo">o</div>';
let vacio= '<div class="vacio"> </div>';
//funciones
const sortearTurnoInicial=()=>{  //setea el primer turno a suertes
    switch(Math.round(Math.random())){ //numero aleatorio entre el 0 y el 1, redondea al mas cercano, emulando un 50% de probabilidades
        case 0:
            turno= jugadores[Jugador1].ficha;
            // log.innerHTML+= "Empieza "+jugadores[Jugador1].nombre+"</br>";
            j1.className+=" focus";
            jugadorJugando= jugadores[Jugador1];
            break;
        case 1:
            turno= jugadores[Jugador2].ficha;
            // log.innerHTML+= "Empieza "+jugadores[Jugador2].nombre+"</br>";
            j2.className+=" focus";
            jugadorJugando=jugadores[Jugador2];
            break;
        default:
            console.log("E: fallo inesperado inicializando el primer turno");
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
            console.log("E: fallo inesperado en cambio del turno");
    }
    switch(jugadorJugando.nombre){
        case jugadores[Jugador1].nombre:
            jugadorJugando= jugadores[Jugador2];
            break;
        case jugadores[Jugador2].nombre:
            jugadorJugando=jugadores[Jugador1];
            break;
        default:
            console.log("E: fallo inesperado en cambio del jugador que esta jugando");
    }
    // log.innerHTML="Le toca a "+ jugadorJugando.nombre+"<br>";
    // log.scrollTop = log.scrollHeight;
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
    let ficha= tablero.getFicha(x,y);
    switch(fase){
        case RecogiendoOrigen:
            if (turno==ficha){
                casillaOrigen.x=x;
                casillaOrigen.y=y;
                // log.innerHTML+="origen seleccionado </br>"
                // log.scrollTop = log.scrollHeight;
                borrador.disabled=false;
                fase=RecogiendoDestino;
            }
            break;
        case RecogiendoDestino:
            if (ficha==VACIO){
                casillaDestino.x=x;
                casillaDestino.y=y;
                // log.innerHTML+="destino seleccionado, todo listo </br>";
                // log.scrollTop = log.scrollHeight;
                borrador.disabled= false;
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
            proclamarVictoria(getJugadorJugando().nombre);
        }
        dibujarCambios();
        cambiarFoco();
        cambiarTurno();
        numJugadas++;
    }
}
const getJugadorJugando= ()=>{ //recupera el jugador que tiene turno a traves de la ficha que esta jugando
    switch(turno){
        case CIRCULO:
            if(jugadores[Jugador1].ficha == CIRCULO){
                return Jugador1;
            }else{
                return Jugador2;
            }
        case CRUZ:
            if(jugadores[Jugador1].ficha == CRUZ){
                return Jugador1;
            }else{
                return Jugador2;
            }
        default:
            console.log("E: fallo inesperado obteniendo el jugador que tiene el turno");
            return false;
    }
}
const dibujarCambios=()=>{ //dibuja los cambios en el tablero visual
    let fichaActual;
    let fichaId;
    let divFichaActual;
    for (let fila=0;fila<FILAS;fila++){
        for (let columna=0;columna<COLUMNAS;columna++){
            fichaId="#row"+(fila+1)+"col"+(columna+1);
            divFichaActual = document.querySelector(fichaId);
            fichaActual= tablero.getFicha(fila,columna);
            switch(fichaActual){
                case VACIO:
                    divFichaActual.innerHTML= vacio;
                    break;
                case CIRCULO:
                    divFichaActual.innerHTML= circulo;
                    break;
                case CRUZ:
                    divFichaActual.innerHTML= cruz;
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
    siguiente.disabled=true;
    borrador.disabled=true;
    // log.innerHTML+="movimiento borrado</br>"
    // log.scrollTop = log.scrollHeight;
}
const cambiarFoco=()=>{
    
    if(jugadorJugando === jugadores[Jugador1]){
        j1.className="jugador";
        j2.className+=" focus";
    }else{
        j2.className="jugador";
        j1.className+=" focus";
    }
}
function proclamarVictoria(ganador){ //sin revisar
    // log.innerHTML+= "El ganador es "+ganador.nombre+"!!!"+ "<br> pulsa comenzar para nueva partida."
    // log.scrollTop = log.scrollHeight;
}