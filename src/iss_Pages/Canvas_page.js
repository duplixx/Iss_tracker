import React from "react"
import { CubeCamera, OrbitControls, OrthographicCamera, Preload,group, PerspectiveCamera} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "../components/mappedMoon";
import Stars from "../components/stars";
import Marks from '../components/marks';
import { useNavigate } from "react-router-dom";
import { BiRocket } from "react-icons/bi"
import Modal from "../components/ModalPage"
import { useState } from "react";
import "../index.css"
import SpeedoMeter from "../components/speedometer";
import CurveLine from "../components/curveline";
import GeoLocation from "../components/geoLocation";
 
export default function Canvas_page() {
    
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    const navigate = useNavigate()
    return(
        <>
        <div className="w-full bg-black h-screen canvas_container">
            <Canvas className="">
              <OrbitControls zoomSpeed={0.8}  enableZoom={true} autoRotate={true} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 180} />
                <ambientLight intensity="0.1" enableShadow={true} />
                <directionalLight position={[-50, 80, 80]} intensity={0.6}  />
                <directionalLight position={[10, -80, -80]} color={"black"} intensity={1}  />
                    <Moon />
                    <Marks/>
                    <Stars/>
                    <CurveLine/>
                <Preload all />
            </Canvas>  
            <div className="absolute bottom-0 right-0 flex flex-end justify-end  p-4">
                <SpeedoMeter/>
            </div>  
            <div className='home_page'>
                    {open ?
                        <Modal onClick={handleClick} /> : null
                    }
{/* onClick={handleClick} */}
                </div>
            <div className='home_button' onClick={handleClick}><h1>Stellium </h1><span><BiRocket /></span>
            {/* onClick={()=>navigate(`/`)} */}
</div> 
      </div>
        </>
    )
}