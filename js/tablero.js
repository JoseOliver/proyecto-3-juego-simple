const filasTablero = 3;
const columnasTablero = 3;
class Tablero{
    constructor(){
        this.fichas= [];
        for (let fila=0;fila<filasTablero;fila++){
            this.fichas[fila]=[];
            for (let columna=0;columnasTablero<3;columna++){
                this.fichas[fila].push(null);
            }
        }
        this.cruces=3;
        this.circulos=3;
    }
    setFicha(fila,columna,ficha){
        if(ficha=="circulo" && this.circulos!=0){
            this.fichas[fila][columna].marcar(ficha);
            this.circulos--;
        }else if(ficha=="cruz" && this.cruces!=0){
            this.fichas[fila][columna].marcar(ficha);
            this.cruces--;
        }else{
            console.log("E:ficha ",ficha," no seteable, superado el maximo posible");
        }
    }
    cambiaFicha(ficha,filaOrigen,columnaOrigen,filaDestino,columnaDestino){
        if(ficha=="circulo" && this.circulos==0 &&
            this.fichas[filaOrigen][columnaOrigen]=="circulo" &&
            this.fichas[filaDestino][columnaDestino]== null    
        ){
            fichas[filaDestino][columnaDestino]= fichas[filaOrigen][columnaOrigen];
            fichas[filaOrigen][columnaOrigen]= null;
        else if(ficha=="cruz" && this.cruces==0 &&
            this.fichas[filaOrigen][columnaOrigen]=="cruz" &&
            this.fichas[filaDestino][columnaDestino]== null 
        )}else{
            console.log("E:ficha ",ficha," no movible de la posicion origen a la posicion destino indicada");
        }
    }
    haceFaltaOrigen(){ // terminado
        var jugadorJugando= getJugadorJugando();
        var fichaJugando= jugadorJugando.ficha;
        if (fichaJugando=="circulo" && this.circulos==0){
            return true;
        }else if(fichaJugando=='cruz' && this.cruces==0){
            return true;
        }else{
            return false;
        }
    }
    getFicha(x,y){
        return this.fichas[x][y];
    }
}