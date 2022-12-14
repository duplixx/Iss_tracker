import React, { useEffect, useState } from "react"
import vid from "../images/hero_background_vid.mp4"
import { gsap, Power3 } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Team from "./Team"
import Footer from "./Footer"
import Story from "./Story-section"
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai"
export default function Hero() {


    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        // Hero Section title(ISS) animation from -180px to 0 px

        gsap.fromTo(".title_div", { y: -180, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 6
        })


        // About Section 


        // Section 2 background animation on scroll grey --> black

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

        // Section 2 title scale+x-axis animation 

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


        // Team Section title animation (using array to target all the class)


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


        // Team section - Team members card animation of scale and opacity on scroll

        gsap.fromTo(".right_team_section", { scale: 0.4, opacity: 0 }, {
            scrollTrigger: {
                trigger: ".team_section",
                end: "+=600px",
                toggleActions: "restart pause pause pause", scrub: 1,
            },
            color: 'white',
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "none"
        });

        // Story Section 


        // Story section to show hiding effect on scroll 

        gsap.fromTo(".story_section", { opacity: 1.9 }, {
            scrollTrigger: {
                trigger: ".story_section",
                toggleActions: "restart pause pause pause", scrub: 1,
            },
            opacity: 0,
            ease: "none",
            ease: Power3.easeInOut,
            duration: 0.1
        })

    }, [])

    // Using state to animate hero section 
    // to basically hide video and to replace it with image components 

    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 7500);
    }, [])


    // Team Section 


    // To add drag effect in horizontal scroll section

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
    const navigate = useNavigate()
    return (
        <>
            {/* Hero Section Starts */}
            <div className="hero_section">
                <div className="title_div">
                    <h1 className="title self-start">
                        Iss Tracker
                    </h1>
                    <a className="_button flex hover:justify-between" onClick={() => navigate(`/mainPage`)} >Track Iss <AiOutlineArrowRight className="inline-block self-center" />  </a>
                </div>
                {
                    show &&

                    <video className="hero_vid" autoPlay muted>
                        <source src={vid} type="video/mp4" />
                    </video>

                }
                {
                    !show &&
                    <ParallaxProvider>



                        <div className="img1" id="home">

                        </div>
                        <Parallax className="img2" translateY={[0, -40]}>
                        </Parallax>
                        <Parallax className="img3" translateX={[35, -40]}>
                        </Parallax>
                        <Parallax translateY={[40, -80]} translateX={[30, -30]} className="img4">
                        </Parallax>
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
                        <h6 className="small_title">STELLIUM</h6>
                        {/* <h6 className="next_small_title">Business Specialist</h6> */}
                    </div>
                    <div>
                        <h4>ISS TRACKER</h4>
                        {/* <h4>Watch the space agency</h4> */}
                    </div>
                    <div>
                        <p className="first_p">We have built a web application to track space station offering multiplying features and capabilities over conventional trackers. Unlike the old bidimensional trackers that don't support 3D depictions or visualize stations as a dot or 2D models, our application would be fully accessible via a browser.</p>
                    </div>
                    <div>
                        <p className="last_p">This application further would be equipped with the ability to calculate and display the station's speed and its height above the earth. It contain the ability to differentiate between day and night by using the 3D concept repo. Also it will be capable of measuring the latitude and longitude using yet another container.</p>
                    </div>
                    <div>
                        <p className="first_p">
                            The user would also be able to enjoy a feature by which the real-time positioning of the space station will be feasible.</p>
                    </div>
                </div>
            </div>
            {/* About Section Ends  */}


            {/* Story Section Starts  */}


            <Story />


            {/* Story Section Ends  */}


            {/* Team Section Starts  */}


            <Team />


            {/* Team Section Ends  */}


            {/* Footer Section Starts  */}


            <Footer />


            {/* Footer Section Ends  */}
        </>
    )
}
//star-->idk-->hero-->earth