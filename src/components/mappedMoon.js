import { Sphere,meshBasicMaterial,meshPhongMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React,{useState} from 'react';
import moonTexture from '../assets/img/earth_large.jpg';
import moonBumpTexture from '../assets/img/bump-large.jpg';
import { useLoader } from '@react-three/fiber';
import data from '../assets/data';
// import vertextShader from '../assets/shaders/vertex.glsl';



export default function MappedMoon() {
    const colorMap = useLoader(TextureLoader,moonTexture);
    const moonBumpMap= useLoader(TextureLoader,moonBumpTexture);
  return (
    <>
        <Sphere position={[0,0,0]} rotation={[-0.20,0,0]} visible args={[1, 200, 200]} layers={0}>
            <meshPhongMaterial map={colorMap} bumpMap={moonBumpMap} roughness={3} bumpScale={0.08} />
        </Sphere>
    </>
  )
}
