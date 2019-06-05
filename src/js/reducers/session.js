
const session = (state = {eventList : []}, action) => {
    switch(action.type){
        case 'SET_SESSION':
            return Object.assign({}, state, {
                sessionId : action.sessionId
            })    

        case 'ADD_EVENTS':
            return Object.assign({}, state, {
                eventList : state.eventList.concat(action.events)
            })
        default:
            return state
    }
}

export default session;