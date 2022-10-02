import React from "react"
export default function ModalAbout2(props) {
    if(props.count === 1){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
       Zarya has a mass of 19,323 kilograms (42,600 lb), is 12.56 meters (41.2 ft) long and 4.11 meters (13.5 ft) wide at its widest point.  After Zarya reached orbit, STS-88 launched on 4 December 1998 to attach the Unity module.
    </p>
    )}
    if(props.count === 2){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
        Zvezda (Russian: Звезда, meaning 'star'), Salyut DOS-8, is also known as the Zvezda Service Module. It was the third module launched to the station, and provides all of the station's life support systems, some of which are supplemented in the USOS, as well as living quarters for two crew members.
    </p>
    )}
    if(props.count === 3){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
        The Destiny module, also known as the U.S. Lab, is the primary operating facility for U.S. research payloads aboard the ISS. It was berthed to the Unity module and activated over a period of five days in February 2001. Destiny is NASA's first permanent operating orbital research station.
               
    </p>
    )}
    if(props.count === 4){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
        The Joint Airlock (also known as 'Quest') is provided by the U.S. and provides the capability for ISS-based Extravehicular Activity (EVA) using either a U.S. Extravehicular Mobility Unit (EMU) or Russian Orlan EVA suits.
    </p>
    )}
    if(props.count === 5){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
       Harmony, also known as Node 2, is the 'utility hub' of the ISS. It connects the laboratory modules of the United States, Europe and Japan, as well as providing electrical power and electronic data. Sleeping cabins for four of the crew are housed here.
    </p>
    )}
    if(props.count === 6){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
        Columbus is a science laboratory that is part of the ISS and is the largest single contribution to the station made by the European Space Agency. The Columbus laboratory was constructed in Turin, Italy by Thales Alenia Space.
    </p>
    )}
    if(props.count === 7){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
       he Cupola is an ESA-built observatory module of the ISS. Its name derives from the Italian word cupola, which means 'dome'. Its seven windows are used to conduct experiments, dockings and observations of Earth.
    </p>
    )}
    if(props.count === 8){

    
    return(
        <p className="row-start-2 col-start-3 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
        The Leonardo Permanent Multipurpose Module (PMM) is a module of the International Space Station. It was flown into space aboard the Space Shuttle on STS-133 on 24 February 2011 and installed on 1 March. Leonardo is primarily used for storage of spares, supplies and waste on the ISS, which was until then stored in many different places within the space station.
    </p>
    )}
}