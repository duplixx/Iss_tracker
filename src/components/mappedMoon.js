import { Sphere,meshBasicMaterial,meshPhongMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial, Html} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React,{useEffect, useState} from 'react';
import moonTexture from '../assets/img/earth_large.jpg';
import moonBumpTexture from '../assets/img/bump-large.jpg';
import { useLoader } from '@react-three/fiber';
import data from '../assets/data';
import GeoLocation from './geoLocation';
import NightMap from "../assets/img/NightMap.jpeg"




export default function MappedMoon(props) {
  console.log(props.value, typeof(props.value))
  const [map, setMap] = useState(moonTexture)
  useEffect(()=>{
    if(props.value === "1"){
      setMap(moonTexture)
    }
    if(props.value === "2"){
      setMap(NightMap)
    }
  },[props.value])
    const colorMap = useLoader(TextureLoader, map);
    const moonBumpMap= useLoader(TextureLoader,moonBumpTexture);
  return (
    <>
        <Sphere position={[0,0,0]} rotation={[-0.20,0,0]} visible args={[1, 200, 200]} layers={0}>
            <meshPhongMaterial map={colorMap} bumpMap={moonBumpMap} roughness={3} bumpScale={0.08} />
        </Sphere>
        <Html>
          <GeoLocation/>
        </Html>
    </>
  )
}
