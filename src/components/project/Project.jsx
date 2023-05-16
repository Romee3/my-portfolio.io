import React from 'react';
import "./project.css"
import Projects from './Projects';



const Project = () => {
    return(
      <section className="project section" id='project'>
          <h2 className="section_title">Projects</h2>
          <span className="section_subtitle">My recent works</span>
          <Projects/>
      </section>
    )
}

export default Project