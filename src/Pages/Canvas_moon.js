import React, { Suspense, useEffect, useState } from 'react';
import { OrbitControls, OrthographicCamera, Preload} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "../components/mappedMoon"
import Stars from "../components/stars";
import { useNavigate } from "react-router-dom"
import { BiBomb, BiRocket } from "react-icons/bi";
import SpeedoMeter from '../components/speedometer';

export default function Canvas_moon() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full bg-black h-screen">
                <Canvas className="">
                    <Suspense >
                        <OrthographicCamera position={[0, 0, 0]} rotation={[0, 10, 0]} >
                            <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
                            <ambientLight intensity="0.06" enableShadow={true} dropShadows={true} />
                            <directionalLight position={[190, 80, 10]} intensity={0.4} />
                            <Moon/>
                            <Stars/>
                            <Preload all />
                        </OrthographicCamera>
                    </Suspense>
                </Canvas>
                <span className='home_button'>
                    <SpeedoMeter/>
                </span>
                <div className='home_button'
                onClick = {() => navigate(`/homepage`)}
                ><h1>Stellium </h1><span>
                    <BiRocket />
                </span>
                </div>
                
            </div>

            
        </>
    )
}

