import { Sphere,meshBasicMaterial,meshPhongMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React from 'react';
import galaxyTexture from '../assets/img/galaxy_4k.png';
import { useLoader } from '@react-three/fiber';



export default function MappedMoon() {
    const colorMap=useLoader(TextureLoader,galaxyTexture);
  return (
    <>  
        <mesh layers={1}>
          <Sphere args={[40, 64, 64]}>
            <meshBasicMaterial map={colorMap} transparent={true}/>
          </Sphere>
        </mesh>
    </>
  )
}