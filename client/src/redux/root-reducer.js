import {combineReducers} from 'redux';
import employeeReducer from './reducer';

const employeeReducers = combineReducers({
    data:employeeReducer
});

export default employeeReducers;