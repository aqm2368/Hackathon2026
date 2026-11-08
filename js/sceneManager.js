import { BodyPlate, BoltsBox, ScrewdriverTool, SolderingTool, Tray, Wires } from "./tools.js";

export class WorkBench extends PIXI.Container {
    constructor(workBenchBackground, background, screwdriver, soldering, boltsBox, bodyPlate, tray, wires) {
        super();
        this.sprite = new PIXI.Sprite({
            texture: workBenchBackground,
            anchor: 0.5,
            position: { x: 0, y: -160 },
            scale: { x: 5, y: 2 },
            rotation: 0
        });
        this.position.set(950, 400);
        this.container = new PIXI.Container;
        this.addChild(this.sprite);
        this.addChild(this.container);

        this.screwdriver = new ScrewdriverTool(background, screwdriver);
        this.soldering = new SolderingTool(background, soldering); 
        this.boltsBox = new BoltsBox(background, boltsBox);
        this.bodyPlate = new BodyPlate(bodyPlate);
        this.tray = new Tray(tray);
        this.wires = new Wires(wires);
        this.bodyPlate = new BodyPlate();

        this.container.addChild(this.screwdriver);
        this.container.addChild(this.soldering);
        this.container.addChild(this.boltsBox);
        this.container.addChild(this.wires);
        this.container.addChild(this.bodyPlate);
        this.container.addChild(this.tray);
    }
}

export class MessageUI {
    constructor() {
        this.messageQueue = [];
    }

    AddMessage(message) {
        this.ticketQueue.push(message);
    }
}

export class MenuUI {
    constructor(player) {

    }
}

export class PauseUI {
    constructor(player) {

    }
}

export class GameOverUI {
    constructor(player) {

    }
}

export class WinUI {
    constructor(player) {

    }
}
