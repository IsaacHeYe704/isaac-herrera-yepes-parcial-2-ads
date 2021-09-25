import {jugador} from "../interfaces/jugador";
export class Arquero implements jugador {
    vida:Number
    talentos: Number
    nombre:String
    constructor(nombre:String) {
        this.nombre= nombre
        this.vida = 12;
        this.talentos = 2;
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