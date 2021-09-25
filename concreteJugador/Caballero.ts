import {jugador} from "../interfaces/jugador";
export class Caballero implements jugador {
    vida:Number
    talentos: Number
    nombre:String
    constructor(nombre) {
        this.nombre= nombre
        this.vida = 20;
        this.talentos = 0;
    }
    mostrarStats(): Number {
        throw new Error("Method not implemented.");
    }
    entrenar(): void {
        throw new Error("Method not implemented.");
    }
    recibirDaño(Number: any): Number {
        throw new Error("Method not implemented.");
    }
}