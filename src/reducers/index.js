import { combineReducers } from 'redux';
import gridReducer from './gridReducer.js';


const rootReducer = combineReducers({
    grid: gridReducer

})

export default rootReducer;