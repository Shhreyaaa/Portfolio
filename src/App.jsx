import {Route, Routes } from 'react-router-dom';
import AllProject from './Pages/AllProject';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import Project from './Pages/Project';




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <>

  <ToastContainer position="top-right" theme="colored" />

  <Heading isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

  <Routes>
    <Route path='/' element={<Home isMenuOpen={isMenuOpen} screenWidth={screenWidth} />} />
    <Route path='/allproject' element={<AllProject />} /> 
    <Route path='/project/:id' element={<Project />} />    
  </Routes>


  <Footer isMenuOpen={isMenuOpen} screenWidth={screenWidth}/>

    </>
  )
}

export default App
