import { jugador } from "../interfaces/Jugador";

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
    getTalentos(): number {
        return this.elJugador.getTalentos();
    }
    setVidaMax(newMax: any): void {
        return this.elJugador.setVidaMax(newMax);
    }
    getVida()
    {
        return this.elJugador.getVida();
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





