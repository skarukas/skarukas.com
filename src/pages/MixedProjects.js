import React from "react"
import EasyLink from "../components/EasyLink"

const SYMBOLS = ["☰", "☱", "☲", "☳", "☴", "☵", "☶"].sort(
  () => Math.random() - 0.5
)

function ProjectInfo(props) { //year, month, title, content = null, url = null, custom_time = false) {
  let time = props.month + " " + props.year
  let content = props.content ? " — " + props.content : ''
  let timestr = time ? " (" + time + ")" : ''
  return (<span>
    <EasyLink to={props.url}><strong>{props.title}</strong>{timestr}</EasyLink>
    {content}
  </span>)
}

const projectsData = [
  (<span>
    September 20, 2025 — Splinter Percussion @ <EasyLink to={"https://www.waywardmusic.org/"}>Wayward Music Series.</EasyLink>
  </span>),
  (<span>
    March 21, 2025 — <EasyLink to={"https://www.waywardmusic.org/event/bongo-funhouse/"}>Bongo Funhouse (improvised percussion trio) @ Wayward Music Series.</EasyLink>
  </span>),
  (<ProjectInfo
    year={2024}
    month={'february'}
    title={'crimée no. 7'}
    content={'[as kmodp] album of electronic music.'}
    url={"https://kmodp.net/#/crimee-no-7"} />)
  ,
  (<ProjectInfo
    year={2024}
    month={'february'}
    title={'rain on the sea'}
    content={'single by Traveling Boyfriend (arrangement / production).'}
    url={"https://travelingboyfriend.bandcamp.com/track/rain-on-the-sea"} />),
  (<ProjectInfo
    year={2023}
    month={'april'}
    title={'city of water'}
    content={'[as kmodp] collaborative ep with cellartone and luc jardie.'}
    url={"https://cellartone.bandcamp.com/album/city-of-water-2"} />),
]

/* Display the list of projects */
export default class MixedProjectsPage extends React.Component {
  state = { data: projectsData }
  render() {
    if (!this.state.data) return this.props.fallback || null
    else {
      let len = this.state.data.length;
      return (
        <div id="mixed-projects-page">
          <h3 style={{ textAlign: "center" }}>☷ recent projects</h3>
          <ul className="mixed-project-container">
            {this.state.data.map((proj, idx) => <Project idx={idx} len={len} data={proj} key={idx} />)}
          </ul>
        </div>
      )
    }
  }
}

function Project(props) {
  let symbol = SYMBOLS[props.idx % SYMBOLS.length]
  return (<li bullet-style={symbol} className="fade-on-scroll">{props.data}
  </li>)
}