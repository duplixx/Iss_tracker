import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function GeoLocation() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [latiss, setLatIss] = useState(0);
    const [lngiss, setLngIss] = useState(0);
    // console.log(latiss,lngiss)


    useEffect(() => {
        Coordinates();
        getLoc();
    });

    const Coordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position?.coords?.latitude?.toFixed(2));
                setLng(position?.coords?.longitude?.toFixed(2));
                setStatus("Location found of User.");
             
            });
        } else {
            setStatus("Geolocation is not supported by this browser.");
        }
    }
    const getLoc = async () => {
        try {
            const res = await axios.get("http://api.open-notify.org/iss-now.json");
            
           
            setLatIss( Math.round(res?.data?.iss_position.latitude));
            setLngIss( Math.round(res?.data?.iss_position.longitude));
          
            
          } catch (error) {
            console.log("Error", error);
            // handle error
          }
    } 
    return (
        <>
            <div className='flex flex-row space-x-2 opacity-70'>
                <div class="stats stats-vertical lg:stats-horizontal shadow ">
                    <div class="stat ">
                        <div class="stat-desc text-danger   ">{status}</div>
                        <div class="stat-title">Latitude:</div>
                        <div class="stat-value ">{lat}&#176;</div>
                        <div class="stat-desc"></div>
                    </div>

                    <div class="stat ">
                    <div class="stat-title">Longitude:</div>
                    <div class="stat-value">{lng}&#176;</div>
                    <div class="stat-desc"></div>
                    </div>

                </div>
                <div class="stats stats-vertical lg:stats-horizontal shadow " >
                    <div class="stat">
                        <div class="stat-desc text-danger">Coordinates of Iss</div>
                        <div class="stat-title">Latitude:</div>
                        <div class="stat-value">{latiss}&#176;</div>
                        <div class="stat-desc"></div>
                    </div>

                    <div class="stat">
                    <div class="stat-title">Longitude:</div>
                    <div class="stat-value">{lngiss}&#176;</div>
                    <div class="stat-desc"></div>
                    </div>

                </div>
            </div>
        </>


    )
}
