import React from "react"
import $ from "jquery"

// Smart MP3 audio player with autoplay
export default class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.audioRef = React.createRef()
    }
    componentDidMount() {
        const $thisAudio = $(this.audioRef.current)
        $thisAudio.on('playing', () => {
            // Make sure only this audio is running
            $('audio').not($thisAudio).trigger('pause')
        }).on('ended', () => {
            // Enable autoplay to any following audio on the page
            const $allAudios = $('audio').filter(':visible')
            const idx = $allAudios.index($thisAudio)
            $allAudios.eq(idx + 1).trigger('play')
        })
    }
    render() {
        return (
            <audio controls ref={this.audioRef}>
                <source src={this.props.src} type="audio/mp3"></source>
                Audio unavailable.
            </audio>
        )
    }
}