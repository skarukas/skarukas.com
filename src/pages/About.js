import React from "react";

import "../style/About.css"

/* function loadData() {

    return new Promise(resolve => {
        setTimeout(() => resolve(comp), 1000)
    }).then(data => {
        return {data}
    })
}
 */
/* export default class AboutPage extends React.Component {
    state = {}
    componentDidMount() {
        let data = <div id="about-page">
            <img className="bio-image" src="assets/img/karukas-image.jpg"/>
            <Bio />
            <PDF file="./assets/pdf/tech-resume.pdf" name="Tech Resume"/>
            <PDF file="./assets/pdf/composition-resume.pdf" name="Composition Resume"/>
        </div>

        setTimeout(() => {
            this.setState({ data })
        }, 1000)
    }

    render() {
        if (this.state.data) return this.state.data
        return <Loader />
    }
} */

export default function AboutPage() {
    return (
        <div id="about-page">
            <div className="bio-container">
                <img className="bio-image" src="img/karukas-image.jpg" alt="Stephen Karukas in IU electronic music studio"/>
                <Bio />
            </div>
            <PDF file="pdf/tech-resume.pdf" name="Tech Resume"/>
            <PDF file="pdf/composition-resume.pdf" name="Composition Resume"/>
        </div>
    )
}


function Bio() {
    return (
        <div className="bio-text-container">
            <h3>Music Bio</h3>
            <p>
                Stephen Karukas is a recent graduate of the Indiana University Jacobs School 
                of Music, where he received degrees in music composition and percussion 
                performance, with additional studies in computer music, computer science, 
                and jazz studies. He has studied drumset with Steve Houghton, percussion 
                with Kevin Bobo, John Tafoya, and Joseph Gramley, and composition with 
                Claude Baker, P.Q. Phan, and Don Freund. He also attended Interlochen 
                Arts Academy as a student of John Alfieri. He has been a performance 
                fellow at nief-norf and a student in electronic music programming at 
                IRCAM (Paris, France). 
            </p>
            <p>   
                With work ranging in style from ambient and meditative 
                to impressionistic to excitingly rhythmic, Karukas has composed music for 
                ensembles such as Fifth House Ensemble, the Indiana University Percussion 
                Ensemble, and California-based ensemble Definiens. He has also produced solo 
                and duo works through collaborations with Daniel Myers (Elements for multiple 
                percussion solo), the Hutchens/Myers Duo (It flows for saxophone and marimba), 
                Jacob Lipham (Bad Number for solo timpani and To Live and Die in the Wild for 
                multiple percussion solo), and Paul Millette (blue-gray for solo marimba). 
                Recently, blue-gray received the Honorable Mention in the 2019 PASIC Composition 
                Contest. Other honors include Honorable Mention in the 2018 SCI/ASCAP Student 
                Commission Competition and selection in multiple calls for scores by various 
                ensembles in the United States and abroad.
            </p>
            <p>   
                His music has been performed at universities around the United States and at 
                events such as RED NOTE Music Festival, the Midwest Composers Symposium, 
                Frontwave New Music, and the Navy Band Saxophone Symposium. Recent highlights 
                include a performance of his orchestral work In a Breath, Ending by the Indiana 
                University Concert Orchestra and a performance of Elements for multiple 
                percussion solo by percussionist Cameron Leach at the TUTTI Festival at 
                Denison University.
            </p>
            <p>  
                In addition to composition, Karukas is a percussionist, having performed as an 
                orchestral percussionist with the Terre Haute Symphony Orchestra, Columbus Indiana 
                Philharmonic, and the Carmel Symphony Orchestra in Indiana. As a member of Indiana 
                University's top ensemble the Philharmonic Orchestra, he performed under the baton 
                of artists such as Carl St. Clair (Pacific Symphony), Franz Welser-Möst 
                (Cleveland Orchestra), Giancarlo Guerrero (Nashville Symphony), Federico Cortese 
                (Boston Youth Symphony Orchestra), and Marzio Conti (Oviedo Filarmonia).
            </p>
            <p>
                Karukas performed at PASIC 2018 as a member of the Indiana University Percussion 
                Ensemble, premiering new works by Brian Blume and Kevin Bobo as one of three undergraduates 
                in the ensemble. He has also performed as a drummer in jazz combos at Indiana 
                University, as well as in the IU Opera Theatre's production of The Music Man and 
                IU Theatre's production Stardust Road featuring the music of Hoagy Carmichael.
            </p>
            <p>  
                His works are available from Tapspace and C. Alan Publications, as well as from 
                his website, skarukas.com. He also maintains an active YouTube Channel of his 
                performances and compositions, including a 2018 project arranging and recording 
                selected Poemes and Preludes of Alexander Scriabin. He currently works as a Spring 
                2020 Undergraduate Instructor in the computer science department at IU.
            </p>
        </div>
    )
}

function PDF(props) {
    return (
        <div className="pdf-container">
            <a target="_blank" rel="noreferrer" href={props.file}>
                <img src="img/pdf-icon.png" alt="PDF Icon"/>
                <p>{props.name}</p>
            </a>
        </div>
    )
}