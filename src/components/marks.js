import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, Html, Line } from '@react-three/drei';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Side } from 'three';
import data from '../assets/data';
import { Satellite } from './Satellite';

export default function Marks(props) {
    const [lat,setLat]=useState(0);
    const [lon,setLon]=useState(0);
    const [alt,setAlt]=useState(0);


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


        return (
            <mesh visible position={[x,1+y,1+z]} layers={0}   >
                <Satellite  layers={0} />
                <Html occluded>
                    <span className="text-white mt-5 font-bold text-2xl rotate-160 animate-ping  ">
                        <h>.</h>
                        <h>.</h>
                        <h>.</h>
                    </span>
                </Html>
                 
            </mesh>
            
        )
        // <QuadraticBezierLine points={[0,0,0,x,y,z]} layers={0}
        //         color={'red'}
        //         lineWidth={3}
        //         start={[x,y,0]}
        //         dashed={true}
        //         segments={100}
        //         end={[x,y,z]}

        //          /> 

        


};

