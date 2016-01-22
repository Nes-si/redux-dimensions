import React, { Component, PropTypes } from 'react';

export default class Dimensional extends Component {

  static propTypes = {
    output: PropTypes.number
  }

  state = {
    output: 0
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this._handleOnChange}/>
        {this.state.output}
      </div>
    );
  }

  _handleOnChange = (event) => {
    this.setState({
      output: this.state.output
    })
  }

}
