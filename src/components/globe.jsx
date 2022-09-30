import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Globe from 'react-globe.gl'
import globeImage from '../assets/img/earth_large.jpg'
import bumpImage from '../assets/img/bump-large.jpg'
import backgroundImage from '../assets/img/galaxy_4k.png'
import Iss from './Satellite';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


export default function Gloobe() {
  const globeEl = useRef();
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [alt, setAlt] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      getLoc();
    }, 1000);
    return () => clearInterval(interval);

  }, []);

  const getLoc = async () => {
    try {

      const res = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
      console.log("The Data", res);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
      setAlt(res.data.altitude);
    } catch (error) {
      console.log("Error", error);
      // handle error
    }
  }
  var phi = (90 - lat) * (Math.PI / 180);
  var theta = (lon + 180) * (Math.PI / 180);
  var x = -(Math.sin(phi) * Math.cos(theta));
  var z = (Math.sin(phi) * Math.sin(theta));
  var y = (Math.cos(phi));
  // passing names in props



  const N = 20;
  const k = 2;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: 1,
    startLng: 1,
    startAlt: 5,
    endLat: (x - 0.5) * 180,
    endLng: (z - 0.5) * 360,
    color: 'purple',
  }));
  const customData = [...Array(k).keys()].map(() => ({
    lat: (x - 0.5) * 180,
    lng: (z - 0.5) * 360,
  }));
  const controls = {
    autoRotate: true, autoRotateSpeed: 0.5
  }


  return (
    <>
      <Globe
        // globeImageUrl={globeImage}
        // bumpImageUrl={bumpImage}
        // backgroundImageUrl={backgroundImage}
        // arcsData={arcsData}
        // arcColor={'color'}
        // arcDashGap={5}
        // arcDashAnimateTime={5000}
        // arcStroke={1}
        // arcCircularResolution={10}
        // arcAltitude={0.5}
        // arcLabel={'Iss'}
        pointOfView={[-5,8,1]}
        animateIn={true}
        showGlobe={false}
        showGraticules={true}
        customLayerData={customData}
        showAtmosphere={true}
        showClouds={true}
        objectThreeObject={
          () => (
            <Canvas>
              <Sphere args={[0.5, 32, 32]}>
                <meshBasicMaterial attach="material" color="red" />
              </Sphere>
            </Canvas>
          )
        }
        objectLabel={true}
        objectAltitude={0.5}
      />,
    </>
  )
}

