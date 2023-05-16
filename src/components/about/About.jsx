import React from 'react';
import "./about.css";
import MeImg from "../../assets/Me.jpg";
import Info from './Info';
import CV from "../../assets/CV-VILLAJOS.pdf"


const About = () => {
    return(
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src={MeImg} alt="" className="about_img" />
                <div className="about_data">
                    <Info/>
                    <p className="about_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a download="" href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>

    )
}

export default About