import React from "react";
import "../styles/Projects.css";
import { FiGithub } from "react-icons/fi";
import { BsFolderFill} from "react-icons/bs";

const Projects = () => {
    const projects = {
        "MyMusicApp" : {
            desc:
            "A music player application that utilizes the Spotify API. Lets users log in and listen to full song playback.",
            techStack: "React, Javascript, CSS",
            link: "https://github.com/Armanchi/MyMusicApp"
        },
        "My Todo List": {
            desc:
            "A single page to do list application to help keep track of tasks to be done each day.",
            techStack: "React, Javascript, CSS",
            link: "https://github.com/Armanchi/react-cockatoo"
        },
        "Manga List": {
            desc:
            "An application created for me to keep track of and rate manga I've read.",
            techStack: "Node.js, Express, EJS, CSS, MongoDB",
            link: "https://github.com/Armanchi/node-final-project"
        }
    }
    return(
        <div id="projects">
            <div section-header>
                <span className="section-title">projects</span>
            </div>
            <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                    <BsFolderFill className="folder"/>
                    </div>
                    <a href={projects[key]["link"]} className="git-Link">{<FiGithub />}</a>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <footer>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                  </footer>
                </li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Projects;