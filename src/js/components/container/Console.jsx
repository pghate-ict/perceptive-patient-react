import React from "react";
import PerceptiveCamera from "./PerceptiveCamera";
import ActionButtons from "./ActionButtons";
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    sessionId : state.sessionId,
    eventList : state.eventList
});


class Console extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={6}><PerceptiveCamera width={640} height={480} /></Grid>
                    <Grid item xs={6} md={6}><ActionButtons /></Grid>
                </Grid>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Console);