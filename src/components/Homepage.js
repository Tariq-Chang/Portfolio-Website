import React from "react";
import "./Homepage.css";
import { GitHub } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import { WhatsApp } from "@material-ui/icons";
import { KeyboardArrowDown } from "@material-ui/icons";
import Typing from "react-typing-animation"
function Homepage() {
    return (
        <div className="homepage" id="homepage">
            <div className="homepage__description">
                <div className="homepage__text">

                    <Typing speed={200} hideCursor={true}>
                        <h1 className="heading__text">I'm Tariq Hussain</h1>
                    </Typing>
                    <h3>I Know HTML, CSS, JS, REACT.JS, FIREBASE, REDUX.</h3>
                </div>
                <div className="homepage__links">
                    <a href="https://github.com/Tariq-Chang" className="homepage__link">
                        <GitHub style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://www.facebook.com/tariqhussain.chang.395" className="homepage__link">
                        <Facebook style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://whatsapp.com" className="homepage__link">
                        <WhatsApp style={{ fontSize: 40 }} />
                    </a>
                </div>
            </div>
            <div className="homepage__explore">
                <a href="#projects" className="homepage__exploreLink">
                    <KeyboardArrowDown style={{ fontSize: 60, color: "yellow" }} />
                </a>
            </div>
        </div>
    );
}

export default Homepage;
