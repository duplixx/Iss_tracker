import React from "react"
import { CubeCamera, OrbitControls, OrthographicCamera, Preload, group, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "../components/mappedMoon";
import Stars from "../components/stars";
import Marks from '../components/marks';
import Moon2 from "../components/mappedMoon2"
import Moon3 from "../components/mappedMoon3"
import { useNavigate } from "react-router-dom";
import { BiRocket } from "react-icons/bi"
import Modal from "../components/ModalPage"
import { useState } from "react";
import "../index.css"
import SpeedoMeter from "../components/speedometer";
import CurveLine from "../components/curveline";
import GeoLocation from "../components/geoLocation";
import { MenuItem, Select } from "@mui/material"
import { MapState } from "../context";
import {ImCross} from "react-icons/im"

export default function Canvas_page() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    const {age, setAge} = MapState()
 
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full bg-black h-screen canvas_container">
                <Canvas className="">
                    <OrbitControls zoomSpeed={0.8} enableZoom={true} autoRotate={true} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 180} />
                    <ambientLight intensity="0.1" enableShadow={true} />
                    <directionalLight position={[-50, 80, 80]} intensity={0.6} />
                    <directionalLight position={[10, -80, -80]} color={"black"} intensity={1} />
                    {age === "1" && <Moon value = {age} />}
                    {age === "2" && <Moon2 value = {age} />}
                    {age === "3" && <Moon3 value = {age} />}
                    <Marks />
                    <Stars />
                    <CurveLine />
                    <Preload all />
                </Canvas> 
                <div className="absolute bottom-0 right-0 flex flex-end justify-end  p-4">
                    <SpeedoMeter />
                </div>
                <div className="absolute top-0 left-0 flex flex-end justify-end  p-4">
                <GeoLocation />
                </div>
                <div className="map_list">
                    <ul>
                        <li>
                        <Select
                            style={{
                                height: 60,
                                color: "white",
                                border: "2px solid #4362ed",
                                backgroundColor: "#4362ed"
                            }}
                            icon={{ fill: "white" }}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        >
                            <MenuItem value={"1"}>NormalMap</MenuItem>
                            <MenuItem value={"2"}>NightMap</MenuItem>
                            <MenuItem value={"3"}>SpecularMap</MenuItem>
                            {/* <MenuItem value={3}>SpecularMap</MenuItem> */}
                        </Select>
                        </li>
                    </ul>
                    <a className="modal_btn" onClick={handleClick}> {!open? "Evolution" :<ImCross/>}</a>
                </div>
                <div className='home_page'>
                    {open ?
                        <Modal onClick={handleClick} /> : null
                    }
                </div>
                <div className='home_button' onClick={()=>navigate(`/`)}><h1>Stellium </h1><span><BiRocket /></span>
                </div>
            </div>
        </>
    )
}