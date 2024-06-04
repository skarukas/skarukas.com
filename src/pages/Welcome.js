import React from "react"
import $ from "jquery"
import "../style/welcome.css"

import MixedProjectsPage from "./MixedProjects"
import EasyLink from "../components/EasyLink"
import AboutPage from "./About"
import BirthYearPage from "./BirthYear"
import IFrameVideo from "../components/VideoPlayer"

const WELCOME_INTRO = (
  <div>
    <div>
      I write music and play drums/percussion. I currently live in Seattle, working on <EasyLink to="https://cloud.google.com/vertex-ai/docs/generative-ai/embeddings/get-text-embeddings" id="google-team-link">large language models</EasyLink> at Google and releasing electronic music as <EasyLink to="https://kmodp.net">kmodp</EasyLink>.
    </div>
  </div>
)
const WELCOME_SUBTITLE = "music + tech"

export default class WelcomePage extends React.Component {
  static PAGE_PATH = "/"
  static PAGE_NAME = "welcome"
  componentDidMount() {
    $('.welcome-content')
      .fadeTo(2000, 1)
    $('.arrow-image')
      .delay(1000)
      .fadeTo(1000, 0.3)
    $('.welcome-links-container')
      .delay(1000)
      .fadeTo(1000, 1)
    $('.welcome-links').on('mouseleave', () => selectImage(0))
    $('.welcome-links').children().each((i, e) => {
      $(e).on('mouseenter', () => selectImage(i + 1))
    })

    function selectImage(idx) {
      $('.welcome-image').removeClass('image-selected')
      let elem = $(`.welcome-image:nth-child(${idx + 1})`)
      elem = elem.length ? elem : $(".welcome-image:first-child")
      elem.addClass('image-selected')
    }
  }
  render() {
    document.title = "Stephen Karukas"
    return (
      <div id="welcome-page">
        <div className="welcome-content">
          <div className="welcome-image-container">
            <img className="welcome-image image-selected" src="img/welcome-img/google.jpg" />
            <img className="welcome-image" src="img/welcome-img/google.jpg" />
            <img className="welcome-image" src="img/welcome-img/crimee.png" />
            <img className="welcome-image" src="img/welcome-img/it-flows.jpg" />
            <img className="welcome-image" src="img/welcome-img/scriabin.jpg" />
            <img className="welcome-image" src="img/lattice-story.png" />
          </div>

          <h3>stephen karukas</h3>
          <div className="welcome-subtitle">{WELCOME_SUBTITLE}</div>
          <div className="welcome-links-container">
            <div className="welcome-intro">{WELCOME_INTRO}</div>
            {/* <h4 style={{color: "grey"}}>external links</h4> */}
            <hr />
            <div className="welcome-links">
              <p><EasyLink to={AboutPage.PAGE_PATH} id="welcome-about">about me</EasyLink></p>
              <p><EasyLink id="welcome-kmodp" to="https://open.spotify.com/album/7Jwz9fVitkJ25I8S0aTrft?si=_yYCGgWpTXqoW0r7NT0zTA">listen to the new kmodp album</EasyLink></p>
              <p><EasyLink id="welcome-compositions" to="https://www.youtube.com/watch?v=yiPUJJI4le4&list=PLofodEqi3NSZDBdYGyCaNYI58lMumx2WY&index=1">listen to my instrumental music</EasyLink></p>
              <p><EasyLink id="welcome-scriabin" to="https://www.youtube.com/watch?v=k70dESIKspE&list=PLofodEqi3NSYKQktUet-efcpJ3U3SD8sT&index=1">scriabin on marimba</EasyLink></p>
              <p><EasyLink id="welcome-microtonal" to="https://github.com/search?q=user%3Askarukas+microtonal">microtonal tools</EasyLink></p>
              <p>FAQ: what is my birth year? Click <EasyLink to={BirthYearPage.PAGE_PATH}>here</EasyLink>.</p>
            </div>
            <hr />
            <div className="arrow-image-container">
              <img className="arrow-image" src="img/expand-down-icon.png" />
            </div>
          </div>
        </div>
        <div className="projects">
          <MixedProjectsPage></MixedProjectsPage>
          <div>
            <h3 style={{ textAlign: "center" }}>☴ some videos</h3>
            <IFrameVideo src="https://drive.google.com/file/d/1_AqsFgK9-wc6NtMQ-djtULqo0sMoNISx/preview" />
            <IFrameVideo src="https://www.youtube.com/embed/yiPUJJI4le4?si=nfbAPTQK_HFgKPY7" />
            <IFrameVideo src="https://www.youtube.com/embed/oIgDlbJkTwk?si=km8mUIFh2nSEKzEg" />
            <IFrameVideo src="https://www.youtube.com/embed/HZonuuFCC5Y?si=PAss0t_jTJH5Wd4H" />
            <IFrameVideo src="https://www.youtube.com/embed/M0sxQlrMhrA?si=g5-t_9pdf6oOyiCa" />
            <IFrameVideo src="https://www.youtube.com/embed/jwlZwQ1BCDM?si=-yO-fepAy1AwOO4u" />
          </div>
        </div>
      </div>
    )
  }
}