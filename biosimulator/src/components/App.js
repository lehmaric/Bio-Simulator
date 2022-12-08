import React, {useRef} from 'react';
import './App.css';
import Slider from '../components/Slider';

export default class App extends React.Component {
  state = {};
  //waterSliderRef = useRef();

  handleWaterSlider = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="bosstainer">
        <div className="uiContainer">
          <button className="createEnzymeButton">Create Enzyme</button>
          <div>
            <Slider
              name="waterSlider"
              min={-50}
              max={50}
              value={20}
              changeHandler={this.handleWaterSlider}
            />
          </div>
        </div>
        <div className="waterContainer"></div>
      </div>
    );
  }
}