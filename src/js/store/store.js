// Redux
import sessionReducer from '../reducers/session'
import { createStore } from 'redux';

const store = createStore(sessionReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;