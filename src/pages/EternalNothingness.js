import React from "react"
import $ from "jquery"
import "../style/eternity.css"
import WelcomePage from "./Welcome"
import EasyLink from "../components/EasyLink"

export default class EternalNothingness extends React.Component {
    componentDidMount() {
        let audio = new Audio()
        audio.src = "audio/little-souls.mp3"
        audio.loop = true;
        audio.volume = 0.1;
        audio.load()
        audio.onload = () => audio.play()
        let triggered = false
        $(document).on('click', () => {
            if (!triggered) {

                audio.play()
            }
        })
        $('.eternal-center-container').children().each((i, e) => {
            $(e).delay(2000*i).fadeTo(2000, 1)
        })
    }

    render() {
        document.title = "Eternity"

        return (
            <div id="eternity">
                <div className="eternal-center-container">
                    <p>looks like you took a wrong turn.</p>
                    <p>however you got here, you will not be leaving.</p>
                    <p>welcome to eternity.</p>
                    <p>❖</p>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <p>you may now return <EasyLink to={WelcomePage.PAGE_PATH}>home</EasyLink></p>
                    <p>❖</p>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <p>or perhaps...</p>
                    <p><EasyLink to="https://egggame.org/">this</EasyLink> is what you're waiting for?</p>
                </div>
            </div>
        )
    }
}