import { Wire } from "./wire";

//handle positioning 
export class BodyPart
{
    // === Variables === 
    //# is private 
    #s_name; 
    bolts = []; //list of bolt objects 
    wires = []; //list of wire objects 
    foreign = []; 
    panel; //panel class 
    #areBoltsRusty; 
    #isSolderingNeeded; 
    #areBoltsMissing; 
    #isForeignPresent; 
    //sprite variable 

    // === Properties === 
    set BoltRust(value)
    {
        if(value !== Boolean)
        {
            throw new TypeError("value must be a boolean!!");  
        }
        this.#areBoltsRusty = value; 
    }

    set Soldering(value)
    {
        if(value !== Boolean)
        {
            throw new TypeError("value must be a boolean!!");  
        }

        this.#isSolderingNeeded = value; 
    }

    set BoltsMissing(value)
    {
        if(value !== Boolean)
        {
            throw new TypeError("value must be a boolean!!");  
        }
        this.#areBoltsMissing = value; 
    }

    set ForeignPresence(value)
    {
        if(value !== Boolean)
        {
            throw new TypeError("value must be a boolean!!");  
        }
        this.#isForeignPresent = value; 
    }

    // === Constructor ===
    //must include body part name, how many wires, foreign objects, and bolts are in the body part you're making 
    constructor(name, i_wireAmount, i_foreignAmount, i_rustyBoltAmount, i_missingBoltAmount){
        this.#s_name = name; 
        if(i_rustyBoltAmount == 0)
        {
            this.#areBoltsRusty = false; 
        } else {
            this.#areBoltsRusty = true; 
        }

        if(i_foreignAmount == 0)
        {
            this.#isForeignPresent = false; 
        } else {
            this.#isForeignPresent = true; 
        }

        if(i_missingBoltAmount == 0)
        {
            this.#areBoltsMissing = false; 
        } else {
            this.#areBoltsMissing = true; 
        }

        if(i_wireAmount == 0)
        {
            this.#isSolderingNeeded = false; 
        } else {
            this.#isSolderingNeeded = true; 
        }

        for(let i = 0; i < i_wireAmount; i++)
        {
            this.wires.push(new Wire); 
        } 

        for(let i = 0; i < i_foreignAmount; i++)
        {
            this.foreign.push(new ForeignObject); 
        }

        for(let i = 0; i < i_boltAmount; i++)
        {
            this.bolts.push(new Bolts); 
        }
        //this.panel = new Panel(bolts[]); 
    }

    // === Methods === 
    //LoadSprite()?
    
    //Positions() 

    BoolValidation() //acts as my isFixed; validates whether the player is done with fixing the object (true) or not 
    {
        if(this.#areBoltsRusty == false 
            && this.#areBoltsMissing == false 
            && this.#isSolderingNeeded == false
            && this.#isForeignPresent == false)
        {
            // the part is fixed 
            // the class that called validation should now bring up a button that sends the customer on their way 
            return true; 
        }

        return false; 
    }

    // //way to text people 
    // //only 4 bolts & 3 wires possible
    // //motherboard has its own bolts (4)...should the player mess with these?  
    // ArmGadget(i_severity, ismissigBolts)
    // {
    //     wires = [new Wires, new Wires, new Wires]
    //     bolts = [new Bolts, new Bolts, new Bolts, new Bolts]; 
    //     // this.severity = severity; 
    //     if(ismissigBolts)
    //     {
    //         this.#areBoltsMissing = true; 
    //     }
    //     switch(i_severity) //default case uneeded since the method requires a severity number and a default is set for it 
    //     {
    //         case 1: //rusty bolts 
    //             this.#areBoltsRusty = true;   
    //             break; 
            
    //         case 2: //1 wire issue + foreign 
    //             this.#isSolderingNeeded = true; 
    //             this.#isForeignPresent = true;  
    //             break; 
            
    //         case 3: //rusty bolts + wire issue(advanced)
    //             this.#isSolderingNeeded = true; 
    //             this.#areBoltsRusty = true; 
    //             break; 
    //     }
    // }

}