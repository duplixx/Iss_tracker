import React from "react"
import "../home_page.css"
import Header from "../home_page_components/Header"
import Hero from "../home_page_components/Hero"
import Modal from "../components/ModalPage"

export default function Home_page() {
    return (
        <>
            {/* <Modal/> */}
            <Header/>
            <Hero/> 
        </>
    )
}