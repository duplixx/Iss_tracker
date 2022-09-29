import React, { Suspense, useEffect, useState } from 'react';
import { Environment, OrbitControls, OrthographicCamera, Preload, mesh } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "../components/mappedMoon"
import Stars from "../components/stars";
import Marks from '../components/marks';
import Modal from "../components/ModalPage"
import SearchBar from '../components/searchBar';
import { useNavigate } from "react-router-dom"
import { BiBomb, BiRocket } from "react-icons/bi";
import SpeedoMeter from '../components/speedometer';
import Gloobe from '../components/globe';

export default function Canvas_moon() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full bg-black h-screen">
                <div className='home_page'>
                    {open ?
                        <Modal onClick={handleClick} /> : null
                    }
                </div>
                <div className='absolute flex justify-start align-center z-10 h-screen '>
                    <SearchBar />
                </div>
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