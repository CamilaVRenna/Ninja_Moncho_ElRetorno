export default class Menu extends Phaser.Scene {
    constructor() {
      super("Menu");
    }
  
    create() {
      this.add.image(500, 400, "menuBackGround");
      let startButton = this.add.image(300, 500, "startButton").setInteractive();
  
      startButton.on("pointerdown", () => {
        startButton.setTexture("startButtonPressed");
      });
  
      startButton.on("pointerup", () => {
        this.scene.start("juego");
      });
  
      startButton.on("pointerout", () => {
        startButton.setTexture("startButton");
      });
    }
  }