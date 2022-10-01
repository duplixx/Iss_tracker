import React from "react"
import { BiRocket } from "react-icons/bi"
import { useNavigate } from "react-router-dom"


export default function Header() {
    const navigate  = useNavigate()
    return (
        <nav className="home_page_nav">
            <div className='canvas_button' onClick={navigate(`/mainPage`)} ><h1>Stellium </h1><span><BiRocket /></span></div>
            <div className="nav-sections" >
                <ul>
                    <li>
                       
                            Home

                    </li>
                    <li>

                            About

                    </li>
                    <li>

                            Our Story
                    </li>
                    <li>

                            Team

                    </li>
                </ul>
            </div>
        </nav>
    )
}