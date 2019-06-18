import { actionUnitsSelector } from "../selectors/session";
import store from "../store/store";
import { action } from "mobx";


const ICON_FILE_NAMES = {
  upArrow: "up.png",
  downArrow: "down.png",
  lowContact: "ec_low.png",
  medContact: "ec_med.png",
  highContact: "ec_high.png",
  smile: "smile.png",
  concern: "concern.png",
  distress: "distress.png",
  freaked: "freaked.png",
  surprise: "surprise.png",
  sleep: "sleep.png"
};

const ICON_FOLDER = "../../icons/emotes/";

const EXPRESSIONS = {
  ANGER: "ANGER",
  SURPRISE: "SURPRISE",
  SADNESS: "SADNESS",
  HAPPY: "HAPPY"
};

const KEY_2_EXP = {
  227: EXPRESSIONS.HAPPY,
  16387: EXPRESSIONS.SURPRISE,
  3077: EXPRESSIONS.SADNESS,
  12: EXPRESSIONS.ANGER
};

class Perception {
  constructor() {
    this.actionUnitThresholds = [
      5,
      1,
      1,
      0.4,
      1.5,
      99,
      99,
      99,
      0.2,
      99,
      1.0,
      1.5,
      99,
      99,
      1.0,
      99,
      99
    ];

    // Number of occurences for each expression activation
    this.windowMap = {
      227: 0,
      16387: 0,
      3077: 0,
      12: 0
    };
  }

  // Function to Crunch last 8 seconds of action unit data to get user perception.
  computeUserPerception() {
    this.resetMap(); 
    let actionUnits = store.getState().actionUnits;
    if (actionUnits.length > 32) {
      actionUnits = actionUnits.slice(-32);
    }
    


    for (var auArr of actionUnits) {
      let bitArray = auArr.map((val, index)=>{
          return this.actionUnitThresholds[index] < val;
      })
      console.log(bitArray);
      //this.windowMap[this.bitArrayToInt(bitArray)] += 1;
    }

  }


  resetMap(){
      for(var k in this.windowMap){
          this.windowMap[k] = 0;
      }
  }

  // Function to compare the Last value of Authority, Likeability and Compassion.
  computeALCVariables() {}

  // Function to get VSP Assessment depending on events collected from SP.
  computeVSPAssessment() {}

  bitArrayToInt(arr) {
    let bitstring = "";
    arr.forEach(value => {
      bitstring = bitstring + value;
    });
    return parseInt(bitstring, 2);
  }
}

export default new Perception();
