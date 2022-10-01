// import React from 'react';
// // import { CubeCamera, OrbitControls, OrthographicCamera, Preload,group, PerspectiveCamera} from "@react-three/drei";
// // import { Canvas } from "@react-three/fiber";
// // import Moon from "./components/mappedMoon";
// // import Stars from "./components/stars";
// // import Marks from './components/marks';


// const App = () => {
//   return (
//     <>
    
//       {/* <div className="w-full bg-black h-screen">
//             <Canvas className="">
//               <OrbitControls zoomSpeed={0.8}  enableZoom={true} autoRotate={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 180} />
//                 <ambientLight intensity="0.1" enableShadow={true} />
//                 <directionalLight position={[-50, 80, 80]} intensity={0.6}  />
//                 <directionalLight position={[10, -80, -80]} color={"black"} intensity={1}  />
//                     <Moon/>
//                     <Marks/>
//                     <Stars/>
//                 <Preload all />
//             </Canvas>     
//       </div> */}
    
//     </>
//   );
// }

// export default App;
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import Canvas_moon from "./iss_Pages/Canvas_page"
import Home_page from './iss_Pages/Home_page';
const App = () => {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(false)
    setTimeout(() => {
      setLoader(false)
    }, 25000);
  }, [])

  return (
    <>
      {loader === true ? <Preloader /> :
        <BrowserRouter>
          <Routes>
            <Route
             path='/'
            element={<Home_page/>}
            />
          <Route
              exact path="/mainPage"
              element={<Canvas_moon />}
            />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;