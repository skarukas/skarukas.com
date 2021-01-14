import React from "react"
import {Link} from "react-router-dom"
import $ from "jquery"
import "../style/welcome.css"

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
                    <Link to="/about">
                        <div className="welcome-image-container">
                            <img className="welcome-image image-selected" src="img/welcome-img/beer.png"/>
                            <img className="welcome-image" src="img/welcome-img/beats.png"/>
                            <img className="welcome-image" src="img/welcome-img/it-flows2.png"/>
                            <img className="welcome-image" src="img/welcome-img/scriabin.png"/>
                            <img className="welcome-image" src="img/springs.png"/>
                        </div>
                    </Link>
                    
                    <h3>stephen karukas</h3>
                    <div className="welcome-subtitle">music, etc.</div>
                    <div className="welcome-links-container">
                        <hr/>
                        <div className="welcome-links">
                            <p><a id="welcome-beats" href="https://www.instagram.com/p/CJ7PGy0gyqa/" target="_blank">watch me play beats</a></p>
                            <p><a id="welcome-compositions" href="https://www.youtube.com/watch?v=yiPUJJI4le4&list=PLofodEqi3NSZDBdYGyCaNYI58lMumx2WY&index=1" target="_blank">listen to music i wrote</a></p>
                            <p><a id="welcome-scriabin" href="https://www.youtube.com/watch?v=k70dESIKspE&list=PLofodEqi3NSYKQktUet-efcpJ3U3SD8sT&index=1" target="_blank">scriabin on marimba</a></p>
                            <p><a id="welcome-microtonal" href="https://github.com/search?q=user%3Askarukas+microtonal" target="_blank">microtonal tools</a></p>
                            
                        </div>
                        <hr/>
                    </div>
                </div>
                {/* <div className="secondary-container">
                    <img className="welcome-secondary-image welcome-content" src="img/welcome-img/beer-cropped.jpg"/>
                    <img className="welcome-secondary-image welcome-content" src="img/welcome-img/beer-cropped2.jpg"/>
                </div> */}
            </div>

        )
    }
}