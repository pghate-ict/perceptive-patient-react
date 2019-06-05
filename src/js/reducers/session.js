
const initialState = {
    eventList : [],
    timeline : [],
    recorderState : null
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
        
        default:
            return state
    }
}

export default session;