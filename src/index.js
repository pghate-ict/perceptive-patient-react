import React from 'react';
import ReactDOM from 'react-dom'
import TestContainer from './js/components/container/TestContainer.jsx'

const App = () => (
    <div>
        <TestContainer/>
    </div>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : false ;