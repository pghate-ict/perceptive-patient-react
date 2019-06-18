
const initialState = {
    eventList: [],
    timeline: [],
    actionUnits: [Array(17).fill(0)], 
    recorderState: null,
    sessionState: null,
    sensingState: null
}



const session = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SESSION':
            return Object.assign({}, state, {
                sessionId: action.sessionId
            })

        case 'ADD_EVENTS':
            return Object.assign({}, state, {
                eventList: state.eventList.concat(action.events)
            })

        case 'SET_TIMELINE':
            return Object.assign({}, state, {
                timeline: action.timeline
            })

        case 'ADD_TIMELINE':
            return Object.assign({}, state, {
                timeline: state.timeline.concat(action.timeline)
            })

        case 'SET_SESSION_URL':
            return Object.assign({}, state, {
                url: action.url
            });

        case 'SET_RECORDER_STATE':
            return Object.assign({}, state, {
                recorderState: action.recorderState
            });

        case 'SET_SESSION_STATE':
            return Object.assign({}, state, {
                sessionState: action.sessionState
            });

        case 'SET_SENSING_STATE':
            return Object.assign({}, state, {
                sensingState: action.sensingState
            });

        case 'SET_RECORDED_BLOB':
            return Object.assign({}, state, {
                recordedBlob: action.recordedBlob
            });
        case 'ADD_ACTION_UNITS':

            let newArray;

            if(action.actionUnits === undefined){
                newArray = state.actionUnits.concat([Array(17).fill(0)]);
            } else if(state.actionUnits.length >= 30){
                newArray = state.actionUnits.slice(1,state.actionUnits.length).concat([action.actionUnits]);
            } else {
                newArray = state.actionUnits.concat([action.actionUnits]);
            }

            return Object.assign({}, state, {
                actionUnits : newArray
            })

        default:
            return state
    }
}

export default session;