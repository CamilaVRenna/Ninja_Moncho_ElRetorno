export default class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
      }
      Init() {}
    
      create() {
        this.add.image(400,300, "gameOver");
        let retryButton = this.add.image(600, 300, "retryButton").setInteractive();
    
        retryButton.on("pointerdown", () => {
          retrytButton.setTexture("retryButtonPressed");
        });
    
        retryButton.on("pointerup", () => {
          this.scene.start("juego");
        });
    
        retryButton.on("pointerout", () => {
          retryButton.setTexture("retryButton");
        });
      }
    
    }