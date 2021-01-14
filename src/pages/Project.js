import React from "react"
import '../style/Project.css'
import projectsData from "../data/tech-projects.js"

const githubIcon = "img/github-icon.png"
const visitAppIcon = "img/open-link-icon.png"

/* Display the list of CS projects */
export default class ProjectsPage extends React.Component {
    state = { data: projectsData} 

    render() {
        document.title = "Stephen Karukas - Projects"
        if (!this.state.data) return this.props.fallback || null
        else return (
            <div id="projects-page">
                <div className="project-container">
                    {this.state.data.map((proj, idx) => <Project data={proj} key={idx}/>)}
                </div>
            </div>
        )
    }
}

function Project(props) {
    let proj = props.data
    let linkURL = proj.appURL || proj.repo || "#";
    console.log(proj.image)

    return (
        <li className="project" key={proj.title}>

            <a target="_blank" rel="noreferrer" href={linkURL}>
                <img className="project-image"
                     alt={"Splash image for " + proj.title}
                     src={proj.image} />
                <h3>
                    {proj.title}
                </h3>
                {proj.description && <p>{proj.description}</p>}
            </a>
            <div className="project-icon-container">
                {proj.repo && (            
                    <a title="View code on Github" target="_blank" rel="noreferrer" href={proj.repo}>
                        <img className="transparent-icon"
                             alt="Github icon"
                             src={githubIcon}>
                        </img>
                    </a>
                )}
                {proj.appURL && (
                    <a title="Visit the app" target="_blank" rel="noreferrer" href={proj.appURL}>
                        <img className="transparent-icon"
                            alt="Visit app icon"
                            src={visitAppIcon}>
                        </img>
                    </a>
                )}
            </div>
        </li>
    )
}