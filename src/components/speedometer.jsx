import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SpeedoMeter() {
    const [speed, setSpeed] = useState();
    const [alt, setAlt] = useState();
    const startDeg = -90;
    const degRange = 150;
    let tickArray = [];
    let guageFrame = 0;
    // t: current time, b: begInnIng value, c: change In value, d: duration
    function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
    function engageGuage() {
        let totalFrames = 100;
        let currChild = 0;
        let reqGuage;

        if (guageFrame < totalFrames) {
            var deg = startDeg + easeInOutCubic(guageFrame, 0, degRange, totalFrames);
            var iteration = Math.floor(easeInOutCubic(guageFrame, 0, document.querySelectorAll('.js-guage-svg > path').length + 1 < 20 ? document.querySelectorAll('.js-guage-svg > path').length + 1 : 24, totalFrames));
            document.querySelector('.js-needle').style.transform = 'rotateZ(' + deg + 'deg)';
            document.querySelector('.js-needle1').style.transform = 'rotateZ(' + deg + 'deg)';
            var iteration1 = Math.floor(easeInOutCubic(guageFrame, 0, document.querySelectorAll('.js-guage-svg1 > path').length + 1 < 20 ? document.querySelectorAll('.js-guage-svg1 > path').length + 1 : 24, totalFrames));
            guageFrame++;
            reqGuage = requestAnimationFrame(engageGuage);
        } else {
            guageFrame = 0;
            cancelAnimationFrame(reqGuage);
        }
    }

    function speedo() {
        for (var i = 1; i <= 22; i++) {
            document.getElementById(i).classList.remove("fill-white");
            document.getElementById(i).classList.add("fill-red-500");
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getSpeed();
        }, 1000);
        engageGuage();
        speedo();

    }, []);

    const getSpeed = async () => {
        try {
            const res = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
            setSpeed(res.data.velocity.toFixed(2));
            setAlt(res.data.altitude.toFixed(2));
        } catch (error) {
            console.log("Error", error);
            // handle error
        }
    }
    return (
        <>
            <div className="w-36 text-center">
                <div className="flex items-center justify-center relative">
                    <svg
                        className="js-guage-svg guage-svg h-[75vh] w-[100%]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 327 205.4"
                    >
                        <path
                            id={1}
                            className="fill-white"
                            d="M60.5 127.9l-17.9-3.8c-.1.6-.3 1.3-.4 1.9l17.9 3.8c.1-.6.3-1.3.4-1.9z"
                        />
                        <path
                            id={2}
                            className="fill-white"
                            d="M63.2 118.3l-17.4-5.7c-.2.6-.4 1.2-.6 1.9l17.4 5.7c.2-.7.4-1.3.6-1.9z"
                        />
                        <path
                            id={3}
                            className="fill-white"
                            d="M66.9 108.9l-16.7-7.5c-.3.6-.6 1.2-.8 1.8l16.7 7.5c.2-.6.5-1.2.8-1.8z"
                        />
                        <path
                            id={4}
                            className="fill-white"
                            d="M71.5 100.1l-15.9-9.2c-.3.6-.7 1.1-1 1.7l15.9 9.2c.4-.6.7-1.2 1-1.7z"
                        />
                        <path
                            id={5}
                            className="fill-white"
                            d="M77.1 91.7L62.2 81c-.4.5-.8 1.1-1.1 1.6l14.8 10.8c.4-.6.8-1.1 1.2-1.7z"
                        />
                        <path
                            id={6}
                            className="fill-white"
                            d="M83.5 84L69.8 71.8c-.4.5-.9 1-1.3 1.5l13.6 12.3c.5-.6.9-1.1 1.4-1.6z"
                        />
                        <path
                            id={7}
                            className="fill-white"
                            d="M90.6 77L78.3 63.4c-.5.4-1 .9-1.5 1.3l12.3 13.6c.5-.4 1-.8 1.5-1.3z"
                        />
                        <path
                            id={8}
                            className="fill-white"
                            d="M98.5 70.8L87.7 56c-.5.4-1.1.8-1.6 1.1L96.8 72c.6-.4 1.1-.8 1.7-1.2z"
                        />
                        <path
                            id={9}
                            className="fill-white"
                            d="M106.9 65.5l-9.2-15.9c-.6.3-1.1.7-1.7 1l9.2 15.9c.5-.4 1.1-.7 1.7-1z"
                        />
                        <path
                            id={10}
                            className="fill-white"
                            d="M115.8 61l-7.5-16.7c-.6.3-1.2.5-1.8.8l7.5 16.7c.6-.3 1.2-.5 1.8-.8z"
                        />
                        <path
                            id={11}
                            className="fill-white"
                            d="M125.2 57.5l-5.7-17.4c-.6.2-1.3.4-1.9.6l5.7 17.4c.7-.2 1.3-.4 1.9-.6z"
                        />
                        <path
                            id={12}
                            className="fill-white"
                            d="M134.9 55l-3.8-17.9c-.7.1-1.3.3-1.9.4l3.8 17.9c.6-.1 1.3-.2 1.9-.4z"
                        />
                        <path
                            id={13}
                            className="fill-white"
                            d="M144.8 53.6l-1.9-18.2c-.7.1-1.3.1-2 .2l1.9 18.2c.7-.1 1.4-.2 2-.2z"
                        />
                        <path
                            id={14}
                            className="fill-white"
                            d="M153.8 53.2h1V34.8h-2v18.3c.4.1.7.1 1 .1z"
                        />
                        <path
                            id={15}
                            className="fill-white"
                            d="M164.8 53.8l1.9-18.2c-.7-.1-1.3-.2-2-.2l-1.9 18.2c.7 0 1.3.1 2 .2z"
                        />
                        <path
                            id={16}
                            className="fill-white"
                            d="M174.7 55.5l3.8-17.9c-.6-.1-1.3-.3-1.9-.4L172.7 55c.7.2 1.3.3 2 .5z"
                        />
                        <path
                            id={17}
                            className="fill-white"
                            d="M184.3 58.1l5.7-17.4c-.6-.2-1.2-.4-1.9-.6l-5.7 17.4c.6.2 1.3.4 1.9.6z"
                        />
                        <path
                            id={18}
                            className="fill-white"
                            d="M193.6 61.8l7.5-16.7c-.6-.3-1.2-.6-1.8-.8L191.8 61c.6.3 1.2.6 1.8.8z"
                        />
                        <path
                            id={19}
                            className="fill-white"
                            d="M202.5 66.5l9.2-15.9c-.6-.3-1.1-.7-1.7-1l-9.2 15.9c.5.3 1.1.6 1.7 1z"
                        />
                        <path
                            id={20}
                            className="fill-white"
                            d="M210.8 72l10.8-14.8c-.5-.4-1.1-.8-1.6-1.1l-10.8 14.8c.5.3 1.1.7 1.6 1.1z"
                        />
                        <path
                            id={21}
                            className="fill-white"
                            d="M218.5 78.4l12.3-13.6c-.5-.4-1-.9-1.5-1.3L217 77.1c.5.4 1 .8 1.5 1.3z"
                        />
                        <path
                            id={22}
                            className="fill-white"
                            d="M225.5 85.5l13.6-12.3c-.4-.5-.9-1-1.3-1.5L224.2 84c.4.5.9 1 1.3 1.5z"
                        />
                        <path
                            className="fill-white"
                            d="M231.7 93.4l14.8-10.8c-.4-.5-.8-1.1-1.1-1.6l-14.8 10.8c.4.5.7 1 1.1 1.6z"
                        />
                        <path
                            className="fill-white"
                            d="M237.1 101.8l15.9-9.2c-.3-.6-.7-1.1-1-1.7l-15.9 9.2c.3.6.7 1.1 1 1.7z"
                        />
                        <path
                            className="fill-white"
                            d="M241.5 110.8l16.7-7.5c-.3-.6-.5-1.2-.8-1.8l-16.7 7.5c.3.6.6 1.2.8 1.8z"
                        />
                        <path
                            className="fill-white"
                            d="M245 120.1l17.4-5.7c-.2-.6-.4-1.2-.6-1.9l-17.4 5.7c.2.7.4 1.3.6 1.9z"
                        />
                        <path
                            className="fill-white"
                            d="M247.5 129.8l17.9-3.8c-.1-.7-.3-1.3-.4-1.9l-17.9 3.8c.1.6.3 1.3.4 1.9z"
                        />
                    </svg>
                    <div className="js-needle rounded-t-[50%] origin-bottom h-[10%] absolute bottom-[35vh] w-[3%] bg-white rotate-[90]" />
                </div>
                <span className=" text-white text-2xl font-bold">{speed}</span>
                
            </div>
            <div className="w-36 text-center ">
                <div className="flex items-center justify-center relative">
                    <svg
                        className="js-guage-svg1 guage-svg h-[75vh] w-[100%]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 327 205.4"
                    >
                        <path
                            id={1}
                            className="fill-white"
                            d="M60.5 127.9l-17.9-3.8c-.1.6-.3 1.3-.4 1.9l17.9 3.8c.1-.6.3-1.3.4-1.9z"
                        />
                        <path
                            id={2}
                            className="fill-white"
                            d="M63.2 118.3l-17.4-5.7c-.2.6-.4 1.2-.6 1.9l17.4 5.7c.2-.7.4-1.3.6-1.9z"
                        />
                        <path
                            id={3}
                            className="fill-white"
                            d="M66.9 108.9l-16.7-7.5c-.3.6-.6 1.2-.8 1.8l16.7 7.5c.2-.6.5-1.2.8-1.8z"
                        />
                        <path
                            id={4}
                            className="fill-white"
                            d="M71.5 100.1l-15.9-9.2c-.3.6-.7 1.1-1 1.7l15.9 9.2c.4-.6.7-1.2 1-1.7z"
                        />
                        <path
                            id={5}
                            className="fill-white"
                            d="M77.1 91.7L62.2 81c-.4.5-.8 1.1-1.1 1.6l14.8 10.8c.4-.6.8-1.1 1.2-1.7z"
                        />
                        <path
                            id={6}
                            className="fill-white"
                            d="M83.5 84L69.8 71.8c-.4.5-.9 1-1.3 1.5l13.6 12.3c.5-.6.9-1.1 1.4-1.6z"
                        />
                        <path
                            id={7}
                            className="fill-white"
                            d="M90.6 77L78.3 63.4c-.5.4-1 .9-1.5 1.3l12.3 13.6c.5-.4 1-.8 1.5-1.3z"
                        />
                        <path
                            id={8}
                            className="fill-white"
                            d="M98.5 70.8L87.7 56c-.5.4-1.1.8-1.6 1.1L96.8 72c.6-.4 1.1-.8 1.7-1.2z"
                        />
                        <path
                            id={9}
                            className="fill-white"
                            d="M106.9 65.5l-9.2-15.9c-.6.3-1.1.7-1.7 1l9.2 15.9c.5-.4 1.1-.7 1.7-1z"
                        />
                        <path
                            id={10}
                            className="fill-white"
                            d="M115.8 61l-7.5-16.7c-.6.3-1.2.5-1.8.8l7.5 16.7c.6-.3 1.2-.5 1.8-.8z"
                        />
                        <path
                            id={11}
                            className="fill-white"
                            d="M125.2 57.5l-5.7-17.4c-.6.2-1.3.4-1.9.6l5.7 17.4c.7-.2 1.3-.4 1.9-.6z"
                        />
                        <path
                            id={12}
                            className="fill-white"
                            d="M134.9 55l-3.8-17.9c-.7.1-1.3.3-1.9.4l3.8 17.9c.6-.1 1.3-.2 1.9-.4z"
                        />
                        <path
                            id={13}
                            className="fill-white"
                            d="M144.8 53.6l-1.9-18.2c-.7.1-1.3.1-2 .2l1.9 18.2c.7-.1 1.4-.2 2-.2z"
                        />
                        <path
                            id={14}
                            className="fill-white"
                            d="M153.8 53.2h1V34.8h-2v18.3c.4.1.7.1 1 .1z"
                        />
                        <path
                            id={15}
                            className="fill-white"
                            d="M164.8 53.8l1.9-18.2c-.7-.1-1.3-.2-2-.2l-1.9 18.2c.7 0 1.3.1 2 .2z"
                        />
                        <path
                            id={16}
                            className="fill-white"
                            d="M174.7 55.5l3.8-17.9c-.6-.1-1.3-.3-1.9-.4L172.7 55c.7.2 1.3.3 2 .5z"
                        />
                        <path
                            id={17}
                            className="fill-white"
                            d="M184.3 58.1l5.7-17.4c-.6-.2-1.2-.4-1.9-.6l-5.7 17.4c.6.2 1.3.4 1.9.6z"
                        />
                        <path
                            id={18}
                            className="fill-white"
                            d="M193.6 61.8l7.5-16.7c-.6-.3-1.2-.6-1.8-.8L191.8 61c.6.3 1.2.6 1.8.8z"
                        />
                        <path
                            id={19}
                            className="fill-white"
                            d="M202.5 66.5l9.2-15.9c-.6-.3-1.1-.7-1.7-1l-9.2 15.9c.5.3 1.1.6 1.7 1z"
                        />
                        <path
                            id={20}
                            className="fill-white"
                            d="M210.8 72l10.8-14.8c-.5-.4-1.1-.8-1.6-1.1l-10.8 14.8c.5.3 1.1.7 1.6 1.1z"
                        />
                        <path
                            id={21}
                            className="fill-white"
                            d="M218.5 78.4l12.3-13.6c-.5-.4-1-.9-1.5-1.3L217 77.1c.5.4 1 .8 1.5 1.3z"
                        />
                        <path
                            id={22}
                            className="fill-white"
                            d="M225.5 85.5l13.6-12.3c-.4-.5-.9-1-1.3-1.5L224.2 84c.4.5.9 1 1.3 1.5z"
                        />
                        <path
                            className="fill-white"
                            d="M231.7 93.4l14.8-10.8c-.4-.5-.8-1.1-1.1-1.6l-14.8 10.8c.4.5.7 1 1.1 1.6z"
                        />
                        <path
                            className="fill-white"
                            d="M237.1 101.8l15.9-9.2c-.3-.6-.7-1.1-1-1.7l-15.9 9.2c.3.6.7 1.1 1 1.7z"
                        />
                        <path
                            className="fill-white"
                            d="M241.5 110.8l16.7-7.5c-.3-.6-.5-1.2-.8-1.8l-16.7 7.5c.3.6.6 1.2.8 1.8z"
                        />
                        <path
                            className="fill-white"
                            d="M245 120.1l17.4-5.7c-.2-.6-.4-1.2-.6-1.9l-17.4 5.7c.2.7.4 1.3.6 1.9z"
                        />
                        <path
                            className="fill-white"
                            d="M247.5 129.8l17.9-3.8c-.1-.7-.3-1.3-.4-1.9l-17.9 3.8c.1.6.3 1.3.4 1.9z"
                        />
                    </svg>
                    <div className="js-needle1 rounded-t-[50%] origin-bottom h-[10%] absolute bottom-[35vh] w-[3%] bg-white rotate-[90]" />
                </div>
                <span className=" text-white text-2xl font-bold">{alt}</span>
            </div>
            
        </>


    )
}
