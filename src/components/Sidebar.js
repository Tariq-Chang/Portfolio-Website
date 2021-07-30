import { Avatar } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import profile from "../images/profile.jpg";
import "./Sidebar.css";
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from '@material-ui/icons/Close';
import { TrendingUpRounded } from '@material-ui/icons';
function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const sidebar = useRef();
    const handleToggle = () => {
        if (!isOpen) {
            sidebar.current.style.display = "block";
        } else {
            sidebar.current.style.display = "none";
        }

        setIsOpen(!isOpen);
    }

    return (
        <div className="wrapper" >
            <div className="sidebar__hameburgerMenu"  >
                <MenuIcon className="hameburger__icon" onClick={handleToggle} />
            </div>

            <div className="sidebar" ref={sidebar} >
                <div className="sidebar__profile">
                    {/* <img src={profile} alt="profile" className="sidebar__profileImage" /> */}
                    <Avatar src={profile} style={{ width: "150px", height: "155px" }} className="sidebar__profileImage" />
                </div>
                <p>Tariq Hussain</p>

                <hr style={{ color: "yellow", margin: "0px 20px" }} />
                <div className="sidebar__options">
                    <a href="#homepage" className="sidebar__option">Home</a>
                    <a href="#projects" className="sidebar__option">Projects</a>
                    <a href="#services" className="sidebar__option">Services</a>
                    <a href="#contact" className="sidebar__option">Contact</a>
                </div>
            </div >
        </div>


    )
}

export default Sidebar
