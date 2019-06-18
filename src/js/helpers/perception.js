import {actionUnitsSelector} from "../selectors/session";
import store from "../store/store";


const ICON_FILE_NAMES = {
    upArrow : "up.png",
    downArrow : "down.png",
    lowContact : "ec_low.png",
    medContact : "ec_med.png",
    highContact : "ec_high.png",
    smile : "smile.png",
    concern : "concern.png",
    distress : "distress.png",
    freaked : "freaked.png",
    surprise : "surprise.png",
    sleep : "sleep.png"
}

const ICON_FOLDER = "../../icons/emotes/";

export default class Perception{
    constructor(){
        
    }

    // Function to Crunch last 8 seconds of action unit data to get user perception.
    computeUserPerception(){
        
    }

    // Function to compare the Last value of Authority, Likeability and Compassion.
    computeALCVariables(){

    }

    // Function to get VSP Assessment depending on events collected from SP.
    computeVSPAssessment(){

    }
}