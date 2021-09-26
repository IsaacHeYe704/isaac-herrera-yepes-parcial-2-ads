import { jugador } from "../interfaces/jugador";

export abstract class jugadorDecorator implements jugador {
    elJugador: jugador;
    maxVida: number;
    vida: number;
    talentos: number;
    nombre: String;
    multiplicadorEntrenamiento: number;
    constructor(elJugador:jugador) {
        this.elJugador = elJugador;
        
    }
    
   
    
    entrenar(): void {
        return this.elJugador.entrenar();
    }
    recibirDaño(Number: any): void {
        return this.elJugador.recibirDaño(Number);
    }
    mostrarStats(): void {
        return this.elJugador.mostrarStats();
    }
    gastar(talentosGastados)
    {
        this.elJugador.gastar(talentosGastados);
    }
}





