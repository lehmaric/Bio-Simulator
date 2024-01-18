import React from 'react';
import useWaterParticles from '../../hooks/WaterParticles';
import useProtons from '../../hooks/Protons';
import { useCanvasSetup } from '../../hooks/useCanvasSetup';

// Water engine
const Water = ({ world, engine, tempTitle, startTemp, tempUnit, phTitle, startPh, temperature }) => {
  const { canvasRef, containerRef } = useCanvasSetup(engine, world);
  useWaterParticles(world, canvasRef, temperature);
  useProtons(world, canvasRef);

  return (
    <div className='waterContainer' ref={containerRef}>
      <div className='valueDisplay'>
        {tempTitle} {startTemp} {tempUnit} {phTitle} {startPh}
      </div>
      <canvas className='waterWorld' ref={canvasRef} />
    </div>
  );
};

export default Water;
