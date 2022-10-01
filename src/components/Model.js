import React from "react"
import Model1 from "../assets/models/ISS/iss_1998.glb"
import Model2 from "../assets/models/ISS/iss_2000.glb"
import Model3 from "../assets/models/ISS/iss_2001.glb"
import Model4 from "../assets/models/ISS/iss_2002.glb"
import Model5 from "../assets/models/ISS/iss_2007.glb"
import Model6 from "../assets/models/ISS/iss_2008.glb"
import Model7 from "../assets/models/ISS/iss_2010.glb"
import Model8 from "../assets/models/ISS/iss_2012.glb"

export default function Model() {
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model1}
                auto-rotate
                style={{ width: "600px", height: "600px"}}
            >
            </model-viewer>
        </div>
    )
}