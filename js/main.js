import { Player } from "./player.js";
import { GetCanvas } from "./utility.js";

let pixiCanvas;
let player = null;

(async () => {
    // Create a PixiJS application.
    const app = new PIXI.Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);
    pixiCanvas = app;

    player = new Player();
    console.log(player);
    player.Init(pixiCanvas);

    app.canvas.addEventListener("mousemove", (e) => player.Move(e));
})().then(data => {
    const ticker = new PIXI.Ticker();
    ticker.add((ticker) => {
        // Frame-independent animation using dimensionless deltaTime
        // sprite.rotation += 0.1 * ticker.deltaTime;

        // Time-based animation using deltaMS (milliseconds)
        // sprite.x += (100 / 1000) * ticker.deltaMS; // 100 pixels per second

        player.Update();
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