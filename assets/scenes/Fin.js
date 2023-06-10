export default class Fin extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("fin");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    console.log(data);
    this.cantidadEstrellas = data.cantidadEstrellas;
  }

  create() {
    this.add.image(400, 300, "win");
    this.cantidadEstrellasTexto = this.add.text(
      15,
      15,
      "Estrellas recolectadas: " + this.cantidadEstrellas,
      { fontSize: "30px", fill: "#FFFFFF" }
    );
    
  }
}
