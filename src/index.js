import React from 'react';
import ReactDOM from 'react-dom'
import PerceptivePatient from './js/components/container/PerceptivePatient.jsx'
import TimelineModel from './js/store/timelineStore'

// MobX
//import {useStrict} from 'mobx';
import { Provider } from 'mobx-react';
import timelineStore from  './js/store/timelineStore';


const stores = {
    timelineStore
}

window.__APP_STATE__ = stores;
//useStrict(true);


const App = () => (
    <div>
        <Provider {...stores}>
            <PerceptivePatient/>
        </Provider>
    </div>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : false ;