import React from "react"
import $ from "jquery"

import PurchaseModal from "../components/Purchase";
import SearchBar from "../components/SearchBar";
import AudioPlayer from "../components/AudioPlayer";
import worksData from "../data/works"
import IFrameVideo from "../components/VideoPlayer"
import "../style/Works.css"

const WORK_ID = 'work-id'

export default class WorksPage extends React.Component {
  static PAGE_PATH = "/music"
  static PAGE_NAME = "compositions"
  state = {
    // Sort desc by year.
    data: worksData.sort((a, b) => (b['year'] || 0) - (a['year'] || 0))
  }
  modalRef = React.createRef()

  static workUrl(workId) {
    // Get the URL to the work info.
    return WorksPage.PAGE_PATH + "?work-id=" + workId
  }

  static queryUrl(query) {
    // Get the URL to query result.
    return WorksPage.PAGE_PATH + "?filter=" + query
  }

  componentDidMount() {
    if (window.getURLParam(WORK_ID)) {
      setTimeout(() => {
        // FIX THIS
        let $queryWork = $("#" + window.getURLParam(WORK_ID))
        if ($queryWork.length) {
          let offset = $queryWork.offset().top
          let scrollVal = offset - ($('#navbar').height() + 4)
          window.scroll({
            top: scrollVal,
            left: 0,
            behavior: 'smooth'
          });
        } else {
          window.updateURLParams({ [WORK_ID]: null })
        }
      }, 1000)
    }
  }

  render() {
    document.title = "Stephen Karukas - Music"
    if (!this.state.data) return this.props.fallback || null
    else return (
      <div id="works-page">
        <h3 style={{ textAlign: "center", marginBottom: "5px" }}>☵ instrumental compositions</h3>
        <img className="centered-image" src="img/it-flows-performance.png" alt="It flows performance" />
        <SearchBar placeholder="Filter by keyword (ex: marimba)" />
        <PurchaseModal ref={this.modalRef} />
        <div className="work-container">
          {
            this.state.data.map((work, idx) => {
              let showDetails = work.id === window.getURLParam(WORK_ID)
              return <Work work={work} key={idx} modalRef={this.modalRef} showDetails={showDetails} />
            })
          }
        </div>
      </div>
    )
  }
}

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      showDetails: props.showDetails,
      work: props.work
    }
    this.containerElement = React.createRef();
  }

  testQuery(queries) {
    /* test if the properties contain the query string */
    let stringified = JSON.stringify(Object.values(this.props.work)).toLowerCase()
    this.setState({
      show: queries.every(q => stringified.includes(q.toLowerCase()))
    })
  }

  componentDidMount() {
    /* Show details and scroll to element if it starts off selected */
    if (this.props.showDetails) this.toggleDetails()

    $("#works-page .search-bar").on('input', event => {
      this.testQuery(event.target.value.split(" "))
    }).trigger('input')
  }

  toggleDetails() {
    /* Not currently using showDetails state */
    /* let showDetails = !this.state.showDetails
    this.setState({ showDetails }) */

    /* Hide all others */
    $('.work')
      .not(this.containerElement.current)
      .removeClass('work-selected')
      .children(".toggle-details")
      .slideUp(500)

    /* Toggle current */
    $(this.containerElement.current)
      .toggleClass('work-selected')
      .children(".toggle-details")
      .slideToggle(500)

    window.updateURLParams({ [WORK_ID]: this.state.work.id })

    // Pause all audio
    let $work = $('.work')
    $work.find('audio')
      .trigger('pause')

    // Pause all video
    $work.find('.yt_player_iframe').each(function () {
      let pauseReq = {
        event: "command",
        func: "pauseVideo",
        args: ""
      }
      this.contentWindow.postMessage(JSON.stringify(pauseReq), '*')
    });
  }

  render() {
    let work = this.state.work;
    if (!work.title) return null

    let iconImage = "img/expand-down-icon.png"; /* ["expand-icon.png", "condense-icon.png"][+this.state.showDetails] */
    let workYear = work.year ? (<span className="work-year">({work.year})</span>) : null

    return (
      <div ref={this.containerElement}
        className="work"
        id={work.id}
        style={{ display: ["none", "initial"][+this.state.show] }}>

        <a className="show-details-button" onClick={ø => this.toggleDetails()} href={null}>
          <img className="transparent-icon"
            alt={"Expand down icon"}
            src={iconImage} />
          <WorkHeader year={workYear} title={work.title} instrumentation={work.instrumentationShort} />
        </a>

        <div className="toggle-details">
          <img className="work-cover"
            alt={"Cover for " + work.title}
            src={"img/covers/" + work.image}
            width="200"
            height="258"
          />
          <div>
            <div className="work-description"
              dangerouslySetInnerHTML={{ __html: work.description || '<em>Description coming soon.</em>' }}>
            </div>
          </div>
          <div className="work-detail-container">
            <span>
              <h4>instruments</h4>
              <p>{work.instrumentationLong || work.instrumentationShort}</p>
            </span>
            <span>
              <h4>duration</h4>
              <p>{work.duration}</p>
            </span>
          </div>
          <div>
            {work.purchase && <PurchaseButton purchase={work.purchase} name={work.id.toUpperCase()} readable_name={work.title} modalRef={this.props.modalRef} />}
            <AudioVideoPreview work={work} />
          </div>
        </div>
      </div>
    )
  }
}

function AudioVideoPreview(props) {
  let work = props.work
  let children = []
  if (work.video) {
    if (work.video.includes("embed")) {
      // Don't display audio if embeddable video is available.
      return (<IFrameVideo src={work.video} />)
    } else {
      children.push(
        <a href={work.video} target="_blank" rel="noreferrer" key="videobutton">
          <button className="button-cls video-button">Watch Video Recording</button>
        </a>)
    }
  }
  if (work.audio) {
    children.push(<AudioPlayer src={"audio/" + work.audio} key="audioplayer" />)
  }
  return (<div>{children}</div>)
}

function WorkHeader(props) {
  return (
    <div className="work-header-container">
      <h3>
        <strong>{props.title} </strong>
        {props.year}
      </h3>
      <p>{props.instrumentation}</p>
    </div>
  )
}

function PurchaseButton(props) {
  let buttonText = "Contact for Score"
  let purchaseURL = "mailto:stephen.karukas@gmail.com"
  let onClick = void 0;
  let purchaseInfo = props.purchase

  if (purchaseInfo.publisher) {
    if (purchaseInfo.publisher === "Stephen Karukas") {
      if (purchaseInfo.driveId) {
        /* Sell directly using PayPal */
        buttonText = `Purchase ($${purchaseInfo.price})`
        purchaseURL = null
        onClick = () => {
          props.modalRef.current.displayItem({
            name: props.name,
            readable_name: props.readable_name,
            price: purchaseInfo.price,
            note: purchaseInfo.note,
            driveId: purchaseInfo.driveId
          })
        }
      } else {
        console.error("Not displaying work. driveId must be defined. " + JSON.stringify(purchaseInfo))
      }

    } else {
      /* Send to publisher website */
      buttonText = `Purchase (${purchaseInfo.publisher})`
      purchaseURL = purchaseInfo.link
    }
  }

  return (
    <a href={purchaseURL} target="_blank" rel="noreferrer" onClick={onClick}>
      <button className="button-cls purchase-button">{buttonText}</button>
    </a>
  )
}