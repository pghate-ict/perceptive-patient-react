import React from 'react';
import ReactDOM from 'react-dom';
import Console from "./Console";
import AfterActionReport from "./AfterActionReport";
import {Container} from '@material-ui/core';

// Presentational Components
import NavigationBar from '../presentational/NavigationBar.jsx';

class PerceptivePatient extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <Console></Console>
            </div>
        )
    }
}

export default PerceptivePatient;