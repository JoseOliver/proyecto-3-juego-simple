//Ejecucion del codigo principal
    //inicializando visuales y botonera
j1.children[HijoNombre].innerHTML=jugadores[Jugador1].nombre;
j2.children[HijoNombre].innerHTML=jugadores[Jugador2].nombre;
j1.children[HijoFicha].innerHTML=jugadores[Jugador1].ficha;
j2.children[HijoFicha].innerHTML=jugadores[Jugador2].ficha;
siguiente.disabled= true; 
borrador.disabled=true;
    //inicializando variables restantes
sortearTurnoInicial(); 
//empezamos la partida
    //los clicks en los divs de las casillas haran avanzar las fases del turno, si procede
    //el boton de siguiente turno hara avanzar de turno, si procede, y comprobará si hay ganador para proclamarlo