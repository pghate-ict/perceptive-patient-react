import React from "react"
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {connect} from 'react-redux';
import {latestActionUnitSelector} from '../../selectors/session';

const mapStateToProps = state => ({
   actionUnits : latestActionUnitSelector(state)
});


class ActionUnitChart extends React.Component{
    constructor(props){
        super(props);
    
    }

    render(){
        return (
            <div>
                <BarChart width={1280} height={500} data={this.props.actionUnits}>
                    <CartesianGrid strokeDashArray="3 3"/>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis domain={[0, 5]} ticks={[0,1,2,3,4,5]}></YAxis>
                    <Legend></Legend>
                    <Bar dataKey="value" fill="#0000ff"></Bar>
                </BarChart>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ActionUnitChart);
