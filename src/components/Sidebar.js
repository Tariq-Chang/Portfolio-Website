import React from 'react'
import profile from "../images/profile.jpg";
import "./Sidebar.css";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <img src={profile} alt="profile" className="sidebar__profileImage" />
                <p>Tariq Hussain</p>
            </div>
            <hr style={{ color: "yellow", margin: "0px 20px" }} />
            <div className="sidebar__options">
                <a href="#homepage" className="sidebar__option">Home</a>
                <a href="#projects" className="sidebar__option">Projects</a>
                <a href="#services" className="sidebar__option">Services</a>
                <a href="#contact" className="sidebar__option">Contact</a>
            </div>
        </div>
    )
}

export default Sidebar
