import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import reportGenerator from "../../helpers/reportGenerator";

const mapStateToProps = state => ({
  sessionId: state.sessionId,
  eventList: state.eventList,
  sessionUrl: state.url,
  timeline: state.timeline
});

class ActionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.createReport = this.createReport.bind(this);
  }

  render() {
    return (
      <div>
        <Grid container justify="center" direction={"column"} spacing={1}>
          <Grid item xs={3}>
            <Typography variant="h5">
              Session ID : {this.props.sessionId}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              Start Monitoring
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              Stop Monitoring
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.createReport}
            >
              Generate Report
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

  createReport() {
    console.log("Creating Report..");
    reportGenerator.generate(this.props.eventList);
  }
}

export default connect(mapStateToProps)(ActionButtons);
