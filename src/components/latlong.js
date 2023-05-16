import axios from "axios";
import React, { useEffect } from "react";
import Marks from "./marks";

const GetLoc = async () => {
    
    const [lat,setLat]=React.useState(0);
    const [lon,setLon]=React.useState(0);
    try {
        const res = await axios.get("http://api.open-notify.org/iss-now.json");
        console.log("The Data", res);
        setLat(res?.data?.iss_position.latitude);
        setLon(res?.data?.iss_position.longitude);
        // setAlt(res.data.iss_position.altitude);
        Marks(lat,lon);
      } catch (error) {
        console.log("Error", error);
        // handle error
      }
      useEffect(() => {
        const interval = setInterval(() => {
            GetLoc();
        }, 2000);
        return () => clearInterval(interval);   

    }, []);
}  
 
export default GetLoc;