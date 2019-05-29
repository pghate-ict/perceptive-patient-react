import React from 'react';
import ReactDOM from 'react-dom'
import PerceptivePatient from './js/components/container/PerceptivePatient.jsx'
import TimelineModel from './js/store/timeline'

const App = () => (
    <div>
        <PerceptivePatient/>
    </div>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : false ;