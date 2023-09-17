import React from "react"
import $ from "jquery"
import "../style/Collages.css"

const EDITABLE_WHITEBOARD = "https://browserboard.com/whiteboard/XB9Qc5cNjFJvQEJoDSS9SF?key=My7u45Hj6JgiskgkA9EZCS";

const READONLY_WHITEBOARD = "https://browserboard.com/whiteboard/XB9Qc5cNjFJvQEJoDSS9SF?key=cfDVLZNY3WHVwW4C3CQC8r";

let isMobile = false;

/* Display the list of CS projects */
export default class CollagesPage extends React.Component {
  static PAGE_PATH = "/visual"
  static PAGE_NAME = "visual"

  componentDidMount() {
    $(document).on('touchstart', function () {
      if (!isMobile) {
        $("#whiteboard").attr('src', READONLY_WHITEBOARD)
        $(".mobile-only").show()
        isMobile = true
      }
    })
  }

  render() {
    return (
      <div id="collage-page">
        <h3 style={{ textAlign: "center" }}>☴ strange collages I made</h3>
        <div className="collage-container">
          <CollageItem src="wash-your-ass.jpg" title="Wash Your Ass" />
          <CollageItem src="welcome-dearie.jpg" title="Welcome, Dearie" />
          <CollageItem src="worth-dying-for.jpg" title="Stand Your Ground" />
          <CollageItem src="omega-male.jpg" title="Omega" />
          <CollageItem src="house-world.jpg" title="House World" />
        </div>
        <h3 style={{ textAlign: "center", marginBottom: "5px", }}>☶ graffiti board</h3>
        <p className="mobile-only" style={{ textAlign: "center", marginTop: "5px", display: "none" }}>editing not supported for touchscreens, sorry :(</p>
        <iframe
          id="whiteboard"
          title="Whiteboard"
          width="100%"
          src={EDITABLE_WHITEBOARD}>
        </iframe>

      </div>
    )
  }
}

function CollageItem(props) {
  return (<div className="collage-image-container" >
    <span className="collage-title">{props.title}</span>
    <img className="collage-image" src={"img/" + props.src} alt={props.src} />
  </div>)
}