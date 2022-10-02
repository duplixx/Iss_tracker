import React from "react"
export default function ModalName(props) {
    if(props.count === 1){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Zarya 1988
                </h1>
    )}
    if(props.count === 2){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Zvezda 2000
                </h1>
    )}
    if(props.count === 3){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Destiny 2001
                </h1>
    )}
    if(props.count === 4){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Quest 2002
                </h1>
    )}
    if(props.count === 5){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Harmony 2007
                </h1>
    )}
    if(props.count === 6){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Columbus 2008
                </h1>
    )}
    if(props.count === 7){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Cupola 2010
                </h1>
    )}
    if(props.count === 8){
    return(
        <h1 className="row-start-1 col-start-2 text-[46px] font-bold">
                    ISS Leonardo 2011
                </h1>
    )}
}