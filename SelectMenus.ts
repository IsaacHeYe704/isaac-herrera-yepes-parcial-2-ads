const readline = require("readline");

export class SelectMenus {
    menu: string;
    tipoDeJugador: number;
    playerName: String;
    rl: any;
    
    constructor(rl) {
        this.menu = `que personaje elijes: \n
                1)Mago.
                2)Caballero.
                3)Arquero. \n`;
                this.rl = rl
    }
    private preguntaCerrada(q): Promise<string> {
        return new Promise((res, rej) => {
          this.rl.question(q + "elije una opción: ", (answer) => {
            res(answer);
          });
        });
      }
    private preguntaAbierta(q): Promise<string> {
        return new Promise((res, rej) => {
          this.rl.question(q, (answer) => {
            res(answer);
          });
        });
      }
      async selectPlayer() {
        var nombre;
        do {
          if (0 > this.tipoDeJugador || this.tipoDeJugador > 3) {
            console.log(
              "\x1b[31m",
              `${this.tipoDeJugador} no es una opción valida.`
            );
            console.log("\x1b[0m");
          }
          this.tipoDeJugador = parseInt(await this.preguntaCerrada(this.menu));
    
          console.clear();
        } while (0 > this.tipoDeJugador || this.tipoDeJugador > 3);
      }
      async selectName()
      {
        do {
            
            this.playerName = (await this.preguntaAbierta("cual es el nombre de tu personaje?: "));
            if (this.playerName.length == 0) {
                console.log(
                  "\x1b[31m",
                  `debes asignar un nombre a tu personaje!`
                );
                console.log("\x1b[0m");
              }
            console.clear();
        } while (this.playerName.length == 0);
      }
      returnData()
      {
          return {
              nombreJugador:this.playerName,
              tipoDeJugador:this.tipoDeJugador
          }
      }
}