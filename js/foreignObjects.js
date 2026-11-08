
export class foreignObject {
    //FO means Foriegn object like





    constructor(textureFO, posX, posY,scale,rotation) {
        //load sprite once obj is made, if rusted
        this.spriteFO;
        this.textureFO = textureFO;


        //sprite positon variables
        this.posX = posX; 
        this.posY = posY;
        this.scale = scale;
        this.rotation;


        //FOsprite = new Sprite(textureFO);
       // FOsprite.set(posX, posY);
       // parent = this.parent;
    }
    
    async Init(pixiCanvas) {
        this.spriteFO = new PIXI.Sprite({
            texture: this.textureFO, //loaded texture is already passed in
            anchor: 0.5,
            position: { x: this.posX, y: this.posY},
            scale: { x: scale, y: scale},
            rotation: rotation
        });
        pixiCanvas.stage.addChild(this.spriteFO);
    }



    onClick() {
        this.parent.removeFO(this);
        
    }







}


