import React from 'react'
import Service from './Service';
import "./Services.css";
function Services() {
    return (
        <div className="services" id="services">
            <h1>Services</h1>
            <div className="services__cards">
                <Service title="Web Designing" />
                <Service title="React Development" />
                <Service title="Front End Developer" />
                <Service title="Javascript Developer" />
                <Service title="Backend Developer" />
                <Service title="Redux and Firebase Service" />
            </div>

        </div>
    )
}

export default Services
