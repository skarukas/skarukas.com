import React from "react";
import $ from "jquery"
import "../style/About.css"
import PDF from "../components/PDF"
import Loader from "../components/Loader"
import EasyLink from "../components/EasyLink";
import WorksPage from "./Works";
import ProjectsPage from "./Project";

export default class AboutPage extends React.Component {
  static PAGE_PATH = "/about"
  static PAGE_NAME = "about"
  componentDidMount() {
    $('#about-page').fadeIn(1000)
    $('#about-page a').attr('target', "_blank").addClass('hover-anchor')
    $('.about-section-content').not('.always-shown').hide()
    $('.about-section button').on('click', event => {
      let $elem = $(event.target)
        .siblings('.about-section-content').not('.always-shown')
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

          <CombinedBio />
        </div>
        <div className="bio-container" style={{marginTop: 20, minHeight: 0}}>
            <Tech />
            <hr/>
            <Microtonal />
            <hr/>
            <CheckOut />
            <hr/>
            <Materials />
          </div>
      </div>
    )
  }
}


/* Bio Sections */
const hideIcon = <img className="transparent-icon click-hide" alt="Expand down icon" src="img/expand-down-icon.png" />

function CombinedBio() {
  return (
    <div className="about-section">
      <div className="about-section-content always-shown">
        <h3>
          Bio
        </h3>
        <p>
          Stephen Karukas is percussionist, composer, and electronic musician based in Seattle, WA. He is a graduate of the Indiana University Jacobs School of Music, where he received degrees in percussion performance and music composition. He studied composition with Claude Baker, P.Q. Phan, and Don Freund. He has also been a performance fellow at nief-norf and a student in electronic music programming at IRCAM.
        </p>
        <p>
          With work ranging in style from ambient and meditative to impressionistic to excitingly rhythmic, Karukas has composed music for ensembles such as Fifth House Ensemble and Fulcrum Point New Music. He often writes for percussion, including solo works written for Daniel Myers (<EasyLink to={WorksPage.workUrl("elements")}><em>Elements</em></EasyLink>), Jacob Lipham (<EasyLink to={WorksPage.workUrl("bad-number")}><em>Bad Number</em></EasyLink> and <EasyLink to={WorksPage.workUrl("to-live-and-die")}><em>To Live and Die in the Wild</em></EasyLink>), and Paul Millette (<EasyLink to={WorksPage.workUrl("blue-gray")}><em>blue-gray</em></EasyLink>).
        </p>
        <p>
          Karukas has also collaborated with the <EasyLink to="https://www.andrew-hutchens.com/hutchensmyers-duo">Hutchens/Myers Duo</EasyLink> in creating new works featuring percussion and saxophone, starting with <EasyLink to={WorksPage.workUrl("it-flows")}><em>It flows</em></EasyLink> for saxophone and marimba in in 2017. Later, they commissioned <EasyLink to={WorksPage.workUrl("third-rail")}><em>Third Rail / Revelation</em></EasyLink>, a gritty, energetic piece inspired by the industrial corners of Seattle, leading to two versions of the piece: one for mixed quartet and another for baritone sax, marimba, and electronics.
        </p>
        <p>
          Recent instrumental commissions include <EasyLink to={WorksPage.workUrl("redshift")}><em>Redshift</em></EasyLink>, a solo marimba piece for a consortium led by percussionist Josh Fulford, <EasyLink to={WorksPage.workUrl("optimal-damage")}><em>Optimal Damage</em></EasyLink> for the Concord Community High School percussion ensemble, and <EasyLink to={WorksPage.workUrl("brightening")}><em>Brightening</em></EasyLink> for trumpet and percussion quartet, commissioned by SCI and ASCAP for the Fulcrum Point New Music Project. 
        </p>
        <p>
          His music has been performed around the United States and as well as in the UK, Mexico, and the Netherlands. His sheet music is available from <EasyLink to="https://www.tapspace.com/stephen-karukas/"> Tapspace</EasyLink> and <EasyLink to="http://c-alanpublications.com/karukas-stephen/">C. Alan Publications</EasyLink>, as well as from his<EasyLink to={WorksPage.PAGE_PATH}> website</EasyLink>, skarukas.com. 
        </p>
        <hr/>
        {/* Highlights include a performance of <EasyLink to={WorksPage.PAGE_PATH + "?work-id=elements"}><em>Elements</em></EasyLink> for multiple percussion solo by percussionist Cameron Leach at the TUTTI Festival at Denison University and receiving the Honorable Mention in the 2019 PASIC Composition Contest for his marimba piece <EasyLink to={WorksPage.PAGE_PATH + "?work-id=blue-gray"}><em>blue-gray</em></EasyLink>. */}
        <p>
          Karukas studied percussion at Indiana University with Kevin Bobo, John Tafoya, and Joseph Gramley, and drumset with Steve Houghton. He is passionate about performing contemporary chamber works, especially works for chamber percussion. While a student, he received the Mrs. Hong Pham Memorial Recognition Award for New Music Performance for premiering dozens of works by student composers. He also performed with the Indiana University Percussion Ensemble, including for the ensemble's feature concert at PASIC 2018 in which he premiered two new percussion ensemble works.
        </p>
        <p>
          He has also been a performance fellow at nief-norf, and performed with the ensemble at the 2017 International Conference on Music and Minimalism. Professional ensembles he has performed with include the Esoterics, Terre Haute Symphony Orchestra, Columbus Indiana Philharmonic, and the Carmel Symphony Orchestra.
        </p>
        <p>
          Karukas is an avid marimba player. In addition to his <EasyLink to={WorksPage.queryUrl("marimba")}>solo marimba works</EasyLink>, he has adapted a number of piano Poèmes and Preludes by Alexander Scriabin as part of a 2018 project performing and recording the composer's works on the instrument.
        </p>
        <p>
          He currently lives in Seattle, working as a machine learning software engineer at Google and releasing experimental electronic music as <EasyLink to="https://open.spotify.com/artist/4lmC5Ri5LYsFDoUP2sJgel?si=d5XfFMWSR1CyPMfRByXPeQ">kmodp</EasyLink>.
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
          I did my MS in computer science at Indiana University, focusing on artificial intelligence, and I
          worked as an associate instructor (teaching assistant) in the CS department
          for graduate classes on algorithms and AI. I also did some research on
          scale- and rotation-invariant neural networks.
        </p>
        <p>
          I worked as a software engineering intern for Amazon in summer 2021,
          then in 2022 I joined Google full-time as a software engineer, where I currently work on the <EasyLink to="https://cloud.google.com/vertex-ai/docs/generative-ai/embeddings/get-text-embeddings">Text Embedding API</EasyLink> in Google Cloud.
        </p>
        <p>
          I write small <EasyLink to={ProjectsPage.PAGE_PATH}>open-source programs</EasyLink> for fun and put them on Github. Many of them are related to microtonal music. I also like solving puzzles, and I occasionally write automated solvers for puzzle games: <EasyLink to="https://github.com/skarukas/sudoku-solver">Sudoku</EasyLink>, <EasyLink to="https://github.com/skarukas/scrabble-solver">Scrabble</EasyLink>, and <EasyLink to="https://github.com/skarukas/2solve">NYT's Letter Boxed</EasyLink>.
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
          adaptive just intonation being reduced to the generation
          of a minimum-diameter spanning tree of that graph. In the same vein, I created an experimental
          MIDI editor named <EasyLink to="https://github.com/skarukas/springs" className="hover-anchor">springs</EasyLink> that allows voice-specific tuning annotations, configurable just intonation, and modular microtonal interval structures (trees).
        </p>
        <p>
          I also designed an algorithm and <EasyLink to="https://skarukas.github.io/lattice-search/">
            web app</EasyLink> for finding optimal approximations of equal-tempered
          intervals using combinations of arbitrary basis intervals.
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