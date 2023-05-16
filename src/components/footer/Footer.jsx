import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Rome</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
                <li>
                    <a href="#project" className="footer_link">Projects</a>
                </li>
            </ul>
            <div className="footer_social">
                <a href="https://www.instagram.com/jrmvlljs/?fbclid=IwAR3lja3_R9IGaXcHtXy9BHMHHrrJPD0GU9otC8ElAid09a5w2eY1pRSZ3dM" className="footer_social-icon" ><i class="uil uil-instagram"></i></a>
                <a href="https://www.facebook.com/pizza922/" className="footer_social-icon" ><i class="uil uil-facebook-f"></i></a>
                <a href="diakoisangrobot12@gmail.com" className="footer_social-icon" ><i class="uil uil-envelope"></i></a>
            </div>
            <span className="footer_copy">
                @Copyright 
            </span>
        </div>
    </footer>
  )
}

export default Footer