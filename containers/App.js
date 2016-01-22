import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Dimensional from '../components/Dimensional';
import Output from '../components/Output';

@connect(
    state => ({
        dim: state.dim,
        res: state.res
    }),
    Actions
)

export default class App extends Component {
    render() {
        // Получено благодаря вызову connect():
        const {calc, dim, res } = this.props;
        return (
            <div>
                <Dimensional
                    onCalc = {dim =>
                        calc(dim)
                } />
                <Output output={res}/>
            </div>
        );
    }
}
