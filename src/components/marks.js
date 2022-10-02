import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, Html, CubicBezierLine,Line, Circle } from '@react-three/drei';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Satellite } from './Satellite';

export default function Marks(props) {
    const [lat,setLat]=useState(0);
    const [lon,setLon]=useState(0);
    const [alt,setAlt]=useState(0);
    const [occluded, occlude] = useState()


    useEffect(() => {
        const interval = setInterval(() => {
            // getLoc();
        }, 2000);
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

       
        // // passing names in props    


        return (
            <mesh visible position={[x,0.2+y,0.5+z]} layers={0}   >
            <Satellite  layers={0} />
                <Html occlude
                onOcclude={occlude}
                style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.05 : 1})` }}
                >
                    <span className="font-bold animate-ping blur-sm absolute scale-50 ">
                        <h1 className='absolute rounded-full  p-1 border-white border-4 border-black'/>
                        <h1 className='absolute rounded-full  p-2 border-gray-200 border-2 delay-200'/>
                    </span>
                </Html> 
            </mesh>
            

            
            
        )
        

        


};

