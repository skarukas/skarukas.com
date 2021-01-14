import React from "react"
import {Link} from "react-router-dom"
import $ from "jquery"
import "../style/welcome.css"

export default class WelcomePage extends React.Component {
    componentDidMount() {
        $('.welcome-content').fadeTo(2000, 1)
    }
    render() {
        return (
            <div id="welcome-page">
                <div className="welcome-content">
                    <Link to="/about" ><img className="welcome-image" src="img/welcome-img/beer.png"/></Link>
                    <h3>Stephen Karukas</h3>
                    <p>music, etc.</p>
                </div>
                {/* <div className="secondary-container">
                    <img className="welcome-secondary-image welcome-content" src="img/welcome-img/beer-cropped.jpg"/>
                    <img className="welcome-secondary-image welcome-content" src="img/welcome-img/beer-cropped2.jpg"/>
                </div> */}
            </div>

        )
    }
}