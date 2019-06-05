import React from "react";
import PerceptiveCamera from "./PerceptiveCamera";
import ActionButtons from "./ActionButtons";
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    sessionId : state.sessionId,
    eventList : state.eventList,
});


class Console extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={6} md={6} lg={6}><PerceptiveCamera width={640} height={360} /></Grid>
                    <Grid item xs={6} md={6} lg={6}><ActionButtons /></Grid>
                </Grid>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Console);