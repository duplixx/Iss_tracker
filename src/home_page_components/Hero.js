import React, { useEffect, useState } from "react"
import vid from "../images/hero_background_vid.mp4"
import { gsap, Power3 } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Team from "./Team"
import Footer from "./Footer"
import Story from "./Story-section"

export default function Hero() {


    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(".title_div", { y: -180, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 6
        })


        // About Section 

        gsap.to(".section2", {
            scrollTrigger: {
                trigger: ".left_section2",
                end: "+=900",
                scrub: 1,
                toggleActions: "restart pause reverse pause",
                
            },
            background: 'black',
            color: 'white',
            duration: 3,
        });
        gsap.fromTo(".section2_title", { x: -180, opacity: -1, scale: 0.4 }, {
            scrollTrigger: {
                trigger: ".left_section2",
                scrub: 1,
                toggleActions: "restart pause reverse pause",
            },
            x: 0,
            opacity: 2,
            scale: 1,
            duration: 2
        });
        // let array = []
        // array = [".small_title", ".next_small_title"]
        // // array.push(".small_title")
        // array.map((item,i)=>{

        //     gsap.fromTo(`${item}`,{x:50, opacity:-1,},{
        //         scrollTrigger:{
        //             trigger:".right_section2",
        //             toggleActions: "restart pause reverse pause",
        //             scrub:1
        //         },
        //         x: -10,
        //         opacity:2,
        //         duration: 0.8 + i 
        //     });
        // }) 
        //Learned new thing
        let array = []
        array = ["left_section_title1", "left_section_title2", "p"]
        array.map((item, i) => {
            gsap.fromTo(`.${item}`, { x: 100, opacity: -0.6 }, {
                scrollTrigger: {
                    trigger: ".left_team_section",
                    toggleActions: "pause pause pause pause", scrub: 1
                },
                x: 0,
                opacity: 2,
                duration: 0.8 + i,
                ease: Power3.easeInOut,
            })
            console.log(i)
        })

        gsap.fromTo(".right_team_section", { scale:0.4, opacity: 0 }, {
            scrollTrigger: {
                trigger: ".team_section",
                end: "+=600px",
                toggleActions: "restart pause pause pause", scrub: 1,
            },
            color: 'white',
            scale:1,
            opacity: 1,
            duration: 1.4,
            ease: "none"
        });

        // Story Section 
        gsap.fromTo(".story_section", {opacity:1.9}, {
            scrollTrigger:{
                trigger:".story_section",
                toggleActions: "restart pause pause pause", scrub: 1,
                pinSpacing: false,
                pin: true,
            },
            opacity:0,
            ease: "none",
            ease: Power3.easeInOut,
            duration:0.1
        })
        
        // Cursor Section 
    }, [])



    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 7500);
    }, [])


    // Team Section 
    const slider = document.querySelector('.team_section');

    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
        mouseDown = false;
    };
    if (slider) {

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if (!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        // Add the event listeners
        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }
    // Team section ends 
    return (
        <>
            {/* Hero Section Starts */}
            <div className="hero_section">
                <div className="title_div">
                    <h1 className="title">
                        Iss Tracker
                    </h1>
                    <a className="_button" >Track Iss</a>
                </div>
                {
                    show &&
                    // <div className="hero_vid">
                        <video className="hero_vid" autoPlay muted>
                            <source src={vid} type="video/mp4" />
                        </video>
                    // </div>
                }
                {
                    !show &&
                    <ParallaxProvider>

                        {/* <section className="section"> */}

                            <div className="img1" id="home">
                                {/* <img className="star" src={img1} id="star" alt="star" /> */}
                            </div>
                            <Parallax className="img2" translateY={[0, -40]}>
                                {/* <img className="idk" src={img2} id="idk" alt="idk" /> */}
                            </Parallax>
                            <Parallax className="img3" translateX={[35, -40]}>
                                {/* <img className="hero" id="hero" src={img3} alt="hero" /> */}
                            </Parallax>
                            <Parallax translateY={[40, -80]} translateX={[30,-30]} className="img4">
                                {/* <img className="earth" id="earth" src={img4} alt="earth" /> */}
                            </Parallax>
                        {/* </section> */}
                    </ParallaxProvider>
                }
            </div>
            {/* Hero Section Ends  */}
            {/* About Section Starts  */}
            <div className="section2" id="about" >
                <div className="left_section2" >
                    <h1 className="section2_title">About</h1>
                    <h1 className="section2_title">Us</h1>
                </div>
                <div className="right_section2" >
                    <div>
                        <h6 className="small_title">The small</h6>
                        <h6 className="next_small_title">Business Specialist</h6>
                    </div>
                    <div>
                        <h4>A Creative,Digital Company</h4>
                        <h4>Watch the space agency</h4>
                    </div>
                    <div>
                        <p className="first_p">We build awesome websites designed from scratch, together with performance focused digital marketing campaigns to take you out into the world.</p>
                    </div>
                    <div>
                        <p className="last_p">Proudly a 'little' agency, we exclusively serve individuals, startups and small to medium scale companies through our portfolio of affordable, packaged services. Our offerings are designed to give you great options to get started or you could reach out for a custom quote if you want to reach the stars with us!</p>
                    </div>
                    <div>
                        <p className="first_p">Get in touch, and let’s build awesome together.</p>
                    </div>
                </div>
            </div>
            {/* About Section Ends  */}
            {/* Story Section Starts  */}
            <Story/>
            {/* Story Section Ends  */}
            {/* Team Section Starts  */}
            <Team />
            {/* Team Section Ends  */}
            {/* Footer Section Starts  */}
            <Footer/>
            {/* Footer Section Ends  */}
        </>
    )
}
//star-->idk-->hero-->earth