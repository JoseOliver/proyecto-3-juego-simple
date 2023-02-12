// let tablero= new Tablero();
let jugadores= JSON.parse(sessionStorage.getItem("jugadores"));
console.log(jugadores);
let jugador1=new Jugador("Jugador 1","circulo");
let jugador2=new Jugador("Jugador 2","cruz");

let log= document.querySelector('.log');
let turno= document.querySelector(".turno");

let siguiente= document.querySelector('.siguiente');
let borrador= document.querySelector('.borrar');

let cruz= '<div id="cruz">x</div>';
let circulo= '<div id="circulo">o</div>';
let vacio= '<div id="vacio"> </div>';

function play(){
    let casillaOrigen={x:"",y:"",set:false};
    let casillaDestino={x:"",y:"",set:false};
    let victoria= false;
    let turno;
    let jugada= 1;
    let fase= 1;
    log.innerHTML="";
    siguiente.disabled= true;
    borrador.disabled=true;

    dibujarCambios();

    log.innerHTML="";
    log.innerHTML+= "Comienza la partida","<br>";
    switch(math.round(Math.random())){ // numero aleatorio entre el 0 y el 1, redondea al mas cercano
        case 0:
            turno= "1";
            jugador1.darTurno();
            log.innerHTML+= "Empieza ",jugador1.nombre;
            turno.innerHTML= jugador1.nombre;
            break;
        case 1:
            turno= "2";
            jugador2.darTurno();
            log.innerHTML+= "Empieza ",jugador2.nombre;
            turno.innerHTML= jugador2.nombre;
            break;
        default:
            console.log("E(fatal):error inesperado inicializando el primer turno");
    }
}