//Ejecucion del codigo principal
    //inicializando visuales y botonera
log.innerHTML="";
log.innerHTML+= "Comienza la partida"+"</br>";
j1.children[0].innerHTML=jugadores[Jugador1].nombre; //children[0] corresponde al primer hijo del div, que esta pensado para contener el nombre del jugador
j2.children[0].innerHTML=jugadores[Jugador2].nombre;
siguiente.disabled= true; 
borrador.disabled=true;
    //inicializando variables restantes
sortearTurnoInicial(); 
//empezamos la partida
    //los clicks en los divs de las casillas haran avanzar las fases del turno, si procede
    //el boton de siguiente turno hara avanzar de turno, si procede, y comprobará si hay ganador para proclamarlo