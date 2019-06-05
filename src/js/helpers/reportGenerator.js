import Timeline from '../classes/timeline';
import eventTypes from '../classes/eventTypes';
import store from '../store/store';
import {setTimeline, addTimeline, setSessionUrl} from '../actions/session';


const reportGenerator = {
    generate : (events) => {
        //This function iterates through events one by one and then generates a timeline report
        var currentTimelineRow = {turn:[]};
        events.forEach((event)=>{
            switch(event.eventType){
                case eventTypes.STUDENT_ACTION:
                    currentTimelineRow.userRequest = event.utterance;
                    currentTimelineRow.userRequestAssessment = event.assessableItemFullName;
                    break;

                case eventTypes.USER_PROGRESS:
                    currentTimelineRow.userUnlockedTokens = event.progress.itemsUncoveredInThisTurn;
                    break;

                case eventTypes.UTTERANCE_SLIP:
                    currentTimelineRow.patientResponse = event.text;
                    currentTimelineRow.turn[1] = currentTimelineRow + `${event.name}.${event.format}`;
                    break;
                
                case eventTypes.CHECKLIST: //Most probably the end of one complete cycle
                    //Do the MS Recorder stuff -> todo
                    store.dispatch(addTimeline(currentTimelineRow));
                    currentTimelineRow = {turn:[]}
                    break;

                case eventTypes.MESSAGING_SLIP:
                    console.log(`${event.protocol}://${event.domain}/${event.path}/`);
                    store.dispatch(setSessionUrl(`${event.protocol}://${event.domain}/${event.path}/`));
                    break;

                default:
                    break;
            }
        });
    }
}

export default reportGenerator;