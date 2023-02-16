//funciones
const cambiaSeleccion= (elem)=>{
    let fichaElegida= elem.value;
    let opuesto;
    switch(elem.id){
        case "ficha1":
            opuesto= document.querySelector("#ficha2");
            switch(fichaElegida){
                case "circulo":
                    opuesto.value="cruz";
                    break;
                case "cruz":
                    opuesto.value="circulo";
                    break;
                default:
                    console.log("E: error inesperado al cambiar fichas");
            }
            break;
        case "ficha2":
            opuesto= document.querySelector("#ficha1");
            switch(fichaElegida){
                case "circulo":
                    opuesto.value="cruz";
                    break;
                case "cruz":
                    opuesto.value="circulo";
                    break;
                default:
                    console.log("E: error inesperado al cambiar fichas");
            }
            break;
        default:
            console.log("E: error inesperado al cambiar fichas");
    }
}
//enviar los jugadores al juego y empezar a jugar
const comenzarPartida= ()=>{
    let jugador1={
        nombre: document.querySelector("#nombre1").value? document.querySelector("#nombre1").value:"Jugador 1",
        ficha: document.querySelector("#ficha1").value
    }
    let jugador2={
        nombre: document.querySelector("#nombre2").value? document.querySelector("#nombre2").value:"Jugador 2",
        ficha: document.querySelector("#ficha2").value
    }
    let jugadores=[];
    jugadores.push(jugador1);
    jugadores.push(jugador2);
    sessionStorage.setItem("jugadores", JSON.stringify(jugadores));
    window.location.href = "pages/game.html";
}