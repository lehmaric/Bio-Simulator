import React from 'react';
import './Slider.css';
import PropTypes from 'prop-types';

export default class Slider extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    changeHandler: PropTypes.func,
  };

  handleChange = (e) => {
    const newValue = e.target._valueTracker.getValue()
    this.value = newValue
    this.props.changeHandler(this.value);
  };

  // TODO: Render changed value to GUI
  render() {
    return (
      <div className={this.name}>
        <input
          min={this.min}
          type="range"
          max={this.max}
          value={this.value}
          onChange={this.handleChange}
        >
          {this.value}
        </input>
      </div>
    );
  }
}