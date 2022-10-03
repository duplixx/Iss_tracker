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
            getLoc();
        }, 2000);
        return () => clearInterval(interval);   

    }, []);

    const getLoc = async () => {
        try {
            const res = await axios.get("http://api.open-notify.org/iss-now.json");
            console.log("The Data", res);
            setLat(res.data.iss_position.latitude);
            setLon(res.data.iss_position.longitude);
            // setAlt(res.data.iss_position.altitude);
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
            <mesh visible position={[0.2+x,-0.2+y,-0.2+z]} layers={0}   >
            <Satellite  layers={0} />
                <Html occlude
                onOcclude={occlude}
                style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.05 : 1})` }}
                >
                    <span className="font-bold pings">
                        <h1 className='pings'/>
                    </span>
                </Html> 

            </mesh>
            

            
            
        )
        

        


};

