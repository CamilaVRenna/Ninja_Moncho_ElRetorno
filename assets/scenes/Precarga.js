export default class Precarga extends Phaser.Scene {
  // escena para optimiozar tiempos
  // carga el preload solo una vez y sirve para todo el juego
  constructor() {
    // key of the scene
    super("precarga");
  }

  preload() {
    // load assets
    this.load.tilemapTiledJSON("map1", "../public/tilemaps/nivel1.json");
    this.load.tilemapTiledJSON("map2", "../public/tilemaps/nivel2.json");
    this.load.tilemapTiledJSON("map3", "../public/tilemaps/nivel3.json");

    this.load.image("sky", "./public/images/sky.png");
    this.load.image("plataforma", "./public/images/plataforma.jpg");
   
   

    this.load.image("menuBackGround", "../public/images/menuBackGround.png");
    this.load.image("startButton", "../public/images/startButton.png");
    this.load.image("retryButton", "../public/images/retryButton.png");
    this.load.image("retryButtonPressed", "../public/images/retryButtonPressed.png");
    this.load.image("startButtonPressed", "../public/images/startButtonPressed.png");
    this.load.image("win", "../public/images/win.png");
    this.load.image("estrella", "../public/images/star.png");
    this.load.image("bomba", "../public/images/bomb.png");
    this.load.spritesheet("enemy", "../public/images/enemy.png",{
      frameWidth: 68,
      frameHeight: 98,
    });
    this.load.image("yEnemy", "../public/images/yEnemy.png");
    this.load.spritesheet("dude", "./public/images/dude.png", {
      frameWidth: 65,
      frameHeight: 91,
    });
  
    this.load.image("salida", "./public/images/salida.png");
    this.load.image("gameOver","./public/images/gameOver.png")
  }

  create() {
    //  Our player animations, turning, walking left and walking right.
    // se crea una sola vez, para que no de error en el restart de la escena
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
  // //////
    
  
    // init scene juego
    this.scene.start("Menu");
  }
}