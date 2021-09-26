import { jugadorDecorator } from "./JugadorDecorator";

export class CascoDecorator extends jugadorDecorator {
    async mostrarStats()
    {
        this.elJugador.mostrarStats();
        console.log("\x1b[42m" ,`,tiene casco`,"\x1b[0m")
    }
    async recibirDaño(daño){
        //el casco baja el da;o  en un 20 porciento de probabilidades de anular todo el danio
        const reduccion = 0.5;
        daño -= daño*reduccion;
        console.log(`el casco te redujo el daño a ${daño}` )
        this.elJugador.recibirDaño(daño);
    }
}