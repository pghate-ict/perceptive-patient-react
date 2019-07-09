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
  4384: EXPRESSIONS.HAPPY,
  256: EXPRESSIONS.SURPRISE,
  96: EXPRESSIONS.SADNESS,
  24672: EXPRESSIONS.ANGER
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
      4384: 0,
      256: 0,
      96: 0,
      24672: 0
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
          return this.actionUnitThresholds[index] < val ? '1' : '0' ;
      })
      let cKey = this.bitArrayToInt(bitArray);

      let map = this.windowMap;
      if(cKey in map){
        map[cKey] = map[cKey] + 1;
      }
    }

    console.log(this.windowMap);

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


  getClosestExpression(cKey) {
    let keys = Object.keys(this.windowMap);
    let diff = [];
    for(const expKey in keys){
      diff.push(Math.abs(expKey - cKey));
    }
  }

  bitArrayToInt(arr) {
    let bitstring = "";
    arr.forEach(value => {
      bitstring = bitstring + value;
    });
    return parseInt(bitstring, 2);
  }
}

export default new Perception();
