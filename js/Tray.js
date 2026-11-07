import { Assets, Container, Sprite } from "pixi.js";

export class Tray extends Container {
    bolts; //this stores bolt objects. and handles offset
    nextBoltPosX = 10 + this.bolts.length; //js arrays are really like arraylists
    hasCover; 
    traySprite;
    trayImg; // define
    trayLocationX; //hardcoded never changes
    trayLocationY; //same


    constructor() {
        super();
        this.bolts = [];
        //make/load sprite to visually show tray
        
        const traySprite = new Sprite.from(trayImg); //.from auto creates textue for sprite, 1 line shortcut
        this.addChild(traySprite); //bc its first child, no need for z index- will always be under. 
    }
    addBolt(bolt){
        this.bolts.push(bolt);
        this.addChild(bolt.boltSprite); //bolt should be visible, addchild() acceepts sprite
        bolt.boltSprite.x += this.bolts.length * 10; //shirts location dependign on how many bolts we have
        
    }

    removeBolt(){
        this.removeChild(bolt.boltSprite);     
        return this.bolts.pop; //removes bolt from screen and returns it.  
    }
    addCover(cover){
        this.cover = cover;
        this.addChild(cover.coverSprite); 
        //set position
    }
    removeCover(cover){
        this.removeChild(cover.coverSprite);     
        this.cover = null;
    }




}