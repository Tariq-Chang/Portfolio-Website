import React from 'react'
import Project from './Project';
import "./Projects.css";
function Projects() {
    let surgeLink = "http://coding-quiz.surge.sh";

    let gitLink = "https://tariq-chang.github.io/coding-quiz/";
    return (
        <div className="projects" id="projects">
            <h1 className="projects__heading">Projects</h1>

            <div className="projects__gridContainer">
                <Project gitLink={gitLink} surgeLink={surgeLink} />
                <Project gitLink={gitLink} surgeLink={surgeLink} />
                <Project gitLink={gitLink} surgeLink={surgeLink} />
                <Project gitLink={gitLink} surgeLink={surgeLink} />

            </div>

        </div >
    )
}

export default Projects
