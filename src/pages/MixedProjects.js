import React from "react"
import $ from "jquery"
import EasyLink from "../components/EasyLink"
import CollagesPage from "./Collages"

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

const SYMBOLS = ["☰", "☱", "☲", "☳", "☴", "☵", "☶"].sort(
  () => Math.random() - 0.5
)

class ProjectInfo {
  constructor(year, month, title, content = null, url = null, custom_time = false) {
    this.year = year
    this.month_n = MONTHS.indexOf(month)
    let time = custom_time === false ? month + " " + year : custom_time
    content = content ? " -- " + content : ''
    let timestr = time ? " (" + time + ")" : ''
    this.element = (<span>
      <EasyLink to={url}><strong>{title}</strong>{timestr}</EasyLink>
      {content}
    </span>)
  }
}

const projectsData = [
  new ProjectInfo(
    3000,
    'october',
    'surreal collages',
    null,
    CollagesPage.PAGE_PATH,
    null
  ),
  new ProjectInfo(
    2023,
    'april',
    'city of water',
    '[as kmodp] collaborative ep with cellartone and luc jardie.',
    "https://cellartone.bandcamp.com/album/city-of-water-2"
  ),
  /* new ProjectInfo(
    2023,
    'october',
    'crimée no. 7',
    '[as kmodp] album of electronic music.'
  ), */
  new ProjectInfo(
    3000,
    'october',
    'crimée no. 7',
    '[as kmodp] album of electronic music.',
    null,
    'ongoing'
  ),
  new ProjectInfo(
    2023,
    'may',
    'crimée no. 7a',
    '[as kmodp] single from upcoming album.',
    "https://kmodp.bandcamp.com/album/2023-021-crim-e-no-7a"
  )
].sort((a, b) => {
  if (a.year === b.year) {
    return b.month_n - a.month_n
  }
  return b.year - a.year
})

/* Display the list of CS projects */
export default class MixedProjectsPage extends React.Component {
  state = { data: projectsData }
  componentDidMount() {
    let checkScrollFade = () => {
      $('.fade-on-scroll').each(function (i) {
        var top_of_element = $(this).offset().top
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > top_of_element) {
          $(this).animate({ 'opacity': '1' }, { duration: 1000, queue: false });
        } else {
          $(this).animate({ 'opacity': '0' }, { duration: 0, queue: false });
        }
      });
    }
    checkScrollFade()
    $(window).scroll(function () {
      checkScrollFade()
    });
  }
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
  let symbol = SYMBOLS[props.idx % SYMBOLS.length]//(props.idx === props.len - 1) ? "┗" : "┣";
  return (<li bullet-style={symbol} className="fade-on-scroll">{props.data.
    element}
  </li>)
}