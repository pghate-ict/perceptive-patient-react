import axios from 'axios';
import {setSessionId, addEvents} from '../actions/session'
import store from '../store/store';

const SPSAPI_URL = "http://dev1.scp.standardpatient.org/scpatient/api/interaction";

const SPSAPI = {
    getRunningSessionId: async () => {
        try {
            return axios.get(SPSAPI_URL + "/session/mine");
        } catch (err) {
            console.log("Error in Getting the Session ID: ", err);
        }
    },
    getRunningEvent: async (sessionId, eventId) => {
        try {
            return axios.get(SPSAPI_URL + "/" + sessionId + "/stream2/since/" + eventId);
        } catch (err) {
            console.log(err);
        }
    },

    poll: async (sessionId, eventId) => {
        try {
            let response = await SPSAPI.getRunningEvent(sessionId, eventId);
            if (Object.keys(response.data.spsStreamEvents).length != 0) {
                let eventsFromSPS = response.data.spsStreamEvents;
                let sortedEvents = SPSAPI.flattenSort(eventsFromSPS);
                console.log(sortedEvents);
                store.dispatch(addEvents(sortedEvents));
            } else {
                console.log("Event Data Not Found, Trying Again!")
            }
            SPSAPI.poll(sessionId, eventId);
            
        } catch (err) {
            SPSAPI.poll(sessionId, eventId);
        }

    },

    flattenSort: (events) => {
        var sortedEventArray = [];
        for (var eventObject in events) {
            if (Array.isArray(events[eventObject])) {
                events[eventObject].forEach(element => {
                    sortedEventArray.push(Object.assign(element, {
                        eventType: eventObject
                    }));
                });
            } else {
                
                sortedEventArray.push(Object.assign(events[eventObject], {
                    eventType: eventObject
                }));
            }
        }
        sortedEventArray.sort((a, b) => {
            return a.id > b.id
        });
    
        return sortedEventArray;
    },

}

const SPSHelper = {

    startSession: async () => {
        SPSAPI.getRunningSessionId().then(result => {
            //todo
            console.log("Session Started-> ", result.data);
            store.dispatch(setSessionId(result.data));
            SPSAPI.poll(result.data, 0);

        })
    },
}

export default SPSHelper;