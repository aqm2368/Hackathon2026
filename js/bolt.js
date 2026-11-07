import { Assets, Sprite } from "pixi.js";

export class Bolt {
    positionX;
    positionY;
    isRusted;
    sprite;
    img; 
    rustedBoltFile; //define
    normalBoltFile;// define



    constructor(isRusted, positionX, positionY, location) {
        //load sprite once obj is made
        img = isRusted ? this.rustedBoltFile : this.normalBoltFile;
        const texture = Assets.load(img);
        const sprite = new Sprite(texture);
        sprite.anchor.set(0.5); //centering
        sprite.position.set(positionX, positionY);



        this.isRusted = isRusted;
        this.positionX = positionX;
        this.positionY = positionY;
        this.location = location;
    }
    newLocation() {
        if (this.isRusted) {
            location = 'tray';


        }
    }

}