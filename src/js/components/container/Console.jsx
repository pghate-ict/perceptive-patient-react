import React from "react";
import PerceptiveCamera from "./PerceptiveCamera";
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import ActionUnitChart from './ActionUnitChart';

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
                <Grid container justify="center" align="center" spacing={2}>
                    <Grid item xs={6} md={6} lg={6}><PerceptiveCamera width={640} height={480} /></Grid>
                </Grid>
                <Grid container align="center" spacing={2}>
                    <Grid item xs={12} md={12} lg={12}><ActionUnitChart/></Grid>
                </Grid>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Console);