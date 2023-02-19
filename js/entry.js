//constantes
const CIRCULO='circulo';
const CRUZ='cruz';
const CaracteresMaximos = 10;
//funciones
const cambiaSeleccion= (elem)=>{
    let fichaElegida= elem.value;
    let opuesto;
    if(elem.id=="ficha1"){
        opuesto= document.querySelector("#ficha2");
    }else{
        opuesto= document.querySelector("#ficha1");
    }
    switch(fichaElegida){
        case CIRCULO:
            opuesto.value=CRUZ;
            break;
        case CRUZ:
            opuesto.value=CIRCULO;
            break;
        default:
            console.log("E: error inesperado al cambiar fichas");
    }
}
//enviar los jugadores al juego y empezar a jugar
const comenzarPartida= ()=>{
    let nombre1=document.querySelector("#nombre1");
    let nombre2=document.querySelector("#nombre2");
    let jugador1;
    let jugador2;
    let verificadoJ1= false;
    let verificadoJ2= false;
    if (nombre1.value.length<=CaracteresMaximos){
        jugador1={
            nombre: document.querySelector("#nombre1").value? document.querySelector("#nombre1").value:"Jugador 1",
            ficha: document.querySelector("#ficha1").value
        };
        verificadoJ1=true;
    } else {
        nombre1.value="El nombre debe ser inferior a 10 caracteres";
    }
    if (nombre2.value.length<=CaracteresMaximos){
        jugador2={
            nombre: document.querySelector("#nombre2").value? document.querySelector("#nombre2").value:"Jugador 2",
            ficha: document.querySelector("#ficha2").value
        };
        verificadoJ2= true;
    } else {
        nombre2.value="El nombre debe ser inferior a 10 caracteres";
    }
    if(verificadoJ1 && verificadoJ2){
        let jugadores=[];
        jugadores.push(jugador1);
        jugadores.push(jugador2);
        sessionStorage.setItem("jugadores", JSON.stringify(jugadores));
        window.location.href = "pages/game.html";
    }
}