// import { Application, Assets, Container, Sprite } from 'pixi.js';

import { GetCanvas, Lerp } from "./utility.js";

export class Player {
    constructor() {
        this.leftEye = this.rightEye = true;
        this.hands = true;
        this.leftEar = this.rightEar = true;
        this.holding = false;
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        this.offsetMouse = { x: 0, y: 0 };
        this.offsetStrength = 30;
        this.offsetSensitivity = 0.1
        this.cursor;
        this.sensitivity = 0.5;
        this.canvas = GetCanvas();
    }

    async Init(pixiCanvas) {
        this.cursor = new PIXI.Sprite({
            texture: await PIXI.Assets.load('./assets/sprites/circle.png'),
            anchor: 0.5,
            position: { x: 0, y: 0 },
            scale: { x: 0.03, y: 0.03 },
            rotation: 0
        });
        pixiCanvas.stage.addChild(this.cursor)
    }

    Move(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.targetMouse = {x: event.clientX - rect.left, y: event.clientY - rect.top};
    }

    Update() {
        if(!this.cursor) return;

        console.log("f/Player Update");
        // if(!this.position) return;
        if(this.hands) {
            this.mouse = {
                x: Lerp(this.mouse.x, this.targetMouse.x, this.sensitivity), 
                y: Lerp(this.mouse.y, this.targetMouse.y, this.sensitivity)
            };
        } else {
            const PI_2 = 2 * Math.PI;
            this.offsetMouse = {
                x: Lerp(this.offsetMouse.x, this.offsetStrength * Math.sin(Math.random() * PI_2), this.offsetSensitivity),
                y: Lerp(this.offsetMouse.y, this.offsetStrength * Math.sin(Math.random() * PI_2), this.offsetSensitivity)
            }
            this.mouse = {
                x: Lerp(this.mouse.x, this.targetMouse.x + this.offsetMouse.x, this.sensitivity), 
                y: Lerp(this.mouse.y, this.targetMouse.y + this.offsetMouse.y, this.sensitivity)
            };
        }
        this.cursor.position.set(this.mouse.x, this.mouse.y);
    }
}