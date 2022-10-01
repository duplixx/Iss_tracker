import React from "react"
import { CubeCamera, OrbitControls, OrthographicCamera, Preload,group, PerspectiveCamera} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "../components/mappedMoon";
import Stars from "../components/stars";
import Marks from '../components/marks';
import { useNavigate } from "react-router-dom";
import { BiRocket } from "react-icons/bi"
 
export default function Canvas_page() {
    const navigate = useNavigate()
    return(
        <>
        <div className="w-full bg-black h-screen">
            <Canvas className="">
              <OrbitControls zoomSpeed={0.8}  enableZoom={true} autoRotate={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 180} />
                <ambientLight intensity="0.1" enableShadow={true} />
                <directionalLight position={[-50, 80, 80]} intensity={0.6}  />
                <directionalLight position={[10, -80, -80]} color={"black"} intensity={1}  />
                    <Moon/>
                    <Marks/>
                    <Stars/>
                <Preload all />
            </Canvas>    
            <div className='home_button' onClick={navigate(`/`)}><h1>Stellium </h1><span><BiRocket /></span>
</div> 
      </div>
        </>
    )
}