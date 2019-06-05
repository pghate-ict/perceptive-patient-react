import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ActionButtons extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Grid container direction={"column"} spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}><Button color="primary">Stop Monitoring</Button></Grid>
                </Grid>
            </div>
        )
    }
}

export default ActionButtons;