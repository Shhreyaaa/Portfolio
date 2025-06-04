import { useEffect, useState } from 'react';
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import { toast } from 'react-toastify';
import { Link, Route, Routes } from 'react-router-dom';
import projects from '../Data/projects.js'
import ShreyaCV from '../assets/ShreyaCV.pdf';
import coding from '../assets/coding.gif'


function Home({isMenuOpen , screenWidth}) {

  const featuredProjects = projects.slice(0, 2)
  

  const skills = [
    { name: 'HTML', icon: <i className="fa-brands fa-html5" style={{ fontSize: '40px', color: 'rgba(227,76,38,255)' }} title="HTML5" />, color: 'rgba(227,76,38,255)' },
    { name: 'CSS', icon: <i className="fa-brands fa-css3-alt" style={{ fontSize: '40px', color: 'rgba(41,79,228,255)' }} title="CSS3" />, color: 'rgba(41,79,228,255)' },
    { name: 'JavaScript', icon: <i className="fa-brands fa-js" style={{ fontSize: '40px', color: 'rgba(240,219,79,255)' }} title="JavaScript" />, color: 'rgba(240,219,79,255)' },
    { name: 'React', icon: <i className="fa-brands fa-react" style={{ fontSize: '40px', color: 'rgba(102,219,251,255)' }} title="React" />, color: 'rgba(102,219,251,255)' },
    { name: 'Node.js', icon: <i className="fa-brands fa-node" style={{ fontSize: '40px', color: 'rgba(104,160,99,255)' }} title="Node.js" />, color: 'rgba(104,160,99,255)' },
    { name: 'Express.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" width="40" title="Express.js" />, color: '#000000' },
    { name: 'MongoDB', icon: <i className="fa-solid fa-database" style={{ fontSize:'40px', color: 'green' }} title="MongoDB" />, color: 'green' },
    { name: 'Git', icon: <i className="fa-brands fa-git-alt" style={{ fontSize: '40px', color: '#f1502f' }} title="Git" />, color: '#f1502f' },
    { name: 'GitHub', icon: <i className="fa-brands fa-github" style={{ fontSize: '40px', color: 'black' }} title="GitHub" />, color: 'black' },
    { name: 'Redux', icon: <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux" width="40" title="Redux" />, color: '#764abc' },
    { name: 'Angular', icon: <i className="fa-brands fa-angular" style={{ fontSize: '40px', color: '#dd0031' }} title="Angular" />, color: '#dd0031' },
    { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" title="TypeScript" />, color: '#3178c6' },
    { name: 'Python', icon: <i className="fa-brands fa-python" style={{ fontSize: '40px', color: '#3776AB' }} title="Python" />, color: '#3776AB' },
    { name: 'SQL', icon: <img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="SQL" width="40" title="SQL" />, color: '#003545' },
    { name: 'Material UI', icon: <img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="Material UI" width="40" title="Material UI" />, color: '#0081CB' },
    { name: 'API', icon: <i className="fa-solid fa-cogs" style={{ fontSize: '40px', color: '#e67e22' }} title="API Development" />, color: '#e67e22' },
    { name: 'Postman', icon: <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="Postman" width="40" title="Postman" />, color: '#ff6c37' },
    { name: 'Tailwind CSS', icon: <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width="40" title="Tailwind CSS" />, color: '#06b6d4' },
    { name: 'Bootstrap', icon: <i className="fa-brands fa-bootstrap" style={{ fontSize: '40px', color: '#7952b3' }} title="Bootstrap" />, color: '#7952b3' },
  ];
  

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ensures it animates only once
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
  
    // Basic validation
    if (!name || !email || !message) {
      toast.error("Please fill the form completely.");
      return;
    }
  
    formData.append("access_key", "51dad909-63c8-438b-affd-d3f552a70a63");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const data = await res.json();
  
      if (data.success) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };
  
  


  return (
    <>
    <div className='container body-distance' >
    <div
  className={`main-content ${isMenuOpen ? 'shifted' : ''}`}
  style={{
    transition: 'margin-left 0.3s ease',
    marginLeft: isMenuOpen&& screenWidth >= 590 ? '220px' : '0px',
    
  }}
>

      <div className='row 'id='home'>
      <div className="col-lg-6 ">
        <div className='d-flex animate-slide '  >
          <div className='animate' data-aos="zoom-in-down" style={{marginLeft:'10px',textAlign:'center'}}>
          <div className='animate' style={{height:'100px',width:'2px',border:'2px solid black',marginTop:'80px',marginLeft:'8px',borderRadius:'0px 10px' }} data-aos="zoom-in"
    data-aos-delay="0"></div>
          <a style={{color:'black'}} href="mailto:shreyasethu0@gmail.com"   target="_blank"><i style={{marginTop:'20px',fontSize:'larger'}} className='fa-solid fa-envelope' data-aos="zoom-in"
    data-aos-delay="100"></i></a><br />
          <a style={{color:'black'}} href="https://github.com/Shhreyaaa" target="_blank"><i style={{marginTop:'20px',fontSize:'larger'}}  class="fa-brands fa-github" data-aos="zoom-in"
    data-aos-delay="300"></i><br /></a>
          <a style={{color:'black'}} href="https://www.linkedin.com/in/s-hreyaa/" target="_blank"><i style={{marginTop:'20px',fontSize:'larger'}}  class="fa-brands fa-linkedin" data-aos="zoom-in"
    data-aos-delay="500"></i></a>
          </div>
          <div><img data-aos="zoom-in" src={coding} style={{width:'300px',height:'300px',marginLeft:'80px',marginTop:'30px'}} alt="" /></div>
        </div>
        
      </div>
      <div className="col-lg-6 start">
      <p style={{textAlign:'right',fontSize:'35px'}}><i  className="fa-solid fa-quote-right"></i></p>
      <p data-aos="fade-left">Hi There,</p>
      <h3 data-aos="fade-left">
        I'm <span style={{ color: 'rgba(102,187,106,255)' }}>Shreya</span>
      </h3>
      <h5 data-aos="fade-left" style={{ color: 'rgba(189,189,189,255)' }}>
        Passionate{' '}
        <span style={{ color: '#1a1a1a' }}>
          <TypeAnimation
            sequence={[
              'Full stack developer',
              2000,
              'Front end developer',
              2000,
              'Back end developer',
              2000,
            ]}
            wrapper="span"
            speed={30}
            deletionSpeed={30}
            repeat={Infinity}
          />
        </span>
      </h5>
      <p data-aos="zoom-in">
        From crafting intuitive user interfaces to architecting complex backend solutions,
        my full-stack skills cover the complete development cycle for modern web applications.
      </p>
      <a href={ShreyaCV} target='_blank'>
        <button data-aos="zoom-out-left" className='btn resume-button' style={{border:'none',color:'white',fontWeight:'bold'}}>Resume</button>
      </a>
    </div>
      </div>
      

      <div style={{ position: 'relative' }} id='services'>
  {/* Underlying content */}
  <div 
    className="d-flex flex-column flex-lg-row justify-content-between"
    style={{
      marginTop: '100px',
      marginBottom: '100px',
      position: 'relative',
      zIndex: 0,
    }}
  >
    <div className="services mt-5">
      {/* Left Service Content */}
    </div>
    <div className="services">
      {/* Right Service Content */}
    </div>
  </div>

  {/* Gradient Overlay with Tabs */}
  <div className="gradient-overlay">
    <div className="row px-4 px-lg-5 pt-4">
      <div data-aos="fade-left" className="col-lg-6 text-center text-lg-start">
        <h2 className="services-heading">
          My <span className="highlight">Services</span>
        </h2>
      </div>
      <div data-aos="fade-up" className="col-lg-6 text-center text-lg-end">
        <p className="services-desc" style={{ fontSize: '14px' }}>
          As a developer, I provide various services based on my skills to deliver scalable and flexible solutions.
        </p>
      </div>
    </div>

    {/* Tabs */}
    <div className="d-flex justify-content-center mt-3">
      <div className="tabs-container row w-100">
        {['Full stack', 'Front End', 'Back End'].map((label, index) => (
          <div className="col-lg-4 col-12 text-center mb-3" key={index}>
            <div className="tab-before"></div>
            <div className="tab" >
              <p data-aos="fade-up" className="mb-0">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="row about" style={{marginBottom:'50px'}}>
  <div className="col-lg-6">
  <h2 data-aos="fade-left" className="" style={{color:'black'}}>
          About <span className="highlight services-heading" style={{color:'rgb(254, 152, 28)'}}>Myself</span>
   </h2>
   <p>I’m Shreya, a Full Stack Developer with a flair for building responsive and scalable web applications. With a background in ECE and strong hands-on experience in front-end and back-end technologies like React, Node.js, and MongoDB, I bring both logic and creativity to every project. I'm always learning, building, and aiming to deliver clean and impactful code.</p>
  </div>
  <div className="col-lg-6"></div>
</div>

<h2 data-aos="fade-left" className="mb-4 ">My <span className="my-ed" style={{fontFamily:'Rochester'}}>Education</span></h2>

<div id='experience' data-aos="fade-up">
  
  

   <div className="d-flex ms-5" >
    <div>
      <div className='ed-symbol'>
      <i style={{fontSize:'20px',marginTop:'10px',color:'white'}} className="fa-solid fa-file-lines"></i>      
      </div>
      <div className='line' style={{height:'90px',backgroundColor:'rgb(230, 228, 228)',width:'2px',marginLeft:'20px'}}></div>

    </div>
    <div className='w-100' >
      <div className='ed-content' style={{marginLeft:'10px',marginTop:'5px'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <h6 style={{fontWeight:'600'}}>B-Tech</h6>
        <p style={{color:'rgb(128, 127, 127)',fontSize:'small'}}>2018-2022</p>
        </div>
        <p style={{fontSize:'small'}}>Electronics and Communication Engineering</p>
        <p style={{fontSize:'small',marginTop:'-15px'}}>KMCT College of Engineering</p>
      </div>
    </div>

   

  </div>
  
</div>

<div className="" data-aos="fade-up">
  
   <div className="d-flex ms-5">
    <div >
      <div className='ed-symbol'>
      <i style={{fontSize:'20px',marginTop:'10px',color:'white'}} className="fa-solid fa-file-lines"></i>      
      </div>
      <div className='line' style={{height:'90px',backgroundColor:'rgb(230, 228, 228)',width:'2px',marginLeft:'20px'}}></div>

    </div>
    <div className='w-100'>
      <div className='ed-content' style={{marginLeft:'10px',marginTop:'5px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h6 style={{fontWeight:'600'}}>Diploma</h6>
        <p style={{color:'rgb(128, 127, 127)',fontSize:'small'}}>2019-2022</p>
        </div>
        <p style={{fontSize:'small'}} >Electronics Engineering</p>
        <p style={{fontSize:'small',marginTop:'-15px'}} >JDT Islam Polytechnic College</p>
      </div>
    </div>

   </div>

  
  
</div>

<div className="" data-aos="fade-up">
  
   <div className="d-flex ms-5">
    <div>
      <div className='ed-symbol'>
      <i style={{fontSize:'20px',marginTop:'10px',color:'white'}} className="fa-solid fa-file-lines"></i>      
      </div>
      

    </div>
    <div className='w-100'>
      <div className='ed-content' style={{marginLeft:'10px',marginTop:'5px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h6 style={{fontWeight:'600'}}>HSC</h6>
        <p style={{color:'rgb(128, 127, 127)',fontSize:'small'}}>2016-2019</p>
        </div>
        <p style={{fontSize:'small'}} >Science</p>
        <p style={{fontSize:'small',marginTop:'-15px'}} >GHSS Beypore</p>
      </div>
    </div>

   </div>

  
 



</div>

<h2 data-aos="fade-left" className="mb-4 " style={{marginTop:'80px'}}>My <span className="my-ed" style={{fontFamily:'Rochester'}}>Experience</span></h2>

<div className="" data-aos="fade-up">

  

   <div className="d-flex ms-5" >
    <div>
      <div className='ed-symbol'>
      <i style={{fontSize:'20px',marginTop:'10px',color:'white'}} className="fa-solid fa-laptop-code"></i>      
      </div>
         </div>
    <div className='w-100'>
      <div className='ed-content' style={{marginLeft:'10px',marginTop:'5px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h6 style={{fontWeight:'600'}}>MEARN Stack Developer-Intern</h6>
        <p style={{color:'rgb(128, 127, 127)',fontSize:'small'}}>2024-2025</p>
        </div>
        <p style={{fontSize:'small'}}><i class="fa-solid fa-building" style={{marginRight:'5px'}}></i> Luminar Technolab</p>
        <p style={{fontSize:'small',marginTop:'-15px'}}><i style={{marginRight:'5px'}} class="fa-solid fa-location-dot"></i> Kozhikode, Kerala</p>
      </div>
    </div>

   </div>

 


</div>

<div style={{width:'280px'}} id='projects'>
<h2 data-aos="fade-left" className="mb-4 " style={{marginTop:'80px'}}>Let's have a look at my <span className="my-ed" style={{fontFamily:'Rochester'}}>Projects</span></h2>
</div>

<p style={{textAlign:'center', paddingLeft:'30px', paddingRight:'30px'}}data-aos="fade-up">In this section, Each project showcases my ability to build responsive and user-friendly applications, utilizing technologies like the MERN stack and Node.js Through these project experiences, I aim to create innovative solutions that address real-world challenges and enhance user experiences.</p>

<div className="row"  style={{marginTop:'50px',marginBottom:'50px'}}>
  {featuredProjects.map(project =>(
  <div key={project.id} className="col-lg-6 mt-2">
    <div className="d-flex justify-content-center">
    <div 
  className='projects position-relative' 
  style={{ height: 'auto', borderRadius: '10px' }} 
  data-aos="fade-up"
>
  <div className="overlay-gradient"></div>
  <img 
    src={project.imageHome} 
    alt="" 
    style={{ width: '350px', height: '180px', marginTop: '8px', borderRadius: '5px' }}
  />

  {/* Hover Button */}
  <div className="hover-button d-flex" style={{ gap: '1rem' }}>
    <Link to={`/project/${project.id}`} className="btn btn-warning">Explore</Link>
    
      <a  className='btn btn-warning' href={project.live}   target="_blank"   rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
      <a className='btn btn-warning' href={project.github}   target="_blank"   rel="noopener noreferrer"><i className='fa-brands fa-github'></i></a>
    
  </div>

  <div className='d-flex justify-content-between ps-4 pe-4 pt-4' style={{ width: '99%' }}>
    <div>
      <p style={{ fontWeight: 'bold' }}>{project.name}</p>        
    </div>
    
  </div>
  <p className='ps-4 text-muted' style={{ textAlign: 'left',fontSize:'small' }}>{project.description}</p>
</div>

    
    </div>
    

    
  </div>
  
))}
  
 <div className='d-flex justify-content-center'>
 <Link className='view-more' to='/allproject' >
  <button className="cta" >
  <span className="hover-underline-animation " style={{fontSize:'small'}}> Show more </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button>
  </Link>
 </div>

</div>

<div style={{marginTop:'100px',marginBottom:'100px'}} id='skills'>
<div style={{width:'280px'}}>
<h2 data-aos="fade-left" className="mb-4 " style={{marginTop:'80px'}}>  <span className="my-ed" style={{fontFamily:'Rochester'}}>Skills </span>that I have</h2>
</div>
<p style={{textAlign:'center', paddingLeft:'30px', paddingRight:'30px'}}data-aos="fade-up">
I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a good team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
</p>

<div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '50px',
        gap: '40px',
      }}
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            textAlign: 'center',
          }}
        >
          <div data-aos="zoom-in-up" style={{ marginBottom: '10px' }}>{skill.icon}</div>
          <p data-aos="zoom-in-up" style={{ fontWeight: '500', fontSize: '14px',color:skill.color }}>{skill.name}</p>
        </div>
      ))}
    </div>
</div>

<div style={{marginTop:'100px',marginBottom:'100px'}}>


<div className="row" id='contact'>
  <div className="col-lg-6 pt-5 pe-5">
  <h2 data-aos="fade-left" className="mb-4 " >Have an Awesome Project <br /> Idea?<span className="my-ed" style={{fontFamily:'Rochester'}}> Let's Discuss</span></h2>
    
    <p data-aos="zoom-in" >I’m currently open to full-time roles, internships, or freelance opportunities in software development.
    If my profile aligns with your needs, feel free to connect</p>
    <div data-aos="fade-left" className='d-flex' >
    <div  style={{width:'25px',height:'25px',borderRadius:'50%'}}><i style={{marginRight:'15px', marginLeft:'8px',fontSize:'small'}} class="fa-solid fa-location-dot"></i></div>
    <p style={{marginLeft:'10px',fontSize:'14px',marginTop:'3px'}}>Kozhikode - Kerala - India</p>
    </div>
    <div data-aos="fade-left" className="d-flex">
    <div style={{width:'25px',height:'25px',borderRadius:'50%'}}>
    <i style={{marginRight:'15px', marginLeft:'6px',fontSize:'small'}} class="fa-solid fa-envelope"></i>
    </div>
    <p style={{marginLeft:'10px',fontSize:'14px',marginTop:'3px'}}>shreyasethu0@gmail.com</p>
    </div>
    <div data-aos="fade-left" className="d-flex">
    <div style={{width:'25px',height:'25px',borderRadius:'50%'}}><i style={{marginRight:'15px', marginLeft:'6px',fontSize:'small'}} class="fa-solid fa-phone"></i></div>
    <p style={{marginLeft:'10px',fontSize:'14px',marginTop:'3px'}}>7306248391</p>
    </div>
    <div className='d-flex justify-content-between mt-2' style={{width:'150px'}}>          
          <a data-aos="zoom-in-left" href='https://github.com/Shhreyaaa' target='_blank'  style={{background:'none', border:'none', fontSize:'23px',color:'black' }}><i className='fa-brands fa-github'></i></a>
          <a data-aos="zoom-in-left" href='https://www.linkedin.com/in/s-hreyaa/' target='_blank' style={{background:'none', border:'none', fontSize:'23px',color:'black'}}><i className='fa-brands fa-linkedin'></i></a>
          <a data-aos="zoom-in-left" href='mailto:shreyasethu0@gmail.com' target='_blank' style={{background:'none', border:'none', fontSize:'23px',color:'black'}}><i class="fa-solid fa-envelope"></i></a>
        </div>
  </div>
  <div className="col-lg-6 form" style={{marginTop:'40px'}} >
  <form onSubmit={onSubmit} className='p-5'>
    <input  placeholder='Name'  type="name" name='name' className="form-control mb-4"  />
    <input  placeholder='E-mail' type="email" name='email' className="form-control mb-4" />
    <input  placeholder='Subject' type="subject" name='subject' className="form-control mb-4" />
    <textarea  placeholder='Message' className="form-control mb-4" name="message" id=""></textarea>
 
  <button data-aos="zoom-in" type="submit" className="btn" style={{background:"rgb(254, 152, 28)"}}>Send</button>
</form>
  </div>
 </div>

</div>
 
</div>
</div>

    </>
  )
}

export default Home
