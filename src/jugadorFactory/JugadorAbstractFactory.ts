import {jugador} from "../interfaces/jugador";

export abstract class jugadorAbstractFactory {
    abstract crearJugador(Number,String):jugador
}