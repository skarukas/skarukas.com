import React from "react"
import '../style/Project.css'
import projectsData from "../data/tech-projects.js"
import EasyLink from "../components/EasyLink"

const githubIcon = "img/github-icon.png"
const visitAppIcon = "img/open-link-icon.png"

/* Display the list of CS projects */
export default class ProjectsPage extends React.Component {
  static PAGE_PATH = "/code"
  static PAGE_NAME = "code"
  state = { data: projectsData }

  render() {
    document.title = "Stephen Karukas - Projects"
    if (!this.state.data) return this.props.fallback || null
    else return (
      <div id="projects-page">
        <h3 style={{ textAlign: "center", marginBottom: "5px" }}>☳ open-source code I wrote</h3>
        <p style={{ textAlign: "center", marginTop: "5px" }}>(mainly tools for microtonal music theory)</p>
        <div className="projects-page-container">
          <div className="project-container">
            {this.state.data.map((proj, idx) => <Project data={proj} key={idx} />)}
          </div>
        </div>
      </div>
    )
  }
}

function Project(props) {
  let proj = props.data
  let linkURL = proj.appURL || proj.repo || "#";

  return (
    <li className="project" key={proj.title}>

      <EasyLink to={linkURL}>
        <img className="project-image"
          alt={"Splash image for " + proj.title}
          src={proj.image} />
        <h3>
          {proj.title}
        </h3>
        {proj.description && <p>{proj.description}</p>}
      </EasyLink>
      <div className="project-icon-container">
        {proj.repo && (
          <EasyLink to={proj.repo} title="View code on Github">
            <img className="transparent-icon"
              alt="Github icon"
              src={githubIcon}>
            </img>
          </EasyLink>
        )}
        {proj.appURL && (
          <EasyLink to={proj.appURL} title="Visit the app">
            <img className="transparent-icon"
              alt="Visit app icon"
              src={visitAppIcon}>
            </img>
          </EasyLink>
        )}
      </div>
    </li>
  )
}