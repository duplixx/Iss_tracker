import { Sphere} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React from 'react';
import moonBumpTexture from '../assets/img/bump-large.jpg';
import { useLoader } from '@react-three/fiber';
import NightMap from "../assets/img/NightMap.jpeg"





export default function MappedMoon2(props) {
    const colorMap = useLoader(TextureLoader, NightMap);
    const moonBumpMap= useLoader(TextureLoader,moonBumpTexture);
  return (
    <>
        <Sphere position={[0,0,0]} rotation={[-0.20,0,0]} visible args={[1, 200, 200]} layers={0}>
         <ambientLight intensity={0.4} />
            <meshPhongMaterial map={colorMap} bumpMap={moonBumpMap}  roughness={3} bumpScale={0.08} />
        </Sphere>
    </>
  )
}
