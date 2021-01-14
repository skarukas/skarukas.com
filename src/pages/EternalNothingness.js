import React from "react"
import $ from "jquery"
import "../style/eternity.css"

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
                $('.eternal-center-container').children().each((i, e) => {
                    $(e).delay(4000*i).fadeTo(2000, 1)
                })
                audio.play()
            }
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
                </div>
            </div>
        )
    }
}