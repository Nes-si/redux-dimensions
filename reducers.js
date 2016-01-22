import { combineReducers } from 'redux';
import { CALC } from './actions';


function calc(state = {dim:{width: 1, height: 1, depth: 1}, res:1 }, action) {
    switch (action.type) {
        case CALC:
            return state;

        default:
            return state;
    }
}

export default calc;

