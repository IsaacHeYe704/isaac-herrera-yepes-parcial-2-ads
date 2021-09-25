import {jugador} from "../interfaces/jugador";
export class Mago implements jugador {
    vida:Number
    talentos: Number;
    nombre:String
    constructor(nombre) {
        this.nombre= nombre
        this.vida = 10;
        this.talentos = 5;
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