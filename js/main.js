let tablero= new Tablero();
let jugador1=new Jugador("Jugador 1");
let jugador2=new Jugador("Jugador 2");
let turno;
let jugada= 1;
let victoria= false;

let log= document.querySelector('.log');

function leerJugada(){
    var jugadaActual= jugada;
    
    while(Jugada!=jugadaActual){
        var asignando //
        //wait click y cuando clique asignar x e y
        var huecoOrigen= tablero.hueco(x,y);
        fichaOrigen=huecoOrigen.ficha;
        while(tablero){}
        var x;
        var y;


    }
}
function ejecutarJugada(){}
function proclamarVictoria(){}
function dibujarCambios(){}
function clickHueco(huecoX,huecoY){

    if(haceFaltaOrigen())
}
function play(){
    log.innerHTML="";
    log.innerHTML+= "Comienza la partida","</br>";
    switch(math.round(Math.random())){
        case 0:
            turno= "1";
            jugador1.darTurno();
            log.innerHTML+= "Empieza ",jugador1.nombre;
            break;
        case 1:
            turno= "2";
            jugador2.darTurno();
            log.innerHTML+= "Empieza ",jugador2.nombre;
            break;
        default:
            console.log("E(fatal):error inesperado inicializando el primer turno");
    };
    var origenSeleccionado= null;
    var destinoSeleccionado=null;
    var haceFaltaOrigen= false;
    while(!victoria){
        jugada==1? :cambiarTurno();
        leerJugada();
        ejecutarJugada();
        dibujarCambios();
        hayVictoria?victoria=true:
    }
        proclamarVictoria(turno);
}