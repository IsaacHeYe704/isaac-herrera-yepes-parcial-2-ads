export interface jugador {
    vida: Number
    talentos: Number
    nombre:String
    entrenar(): void
    recibirDaño(Number): Number;
    mostrarStats():Number;
}