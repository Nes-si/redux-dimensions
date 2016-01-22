import { combineReducers } from 'redux';
import { CALC } from './actions';


function calc(state = {dim:{width: 1, height: 1, depth: 1}, res:1 }, action) {
    switch (action.type) {
        case CALC:
            return Object.assign( {}, state, {res: action.dim.width * action.dim.height * action.dim.depth});

        default:
            return state;
    }
}

export default calc;

