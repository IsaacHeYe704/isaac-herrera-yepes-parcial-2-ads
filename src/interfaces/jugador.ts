export interface jugador {
    maxVida: number
    vida: number
    talentos: number
    nombre:String
    entrenar(): void
    recibirDaño(Number):void;
    mostrarStats():void;
    gastar(number):void;
    multiplicadorEntrenamiento:number;
    getTalentos():number;
    setVidaMax(number ):void;
    getVida():number;
}