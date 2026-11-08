import { Player } from "./player.js";
import { WorkBench } from "./sceneManager.js";
import { GetCanvas } from "./utility.js";

let pixiCanvas;
let player = null;
let workBench;

export const textures = await PIXI.Assets.load([
    '../assets/sprites/rectangle.png',
    '../assets/sprites/circle.png',
    '../assets/sprites/toolBackground.png',
    '../assets/sprites/screwdriver.png',
    '../assets/sprites/soldering.png',
    '../assets/sprites/boltsBox.png',
    '../assets/sprites/empty_bucket.png',
    '../assets/sprites/bolt_bucket.png',
    '../assets/sprites/bodyPlate.png',
    '../assets/sprites/tray.png',
    '../assets/sprites/click_cursor.png',
    '../assets/sprites/default_cursor.png',
    '../assets/sprites/screw_cursor.png',
    '../assets/sprites/solder_cursor.png',
    '../assets/sprites/red_wire_bucket.png',
    '../assets/sprites/surgery_table.png',
    '../assets/sprites/white_wire_bucket.png',
    '../assets/sprites/black_wire_bucket.png',
    '../assets/sprites/workbench_background.png',
    '../assets/sprites/unscrew.png',
    '../assets/sprites/screw.png',
    '../assets/sprites/base_arm.png'
]);

(async () => {
    // Create a PixiJS application.
    const app = new PIXI.Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.querySelector(".pixi-container").appendChild(app.canvas);
    pixiCanvas = app;

    Player.SetCursor(textures['../assets/sprites/default_cursor.png']);
    console.log(Player);

    workBench = new WorkBench(
        textures['../assets/sprites/workbench_background.png'],
        textures['../assets/sprites/toolBackground.png'],
        textures['../assets/sprites/screwdriver.png'],
        textures['../assets/sprites/soldering.png'],
        textures['../assets/sprites/empty_bucket.png'],
        textures['../assets/sprites/bodyPlaye.png'],
        textures['../assets/sprites/tray.png'],
        textures['../assets/sprites/empty_bucket.png']
    );
    console.log(workBench);
    pixiCanvas.stage.addChild(workBench);
    pixiCanvas.stage.addChild(Player.cursor);
    app.canvas.addEventListener("mousemove", (e) => Player.Move(e));
})().then(data => {
    const ticker = new PIXI.Ticker();
    ticker.add((ticker) => {
        // Frame-independent animation using dimensionless deltaTime
        // sprite.rotation += 0.1 * ticker.deltaTime;

        // Time-based animation using deltaMS (milliseconds)
        // sprite.x += (100 / 1000) * ticker.deltaMS; // 100 pixels per second

        Player.Update();
    });
    ticker.start();
});

// Control update priority
// ticker.add(
//     (ticker) => {
//         // High priority updates run first
//         physics.update(ticker.deltaTime);
//     },
//     undefined,
//     UPDATE_PRIORITY.HIGH
// );

// One-time updates
// ticker.addOnce(() => {
//     console.log('Runs on next frame only');
// });