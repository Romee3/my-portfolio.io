import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Rome</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu" }>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className="uil uil-estate nav-icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav-icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-lightbulb-alt nav-icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#project" className="nav_link">
                                <i className="uil uil-scenery nav-icon"></i>
                                Project
                            </a>
                        </li>
                        {/* <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav-icon"></i>
                                Contact
                            </a>
                        </li> */}
                    </ul>

                    <i class="uil uil-times nav_close" onClick={() =>showMenu(!Toggle)}></i>

                </div>

                <div className="nav_toggle" onClick={() =>showMenu(!Toggle)}>
                    <i class="uil uil-bars"></i>
                </div>
            </nav>

        </header>
    )
}

export default Header