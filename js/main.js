let tablero= new Tablero();
let jugador1=new Jugador("Jugador 1","circulo");
let jugador2=new Jugador("Jugador 2","cruz");

let log= document.querySelector('.log');
let siguiente= document.querySelector('.siguiente');
let turno= document.querySelector(".turno")

let cruz= document.querySelector('#cruz');
let circulo= document.querySelector('#circulo');
let vacio= document.querySelector('#vacio');

function proclamarVictoria(ganador){
    log.innerHTML+= "El ganador es "+ganador.nombre+"!!!"+ "<br> pulsa comenzar para nueva partida."
}

function play(){
    let casillaOrigen={x:"",y:""};
    let casillaDestino={x:"",y:""};
    let victoria= false;
    let turno;
    let jugada= 1;
    let fase= 1;
    log="";
    siguiente.disabled= true;

    dibujarCambios();

    log.innerHTML="";
    log.innerHTML+= "Comienza la partida","<br>";
    switch(math.round(Math.random())){
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