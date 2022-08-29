import React from "react"
import {Link} from "react-router-dom"
import $ from "jquery"
import "../style/welcome.css"

const WELCOME_INTRO = (
    <div>
        <div>
        I like to write music and play drums/percussion. I currently live in Seattle and work on document-understanding AI at Google.
        </div>
    </div>
)
const WELCOME_SUBTITLE = "music + tech"

export default class WelcomePage extends React.Component {
    componentDidMount() {
        $('.welcome-content')
            .fadeTo(2000, 1)
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
                            <p><a id="welcome-beats" href="https://www.instagram.com/p/CbGhbi2g722/" target="_blank">watch me play a beat</a></p>
                            <p><a id="welcome-compositions" href="https://www.youtube.com/watch?v=yiPUJJI4le4&list=PLofodEqi3NSZDBdYGyCaNYI58lMumx2WY&index=1" target="_blank">listen to music i wrote</a></p>
                            <p><a id="welcome-scriabin" href="https://www.youtube.com/watch?v=k70dESIKspE&list=PLofodEqi3NSYKQktUet-efcpJ3U3SD8sT&index=1" target="_blank">scriabin on marimba</a></p>
                            {/* <p><a id="welcome-microtonal" href="https://github.com/search?q=user%3Askarukas+microtonal" target="_blank">microtonal tools</a></p> */}
                            <p><Link to="/about" id="welcome-beats">more about me (bios, materials)</Link></p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>

        )
    }
}