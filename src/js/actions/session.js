export const setSessionId = sessionId => ({
    type : 'SET_SESSION',
    sessionId
});

export const addEvents = events => ({
    type : 'ADD_EVENTS',
    events
});

export const setTimeline = timeline => ({
    type : 'SET_TIMELINE',
    timeline
});

export const addTimeline = timeline => ({
    type : 'ADD_TIMELINE',
    timeline
});

export const setSessionUrl = url => ({
    type : 'SET_SESSION_URL',
    url
});

export const setRecorderState = recorderState => ({
    type : 'SET_RECORDER_STATE',
    recorderState
});