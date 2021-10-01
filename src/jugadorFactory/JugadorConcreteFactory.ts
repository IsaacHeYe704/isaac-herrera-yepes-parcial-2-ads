import { Arquero } from "../concreteJugador/Arquero";
import { Caballero } from "../concreteJugador/Caballero";
import { Mago } from "../concreteJugador/Mago";
import { jugador } from "../interfaces/Jugador";
import { jugadorAbstractFactory } from "./JugadorAbstractFactory";

export class JugadorConcreteFactory extends jugadorAbstractFactory {
    crearJugador(tipoJugador:Number,nombre:String): jugador {
        if(tipoJugador == 1)
        {
            return new Mago(nombre);
        }else if(tipoJugador == 2)
        {
            return new Caballero(nombre);
        }else if (tipoJugador == 3)
        {
            return new Arquero(nombre);
        }
    }
    
}