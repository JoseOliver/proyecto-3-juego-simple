//funciones
const sortearTurnoInicial=()=>{  //setea el primer turno a suertes
    let sorteo= Math.round(Math.random()); //numero aleatorio entre el 0 y el 1, redondea al mas cercano, emulando un 50% de probabilidades
    if(sorteo==0){
        turno= jugadores[Jugador1].ficha;
        j1.classList.add("focus");
        jugadorJugando= jugadores[Jugador1];
    }
    else if(sorteo==1){
            turno= jugadores[Jugador2].ficha;
            j2.classList.add("focus");
            jugadorJugando=jugadores[Jugador2];
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
    jugadorJugando= getJugadorJugando();
    cambiarFoco();
    if(tablero.haceFaltaOrigen()){
        fase= RecogiendoOrigen;
        casillaOrigen={x:"",y:""};
        casillaDestino={x:"",y:""};
    } else {
        fase= RecogiendoDestino;
        casillaDestino={x:"",y:""};
    }
}
const clicar=(x,y)=>{  //prepara la fase para recoger todos los datos de origen y destino
    let ficha= tablero.getFicha(x,y);
    let fichaId;
    let fichaDiv;
    switch(fase){
        case RecogiendoOrigen:
            if (turno==ficha){
                casillaOrigen.x=x;
                casillaOrigen.y=y;
                fichaId ="#row"+(x+1)+"col"+(y+1);
                fichaDiv = document.querySelector(fichaId);
                fichaDiv.classList.add("selected");
                fase=RecogiendoDestino;
            }
            break;
        case RecogiendoDestino:
            if (ficha==VACIO){
                casillaDestino.x=x;
                casillaDestino.y=y;
                fase=Listo;
                ejecutarTurno();
            }
            break;
        default: //nothing
    }
}
const ejecutarTurno= ()=>{ //ejecuta el turno con los datos existentes, si procede
    if(fase==Listo){
        if(tablero.haceFaltaOrigen()){
            tablero.cambiaFicha(casillaOrigen,casillaDestino,turno);
            let fichaId="#row"+(casillaOrigen.x+1)+"col"+(casillaOrigen.y+1);
            let fichaDiv=document.querySelector(fichaId);
            fichaDiv.classList.remove("selected");
        }else{
            tablero.setFicha(casillaDestino.x,casillaDestino.y,turno);
        }
        if(tablero.hayVictoria()){
            proclamarVictoria(jugadorJugando);
        }
        dibujarCambios();
        cambiarTurno();
        numJugadas++;
    }
}
const getJugadorJugando= ()=>{ //recupera el jugador que tiene turno a traves de la ficha que esta jugando
    if(turno==CIRCULO && jugadores[Jugador1].ficha == CIRCULO ||turno==CRUZ && jugadores[Jugador1].ficha==CRUZ){
        return jugadores[Jugador1];
    }else{
        return jugadores[Jugador2];
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
}
const cambiarFoco=()=>{
    if(jugadorJugando.nombre == jugadores[Jugador1].nombre){
        j2.classList.remove("focus");
        j1.classList.add("focus");
    }else{
        j1.classList.remove("focus");
        j2.classList.add("focus");
    }
}
const cogerFicha=(evento)=>{ //se ejecuta cuando se clica una casilla para obtener el origen del drag n drop
    let origen=[];
    origen.x=evento.target.id.substring(3,4)-1;  //guardo el div de la ficha origen, el id es id="rowXcolY" asi que con los substr recojo el elemento logico
    origen.y=evento.target.id.substring(7,8)-1;
    clicar(origen.x,origen.y);
    document.onmouseup=soltarFicha;
}
const soltarFicha=(evento)=>{ //se ejecuta cuando se termina el drag n drop
    let destino=[];
    destino.x=evento.target.id.substring(3,4)-1;  
    destino.y=evento.target.id.substring(7,8)-1;
    if(tablero.getFicha(destino.x,destino.y)==VACIO){
        clicar(destino.x,destino.y);
    }
    document.onmouseup=null;
}
const proclamarVictoria=(ganador)=>{ //una vez comprobada la victoria proclama al ganador en la nueva pagina html
    sessionStorage.setItem("ganador", JSON.stringify(ganador.nombre));
    window.location.href = "victoria.html";
}