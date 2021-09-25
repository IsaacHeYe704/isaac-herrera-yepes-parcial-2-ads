import { throws } from "assert";
import { start } from "repl";
import { SelectMenus } from "./selectMenus";
const readline = require("readline");
class Game {
  gameName: String;
  playing: boolean;
  cl: any;
  rl: any;
  tipoDeJugador: Number
  menu: string;
  startMenu: SelectMenus;
  readLine: any;
  
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
    
    console.clear()
    console.log(`Bienvenido a ${this.gameName} \n`);
    await this.startMenu.selectPlayer();
    await this.startMenu.selectName();
  }
  
}

const RoleGame = new Game("juego de rol");
