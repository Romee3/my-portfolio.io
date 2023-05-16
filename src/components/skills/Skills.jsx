import React from 'react';
import "./skills.css";
import Graphic from './Graphic';
import Programming from './Programming';


const Skills = () => {
    return(
      <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Skills</span>

            <div className="skills_container container grid">
                <Graphic/>
                <Programming/>
            </div>
      </section>

    )
}

export default Skills