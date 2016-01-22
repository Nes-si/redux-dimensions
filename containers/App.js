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
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }),
    Actions
)
export default class App extends Component {
    render() {
        // Получено благодаря вызову connect():
        const {completeTodo, addTodo, setVisibilityFilter, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        addTodo(text)
                      }
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                       completeTodo(index)
                      }
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        setVisibilityFilter(nextFilter)
                      }
                />
            </div>
        );
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};
