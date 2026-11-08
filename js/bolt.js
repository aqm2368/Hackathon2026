import { Assets, Sprite } from "pixi.js";

export class Bolt {






    constructor(rustedBoltTexture,normalBoltTexture,isRusted, isScrewed,posX,posY,scale) {
        //gameplay vars
        this.isRusted = isRusted;
        this.isScrewed = isScrewed;

        //sprite vars 
        this.boltSprite;
        this.boltTexture;
        this.rustedBoltTexture= rustedBoltFile;
        this.normalBoltTexture =  normalBoltFile;
        this.boltTexture = isRusted ? this.rustedBoltTexture : this.normalBoltTexture;

        //position vars
        this.posX = posX;
        this.posY = posY;
        // these allow unscrew bolts to show bigger and tilted to the right
        this.scale = isScrewed? scale : scale * 1.5; 
        this.rotation = isScrewed? 0 : Math.PI/4;



        

        

        //
    }



        


         async Init(pixiCanvas) {
        this.boltSprite = new PIXI.Sprite({
            texture: this.boltTexture,
            position: { x: posX, y: posY },
            scale: { x:scale , y: scale },
            rotation: this.rotation
        });
        pixiCanvas.stage.addChild(this.boltSprite);
    }







    
    

}