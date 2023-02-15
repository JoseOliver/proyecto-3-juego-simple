//Ejecucion del codigo principal
    //inicializando variables restantes
sortearTurnoInicial();  
    //inicializando visuales y botonera
log.innerHTML="";
log.innerHTML+= "Comienza la partida","<br>";
j1.children[0].innerHTML=jugadores[Jugador1].nombre;
j2.children[0].innerHTML=jugadores[Jugador2].nombre;
switch(jugadores[jugadorJugando]){
    //estoy aqui
}
siguiente.disabled= true; 
borrador.disabled=true;
//empezamos la partida
    //los clicks en los divs de las casillas haran avanzar las fases del turno, si procede
    //el boton de siguiente turno hara avanzar de turno, si procede, y comprobará si hay ganador para proclamarlo