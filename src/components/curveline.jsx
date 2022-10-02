import React from 'react'
import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, Html, CubicBezierLine,Line, Circle, OrbitControls } from '@react-three/drei';

export default function curveLine() {
    // ellipse formula
    var a,b;
    a = 1.3;
    b = 1.04;
    var x1 = a * Math.cos(0);
    var y1 = b * Math.sin(0);
    var x2, y2;
    var path = [];
    var segments = 100;
    var theta = 0;
    var thetaDelta = (2 * Math.PI) / segments;
    for (var i = 0; i < segments; i++) {
        x2 = a * Math.cos(theta);
        y2 = b * Math.sin(theta);
        path.push([x1, y1, 0]);
        path.push([x2, y2, 0]);
        x1 = x2;
        y1 = y2;
        theta += thetaDelta;
    } // end for loop
    

  return (
    <>
    <mesh visible layer={0}>
    <CubicBezierLine 
    position={[0,0,0.01]} rotation={[0,0,0]}
    points={path}
    start={[0,0,0]}
    end={[0,0,0]}
    midA={[0,-1,0]}
    midB={[0,-2,0]}
    color={'white'}
    lineWidth={2}
    dashed={false} 
    segments={5}
/>
    </mesh>

    </>
  )
}
