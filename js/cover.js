import { Assets, Container, Sprite } from "pixi.js";

export class cover extends Container {
    //TODO move static variables to overage stage/scene to declare and define positions. 
    static boltposition1;
    static boltposition2;
    static boltposition3;
    static boltpositon4;
    static boltposition5;
    static boltposition6;
    //TODO the scene/stage shoudl load assets and textures one time, therefore it can just staitcally define and objects can make sprites callign to the global static 
    static rustedCoverTexture;
    static normalCovertexture;
    static tray;
    static rustedCoverTexture;
    static normalCoverTexture;
    






    constructor(isRusted, coverBoltsArray,posX, posY,scale) {
        //
        this.coverBoltsArray = coverBoltsArray //array of bolts. max 6
        this.isRusted = isRusted;
        this.coverTexture = isRusted? rustedCoverTexture : normalCoverTexture;
        // this.coverSprite;
        //this.coverTexture = this.coverTexture;
        //this.rustedCoverTexture = rustedCoverTexture; //img //define
        //this.normalCoverTexture = normalCoverTexture;// define


        //weird hardcoded potential positions



        //load sprite once obj is made, if rusted do rused img if not do other
        coverTexture = isRusted ? this.rustedCoverTexture: this.normalCoverTexture;

        //make/load sprite to visually show cover
       // const coverSprite = new Sprite.from(coverImg);
       // this.addChild(coverSprite);

        //load bolts
        coverBoltsArray.forEach((bolt) => this.addBolt(bolt));
    }
    async Init(pixiCanvas) {
        this.cover = new PIXI.Sprite({
            texture: coverTexture,
            anchor: 0.5,
            position: { x: posX, y: posY},
            scale: { x: scale, y: scale},
            rotation: 0
        });
        pixiCanvas.stage.addChild(this.cover)
    }



    addBolt(bolt) {
        this.coverBoltsArray.push(bolt);
        this.addChild(bolt.boltSprite); //bolt should be visible, addchild() acceepts sprite
        bolt.boltSprite.x = getBoltsNextPositon();

    }
    isBoltsGone() {
        return coverBoltsArray.length == 0;
    }
    isRusted() {
        return this.isRusted;
    }
    onClick() {
        if (this.isBoltsGone) {
            if (this.isRusted) {
                sendCoverToTrash();
            }
            else {
                sendCoverToTray();
            }
        }
    }

    sendCoverToTray() {
        tray.addCover(this); // calls to global tray object to put in
        this.parent.removeCover(this);

    }
    sendCoverToTrash() {

        this.parent.removeCover(this); //should rmeove child and remove reference in array
       //TODO fix. 
        //send a notif
        console.log("removed rusty cover!!!");
    }



    getBoltsNextPositon() {
        let length = this.coverBolts.length;

        switch (length) {
            case 0:
                return  this.boltPositon0;
            case 1:
                return this.boltPositon1;
            case 2:
                return this.boltPositon2;
            case 3:
                return this.boltPositon3;
            case 4:
                return this.boltPositon4;
            case 5:
                return this.boltPositon5;

            default:
                console.log("error finding posiiton, array is proabbly over 6 "); 
        }

    }

    removeBolt() {
        this.removeChild(bolt.boltSprite);
        return this.bolts.pop; //removes bolt from screen and returns it.  
    }


}