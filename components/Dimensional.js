import React, { Component, PropTypes } from 'react';

export default class Dimensional extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    depth: PropTypes.number
  }

  state = {
    width: this.props.dim.width,
    height: this.props.dim.height,
    depth: this.props.dim.depth
  }

  handleWidthChange = (e) => {
    this.setState({width: e.target.value});
  }

  handleHeightChange = (e) => {
    this.setState({height: e.target.value});
  }

  handleDepthChange = (e) => {
    this.setState({depth: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.width || !this.state.height || !this.state.depth)
      return;

    this.props.onCalc({width: this.state.width, height: this.state.height, depth: this.state.depth});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Width"
          value={this.state.width}
          onChange={this.handleWidthChange}
        />
        <input
          type="text"
          placeholder="Height"
          value={this.state.height}
          onChange={this.handleHeightChange}
        />
        <input
          type="text"
          placeholder="Depth"
          value={this.state.depth}
          onChange={this.handleDepthChange}
        />
        <input type="submit" value="Calc" />
      </form>
    );
  }
}
