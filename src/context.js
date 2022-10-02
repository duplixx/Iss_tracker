import React, { createContext, useContext } from "react"
const Map = createContext()

const MapContext = ({children}) => {
    // const [currency, setCurrency] = React.useState("USD")
    // const [symbol, setSymbol] = React.useState("$")
    const [age, setAge] = React.useState("1")
    React.useEffect(() => {
        if (age === "1") {
            setAge("1")
        }
        else if (age === "2") {
            setAge("2")
        }
    }, [age])
    return (
        <Map.Provider value={{age, setAge}} >{children}</Map.Provider>
    )
}
export default MapContext;
export const MapState = () => {
   return useContext(Map)
}