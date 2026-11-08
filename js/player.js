// import { Application, Assets, Container, Sprite } from 'pixi.js';

import { GetCanvas, Lerp } from "./utility.js";

export class Player {
    static leftEye = true;
    static rightEye = true;
    static hands = true;
    static leftEar = true;
    static rightEar = true;
    static hands = true;
    static holding = false;
    static holding = false;
    static mouse = { x: 0, y: 0 };
    static targetMouse = { x: 0, y: 0 };
    static offsetMouse = { x: 0, y: 0 };
    static offsetStrength = 30;
    static offsetSensitivity = 0.05;
    static cursor;
    static sensitivity = 0.5;
    static canvas = GetCanvas();
    static tool = 'NONE';

    static SetCursor(texture) {
        this.cursor = new PIXI.Sprite({
            texture: texture,
            anchor: 0.5,
            position: { x: 0, y: 0 },
            scale: { x: 0.3, y: 0.3 },
            rotation: 0
        });
    }

    static SetCursorTexture(texture) {
        this.cursor.texture = texture;
    }

    // constructor(texture) {
    //     this.leftEye = this.rightEye = true;
    //     this.hands = true;
    //     this.leftEar = this.rightEar = true;
    //     this.holding = false;
    //     this.mouse = { x: 0, y: 0 };
    //     this.targetMouse = { x: 0, y: 0 };
    //     this.offsetMouse = { x: 0, y: 0 };
    //     this.offsetStrength = 30;
    //     this.offsetSensitivity = 0.05;
    //     this.cursor = new PIXI.Sprite({
    //         texture: texture,
    //         anchor: 0.5,
    //         position: { x: 0, y: 0 },
    //         scale: { x: 0.03, y: 0.03 },
    //         rotation: 0
    //     });
    //     this.sensitivity = 0.5;
    //     this.canvas = GetCanvas();
    //     this.tool = '';
    // }

    static Move(event) {
        const rect = GetCanvas().getBoundingClientRect();
        this.targetMouse = {x: event.clientX - rect.left, y: event.clientY - rect.top};
    }

    static Update() {
        if(!this.cursor) return;

        // console.log("f/Player Update");
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