import redshift from "../style/modules/redshift.module.css"
import hutchens2021 from "../style/modules/hutchens2021.module.css"
import sutherlin2021 from "../style/modules/sutherlin2021.module.css"

import { Link } from "react-router-dom"
import AudioPlayer from "../components/AudioPlayer"
 
const newsData = [
    {
        id: "sutherlin-2021-consortium",
        title: "Consortium announcement: percussion quartet! (Denton Sutherlin, leader)",
        subtitle: "join the commissioning consortium for a new work for percussion quartet",
        tags: ['commission', 'music', 'percussion'],
        date: new Date(2020, 11, 1),
        content: (
            <div className={sutherlin2021.main}>
                <img src="img/chamber-perc.jpg" alt="Background" className={sutherlin2021['background']}></img>
                <div className={sutherlin2021.text}> 
                    <h4>The Project</h4>
                    <p>
                        <a href="https://dentonsutherlin.weebly.com/">Denton Sutherlin</a>, percussion director at 
                        Concord Community Schools, is leading a commission for a new piece for percussion quartet.
                        This piece will be exciting, drum-heavy and groovy, in the same style as music such as
                        <a href="https://www.youtube.com/watch?v=pOcH6nFjv7w" target="_blank"> Sharpened Stick</a> by Brett William Dietz and
                        <a href="https://www.youtube.com/watch?v=EuVC2sc2PyI" target="_blank"> Tilted Spheres</a> by Dave Hall, with further inspiration
                        taken from fast breakbeats and drum corps snare features. Each player is featured in solo, duo,
                        or full ensemble breaks.
                    </p> 
                    <p> 
                        It will be about <strong>5-7 minutes</strong> in length, and the difficulty will 
                        be suitable for players at an advanced high school or college level. The expected completion date is <strong>February 1, 2021</strong>. 
                    </p>

                    <h4>Join</h4>
                    <p>
                        You can become a part of the consortium! The fee is <strong>$150</strong> per group, which includes
                        the score and parts to this new piece, exclusive performance rights, and an opportunity to help bring 
                        a new work into existence. To sign up, contact me via <a href="mailto:stephen.karukas@gmail.com">email</a>.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "hutchens-2021-consortium",
        title: "Consortium announcement: mixed quartet! (Andrew Hutchens, leader)",
        subtitle: "join the commissioning consortium for a new work for bari sax, bass clarinet, percussion, and piano",
        tags: ['commission', 'music', 'saxophone', 'percussion', 'clarinet', 'piano'],
        date: new Date(2021, 0, 13),
        content: (
            <div className={hutchens2021.main}>
                <img src="img/hutchens-myers.jpg" alt="Background" className={hutchens2021['background']}></img>
                <div className={hutchens2021.text}> 
                    <p>
                        I have had the great fortune in the past to collaborate with <a href="https://www.andrew-hutchens.com/bio">Andrew Hutchens</a>, 
                        a saxophonist whose interest in my music led to the commission of my piece<Link to="/works?work-id=it-flows"> It flows </Link> 
                        for marimba and alto saxophone, which I wrote for his <a href="https://www.andrew-hutchens.com/hutchensmyers-duo">duo 
                        with percussionist Daniel Myers</a>. His <a href="https://www.andrew-hutchens.com/commissioning-project">current project </a> 
                        consists of commissions of new works from a wide variety of composers, and I'm honored to be one of them.
                    </p>
                    <h4>The Project</h4>
                    <p>
                        The commission is for a brand new piece for a mixed quartet: <strong>bass clarinet, baritone sax, percussion, and piano</strong>, about <strong>7-9 minutes</strong> in length.
                        The expected completion date is <strong>May 15, 2021</strong>. The piece will be similar to the more energetic parts of <em>It flows</em>, with more emphasis on exploring the 
                        different timbres of the ensemble. 
                    </p>
                    <h5>Listen to selections from <em>It flows</em>:</h5>
                    <AudioPlayer src="audio/it-flows-preview.mp3"/>
                    <p>
                        Though not a minimalist work by design, the sound palette of this piece will also take inspiration from the rhythmic
                        complexities of the music of David Lang as well as some ensemble effects found in the works of Steve Reich, with some 
                        inspiration even coming from video game music!
                    </p>
                    <h4>Join</h4>
                    <p>
                        You can become a part of the consortium! The fee is <strong>$50</strong>, which includes
                        the score and parts to this new piece, exclusive performance rights, and an opportunity to help bring 
                        a new work into existence. To sign up, use <a href="https://forms.gle/SomKJ1pPf7am2aPF9">this Google Form</a>. For any 
                        questions, reach out to me via <a href="mailto:stephen.karukas@gmail.com">email</a>.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "ascap-commission",
        title: "ASCAP Commission / New Work for Stephen Burns and Fulcrum Point New Music Project",
        tags: ['commission', 'music', 'trumpet', 'percussion'],
        date: new Date(2021, 0, 1),
        content: (
            <div>
                <p>
                    This past year, I was the winner of the <a href="https://wp.societyofcomposers.org/students/ascap/#:~:text=SCI%2C%20in%20conjunction%20with%20ASCAP,to%20a%20graduate%20student%20composer.">ASCAP Commission Competition</a>. 
                    The commission is for a piece for trumpet and percussion quartet, written
                    for trumpet virtuoso <a href="https://www.newmusicusa.org/profile/stephen-burns/">Stephen Burns </a> 
                    and members of the <a href="https://www.fulcrumpoint.org/">Fulcrum Point New Music Project</a>,
                    a new music ensemble based in Chicago, IL.
                </p>
                <p>
                    I'll be working on this piece the first part of 2021, with a recording project or performance(s) 
                    hopefully coming late 2021. More info available soon!
                </p>
            </div>
        )
    },
    {
        id: "redshift-announcement",
        title: "Redshift for solo marimba",
        date: new Date(2020, 4, 1),
        tags: ['commission', 'music', 'solo', 'percussion', 'marimba'],
        content: (
            <div>
                <img src="img/covers/redshift.jpg" alt="Redshift cover" className={redshift.cover}></img>
                <div className={redshift.textContainer}>
                    <p>
                        I just finished a new work for solo marimba, <em>Redshift</em>, for a consortium 
                        led by my IU colleague Josh Fulford. Though the circumstances mean a major delay
                        for planned performances, this may be my favorite piece I've written, and I can't wait
                        to hear it performed. Big thanks to the members of the consortium for 
                        making this possible. It was an honor to write for a group of such fantastic 
                        performers / composers / educators / friends, and you should check them out!
                    </p>
                    <ul>
                        <li><a href="https://www.robertclaysonpercussion.com/">Robert Clayson</a></li>
                        <li><a href="https://www.instagram.com/zachcsoloist/">Zachary Cook</a></li>
                        <li><a href="https://www.youtube.com/channel/UC5I3jujFqysj2sYYq9NE6Ag">Josh Fulford</a></li>
                        <li><a href="http://www.d131music.org/joe-kulick---band.html">Joe Kulick</a></li>
                        <li><a href="http://www.cleachmusic.com/">Cameron Leach</a></li>
                        <li><a href="https://www.instagram.com/sophialo.percussion/">Chin-Li Sophia Lo</a></li>
                        <li><a href="http://c-alanpublications.com/millette-paul/">Paul Millette</a></li>
                        <li><a href="https://russellwhartonmusic.com/">Russell Wharton</a></li>
                    </ul>
                    <p>Here's a preview of the piece:</p>
                    <audio controls>
                        <source type="audio/mp3" src="audio/redshift-preview.mp3"></source>
                    </audio>
                    <p>For more information, check it out on the <Link to="/works?work-id=redshift">works page</Link>.</p>
                </div>
            </div>
        )
    }
]

export default newsData