import axios from 'axios';
import {addActionUnits} from '../actions/session';
import store from '../store/store';
import Perception from '../helpers/perception';


export const SENSE_API_URL = "http://localhost:3030/"

export const SenseHelper = {
    getFacialLandmarks: async (b64) => {
        let results = await axios.post(SENSE_API_URL, {
            image: b64
        });
        store.dispatch(addActionUnits(results.data.au_confidences));
    },
    computePerception : () => {
        Perception.computeUserPerception();
    }
}

