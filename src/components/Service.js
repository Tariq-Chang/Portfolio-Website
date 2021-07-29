import React from 'react'
import "./Service.css";

function Service({ title }) {
    let ReactLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";
    return (
        <div className="service__card">
            <img src={ReactLogo} alt="" />
            <h1>{title}</h1>
            <p>I can build react js web applications for you!</p>
        </div>
    )
}

export default Service
