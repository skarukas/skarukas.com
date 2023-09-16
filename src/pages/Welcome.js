import React from "react"
import {Link} from "react-router-dom"
import $ from "jquery"
import "../style/welcome.css"

import MixedProjectsPage from "./MixedProjects"
import EasyLink from "../components/EasyLink"
import AboutPage from "./About"

const WELCOME_INTRO = (
    <div>
        <div>
        I write music and play drums/percussion. I currently live in Seattle and work on <EasyLink to="https://cloud.google.com/vertex-ai/docs/generative-ai/embeddings/get-text-embeddings" id="google-team-link">large language models</EasyLink> at Google.
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
            $(e).on('mouseenter', () => selectImage(i+1))
        })

        function selectImage(idx) {
            $('.welcome-image').removeClass('image-selected')
            $(`.welcome-image:nth-child(${idx+1})`).addClass('image-selected')
        }
    }
    render() {
        document.title = "Stephen Karukas"
        return (
            <div id="welcome-page">
                <div className="welcome-content">
                    <div className="welcome-image-container">
                        <img className="welcome-image image-selected" src="img/welcome-img/google.jpg"/>
                        <img className="welcome-image" src="img/welcome-img/beats.jpg"/>
                        <img className="welcome-image" src="img/welcome-img/it-flows.jpg"/>
                        <img className="welcome-image" src="img/welcome-img/scriabin.jpg"/>
                        <img className="welcome-image image-selected" src="img/welcome-img/google.jpg"/>
                    </div>
                    
                    <h3>stephen karukas</h3>
                    <div className="welcome-subtitle">{WELCOME_SUBTITLE}</div>
                    <div className="welcome-links-container">
                        <div className="welcome-intro">{WELCOME_INTRO}</div>
                        {/* <h4 style={{color: "grey"}}>external links</h4> */}
                        <hr/>
                        <div className="welcome-links">
                            <p><EasyLink id="welcome-beats" to="https://www.instagram.com/p/CbGhbi2g722/">watch me play a beat</EasyLink></p>
                            <p><EasyLink id="welcome-compositions" to="https://www.youtube.com/watch?v=yiPUJJI4le4&list=PLofodEqi3NSZDBdYGyCaNYI58lMumx2WY&index=1">listen to music i wrote</EasyLink></p>
                            <p><EasyLink id="welcome-scriabin" to="https://www.youtube.com/watch?v=k70dESIKspE&list=PLofodEqi3NSYKQktUet-efcpJ3U3SD8sT&index=1">scriabin on marimba</EasyLink></p>
                            <p><EasyLink id="welcome-microtonal" to="https://github.com/search?q=user%3Askarukas+microtonal">microtonal tools</EasyLink></p>
                            <p><EasyLink to={AboutPage.PAGE_PATH} id="welcome-beats">more about me (bios, materials)</EasyLink></p>
                        </div>
                        <hr/>
                        <div className="arrow-image-container">
                          <img className="arrow-image" src="img/expand-down-icon.png"/>
                        </div>
                    </div>
                </div>
                <div className="projects">
                  <MixedProjectsPage></MixedProjectsPage>
                </div>
            </div>

        )
    }
}