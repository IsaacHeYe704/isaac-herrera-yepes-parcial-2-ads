import { jugador } from "./interfaces/jugador";
import { JugadorConcreteFactory } from "./jugadorFactory/JugadorConcreteFactory";
import { SelectMenus } from "./selectMenus";
import * as readline from "readline";
class Game {
  gameName: String;
  playing: boolean;
  cl: any;
  rl: any;
  tipoDeJugador: Number;
  menu: string = `Te debes enfrentar a un moustruo con \x1b[31m 69 \x1b[0m de ataque, cual es tu decicion?: \n
  1)entrenar(recuperas vida y es probable que ganes talento para comprar equipamento)
  2)tienda(comprar equipamento, se usa talento)
  3)atacar
  4)rendirte :( \n`;
  startMenu: SelectMenus;
  readLine: any;
  //el jugador es de tipo interface jugador por lo que no importa de que tipo sea este
  elJugador: jugador;

  constructor(gameName: String) {
    this.gameName = gameName;
    this.playing = true;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.startMenu = new SelectMenus(this.rl);
    this.run();
  }
  async run() {
    console.clear();
    console.log(`Bienvenido a ${this.gameName} \n`);
    //llamado al menu principal para que se seleccione un rol y el nombre del jugador
    await this.startMenu.selectPlayer();
    await this.startMenu.selectName();
    //extraigo los datos que trajo el usuario
    const { nombreJugador, tipoDeJugador } = this.startMenu.returnData();
    //implementacion de factory:
    //tipo de jugador 1 crea un mago
    //tipo de jugador 2 crea un caballero
    //tipo de jugador 3 crea un arquero
    const jugadorFactory: JugadorConcreteFactory = new JugadorConcreteFactory();

    this.elJugador = jugadorFactory.crearJugador(tipoDeJugador, nombreJugador);

    this.play();
  }
  async play() {
    while (this.playing) {
      this.elJugador.mostrarStats();
      let respuesta = parseInt(await this.preguntaCerrada(this.menu));
      console.clear();
      console.clear();
      await this.tomarDecision(respuesta);
    }
  }
  async tomarDecision(desicion: number) {
    switch (desicion) {
      case 1: {
        this.elJugador.entrenar();
        break;
      }
      case 2: {
        //implementar tienda
        
        break;
      }
      case 3: {
        this.elJugador.recibirDaño(2);
        break;
      }
      case 4: {
        let n: NodeJS.Timeout;
        console.clear();
        console.log("\x1b[31m", `el juego ha terminado....`);
        n = await setTimeout(() => {
          console.clear();
          this.playing = false;
          process.exit();
        }, 1500);
        break;
      }
      default: {
        console.clear();
        console.log("\x1b[31m","esa opcion no es valida!!!");
      }
    }
  }
  private preguntaCerrada(q): Promise<string> {
    return new Promise((res, rej) => {
      this.rl.question(q + "elije una opción: ", (answer) => {
        res(answer);
      });
    });
  }
}

const RoleGame = new Game("juego de rol");