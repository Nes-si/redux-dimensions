import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Dimensional from '../components/Dimensional';


function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

@connect(
    state => ({
    }),
    Actions
)
export default class App extends Component {
    render() {
        // Получено благодаря вызову connect():
        const {completeTodo, addTodo, setVisibilityFilter, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <Dimensional />
            </div>
        );
    }
}
