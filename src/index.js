import React from 'react';
import ReactDOM from 'react-dom'
import PerceptivePatient from './js/components/container/PerceptivePatient.jsx'

const App = () => (
    <div>
        <PerceptivePatient/>
    </div>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : false ;