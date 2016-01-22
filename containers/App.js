import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Dimensional from '../components/Dimensional';
import Output from '../components/Output';

@connect(
    state => ({
    }),
    Actions
)
export default class App extends Component {
    onCalc = (todos) => {
        console.log("!!");
    }

    render() {
        // Получено благодаря вызову connect():
        const {completeTodo, addTodo, setVisibilityFilter, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <Dimensional onCalc={this.onCalc}/>
                <Output />
            </div>
        );
    }
}
