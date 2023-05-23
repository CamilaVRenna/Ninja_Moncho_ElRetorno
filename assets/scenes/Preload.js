import { STARS } from "../../Utils.js";
const { RED, BLUE, YELLOW } = STARS;
export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }
  preload() {
    this.load.tilemapTiledJSON("map", "../../public/tilemaps/nivel1.json");
    this.load.image("tilesFondo", "../../public/images/sky.png");
    this.load.image("tilesPlataforma", "../../public/images/platform.png");

    this.load.image("star", "../../public/images/star.png");

    this.load.spritesheet("dude", "../../public/images/dude.png", {
      frameWidth: 65,
      frameHeight: 91,
    });
    this.load.image(RED, "../../public/images/starR.png");
    this.load.image(BLUE, "../../public/images/starB.png");
    this.load.image(YELLOW, "../../public/images/star.png");
    this.load.image("gameOver", "../public/images/gameOver.png");
    this.load.image("win", "../../public/images/win.png");
  }
  create() {
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    console.log("AAA");
    this.scene.start("Game");
  }
}
