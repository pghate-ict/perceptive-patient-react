import axios from 'axios';


export const SENSE_API_URL = "http://localhost:3030/"

export const SenseHelper = {
    getFacialLandmarks: async (b64) => {
        let results = await axios.post(SENSE_API_URL, {
            image: b64
        });
        console.log(results);
    }
}

