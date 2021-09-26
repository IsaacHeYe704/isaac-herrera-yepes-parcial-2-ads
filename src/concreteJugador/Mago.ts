import {jugador} from "../interfaces/jugador";
export class Mago implements jugador {
    vida:number
    talentos: number;
    maxVida: number
    nombre:String
    multiplicadorEntrenamiento: number
    constructor(nombre) {
        this.nombre= nombre
        this.maxVida = 10;
        this.vida = this.maxVida;
        this.talentos = 5;
        this.multiplicadorEntrenamiento = 0.40
    }
    getTalentos(): number {
        return this.talentos;
    }
    setVidaMax(newMax: any): void {
        this.maxVida += newMax
        this.vida = this.maxVida;
    }
    mostrarStats() {
        const texto:String = `el Mago ${this.nombre.toUpperCase()} tiene ${this.vida} puntos de vida y ${this.talentos} talentos por gastar`
        console.log("\x1b[42m", (texto))
        console.log("\x1b[0m")
    }
    getVida()
    {
        return this.vida;
    }
    entrenar(): void {
        const probabilidadDeEntrenar:Number=(Math.random());
        const talentosAntes = this.talentos;
        const vidaAntes = this.vida;
        if(probabilidadDeEntrenar>=this.multiplicadorEntrenamiento)
        {
            this.talentos = this.talentos + 10
            this.vida = this.maxVida;
            console.log(`has entrenado con exito,talentos: ${talentosAntes} >>> ${this.talentos}, vida: ${vidaAntes} >>> ${this.vida} `,this.vida === this.maxVida ? "(estas en tu maximo actual de vida)": "")
        }else
        {
            console.log(`no has entrenado con exito, talentos:${this.talentos}`)
        }
    }
    async recibirDaño(daño: number) {
        let vidaAntes = this.vida;
        this.vida = this.vida - daño;
        if(this.vida>0)
        {
            console.log(`\x1b[32m has vencido!!!\x1b[0m vida:  ${vidaAntes} >>> ${this.vida}`)
        }else
        {
            let n: NodeJS.Timeout;
          console.clear();
          console.log("\x1b[31m",`has perdido!!!!! el juego ha terminado....`)
          n = await setTimeout(()=>{
            console.clear();
            process.exit();

          }, 1500);
        }
        
    }
    gastar(talentosGastados)
    {
        this.talentos -=  talentosGastados;
    }
}