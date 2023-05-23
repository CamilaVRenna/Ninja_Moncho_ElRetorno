import { SHAPES } from "../../utils.js";
const { SQUARE, TRIANGLE, DIAMOND,CIRCLE } = SHAPES;
export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }
  preload() {
    this.load.tilemapTiledJSON("map", "./public/tilemaps/nivel1.json");
    this.load.image("tilesFondo", "./public/assets/images/sky.png");
    this.load.image("tilesPlataforma", "./public/assets/images/platform.png");

    this.load.image("star", "./public/assets/images/star.png");

    this.load.spritesheet("dude", "./public/assets/images/dude.png", {
      frameWidth: 65,
      frameHeight: 91,
    });
    this.load.image(RED, "../public/assets/images/circle.png");
    this.load.image(BLUE, "../public/assets/images/diamond.png");
    this.load.image(YELLOW, "../assets/images/triangle.png");
    this.load.image("gameOver", "../public/assets/images/gameOver.png");
    this.load.image("win", "../public/assets/images/win.png");
    
  }
  create() {
    console.log("AAA");
    this.scene.start("Game");
  }
}
