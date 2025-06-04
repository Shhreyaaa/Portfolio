import React from 'react'
import '../Components/footer.css'
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';



function Footer({isMenuOpen,screenWidth}) {
  return (
    <>
    <div className={`main-content ${isMenuOpen ? 'shifted' : ''}`}
  style={{
    transition: 'margin-left 0.3s ease',
    marginLeft: isMenuOpen && screenWidth>=590 ? '220px' : '0px',
    
  }}>
    <div className='footer'>
        <div className='row p-5'>
            <div className="col-lg-6">
            <div className='' style={{fontFamily:'Style Script',fontSize:'30px',fontWeight:'550',marginBottom:'10px'}}>Shreya</div>

            <div className='para'>
            <p data-aos="zoom-in">I am Shreya, a passionate web developer and software engineer with a love for turning ideas into interactive and visually appealing experiences.Explore my work, and lets connect to discuss how we can collaborate and bring your ideas to life.</p>
            </div>

            </div>
            <div className="col-lg-3">
                <h4>Navigation</h4>
                <ul className='list-unstyled'>
                    <li data-aos="zoom-in"><HashLink smooth className='navigation' to="/#home">Home</HashLink></li>
                    <li data-aos="zoom-in"><HashLink smooth className='navigation' to="/#services">Services</HashLink></li>
                    <li data-aos="zoom-in"><HashLink smooth className='navigation' to="/#skills">Skills</HashLink></li>
                    <li data-aos="zoom-in"><HashLink smooth className='navigation' to="/#projects">Projects</HashLink></li>
                </ul>
            </div>
            <div className="col-lg-3">
            <h4>Contact</h4>
                <ul className='list-unstyled'>
                    <li data-aos="zoom-in"><a className='navigation' href="mailto:shreyasethu0@gmail.com"><i className='fa-solid fa-envelope icon'></i> shreyasethu0@gmail.com</a></li>
                    <li data-aos="zoom-in"><a className='navigation' href="https://github.com/Shhreyaaa"><i className='fa-brands fa-github icon'></i> Shhreyaaa</a></li>
                    <li data-aos="zoom-in"><a className='navigation' href="https://www.linkedin.com/in/s-hreyaa/"><i className='fa-brands fa-linkedin icon'></i> s-hreyaa</a></li>
                    <li data-aos="zoom-in"><a className='navigation' href=""><i className='fa-solid fa-phone icon'></i> +91 7306248391</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center pb-3" style={{fontSize: '12px' }}>Copyright
  © {new Date().getFullYear()} Shreya| All rights reserved
</div>
    </div>
    </div>
    </>
  )
}

export default Footer