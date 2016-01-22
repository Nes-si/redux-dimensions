import React, { Component, PropTypes } from 'react';

export default class Dimensional extends Component {

  static propTypes = {
    output: PropTypes.number
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.output}/>
      </div>
    );
  }

}
