import { jugadorDecorator } from "./JugadorDecorator";

export class ArmaduraDecorator extends jugadorDecorator {
    async mostrarStats()
    {
        this.elJugador.mostrarStats();
        console.log("\x1b[42m" ,`,tiene armadura`,"\x1b[0m")
    }
    async recibirDaño(daño){
        //la armadura tiene un 20 porciento de probabilidades de anular todo el danio
        const probabilidadDeDaño:Number=(Math.random());
        //logica extra de la armadara
        if(probabilidadDeDaño > 0.20)
        {
            //se llama la logica de la capa anterior
            this.elJugador.recibirDaño(daño);
        }else
        {
            console.log("has vencido y tu armadura ha reducido todo el daño, que buena compra!")
        }
    }
}