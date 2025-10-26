import React from "react"
import $ from "jquery"
import EasyLink from "../components/EasyLink"
import IFrameVideo from "../components/VideoPlayer";
import "../style/InProgress.css"
import "../style/About.css"
import AudioPlayer from "../components/AudioPlayer";

function ProjectIcon(props) {
    const size = 250
    return (<div className="in-progress-project-icon-container" >
        <div data-refid={props.id} className="project-icon">
            <button>
                <h3 className="centered-icon-text">{props.title}</h3>
                <img className="project-icon-img" src={props.src} width={size} height={size} />
            </button>
        </div>
    </div>)
}

/* Display the list of projects */
export default class InProgressPage extends React.Component {
    static PAGE_PATH = "/wip"
    static PAGE_NAME = "wip stuff"
    componentDidMount() {
        // Animate opening / closing of project dropdowns
        const $buttons = $('.project-icons').children().find('button')
        $buttons.on('click', event => {
            // Hide all projects and pause audio
            $('.in-progress-projects').children().hide(0)
            $('audio').trigger('pause')

            // Show and scroll to selected project
            const id = $(event.target).parents('.project-icon').data('refid')
            const $queryItem = $("#" + id)
            $queryItem.show(0)
            let offset = $queryItem.offset().top
            let scrollVal = offset - ($('#navbar').height() + 4)
            window.scroll({
                top: scrollVal,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
    render() {
        const projects = [
            DeathOfAFlower,
            KiwiGame,
            IntAudio,
            BellsAndMachines
        ]
        return (
            <div id="in-progress-page">
                <div style={{ textAlign: "center" }}>
                    <h3 >works in progress /::/ out of progress</h3>
                    <i style={{ opacity: 0.5 }}>Here are a few projects I'm either currently working on or put a lot of work
                        into in the past. Some of them will never be finished and are time capsules of rabbit holes I went down
                        at one point or another.</i>
                </div>
                <div className="project-icons">
                    {projects.map(project => <ProjectIcon
                        title={project.title}
                        src={project.src}
                        id={project.id}
                        key={project.id} />)}
                </div>
                <div className="in-progress-projects">
                    {projects.map(Project => <Project key={Project.id} />)}
                </div>
            </div>
        )
    }
}

const centeredImage = {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%"
}

class InProgressProject extends React.Component {
    render() {
        return (<div className="in-progress-project" id={this.constructor.id} key={this.constructor.id}>
            <h3>{this.constructor.title}</h3>
            <img src={this.constructor.src} width="400" style={centeredImage} />
            {this.content()}
        </div>)
    }
}

class DeathOfAFlower extends InProgressProject {
    static title = "☷ Traveling Boyfriend - Death of a Flower"
    static src = "img/projects/death-of-a-flower/carrington_pastoral.jpg"
    static id = "death-of-a-flower"

    content() {
        return (<div>
            <p>
                <EasyLink to="https://travelingboyfriend.bandcamp.com">Traveling Boyfriend</EasyLink> is a project
                I've been working on with Shelby Mass for a few years, which mixes folk, electronic, and historical music.
                Shelby's songs evoke the symbolism of mythology and dreams, to which I add
                found sound, percussion, and synthesizers.
            </p>
            <p>
                <i>Death of a Flower</i> is planned as our first EP, personifying the last
                flower of the summer drowning herself to allow winter to come. Here are some
                demos, in various stages of development.
            </p>
            <AudioSample src="audio/death-of-a-flower/girlhood-10-5-25.mp3" />
            <AudioSample src="audio/death-of-a-flower/inside-a-summer-flower-10-18-25.mp3" />
            <AudioSample src="audio/death-of-a-flower/cosmicomics-fish-song.mp3" />
            <AudioSample src="audio/death-of-a-flower/wyrbtw-10-25-25.mp3" />
            <AudioSample src="audio/death-of-a-flower/molds-pollens-worms.mp3" />
        </div>)
    }
}

class KiwiGame extends InProgressProject {
    static title = "☷ kiwi game"
    static src = "img/projects/kiwi-game/kiwi.png"
    static id = "kiwi-game"
    content() {
        return (<div>
            <p>
                Early in 2025 I started playing <EasyLink to="https://www.animalwell.net">Animal Well </EasyLink>
                on Nintendo Switch (highly recommend this game for anyone who likes really challenging puzzles and secrets).
                This and other Metroidvanias like Hollow Knight inspired me to try to make a little bird platformer
                game in Unity where you play as a kiwi, solving puzzles and finding secret areas.
            </p>
            <div style={{ textAlign: "center" }}>
                <IFrameVideo src="https://www.youtube.com/embed/edC2cbV470w?si=u-XoAzhCw5I1P9ml" />
            </div>
            <p>
                There's some character physics, very basic NPC and object interactions, some portals, a weather system,
                and a camera system based on which room you're in, like Animal Well.
            </p>
            <img src="img/projects/kiwi-game/bamboo.png" width="400" style={centeredImage} />
            <p>
                I also threw together a pathfinding system where the agent simulates a series of actions against a copy of the world's physics.
                Unfortunately it lags pretty heavily because it's very unoptimized and I wasn't able to get it to run
                in a background thread.
            </p>
            <img src="img/projects/kiwi-game/cattle-egret.png" width="400" style={centeredImage} />
            <p>
                Anyway, I still don't know much about game development and I may never finish this, but it was fun to learn.
            </p>
            <img src="img/projects/kiwi-game/kiwi.png" width="400" style={centeredImage} />
        </div>)
    }
}

class IntAudio extends InProgressProject {
    static title = "☲ intaudio"
    static src = "img/projects/intaudio/intaudio-AM.png"
    static id = "intaudio"
    content() {
        return (<div>
            <p>
                <i>AM synthesis with intaudio</i>
            </p>
            <p>
                <EasyLink to="https://github.com/skarukas/intaudio">intaudio</EasyLink> is a Javascript library
                for working with audio interactively in the browser, ideally enabling limitless signal processing
                and experimental musical instrument design on the Web.
            </p>
            <p>
                intaudio is declarative, so it lets you "connect" arbitrary components together, similar to how one might
                connect objects in Max/MSP. The Web Audio API (which this library uses, of course), is designed with this same general idea,
                but it only has a few top-level features such as oscillators and reverb, and it can be pretty unwieldy for complicated signal processing.
            </p>
            <p>
                The main totally-complete feature at this point that, in my opinion, makes this library really powerful
                is the ability to perform arbitrary sample-rate operations between signals.
            </p>

            <p>
                FM synthesis looks like this:
            </p>
            <img src="img/projects/intaudio/intaudio-FM.png" width="400" style={centeredImage} />
            <p>
                You can even have a sine wave control the L/R balance of a signal:
                <br />
                <i>
                    (I'm thinking about creating a utility like a <code>signal.pan(...)</code> method that would make this easier.)
                </i>
            </p>

            <img src="img/projects/intaudio/intaudio-lr-osc.png" width="550" style={centeredImage} />
            <p>
                One more example, which I think is really cool--a custom echo effect where the delay value is controlled by an oscillator.
            </p>
            <img src="img/projects/intaudio/intaudio-mod-delay.png" width="600" style={centeredImage} />
            <p>
                The endgame / wishlist of this library would unify audio signals, "event-based" data (slider controls), and STFT data
                seamlessly like the following:
            </p>
            <img src="img/projects/intaudio/intaudio-fft-slider.png" width="500" style={centeredImage} />
            <p>
                But this doesn't work yet!
            </p>
        </div>)
    }
}

class BellsAndMachines extends InProgressProject {
    static title = "☱ kmodp - broken machines"
    static src = "img/projects/bells-and-machines/hard-drive-thresholded.png"
    static id = "broken-machines"
    content() {
        return (<div>
            <p>
                <i>bells and machines</i> was planned as a second kmodp album in early 2025.
                It was about 70% finished at the end of 2024, when suddenly my hard drive failed irreperably
                and I lost all files from this project as well as all other projects, besides those
                I was either storing on Google Drive or had backed up previously.
            </p>
            <p>
                Thanks to some random bounces I was able to have a full (and relatively complete) version of
                <EasyLink to="https://open.spotify.com/album/10OsSIsdM9Q4gxfYuJoM4l?si=k3QS0vG6Q1SnUiWzhfDLRg"> lifelong life</EasyLink>, which
                I released in 2025, and all other tracks remained only as short portions or early versions of
                bounces.
            </p>
            <p>
                Here is <i>broken machines</i>, AKA what I have left of that album as well as what I'm
                doing to reimagine some of these recovered or lost sounds. Some of these are partial bounces
                while others are new tracks created in the same vein or from these bounces.
            </p>
            <hr />
            <img src="img/projects/bells-and-machines/bells-and-machines-old-cover.jpg" width="400" style={centeredImage} />
            <AudioSample src="audio/bells-and-machines/m-guit.mp3" />
            <AudioSample src="audio/bells-and-machines/bell_loop_with_june.mp3" />
            <hr />
            <img src="img/projects/bells-and-machines/kids_standing_near_wood_moody.jpg" width="400" style={centeredImage} />
            <AudioSample src="audio/bells-and-machines/fulcrum-1-v1.mp3" />
            <AudioSample src="audio/bells-and-machines/fulcrum-1-v2.mp3" />
            <AudioSample src="audio/bells-and-machines/dark-fulcrum-2.mp3" />
            <AudioSample src="audio/bells-and-machines/fulcrum-3.mp3" />
            <hr />
            <img src="img/projects/bells-and-machines/man-on-train.jpg" width="400" style={centeredImage} />
            <p>
                I am experimenting with layering spoken voices for a few tracks, using samples from the
                <EasyLink to="https://commonvoice.mozilla.org/en"> Mozilla Common Voice dataset </EasyLink>
                and public domain audiobooks from <EasyLink to="https://librivox.org"> Librivox</EasyLink>.
                I layer and distort these voices to cause dissociation from the content of any one narrative, as if one
                is trying to consume multiple types of information at once or has fallen asleep while
                listening to spoken voices.
            </p>
            <p>
                To me this is a weird combination of unnerving and calming. Growing up as a pretty shy child who was
                exhausted by social situations like holiday parties or family visits, I have memories
                like this, being half-asleep in the corner of a room while people were talking around me.
            </p>
            <AudioSample src="audio/bells-and-machines/dont-touch-me-4-19-25.mp3" />
            <AudioSample src="audio/bells-and-machines/ssommeil-9-7-25.mp3" />
            <AudioSample src="audio/bells-and-machines/anything-i-do.mp3" />
            <hr />
            <img src="img/projects/bells-and-machines/cubes.jpg" width="300" style={centeredImage} />
            <p>
                I came up with a track called <i>zero-nine</i> consisting of repeating commands
                from an audio speech commands dataset over a slow rhythmic backdrop made from sliced field recordings.
                This was a full track, but unfortunately it was completely lost except for this
                segment that I bounced at some point.
            </p>
            <AudioSample src="audio/bells-and-machines/zero-nine.mp3" />
            <p>
                I played around with these ideas in a few other unfinished tracks as well.
            </p>
            <AudioSample src="audio/bells-and-machines/fast-loop.mp3" />
            <AudioSample src="audio/bells-and-machines/tremble-plus-pécheur-9-7-25.mp3" />
            <hr />
            <img src="img/projects/bells-and-machines/canning-machine.jpg" width="400" style={centeredImage} />
            <p>
                This was going to be the last track on <i>bells and machines</i>, and I was able to
                find an (almost) full bounce of it.
            </p>
            <p>
                I used a simple synth patch without velocity control and a fixed set of voices that cut
                out when new ones are introduced. With the lack of expression of the instrument and the
                meandering rhythms, I feel that these ideas could go on forever, satisfied with simply
                chasing their own tails.
            </p>
            <AudioSample src="audio/bells-and-machines/closing.mp3" />
        </div >)
    }
}

function AudioSample(props) {
    const parts = props.src.split("/")
    let fname = parts[parts.length - 1]
    return (
        <p>
            <code>{fname}</code>
            <span><AudioPlayer src={props.src} /></span>
        </p>
    )
}

class MaxForLive extends InProgressProject {
    static title = "☶ max for live devices"
    static src = null
    static id = "max-for-live"
    content() {
        return (<div>
            <h4>Advanced AM + FM synthesis</h4>
            <p>
                I was looking into building an AM effect, and I found that ring modulation and AM synthesis
                are effectively the same thing, with some modulations to the carrier. So I started working
                on a split-sideband AM processor using <code>hilbert~</code> (there are a lot of tutorials on this).
            </p>
            <p>
                It turns out that single-band AM sythesis is equivalent to frequency shifting:
            </p>
            <p>
                Because we're able to shift the frequency, we can actually modulate the frequency with an
                arbitrary wave. I think this is really interesting, because now we are able to modulate the
                frequency / frequencies in a signal <i>after</i> the signal is defined. So in short, we can
                take an audio file containing a sine wave at 440 Hz and use this technique to make the
                frequency oscillate between 400 and 480 Hz.
            </p>
        </div>)
    }
}