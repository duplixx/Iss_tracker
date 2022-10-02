import React, { useState } from "react"
import Model from "../components/Model"
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import data from "../assets/data"
import ModalName from "./ModalName";
import ModalAbout1 from "./ModalAbout2";
import ModalAbout2 from "./ModalAbout1";
export default function ModalPage() {
    const [count, setCount] = useState(1)
    const inc_counter = () =>{
        count===8?setCount(8):setCount(prevCount => prevCount + 1)
    }
    const dec_counter = () =>{
        count===1?
        setCount(1):setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <div className="relative text-white w-[80vw] h-[80vh] grid grid-cols-3 items-center justify-items-center bg-gradient-to-r from-[rgba(152,151,166,0.5)] to-[rgba(94,139,149,0.5)] border-solid border-2 border-[rgba(255, 255, 255, 0.18)] backdrop-blur-sm rounded-lg">
                
                <ModalAbout1 count={count} />
                <Model count={count} />
                <ModalAbout2 count={count} />
                <ModalName count={count}/>
                <button onClick={inc_counter} className="absolute mr-3 right-0 bottom-[50vh] w-[50px] h-[50px] border-2 rounded-full">
                    <HiArrowSmRight className="text-[50px]"/>
                </button>
                <button onClick={dec_counter} className="absolute ml-3 left-0 bottom-[50vh] w-[50px] h-[50px] border-2 rounded-full">
                    <HiArrowSmLeft className="text-[50px]"/>
                </button>
            </div>
        </>
    )
}
// --webkit-backdrop-filter: blur(4px);


// rahul no
// sakshi no incoming
// prakhar 
// harsh bhaiya coming
