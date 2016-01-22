import { combineReducers } from 'redux';
import { CALC } from './actions';

function calc(state = [], action) {
    switch (action.type) {
        case CALC:
            return [...state, {
                text: action.text,
                completed: false
            }];

        default:
            return state;
    }
}

function calc(state = {width: 1, height: 1, depth: 1}, action) {
    switch (action.type) {
        case CALC:
            return state;

        default:
            return state;
    }
}

export default todoApp;

