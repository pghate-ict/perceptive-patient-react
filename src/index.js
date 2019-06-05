// React and Babel
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import PerceptivePatient from './js/components/container/PerceptivePatient.jsx'
import store from './js/store/store';
// Helper classes
import SPSHelper from './js/helpers/sps';


SPSHelper.startSession().then(() => {
    console.log("Session Started with Polling!");
});


const App = () => (
    <div>
        <Provider store={store}><PerceptivePatient /></Provider>
    </div>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;