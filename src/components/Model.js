import React from "react"
import Model1 from "../assets/models/ISS/iss_1998.glb"
import Model2 from "../assets/models/ISS/iss_2000.glb"
import Model3 from "../assets/models/ISS/iss_2001.glb"
import Model4 from "../assets/models/ISS/iss_2002.glb"
import Model5 from "../assets/models/ISS/iss_2007.glb"
import Model6 from "../assets/models/ISS/iss_2008.glb"
import Model7 from "../assets/models/ISS/iss_2010.glb"
import Model8 from "../assets/models/ISS/iss_2012.glb"

export default function Model(props) {
    // const model = `Model${props.count}`
    var count = props.count
    if(count === 1){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model1}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 2){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model2}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 3){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model3}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 4){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model4}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 5){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model5}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 6){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model6}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 7){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model7}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
    if(count === 8){
    return (
        <div className="model_div col-start-2 w-[100%]">
            <model-viewer
                camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom 
                src={Model8}
                auto-rotate
                style={{ width: "400px", height: "400px"}}
            >
            </model-viewer>
            
        </div>
    )
    }
}