class TimelineRow{
    constructor(){
        

        this.authority = null;
        this.likeability = null;
        this.compassion = null;

        // Contains a triple of user_questiom, patient_response, patient_reaction
        this.turn = [];

        // Event Cycle Transcript
        this.userRequest = null;
        this.patientResponse = null;

        // Assessments
        this.userRequestAssessment = null;
        this.patientResponseAssessment = null;

        // Unlocked Tokens
        this.userUnlockedTokens = null;

        // User Perception
        this.userPerception = null;

    }
}

export default TimelineRow;