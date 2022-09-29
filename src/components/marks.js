import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, Html } from '@react-three/drei';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Side } from 'three';
import data from '../assets/data';

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
            <mesh visible position={[0.05+x,y, z]} layers={0}  >
                <sphereBufferGeometry args={[0.04, 35, 32]} scale={2} />
                <meshBasicMaterial color="red" shadowSide={true}  />
                <Html>
                    <div className="text-white text-2xl">
                        <label className='border-2xl border-2 rounded-2xl' >
                            Iss 
                        </label>
                    </div>
                </Html>
            </mesh>
        )


};

