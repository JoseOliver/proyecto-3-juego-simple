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
    let cruz= '<div class="ficha cruz">x</div>';
    let circulo= '<div class="ficha circulo">o</div>';
    let vacio= '<div class="vacio"> </div>';