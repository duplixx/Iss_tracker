import React from "react"
export default function ModalAbout1(props) {
    if(props.count === 1){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                   Zarya was launched on 20 November 1998 on a Russian Proton rocket from Baikonur Cosmodrome Site 81 in Kazakhstan to a 400 km (250 mi) high orbit with a designed lifetime of at least 15 years.
                </p>
    )}
    if(props.count === 2){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                  It is the structural and functional center of the Russian Orbital Segment, which is the Russian part of the ISS. Crew assemble here to deal with emergencies on the station. Zvezda was launched on a Proton rocket on 12 July 2000, and docked with the Zarya module on 26 July 2000.
                </p>
    )}
    if(props.count === 3){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                  Destiny was shipped to the Kennedy Space Center in Florida in 1998, and was turned over to NASA for pre-launch preparations in August 2000. It launched on 7 February 2001, aboard the Space Shuttle Atlantis on STS-98.
                </p>
    )}
    if(props.count === 4){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                    The Joint Airlock was launched on ISS-7A / STS-104 in July 2001 and was attached to the right hand docking port of Node 1
                </p>
    )}
    if(props.count === 5){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                    Harmony was successfully launched into space aboard Space Shuttle flight STS-120 on 23 October 2007. After temporarily being attached to the port side of the Unity node, it was moved to its permanent location on the forward end of the Destiny laboratory on 14 November 2007.
                </p>
    )}
    if(props.count === 6){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                   The functional equipment and software of the lab was designed by EADS in Bremen, Germany. It was also integrated in Bremen before being flown to the Kennedy Space Center in Florida in an Airbus Beluga. It was launched aboard Space Shuttle Atlantis on 7 February 2008, on flight STS-122.
                </p>
    )}
    if(props.count === 7){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                    It was launched aboard Space Shuttle mission STS-130 on 8 February 2010 and attached to the Tranquility (Node 3) module. With the Cupola attached, ISS assembly reached 85 percent completion.
                </p>
    )}
    if(props.count === 8){

    
    return(
        <p className="row-start-2 col-start-1 self-center md:w-[70%] text-justify text-lg font-semibold p-3">
                    The Leonardo PMM was a Multi-Purpose Logistics Module (MPLM) before 2011, but was modified into its current configuration. It was formerly one of two MPLM used for bringing cargo to and from the ISS with the Space Shuttle.
                </p>
    )}

}