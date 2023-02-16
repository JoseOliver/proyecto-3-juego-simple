class Tablero{
    constructor(){
        this.fichas= [];
        for (let fila=0;fila<FILAS;fila++){
            this.fichas[fila]=[];
            for (let columna=0;columna<COLUMNAS;columna++){
                this.fichas[fila].push(VACIO);
            }
        }
        this.cruces=3;
        this.circulos=3;
    }
    setFicha(fila,columna,ficha){  //asigna una ficha a su posicion
        this.fichas[fila][columna]=ficha;
        if(ficha==CIRCULO){
            this.circulos--;
        }else if(ficha==CRUZ){
            this.cruces--;
        }else{
            console.log("E(fatal):ficha desconocida");
        }
    }
    cambiaFicha(origen,destino,ficha){  //sustituye una ficha de una posicion a otra
        this.fichas[origen.x][origen.y]=VACIO;
        this.fichas[destino.x][destino.y]=ficha;
    }
    haceFaltaOrigen(){  //devuelve si hay necesidad de tomar ficha de origen, es decir, si aun le quedan fichas al jugador
        if (turno==CIRCULO && this.circulos==0){
            return true;
        }else if(turno==CRUZ && this.cruces==0){
            return true;
        }else{
            return false;
        }
    }
    getFicha(x,y){  //devuelve la ficha en dicha casilla
        return this.fichas[x][y];
        
    }
    getFichaEnlazada(indice){  //devuelve la ficha suponiendo que las casillas no se desarrollan en filas y columnas sino unidimensionalmente
        let fila=indice/3;
        let columna=indice%3;
        console.log(indice," ",fila," ",columna);  //falta testear
        return this.getFicha(fila,columna);
    }
    hayVictoria(){
        return false;
    }
    getCirculos(){  //devuelve las casillas en las que hay circulos, en un array unidimensional
        let result=[];
        for(i=0;i<9;i++){
            if(CIRCULO==this.getFichaEnlazada(i)){
                result.push(i);
            }
        }
        return result;
    }
    getCruces(){  //devuelve las casillas en las que hay cruces, en un array unidimensional
        let result=[];
        for(i=0;i<9;i++){
            if(CRUZ==this.getFichaEnlazada(i)){
                result.push(i);
            }
        }
        return result;
    }
}