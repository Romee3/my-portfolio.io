import React from 'react';
import "./about.css";



const Info = () => {
    return(
        <div className="about_info grid">
            <div className="about_box">
                <i class="uil uil-award about_icon"></i>
                <h3 className="about_title">Experienced</h3>
                <span className="about_subtitle">1 Year Freelance</span>
            </div>

            <div className="about_box">
            <i class="uil uil-check-square about_icon"></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10 + Graphic Art</span>
            </div>

            <div className="about_box">
            <i class="uil uil-check-square about_icon"></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10 + Graphic Art</span>
            </div>
        </div>
    )
}

export default Info