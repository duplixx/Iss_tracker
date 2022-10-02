import React, { useState,useEffect, Component } from 'react';

export default function GeoLocation() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        Coordinates();
    });
    // ComponentDidMount(()=>{
    //     Coordinates();
    // }


    const Coordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                setStatus("Location found.");
            });
        } else {
            setStatus("Geolocation is not supported by this browser.");
        }
    }
  return (
    <>  
        <h1>Coordinates</h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
    </>

    
  )
}
