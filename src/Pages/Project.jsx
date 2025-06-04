import { useEffect, useState } from 'react';
import '../App.css';
import '../Pages/project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useParams } from 'react-router-dom';
import projects from '../Data/projects.js';

function Project() {
  const { id } = useParams();
  const currentId = parseInt(id);
  const project = projects.find(p => p.id === currentId);

  const [mainImg, setMainImg] = useState(project?.image?.[0]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
    setMainImg(project?.image?.[0]);
  }, [id, project]);

  if (!project) {
    return (
      <div className='text-center mt-5'>
        <h4>Project not found</h4>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === currentId);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <div className='container py-5' style={{ marginTop: '90px' }}>
        <div className="row">
          <div className="col-lg-6 ps-5 pe-5">
            <img
              data-aos="zoom-in"
              src={mainImg}
              alt="Main project"
              style={{
                width: '100%',
                maxWidth: '550px',
                height: '290px',
                borderRadius: '10px',
                border: '1px solid rgb(220, 220, 220)'
              }}
            />

            <div className='d-flex flex-wrap justify-content-between mt-4 mb-4' style={{ width: '100%' }}>
              {project.image.map((img, index) => (
                <div   data-aos="zoom-in">
                  <img
                    key={index}
                    src={img}
                    onClick={() => setMainImg(img)}
                    style={{
                      height: '100px',
                      width: '150px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      border: '1px solid rgb(220, 220, 220)',
                      
                    }}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-6">
            <h3>{project.name}</h3>
            <p className='text-muted'>{project.description}</p>

            <div className="skills-container">
              {project.skills.map((skill, index) => (
                <div key={index} className='skills'>{skill}</div>
              ))}
            </div>

            <div className="d-flex gap-4 mt-5">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className='btn link-button'style={{fontSize:'14px'}}>
                <i className="fa-solid fa-up-right-from-square"></i> Live Url
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className='btn link-button' style={{fontSize:'14px'}}>
                <i className="fa-brands fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: '50px' }}>Description</h3>
        <p>{project.expandedDescription}</p>

        <ul>
          {project.features && project.features.length > 0 ? (
            project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))
          ) : (
            <li>No features listed for this project.</li>
          )}
        </ul>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-5 flex-wrap">
          <Link to={`/project/${prevProject.id}`} className="btn  mb-2">
            ← {prevProject.name}
          </Link>
          <Link to={`/project/${nextProject.id}`} className="btn  mb-2">
            {nextProject.name} →
          </Link>
        </div>

      </div>
    </>
  );
}

export default Project;
