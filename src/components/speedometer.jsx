import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer";

export default function SpeedoMeter() {
    const [speed, setspeed] = useState(0);
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
            setspeed(res.data.velocity);
        } catch (error) {
            console.log("Error", error);
            // handle error
        }
    }
    return (
        <>
            <span className="flex items-center flex-wrap bg-white shadow-xl rounded-2xl text-red-400 font-semibold"
            >
                <h1>{speed.toPrecision(6)}</h1>
            </span>
    </>
    
    
  )
}
