import React from 'react';
import Slider from '../Slider/Slider';
import Buttons from '../Slider/Buttons';

const SimulationControls = ({ temp, pH, onTempChange, onpHChange, onNutrientAdd, onEnzymeAdd }) => {
  return (
    <div className='controls-container'>
      <Slider label='Temperature' min={-5} max={37} value={temp} onChange={onTempChange} />
      <Slider label='pH' min={-1} max={15} value={pH} onChange={onpHChange} />
      <Buttons onNutrientAdd={onNutrientAdd} onEnzymeAdd={onEnzymeAdd} />
    </div>
  );
};

export default SimulationControls;
