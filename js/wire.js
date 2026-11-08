import { BodyPart } from "./bodypart.js"; 

const Color = Object.freeze({
    RED: "red",
    BLACK: "black",
    WHITE: "white"
});

export class Wire {
    // === Variables === 
    #C_wireColor;
    #isBothSidesMelted; 
    #isSideAMelted;
    #isSideBMelted; 
    #countdownTimer;
    #bodyPart;  
    #wireSprite; 
    //wirePosition; 
    //solder; 
    
    // === Constructors ===
    constructor (bodyPart, wireSprite) //must be from the bodyPart class 
    {
        this.#bodyPart = bodyPart; 
        this.#wireSprite = wireSprite; 
        this.wireColor = Color.RED; //default value  
        this.isBothSidesMelted = false; //always false at start 
    }

    //check what color the wire is and assign it to the right position  

    // === Methods === 
    //solders one side of a wire 
    WireSoldered(solder) //solder should be the name of the sprite of the tool 
    {
        if(solder) //check collision with this.wire
        {
            //pop up the UI 
            this.Timer(3); //start timer; three seconds 
        }
    }
        //if (solder collides with this.wires)
            //pop up the UI for pressing down 
            //start timer 

        //mouse hold for timerAmount to successfully solder 
        //if timerAmount == 0 & mouse.hold == true
            //pop up UI disappears
            //wire end completed 
            //if(!isSideAMelted) true
            //else isSideBMelted = true 

        //if (isSideAMelted && isSideBMelted)
            //bodyPart.Soldering(false)

    
    //Timer to know the player is holding down on the mouse long enoough 
    Timer(countdownTimer)
    {
        let countdown = countdownTimer; 
        const timerInterval = setInterval(function(){
            if(countdown == 0)
            {
                clearInterval(timerInterval); //stop the timer 
            }
        }, 1000)

    }

}