import React, {useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import Canvas_page from "./iss_Pages/Canvas_page"
import Home_page from './iss_Pages/Home_page';
const App = () => {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 100);
  }, [])

  return (
    <>
      {loader === true ? <Preloader /> :
        <BrowserRouter>
          <Routes>
            <Route
             default path='/'
            element={<Home_page/>}
            />
          <Route
              exact path="/mainPage"
              element={<Canvas_page />}
            />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;