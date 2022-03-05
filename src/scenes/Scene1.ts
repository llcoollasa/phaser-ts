import Phaser from "phaser";

export default class Scene1 extends Phaser.Scene {
    background: Phaser.GameObjects.TileSprite | undefined;

    constructor() {
        super("sceneone");
    }

    preload() {
        this.load.image("sky", "images/sky.png");
    }

    create() {
        this.background = this.add.tileSprite(
            0,
            0,
            this.game.config.width as number,
            this.game.config.height as number,
            "sky"
        );
        this.background.setOrigin(0, 0);
    }
}
