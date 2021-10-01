import {jugador} from "../interfaces/Jugador";

export abstract class jugadorAbstractFactory {
    abstract crearJugador(Number,String):jugador
}