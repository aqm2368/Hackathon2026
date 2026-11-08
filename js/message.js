export class Ticket extends PIXI.Container {
    constructor(name, occupation, breed, govClass, quota, offer, comments) {
        super();
        this.headshot = new Sprite({
            texture: texture,
            anchor: 0.5,
            position: { x: 0, y: 0 },
            scale: { x: 0.03, y: 0.03 },
            rotation: 0
        });
        this.name = name;
        this.occupation = occupation;
        this.breed = breed;
        this.govClass = govClass;
        this.quota = quota;
        this.offer = offer;
        this.comments = comments;
    }

    GetTicket() {
        const ticket = new PIXI.Container();
        //CREATE THE TICKET
    }
}

export class Email extends PIXI.Container {
    constructor(title, comments) {
        this.title = title;
        this.comments = comments;
    }

    GetEmail() {
        const email = new PIXI.Container();
    }
}