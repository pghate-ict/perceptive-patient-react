export const setSessionId = sessionId => ({
    type : 'SET_SESSION',
    sessionId
});

export const addEvents = events => ({
    type : 'ADD_EVENTS',
    events
});