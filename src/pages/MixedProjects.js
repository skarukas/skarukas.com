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
    April 29, 2026 — Bongo Funhouse (improvised percussion + electronics) @ Wayward Music Series.
  </span>),
  (<span>
    December 2025 — <EasyLink to="https://pdimagearchive.org/images/465beb37-7ca3-4ece-9e34-cdeb836d586f/">see</EasyLink> you later, <b>I'm moving to <EasyLink to="https://pdimagearchive.org/images/c71753a0-8c40-4e41-b6fd-a5af3bb28f50/">London</EasyLink></b> to help self-driving <EasyLink to="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1fmrojp_93d41eea.jpeg?region=0,0,400,225">cars</EasyLink> drive themselves better.
  </span>),
  (<span>
    September 20, 2025 — <EasyLink to="https://www.waywardmusic.org/event/splinter-percussion/">Splinter Percussion @ Wayward Music Series.</EasyLink>
  </span>),
  (<span>
    August 29, 2025 — Splinter Percussion @ <EasyLink to="https://www.livemusicproject.org/events/158451/live-music-project-11th-birthday-bash-feat-isabel-hagen">Live Music Project's 11th Anniversary</EasyLink>
  </span>),
  (<ProjectInfo
    year={2025}
    month={'march'}
    title={'inconnu'}
    content={'electronic music collaboration between kmodp and Køemner.'}
    url={"https://open.spotify.com/track/3lkEvOKH2c3w8oJErmS8Nl?si=ab029a55a1eb4873"} />)
  ,
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