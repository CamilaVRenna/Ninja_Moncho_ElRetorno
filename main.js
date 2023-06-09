import juego from "./assets/scenes/juego.js";
import Nivel2 from "./assets/scenes/Nivel2.js";
import Nivel3 from "./assets/scenes/Nivel3.js";
import Precarga from "./assets/scenes/Precarga.js";
import Menu from "./assets/scenes/Menu.js";
import Fin from "./assets/scenes/Fin.js";
import GameOver from "./assets/scenes/GameOver.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precarga,Menu, juego, Nivel2,Nivel3,Fin,GameOver],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
