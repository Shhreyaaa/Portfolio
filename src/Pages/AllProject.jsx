import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../Pages/allProjects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import projects from '../Data/projects.js'



function AllProject() {
  const [search,setSearch]=useState('')



  const filteredProjects=projects.filter((project)=>
    project.name.toLowerCase().startsWith(search.toLowerCase())

  )

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
    window.scrollTo(0, 0);
  }, [])

  return (
    <div style={{marginTop: '150px'}}>
      <div className='container my-5 allproject ' >
      <div data-aos='zoom-in' className='d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4'>
        <div className='d-flex align-items-center flex-wrap gap-2'>
          <Link className='link' to='/'>
          <i class="fa-solid fa-arrow-left-long"></i>
          </Link>
          <h3 style={{ color: 'black' }}>
            All <span className='highlight services-heading' style={{ color: 'rgb(254, 152, 28)',fontFamily:'Rochester' }}>Projects</span>
          </h3>
        </div>
        <div className="search-wrapper position-relative mt-2">
  <input  type="text" placeholder="Search project" className="pe-5" value={search} onChange={(e) => setSearch(e.target.value)} />
  <i className="fa-solid fa-search search-icon"></i>
</div>

      </div>

      <div className='row project'>
        {filteredProjects.length > 0 ? (
         filteredProjects.map((project, idx) => (
          <div key={project.id} className="col-lg-6  mb-5">
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
    style={{ width: '400px', height: '200px', marginTop: '8px', borderRadius: '5px' }}
  />

  {/* Hover Button */}
  <div className="hover-button d-flex" style={{ gap: '1rem' }}>
    <Link to={`/project/${project.id}`} className="btn btn-warning">Explore</Link>
    
      <a className='btn btn-warning' href={project.live}   target="_blank"   rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
      <a className='btn btn-warning' href={project.github}   target="_blank"   rel="noopener noreferrer"><i className='fa-brands fa-github'></i></a>
    
  </div>

  <div className='d-flex justify-content-between ps-4 pe-4 pt-4' style={{ width: '99%' }}>
    <div>
      <p style={{ fontWeight: 'bold' }}>{project.name}</p>        
    </div>
    
  </div>
  <p className='ps-4' style={{ textAlign: 'left' }}>{project.description}</p>
</div>

    
    </div>
    

    
  </div>
        ))
      ):(
        <div className="text-center mt-5 w-100">
    <h5 className="text-muted">No projects found</h5>
  </div>
      )}
      </div>
    </div>
    </div>
  )
}

export default AllProject
