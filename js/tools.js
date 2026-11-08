import { textures } from "./main.js";
import { Player } from "./player.js";

export class Tools extends PIXI.Container {
    constructor(backgroundTexture) {
        super()
        this.background = new PIXI.Sprite({
            texture: backgroundTexture,
            anchor: {x: 0.5, y: 0.5},
            position: {x: 0, y: 0 },
            scale: { x: 0.5, y: 0.33 },
            rotation: 0
        });
        this.background.alpha = 0;
        this.container = new PIXI.Container();
        this.addChild(this.background);
        this.addChild(this.container);

        this.sprite;
        this.inUse = false; 
        this.name = '';
        this.cursorPath;
        this.texturePath;

        this.background.eventMode = 'static';
        this.background.on('pointerdown', (e) => {
            this.onClick();
            this.updateCursor(e);
        });
        this.background.on('pointerover', (e) => {
            if(Player.tool != 'NONE') return;
            Player.SetCursorTexture(textures['../assets/sprites/click_cursor.png'])
        });
        this.background.on('pointerout', (e) => {
            this.updateCursor(e);
        });
    }

    onClick() {
        if(Player.tool != "NONE" && Player.tool != this.name) return;

        this.inUse = !this.inUse;
        if(this.inUse) {
            Player.tool = this.name;
            this.sprite.texture = textures['../assets/sprites/empty_bucket.png'];
        }
        else {
            Player.tool = "NONE";
            this.sprite.texture = textures[this.texturePath];
        }
    }

    updateCursor(e) {
        let texturePath;
        if(Player.tool == "SCREWDRIVER") {
            texturePath = '../assets/sprites/screw_cursor.png';
        } else if (Player.tool == "SOLDERING") {
            texturePath = '../assets/sprites/solder_cursor.png';
        } else {
            texturePath = '../assets/sprites/default_cursor.png';
        }

        if(e.type == 'pointerdown' && Player.tool == 'NONE') {
            texturePath = '../assets/sprites/click_cursor.png'
        }

        if(e.type == 'pointerout' || e.type == 'pointerdown') {
            Player.SetCursorTexture(textures[texturePath]);
        }
    }
}

export class ScrewdriverTool extends Tools {
    constructor(backgroundTexture, texture) {
        super(backgroundTexture);
        this.sprite = new PIXI.Sprite({
            texture: texture,
            anchor: {x: 0.5, y: 0.5},
            position: { x: 0, y: 0 },
            scale: { x: 0.2, y: 0.2 },
            rotation: 0
        });
        this.container.addChild(this.sprite);

        this.name = "SCREWDRIVER";
        this.cursorPath = '../assets/sprites/screw_cursor.png';
        this.texturePath = '../assets/sprites/screwdriver.png';

        // SET ORIGIN HERE
        this.position.set(360, -300);
    }
}

export class SolderingTool extends Tools {
    constructor(backgroundTexture, texture) {
        super(backgroundTexture);
        this.sprite = new PIXI.Sprite({
            texture: texture,
            anchor: {x: 0.5, y: 0.5},
            position: { x: 0, y: 0 },
            scale: { x: 0.2, y: 0.2 },
            rotation: 0
        });
        this.container.addChild(this.sprite);
        
        this.name = "SOLDERING";
        this.cursorPath = '../assets/sprites/solder_cursor.png';
        this.texturePath = '../assets/sprites/soldering.png';

        // SET ORIGIN HERE
        this.position.set(360, -160);
    }
}

export class BoltsBox extends Tools {
    constructor(backgroundTexture, texture) {
        super(backgroundTexture);
        this.sprite = new PIXI.Sprite({
            texture: textures['../assets/sprites/bolt_bucket.png'],
            anchor: {x: 0.5, y: 0.5},
            position: { x: 0, y: 0 },
            scale: { x: 0.2, y: 0.2 },
            rotation: 0
        });
        this.container.addChild(this.sprite);
        
        this.name = "BOLTSBOX";
        this.cursorPath = '../assets/sprites/screw_cursor.png';
        this.texturePath = '../assets/sprites/bolt_bucket.png';

        // SET ORIGIN HERE
        this.position.set(360, -20);
    }

    onClick() {
        //ADD A BOLT WHERE POSSIBLE
        console.log("WORKING");
    }
}

export class Wires extends PIXI.Container {
    constructor(backgroundTexture) {
        super()
        this.background = new PIXI.Sprite({
            texture: backgroundTexture,
            anchor: {x: 0.5, y: 0.5},
            position: {x: 0, y: 0 },
            scale: { x: 0.2, y: 0.2 },
            rotation: 0
        });
        this.container = new PIXI.Container();
        this.addChild(this.background);
        this.addChild(this.container);

        this.wiresA = new PIXI.Sprite({
            texture: textures['../assets/sprites/red_wire_bucket.png'],
            anchor: {x: 0.5, y: 0.5},
            position: { x: -50, y: 0 },
            scale: { x: 1, y: 1 },
            rotation: 0
        });
        this.wiresB = new PIXI.Sprite({
            texture: textures['../assets/sprites/white_wire_bucket.png'],
            anchor: {x: 0.5, y: 0.5},
            position: { x: 0, y: 0 },
            scale: { x: 0.2, y: 0.2 },
            rotation: 30
        });
        this.wiresC = new PIXI.Sprite({
            texture: textures['../assets/sprites/black_wire_bucket.png'],
            anchor: {x: 0.5, y: 0.5},
            position: { x: 50, y: 0 },
            scale: { x: 0.2, y: 0.2 },
            rotation: 0
        });
        this.container.addChild(this.wiresA);
        this.container.addChild(this.wiresB);
        this.container.addChild(this.wiresC);

        this.wiresA.eventMode = 'static'
        this.wiresA.on('pointerdown', (e) => {
            this.onClick();
            this.updateCursor(e);
        });
        this.wiresA.on('pointerover', (e) => {
            if(Player.tool != 'NONE') return;
            
            Player.SetCursorTexture(textures['../assets/sprites/click_cursor.png'])
        });
        this.wiresA.on('pointerout', (e) => {
            this.updateCursor(e);
        });

        this.wiresB.eventMode = 'static'
        this.wiresB.on('pointerdown', (e) => {
            this.onClick();
            this.updateCursor(e);
        });
        this.wiresB.on('pointerover', (e) => {
            if(Player.tool != 'NONE') return;
            
            Player.SetCursorTexture(textures['../assets/sprites/click_cursor.png'])
        });
        this.wiresB.on('pointerout', (e) => {
            this.updateCursor(e);
        });

        this.wiresC.eventMode = 'static'
        this.wiresC.on('pointerdown', (e) => {
            this.onClick();
            this.updateCursor(e);
        });
        this.wiresC.on('pointerover', (e) => {
            if(Player.tool != 'NONE') return;
            
            Player.SetCursorTexture(textures['../assets/sprites/click_cursor.png'])
        });
        this.wiresC.on('pointerout', (e) => {
            this.updateCursor(e);
        });
        
        this.name = "WIRES";
        this.cursorPath = '../assets/sprites/screw_cursor.png';
        this.texturePath = '../assets/sprites/empty_bucket.png';

        // SET ORIGIN HERE
        this.position.set(360, 120);
    }

    onClick() {
        //SET WIRES
    }

    updateCursor(e) {
        let texturePath;
        if(Player.tool == "SCREWDRIVER") {
            texturePath = '../assets/sprites/screw_cursor.png';
        } else if (Player.tool == "SOLDERING") {
            texturePath = '../assets/sprites/screw_cursor.png';
        } else {
            texturePath = '../assets/sprites/default_cursor.png';
        }

        if(e.type == 'pointerdown' && Player.tool == 'NONE') {
            texturePath = '../assets/sprites/click_cursor.png'
        }

        if(e.type == 'pointerout' || e.type == 'pointerdown') {
            Player.SetCursorTexture(textures[texturePath]);
        }
    }
}

export class BodyPlate extends PIXI.Container {
    constructor() {
        super();
        this.sprite = new PIXI.Sprite({
            texture: textures['../assets/sprites/surgery_table.png'],
            anchor: {x: 0.5, y: 0.5},
            position: { x: -150, y: -150 },
            scale: { x: 0.5, y: 0.4 },
            rotation: 0
        });
        this.addChild(this.sprite);
    }
}

export class Tray extends PIXI.Container {
    constructor(texture) {
        super();
        this.sprite = new PIXI.Sprite({
            texture: textures['../assets/sprites/tray.png'],
            anchor: {x: 0.5, y: 0.5},
            position: { x: -750, y: -50 },
            scale: { x: 0.3, y: 0.4 },
            rotation: 0
        });
        this.addChild(this.sprite);

        this.sprite.eventMode = 'static';
        this.sprite.on('pointerover', (e) => {
            //ALLOW ITEM TO BE DROPPED HERE
        });
        this.sprite.on('pointerout', (e) => {
            //STOP ALLOWING ITEM TO BE DROPPED
        });
    }
}