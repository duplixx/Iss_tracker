import React, { useState } from "react"
import Model from "../components/Model"
import { HiArrowSmLeft } from "react-icons/hi"
import { HiArrowSmRight } from "react-icons/hi"
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
            <div className="w-[80vw] h-[100vh] grid grid-cols-3 items-center justify-items-center bg-gradient-to-r from-[rgba(152,151,166,0.5)] to-[rgba(94,139,149,0.5)] border-solid border-2 border-[rgba(255, 255, 255, 0.18)] backdrop-blur-sm rounded-lg">
                <button onClick={dec_counter} className="absolute left-0 bottom-[50vh] w-[50px] h-[50px]">
                    <HiArrowSmLeft className="text-[50px]"/>
                </button>
                <p className="row-start-2 col-start-1 self-start md:w-[70%] text-justify text-lg font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sed quisquam animi ab, iste quidem ducimus odit sint quis exercitationem in repudiandae, doloribus unde iusto optio placeat, libero saepe dolor!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sed quisquam animi ab, iste quidem ducimus odit sint quis exercitationem in repudiandae, doloribus unde iusto optio placeat, libero saepe dolor!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sed quisquam animi ab, iste quidem ducimus odit sint quis exercitationem in repudiandae, doloribus unde iusto optio placeat, libero saepe dolor!
                </p>
                <Model count={count} />
                <p className="row-start-2 col-start-3 self-start md:w-[70%] text-justify text-lg font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sed quisquam animi ab, iste quidem ducimus odit sint quis exercitationem in repudiandae, doloribus unde iusto optio placeat, libero saepe dolor!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sed quisquam animi ab, iste quidem ducimus odit sint quis exercitationem in repudiandae, doloribus unde iusto optio placeat, libero saepe dolor!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sed quisquam animi ab, iste quidem ducimus odit sint quis exercitationem in repudiandae, doloribus unde iusto optio placeat, libero saepe dolor!
                </p>
                <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Zarya ({1998+count-1})
                </h1>
                <button onClick={inc_counter} className="absolute right-0 bottom-[50vh] w-[50px] h-[50px]">
                    <HiArrowSmRight className="text-[50px]"/>
                </button>
            </div>
        </>
    )
}
// --webkit-backdrop-filter: blur(4px);