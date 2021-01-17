import React from "react";
import $ from "jquery"
import "../style/About.css"
import PDF from "../components/PDF"

export default class AboutPage extends React.Component {

    componentDidMount() {
        $('#about-page').fadeIn(1000)
        $('#about-page a').attr('target', "_blank").addClass('hover-anchor')
        $('.about-section-content').hide()
        $('.about-section button').on('click', event => {
            let $elem = $(event.target)
                .siblings('.about-section-content')
                .animate({opacity: 'toggle', height: 'toggle'})
            /* $('.about-section-content').not($elem).slideUp() */
        })

        /* Set default theme */
        let theme = 'light';
        $('.about-section, .bio-container, .click-hide').addClass(theme)
        $(".bio-image.light").show()
        $(".bio-image.dark").hide()
        $('.bio-image-container').on('click', () => {
            $('.bio-image').fadeToggle(1000)
            let newTheme = (theme == 'light')? 'dark' : 'light'
            $('.' + theme).removeClass(theme).addClass(newTheme)
            theme = newTheme;
        })
    }

    render() {
        document.title = "Stephen Karukas - About"
        return (
            <div id="about-page">
                <div className="bio-container">
                    <div className="bio-image-container">
                        <img className="bio-image light" src="img/about-pic-light.jpg" alt="Stephen Karukas existing on a couch"/>
                        <img className="bio-image dark" src="img/about-pic-dark.jpg" alt="Stephen Karukas having an existential crisis on a couch"/>
                    </div>

                    <CompositionBio />
                    <PercussionBio />
                    <Microtonal />
                    <CheckOut />
                    <Materials />
                </div>
            </div>
        )
    }
}


/* Bio Sections */
const hideIcon = <img className="transparent-icon click-hide" alt="Expand down icon" src="img/expand-down-icon.png" />

function Bio() {
    return (
        <div className="about-section">
            {hideIcon}
            <button>music bio</button>
            <div className="about-section-content">
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
                    His works are available from <a href="https://www.tapspace.com/stephen-karukas/">
                    Tapspace</a> and <a href="http://c-alanpublications.com/karukas-stephen/">C. Alan Publications</a>, 
                    as well as from <a href="#/works">his website, skarukas.com</a>. He also maintains an active YouTube Channel of his 
                    performances and compositions, including a 2018 project arranging and recording 
                    selected Poemes and Preludes of Alexander Scriabin. He currently works as a Spring 
                    2020 Undergraduate Instructor in the computer science department at IU.
                </p>
            </div>
        </div>
    )
}

function CompositionBio() {
    return (
        <div className="about-section">
            {hideIcon}
            <button>composition bio</button>
            <div className="about-section-content">
                <p>
                    Stephen Karukas is a recent graduate of the Indiana University Jacobs School 
                    of Music, where he received degrees in music composition and percussion 
                    performance. He studied composition with Claude Baker, P.Q. Phan, and Don Freund.
                </p>
                <p>
                    Karukas has composed music for ensembles such as Fifth House Ensemble, the IU 
                    Percussion Ensemble, the Hutchens/Myers Duo, and California-based ensemble 
                    Definiens. He recently finished <a href="#/works?work-id=redshift"><em>Redshift</em></a>, 
                    a solo marimba commission for a 
                    consortium led by percussionist Josh Fulford. Early 2021 projects include 
                    a <a href="#/news?news-id=sutherlin-2021-consortium">percussion quartet consortium</a>, 
                    <a href="#/news?news-id=hutchens-2021-consortium"> mixed chamber consortium</a>, and a new piece 
                    for trumpet virtuoso Stephen Burns with members of the Fulcrum Point New Music Project.
                </p>
                <p>
                    Recent highlights include a performance of <a href="#/works?work-id=elements"><em>Elements</em></a> for multiple percussion 
                    solo by percussionist Cameron Leach at the TUTTI Festival at Denison 
                    University, receiving the Honorable Mention in the 2019 PASIC Composition 
                    Contest for his marimba piece <a href="#/works?work-id=blue-gray"><em>blue-gray</em></a>, and winning the 2020 SCI/ASCAP 
                    Commission Competition.
                </p>
                <p>  
                    His works are available from <a href="https://www.tapspace.com/stephen-karukas/">
                    Tapspace</a> and <a href="http://c-alanpublications.com/karukas-stephen/">C. Alan Publications</a>, 
                    as well as from his<a href="#/works"> website</a>, skarukas.com. He is currently
                    pursuing a M.S. in Computer Science at Indiana University, where his area of study
                    is applications of artifical intelligence to audio and image data.
                </p>
            </div>
        </div>
    )
}

function PercussionBio() {
    return (
        <div className="about-section">
            {hideIcon}
            <button>percussion bio</button>
            <div className="about-section-content">
                <p>
                    Stephen Karukas is a recent graduate of the Indiana University Jacobs School 
                    of Music, where he received degrees in music composition and percussion 
                    performance, with additional studies in computer music, computer science, 
                    and jazz studies. He has studied drumset with Steve Houghton and percussion 
                    with Kevin Bobo, John Tafoya, and Joseph Gramley. He also attended Interlochen 
                    Arts Academy as a student of John Alfieri. He has been a performance 
                    fellow at nief-norf and a student in electronic music programming at 
                    IRCAM (Paris, France). 
                </p>
                <p>
                    Karukas performed at PASIC 2018 as a member of the Indiana University Percussion 
                    Ensemble, premiering new works by Brian Blume and Kevin Bobo as one of three undergraduates 
                    in the ensemble. He has also performed as a drummer in jazz combos at Indiana 
                    University, as well as in the IU Opera Theatre's production of <em>The Music Man</em> and 
                    IU Theatre's production <em>Stardust Road</em>, featuring the music of Hoagy Carmichael.
                </p>
                <p>  
                    He has performed as an 
                    orchestral percussionist with the Terre Haute Symphony Orchestra, Columbus Indiana 
                    Philharmonic, and the Carmel Symphony Orchestra in Indiana. As a member of Indiana 
                    University's top ensemble the Philharmonic Orchestra, he performed under the baton 
                    of guest artists such as Carl St. Clair, Franz Welser-Möst, Giancarlo Guerrero, 
                    Federico Cortese, and Marzio Conti.
                </p>
                <p>
                    He also maintains a <a href="https://www.youtube.com/c/StephenKarukas">YouTube Channel </a> 
                    of his performances and compositions, including a 2018 project arranging and recording 
                    selected Poemes and Preludes of Alexander Scriabin for solo marimba.
                </p>
            </div>
        </div>
    )
}

function Microtonal() {
    return (
        <div id="about-microtonal" className="about-section">
            {hideIcon}
            <button>microtonal</button>
            <div className="about-section-content">
                <p>
                    I love microtonal music, and a lot of the tools I develop are motivated 
                    by the idea of abstracting harmony past 12-tone equal temperament. 
                    In a perfect world, that would mean composition as the act of freely 
                    stacking intervals no matter if they exist on a keyboard or not. 
                </p>
                <p>
                    Some of these tools are <a href="https://github.com/skarukas/xen">xen</a>, a programming language and REPL environment 
                    made for xenharmonic tasks, <a href="https://github.com/skarukas/tune">tune.js</a>, an object-oriented Javascript library 
                    that models notes and intervals abstractly, and an <a href="https://skarukas.github.io/web-audio-projects/random-harmonics/"> 
                    ambient music generator</a> that constantly adds consonant frequencies to currently sounding frequencies. 
                    I don’t write any specifically microtonal music, and the reason why is 
                    because I tried and it was really hard to do so I gave up. My idea was to
                     make some tools that make it easier and maybe try again someday.
                </p>
                <p>
                    I am also interested in applying 
                    graphical models ("networks") to harmonic analysis, 
                    and they generalize to microtonal music very well. For an application of 
                    a graph algorithm to adaptive tuning, check out 
                    <a href="pdf/adaptive-tuning.pdf"> a short informal paper I wrote </a> 
                    which includes some ideas about how a pitch set 
                    can be modeled as a weighted undirected graph, with the problem of 
                    adaptive JI basically boiling down to the generation 
                    of a minimum-diameter spanning tree, which is equivalent to a connected 
                    subset of a tuning lattice. In the same vein, I am designing 
                    <a href="https://github.com/skarukas/springs" className="hover-anchor"> springs</a>, a MIDI 
                    editor that allows voice-specific tuning annotations and modular 
                    microtonal interval structures (trees).
                </p>
                <p>
                    I also designed a method and <a href="https://skarukas.github.io/lattice-search/">
                    web app</a> for finding optimal approximations of equal-tempered 
                    intervals using combinations of arbitrary basis intervals, which works using 
                    a <a href="https://en.wikipedia.org/wiki/State_space" >state graph abstraction </a> 
                    and search, an idea taken from artificial intelligence.
                </p>
            </div>
        </div>
    )
}

function CheckOut() {
    return (
        <div className="about-section">
            {hideIcon}
            <button>links to check out</button>
            <div className="about-section-content checkout-container">
                <div className="checkout-description">
                    a mix of inspirations and friends, as well as some great resources 
                    that you may not know about, all well worth checking out!
                </div>
                <hr/>
                <p><a href="http://c-alanpublications.com/millette-paul/">paul millette</a></p>
                <p><a href="https://russellwhartonmusic.com/">russell wharton</a></p>
                <p><a href="https://www.johntadlockmusic.com/">john tadlock</a></p>
                <p><a href="https://www.youtube.com/channel/UCvTGyq8YAAEJ8_xqtXvVf1A">mitchell beck</a></p>
                <p><a href="https://www.youtube.com/watch?v=qW3VOVh4rlg&list=PLiWv7dE90L6ADJ_Knweiok8j3yze-BC-0">zhea erose</a></p>
                <p><a href="https://www.youtube.com/watch?v=I2VbZMZ1lc4">chris dave</a></p>
                <p><a href="https://sethares.engr.wisc.edu/">the writings of william sethares</a></p>
                <p><a href="https://www.miggytorres.com/aesthetics/conservatory">the conservatory is dead</a></p>
                <p><a href="https://www.youtube.com/watch?v=BePQBWPnYuE">beautiful explanation of the manifold hypothesis in ML</a></p>
                <p><a href="https://docs.google.com/spreadsheets/d/1jHWi4rbJ6-gzSLVfZuE33eEsCc8E6nEmg9fsTDR_lIY/edit?fbclid=IwAR2YX_SRZUT1xGvF7DYJ3OIRVDVy37-mvJsfgtyC0gqp295BaZjqmgh7AX4#gid=448762366">percussion works by black composers</a></p>
                <p><a href="https://www.composerdiversity.com/">Institute for composer diversity</a></p>
                <hr/>
            </div>
        </div>
    )
}

function Materials() {
    return (
        <div className="about-section">
            {hideIcon}
            <button>materials</button>
            <div className="about-section-content">
                <PDF file="pdf/tech-resume.pdf" name="Tech Resume"/>
                <PDF file="pdf/composition-resume.pdf" name="Composition Resume"/>
                <PDF file="pdf/artist-statement.pdf" name="Composition Artist Statement"/>
            </div>
        </div>
    )
}