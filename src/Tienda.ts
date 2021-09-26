import { ArmaduraDecorator } from "./decorators/ArmaduraDecorator";
import { CascoDecorator } from "./decorators/CascoDecorator";
import { jugador } from "./interfaces/jugador";

export class Tienda {
  elJugador: jugador;
  readLine: any;
  menu: string;
  respuesta: number;
  constructor(rl: any) {
    this.readLine = rl;
    this.menu = `que deseas comprar? : \n
        1)Armadura: te da un 20% de probabilidad de no recibir daño(60 talentos).
        2)Casco:reduces en la mitad el daño que recibes (30 talentos).
        3)10 de Vida maxima.(10 talentos) \n`;
  }
  private preguntaCerrada(q): Promise<string> {
    return new Promise((res, rej) => {
      this.readLine.question(q + "elije una opción: ", (answer) => {
        res(answer);
      });
    });
  }
  async mostrarTienda(jugador:jugador):Promise<jugador> {
    do {
      console.clear();
      this.respuesta = parseInt(await this.preguntaCerrada(this.menu));
      if (this.respuesta <= 0 || this.respuesta > 3) {
        console.log("\x1b[31m", `${this.respuesta} no es una opcion valida!`);
        console.log("\x1b[0m");
      }
      else
      {
        return await this.tomarDecision(jugador)
      }
    } while (this.respuesta <= 0 || this.respuesta > 3);
    
  }
  async tomarDecision(jugador:jugador):Promise<jugador> {
    let mensaje:String;
    switch (this.respuesta) {
      case 1:
        if(jugador.getTalentos() >=60)
        {
          console.clear();
        console.log(`has comprado una armadura!!!!`)
        jugador.gastar(60);
          return new ArmaduraDecorator(jugador);
          
        }
        console.clear();
        console.log("\x1b[31m",`no tienes suficientes creditos para comprar una armadura, entrena más`,"\x1b[0m")
        return jugador
        
        break;
      case 2:
        if(jugador.getTalentos() >=30)
        {
          console.clear();
          console.log(`has comprado un casco!!!!`)
          jugador.gastar(30);
        return new CascoDecorator(jugador);
        }
        console.clear();
        console.log("\x1b[31m",`no tienes suficientes creditos para comprar un casco, entrena más`,"\x1b[0m")
        return jugador
      case 3:{
        if(jugador.getTalentos() >=10)
        {
          console.clear();
          
          console.log(`has comprado 10 de vida maxima!!!!`)
          jugador.setVidaMax(10);
          jugador.gastar(10);
          return jugador;
        }
        console.clear();
        console.log("\x1b[31m",`no tienes suficientes creditos para comprar un mas vida maxima, entrena más`,"\x1b[0m")
        return jugador
        
      }
      default:
        console.log("\x1b[31m", `esa no es una opcion valida`,"\x1b[0m")
        break;
    }
  }

}
