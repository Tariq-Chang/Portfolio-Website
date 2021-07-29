import React from "react";
import "./Project.css";
import codingQuiz from "../images/coding-quiz.png";
import { GitHub } from "@material-ui/icons";

function Project({ gitLink, surgeLink }) {
    return (
        <div className="project">
            <div className="project__picture">
                <img src={codingQuiz} alt="coding quiz" />
            </div>
            <div className="project__info">
                <h1>Coding Quiz Game</h1>
                <h4>Created With</h4>
                <h4>HTML + CSS</h4>
                <h4>REACT + REDUX</h4>

                <div className="project__links">
                    {gitLink && (
                        <a href={gitLink} target="_blank" rel="noreferrer" className="project__link">
                            <GitHub style={{ fontSize: 30 }} />
                        </a>
                    )}
                    {surgeLink && (
                        <a href={surgeLink} className="project__link">
                            <img src="https://surge.sh/images/logos/svg/surge-logo.svg" alt="" />
                        </a>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Project;
