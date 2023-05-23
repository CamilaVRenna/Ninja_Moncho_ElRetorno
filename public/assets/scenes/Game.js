// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/
import {STARS, POINTS_PERCENTAGE, POINTS_PERCENTAGE_VALUE_START} from './Utils.js';
const {BLUE, RED, YELLOW} = STARS;
export default class Game extends Phaser.Scene {
  constructor() {
    score;
    gameOver;
    timer;
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("hello-world");
  }

  init() {
    this.starsRecolected = {
      [BLUE]: { count: 0, score: 1 },
      [RED]: { count: 0, score: 1 },
      [YELLOW]: { count: 0, score: 1 },
    };
    console.log(this.shapesRecolected);
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
  }

  create() {
    // todo / para hacer: texto de puntaje

    //  Our player animations, turning, walking left and walking right.
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

    const map = this.make.tilemap({ key: "map" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const capaFondo = map.addTilesetImage("sky", "tilesFondo");
    const capaPlataformas = map.addTilesetImage("platform", "tilesPlataforma");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "plataformas",
      capaPlataformas,
      0,
      0
    );
    const objectosLayer = map.getObjectLayer("objetos");

    plataformaLayer.setCollisionByProperty({ colision: true });

    console.log(objectosLayer);

    // crear el jugador
    // Find in the Object Layer, the name "dude" and get position
    const spawnPoint = map.findObject(
      "objetos",
      (obj) => obj.name === "player"
    );
    console.log(spawnPoint);
    // The player and its settings
    this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude");

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // Create empty group of starts
    this.stars = this.physics.add.group();

    // find object layer
    // if type is "stars", add to stars group
    objectosLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);

      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "star": {
          // add star to scene
          // console.log("star agregada: ", x, y);
          const star = this.stars.create(x, y, "star");
          break;
        }
      }
    });

    this.physics.add.collider(this.jugador, plataformaLayer);
    this.physics.add.collider(this.stars, plataformaLayer);
    this.physics.add.collider(
      this.jugador,
      this.stars,
      this.recolectarStar
    );
  
  this.score = 0;
  this.scoreText = this.add.text(20, 20, "Stars colected:" + this.score, {
    fontSize: "32px",
    fontStyle: "bold",
    fill: "#FFFFFF",
  });
   //add timer
   this.timer = 30;
   this.timerText = this.add.text(750, 20, this.timer, {
     fontSize: "32px",
     fontStyle: "bold",
     fill: "#FFFFFF",
   });
}
  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    }
    //move right
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    }
    //stop
    else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    //jump
    if (this.cursors.up.isDown && this.player.body.blocked.down) {
      this.player.setVelocityY(-330);
    }
  
   //condicion para ganar y mostrar escena
   if (this.score > 4) {
    this.scene.start("Win");
  }
  if (this.gameOver) {
    this.scene.start("GameOver");
  }


  starRecolected(jugador, star) {
    star.disableBody(true, true);
  
    const scoreNow = this.starsRecolected[shapeName].score * percentage;
    this.score += scoreNow;
    this.scoreText.setText(`Score: ${this.score.toString()}`);
    this.shapesRecolected[shapeName].count++;}
   
    oneSecond() {
      this.timer--;
      this.timerText.setText(this.timer);
      if (this.timer <= 0) {
        this.gameOver = true;
      }
}
}
}