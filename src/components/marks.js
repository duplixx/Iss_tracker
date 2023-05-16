import { Html, meshBasicMaterial, Circle } from '@react-three/drei';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Satellite } from './Satellite';

export default function Marks({ lat, lon }) {
  const [occluded, occlude] = useState(false);

  useEffect(() => {
    occlude(false);
  }, [lat, lon]);

  // Convert latitude and longitude to 3D coordinates
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -Math.sin(phi) * Math.cos(theta);
  const y = Math.cos(phi);
  const z = Math.sin(phi) * Math.sin(theta);
  console.log(x, y,z);
  return (
    <mesh position={[5,5,5]} visible>
      <Satellite layer={0}/>
      <Html occlude={occlude}>
        <div
          style={{
            transform: `translate(-50%, -50%) scale(${
              occluded ? 0.5 : 1
            })`,
            transition: 'all 0.2s',
            position: 'absolute',
            left: '50%',
            top: '50%',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          <span className="pings">ISS</span>
          <Circle
            args={[0.5, 64]}
            position={[0, 0, -0.01]}
          />
        </div>
      </Html>
    </mesh>
  );
}
