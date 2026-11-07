import { Assets, Container, Sprite } from "pixi.js";

export class cover extends Container {
    let coverBolts; //array of bolts. max 6
    let isRusted;
    let coverSprite;
    let coverImg;
    let rustedCoverFile; //define
    let normalCoverFile;// define





    constructor(isRusted) {
        coverBolts = [];
        //load sprite once obj is made, if rusted do rused img if not do other
        coverImg = isRusted ? this.rustedCoverFile : this.normalCoverFile;
        //make/load sprite to visually show cover
        const coverSprite = new Sprite.from(coverImg);
        this.addChild(coverSprite);
    }
    addBolt(bolt) {
        this.bolts.push(bolt);
        this.addChild(bolt.boltSprite); //bolt should be visible, addchild() acceepts sprite
        bolt.boltSprite.x = boltPositon();

    }
    boltPositon() {
        const length = this.coverBolts.length;

        switch (role) {
            case "guest":
                console.log("Limited access.");
                break;
            case "editor":
                console.log("Can edit content.");
                break;
            case "admin":
                console.log("Full system access.");
                break;
            default:
                console.log("Unknown role access denied.");
        }

    }

    removeBolt() {
        this.removeChild(bolt.boltSprite);
        return this.bolts.pop; //removes bolt from screen and returns it.  
    }
}

