import React from "react";
import $ from "jquery"
import "../style/About.css"
import PDF from "../components/PDF"
import Loader from "../components/Loader"
import EasyLink from "../components/EasyLink";
import WorksPage from "./Works";
import NewsPage from "./News";

export default class AboutPage extends React.Component {
  static PAGE_PATH = "/about"
  static PAGE_NAME = "about"
  componentDidMount() {
    $('#about-page').fadeIn(1000)
    $('#about-page a').attr('target', "_blank").addClass('hover-anchor')
    $('.about-section-content').hide()
    $('.about-section button').on('click', event => {
      let $elem = $(event.target)
        .siblings('.about-section-content')
        .animate({ opacity: 'toggle', height: 'toggle' })
      /* $('.about-section-content').not($elem).slideUp() */
    })

    /* Set default theme */
    let theme = 'light';
    $('.about-section, .bio-container, .click-hide').addClass(theme)
    $(".bio-image.light").show()
    $(".bio-image.dark").hide()
    $('.bio-image-container').on('click', () => {
      $('.bio-image').fadeToggle(1000)
      let newTheme = (theme == 'light') ? 'dark' : 'light'
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
            <Loader style={{ zIndex: -1 }} />
            <img className="bio-image light" src="img/about/about-pic-light-progressive.jpg" alt="Stephen Karukas existing on a couch" />
            <img className="bio-image dark" src="img/about/about-pic-dark-progressive.jpg" alt="Stephen Karukas having an existential crisis on a couch" />
          </div>

          <CompositionBio />
          <PercussionBio />
          <Tech />
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
          Rose Lipham (Bad Number for solo timpani and To Live and Die in the Wild for
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
          His works are available from <EasyLink to="https://www.tapspace.com/stephen-karukas/">
            Tapspace</EasyLink> and <EasyLink to="http://c-alanpublications.com/karukas-stephen/">C. Alan Publications</EasyLink>,
          as well as from <EasyLink to={WorksPage.PAGE_PATH}>his website, skarukas.com</EasyLink>. He also maintains an active YouTube Channel of his
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
      <button>composition</button>
      <div className="about-section-content">
        <h3>
          Professional Bio
        </h3>
        <p>
          Stephen Karukas is a graduate of the Indiana University Jacobs School
          of Music, where he received degrees in music composition and percussion
          performance. He studied composition with Claude Baker, P.Q. Phan, and Don Freund.
        </p>
        <p>
          Karukas has composed music for ensembles such as Fifth House Ensemble, the IU
          Percussion Ensemble, the Hutchens/Myers Duo, and California-based ensemble
          Definiens. He recently finished <EasyLink to={WorksPage.PAGE_PATH + "?work-id=redshift"}><em>Redshift</em></EasyLink>,
          a solo marimba commission for a
          consortium led by percussionist Josh Fulford, as well as
          a <EasyLink to={NewsPage.PAGE_PATH + "?news-id=sutherlin-2021-consortium"}>percussion quartet consortium</EasyLink>,
          <EasyLink to={NewsPage.PAGE_PATH + "?news-id=hutchens-2021-consortium"}> mixed chamber consortium</EasyLink>, and a new piece
          for trumpet virtuoso Stephen Burns with members of the Fulcrum Point New Music Project.
        </p>
        <p>
          Recent highlights include a performance of <EasyLink to={WorksPage.PAGE_PATH + "?work-id=elements"}><em>Elements</em></EasyLink> for multiple percussion
          solo by percussionist Cameron Leach at the TUTTI Festival at Denison
          University, receiving the Honorable Mention in the 2019 PASIC Composition
          Contest for his marimba piece <EasyLink to={WorksPage.PAGE_PATH + "?work-id=blue-gray"}><em>blue-gray</em></EasyLink>, and winning the 2020 SCI/ASCAP
          Commission Competition.
        </p>
        <p>
          His works are available from <EasyLink to="https://www.tapspace.com/stephen-karukas/">
            Tapspace</EasyLink> and <EasyLink to="http://c-alanpublications.com/karukas-stephen/">C. Alan Publications</EasyLink>,
          as well as from his<EasyLink to={WorksPage.PAGE_PATH}> website</EasyLink>, skarukas.com. He currently lives in Seattle, working on large language models at Google and releasing experimental electronic music as <EasyLink to="https://open.spotify.com/artist/4lmC5Ri5LYsFDoUP2sJgel?si=d5XfFMWSR1CyPMfRByXPeQ">kmodp</EasyLink>.
        </p>
      </div>
    </div>
  )
}

function PercussionBio() {
  return (
    <div className="about-section">
      {hideIcon}
      <button>percussion</button>
      <div className="about-section-content">
        <h3>
          Professional Bio
        </h3>
        <p>
          Stephen Karukas is a graduate of the Indiana University Jacobs School
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
          He also maintains a <EasyLink to="https://www.youtube.com/c/StephenKarukas">YouTube Channel </EasyLink>
          of his performances and compositions, including a 2018 project arranging and recording
          selected Poemes and Preludes of Alexander Scriabin for solo marimba.
        </p>
      </div>
    </div>
  )
}

function Tech() {
  return (
    <div id="about-tech" className="about-section">
      {hideIcon}
      <button>tech</button>
      <div className="about-section-content">
        <p>
          I did my masters at IU focusing on artificial intelligence, and I
          worked as an associate instructor (teaching assistant) in the CS department
          for graduate classes on algorithms and AI. I also did some research on
          scale- and rotation-invariant neural networks.
        </p>
        <p>
          I worked as a software engineering intern for Amazon in summer 2021,
          then in 2022 I joined Google full-time as a software engineer, where I currently work on the <EasyLink to="https://cloud.google.com/vertex-ai/docs/generative-ai/embeddings/get-text-embeddings">Text Embedding API</EasyLink> in Google Cloud.
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
          I love microtonal music, and a lot of the tools I've developed are motivated
          by the idea of abstracting harmony past 12-tone equal temperament.
          In a perfect world, that would mean composition as the act of freely
          stacking intervals no matter if they exist on a keyboard or not.
        </p>
        <p>
          Some of these tools are <EasyLink to="https://github.com/skarukas/xen">xen</EasyLink>, a programming language and REPL environment
          made for xenharmonic tasks, <EasyLink to="https://github.com/skarukas/tune">tune.js</EasyLink>, an object-oriented Javascript library
          that models notes and intervals abstractly, and an <EasyLink to="https://skarukas.github.io/web-audio-projects/random-harmonics/">
            ambient music generator</EasyLink> that constantly adds consonant frequencies to currently sounding frequencies.
          I don’t write any specifically microtonal music, and the reason why is
          because I tried and it was really hard to do so I gave up. My idea was to
          make some tools that make it easier and maybe try again someday.
        </p>
        <p>
          I am also interested in applying
          graphical models ("networks") to harmonic analysis,
          and they generalize to microtonal music very well. For an application of
          a graph algorithm to adaptive tuning, check out
          <EasyLink to="pdf/adaptive-tuning.pdf"> a short informal paper I wrote </EasyLink>
          which includes some ideas about how a pitch set
          can be modeled as a weighted undirected graph, with the problem of
          adaptive JI being reduced to the generation
          of a minimum-diameter spanning tree, which is equivalent to a connected
          subset of a tuning lattice. In the same vein, I created an experimental
          MIDI editor named <EasyLink to="https://github.com/skarukas/springs" className="hover-anchor">springs</EasyLink> that allows voice-specific tuning annotations, configurable just intonation, and modular microtonal interval structures (trees).
        </p>
        <p>
          I also designed an algorithm and <EasyLink to="https://skarukas.github.io/lattice-search/">
            web app</EasyLink> for finding optimal approximations of equal-tempered
          intervals using combinations of arbitrary basis intervals, which works using
          a <EasyLink to="https://en.wikipedia.org/wiki/State_space" >state graph abstraction </EasyLink>
          and search, an method usually used in AI path-finding algorithms.
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
        <hr />
        <p><EasyLink to="https://www.tapspace.com/paul-millette/">paul millette</EasyLink></p>
        <p><EasyLink to="https://russellwhartonmusic.com/">russell wharton</EasyLink></p>
        <p><EasyLink to="https://www.johntadlockmusic.com/">john tadlock</EasyLink></p>
        <p><EasyLink to="https://www.mitchellbeckmusic.com/">mitchell beck</EasyLink></p>
        <p><EasyLink to="http://www.grischa-lichtenberger.com/">grischa lichtenberger (electronic musician)</EasyLink></p>
        <p><EasyLink to="https://www.youtube.com/watch?v=qW3VOVh4rlg&list=PLiWv7dE90L6ADJ_Knweiok8j3yze-BC-0">zhea erose (microtonal electronic musician)</EasyLink></p>
        <p><EasyLink to="https://www.youtube.com/watch?v=I2VbZMZ1lc4">chris dave (drummer)</EasyLink></p>
        <p><EasyLink to="https://sethares.engr.wisc.edu/">the writings of william sethares (tuning theory)</EasyLink></p>
        <p><EasyLink to="https://www.youtube.com/watch?v=BePQBWPnYuE">beautiful explanation of the manifold hypothesis in ML</EasyLink></p>
        <p><EasyLink to="https://www.composerdiversity.com/">Institute for composer diversity</EasyLink></p>
        <hr />
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
        <PDF file="pdf/tech-resume.pdf" name="Tech Resume" />
        <PDF file="pdf/composition-resume.pdf" name="Composition Resume" />
        <PDF file="pdf/artist-statement.pdf" name="Composition Artist Statement" />
      </div>
    </div>
  )
}