import React from "react"
import "../style/Collages.css"

/* Display the list of CS projects */
export default class CollagesPage extends React.Component {
  static PAGE_PATH = "/visual"
  static PAGE_NAME = "visual"
  render() {
    return (
      <div id="collage-page">
        <h3 style={{textAlign: "center"}}>☴ strange collages I made</h3>
        <div className="collage-container">
          <CollageItem src="wash-your-ass.jpg" title="Wash Your Ass"/>
          <CollageItem src="welcome-dearie.jpg" title="Welcome, Dearie"/>
          <CollageItem src="worth-dying-for.jpg" title="Stand Your Ground"/>
          <CollageItem src="omega-male.jpg" title="Omega"/>
          <CollageItem src="house-world.jpg" title="House World"/>
        </div>
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