import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function Heading({ isMenuOpen, setIsMenuOpen }) {
   

    const handleClick=()=>{
        setIsMenuOpen(!isMenuOpen);
      }
  return (
    <>
        <div className='container'  style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // transparent white
            backdropFilter: 'blur(10px)', // blurring background
            WebkitBackdropFilter: 'blur(10px)', // for Safari
            borderRadius: '10px',
            height: '65px',
            marginTop: '15px',
            border: '1px solid rgba(147, 145, 145, 0.2)',
            fontWeight:'bold',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '1000',
            padding:'0 15px'
            
            }} >

    <div className='d-flex p-2' style={{justifyContent:'space-between'}} >
      <div className='text-center' style={{fontFamily:'Style Script',fontSize:'35px',fontWeight:'550' }}>
      Shreya
      </div>
      <div className=' header'>
        <ul className='d-flex list-unstyled '  >
          <li className='mx-3'>
  <HashLink smooth className='header-text' to="/#home">Home</HashLink>
</li>
<li className='mx-3'>
  <HashLink smooth className='header-text' to="/#services">Services</HashLink>
</li>
<li className='mx-3'>
  <HashLink smooth className='header-text' to="/#skills">Skills</HashLink>
</li>
<li className='mx-3'>
  <HashLink smooth className='header-text' to="/#projects">Projects</HashLink>
</li>
<li className='mx-3'>
  <HashLink smooth className='header-text' to="/#experience">Experience</HashLink>
</li>
    
        </ul>
      </div>
      <div className='p-1'>
        <HashLink smooth to="/#contact" ><button className='btn bg-dark text-white hire' style={{fontWeight:'650'}}>Hire Me</button></HashLink>
        <div className="burger-icon" onClick={handleClick}>
          <div className={`burger-line top ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-line bottom ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
          

    </div>

    <div
  className={`sidebar ${isMenuOpen ? 'show' : ''}`}
  id="sidebar"
  style={{
    width: '220px',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // translucent white background
    backdropFilter: 'blur(8px)', // adds blur effect
    position: 'fixed',
    top: 0,
    left: isMenuOpen ? 0 : '-220px', // slide-in effect
    transition: 'left 0.3s ease-in-out',
    zIndex: 1200,
    padding: '20px',
    textAlign: 'left',
    color: 'black',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
  }}
>

      <div className='sidebar-content'>
        <h3 style={{paddingTop:'100px',paddingLeft:'40px'}}>Menu</h3>
     
      <ul style={{listStyleType:'none',textAlign:'left'}}>
        <li style={{padding:'10px'}}> <a className='sidebar-text' href="">Home</a></li>
        <li style={{padding:'10px'}}> <a className='sidebar-text' href="">Services</a></li>
        <li style={{padding:'10px'}}> <a className='sidebar-text' href="">Skills</a></li>
        <li style={{padding:'10px'}}> <a className='sidebar-text' href="">Projects</a></li>
        <li style={{padding:'10px'}}> <a className='sidebar-text' href="">Experience</a></li>
      </ul>

      <button className='btn bg-black text-white ' style={{fontWeight:'650',marginLeft:'37px'}}>Hire Me</button>

      <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px',paddingLeft:'35px',width:'120px'}}>
      <i style={{marginTop:'20px',fontSize:'larger'}} className='fa-solid fa-envelope' data-aos="zoom-in"
    data-aos-delay="100"></i><br />
          <i style={{marginTop:'20px',fontSize:'larger'}}  class="fa-brands fa-github" data-aos="zoom-in"
    data-aos-delay="300"></i><br />
          <i style={{marginTop:'20px',fontSize:'larger'}}  class="fa-brands fa-linkedin" data-aos="zoom-in"
    data-aos-delay="500"></i>
      </div>

     
      </div>
      

    </div>
    </>
  )
}

export default Heading