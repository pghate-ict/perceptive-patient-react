
const initialState = {
    eventList : [],
    timeline : [],
    recorderState : null,
    sessionState : null,
    sensingState : null
}

const session = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SESSION':
            return Object.assign({}, state, {
                sessionId : action.sessionId
            })    

        case 'ADD_EVENTS':
            return Object.assign({}, state, {
                eventList : state.eventList.concat(action.events)
            })

        case 'SET_TIMELINE':
            return Object.assign({}, state, {
                timeline : action.timeline
            })

        case 'ADD_TIMELINE':
            return Object.assign({}, state, {
                timeline : state.timeline.concat(action.timeline)
            })

        case 'SET_SESSION_URL':
            return Object.assign({}, state, {
                url : action.url 
            });

        case 'SET_RECORDER_STATE':
            return Object.assign({}, state, {
                recorderState : action.recorderState
            });
        
        case 'SET_SESSION_STATE':
            return Object.assign({}, state, {
                sessionState : action.sessionState
            });

        case 'SET_SENSING_STATE':
            return Object.assign({}, state, {
                sensingState : action.sensingState
            });
        
        case 'SET_RECORDED_BLOB':
            return Object.assign({}, state, {
                recordedBlob : action.recordedBlob
            });

        default:
            return state
    }
}

export default session;