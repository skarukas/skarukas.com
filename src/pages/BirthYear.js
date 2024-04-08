import React from "react";
import "../style/About.css"

export default class BirthYearPage extends React.Component {
  static PAGE_PATH = "/birth-year"
  static PAGE_NAME = "birth-year"

  render() {
    document.title = "1997"
    return (
      <div id="birth-year-page" style={{ background: "white"}}>
        <Gif src="weltrain.gif" />
        <div className="birth-year-container" style={{ backgroundImage: "url(img/gif/bkgd.webp)" }}>
          <div className="birth-year">
            1997
          </div>
          <Gif src="computer_surfing.gif" />
          <Gif src="dis.gif" />
          <Gif src="internetani.gif" />
          <Gif src="lapin_email.gif" />
          <Gif src="thanks01.gif" />
          <Gif src="buzzy_mad_md_clr.gif" />
          <Gif src="guestbook_md_wht.gif" />
          <Gif src="headache.gif" />
          <Gif src="lochness_monster_saying_hi_md_wht.gif" />
        </div>
      </div>
    )
  }
}

function Gif(props) {
  return (
    <img className="gif" src={"img/gif/" + props.src} alt="gif" />
  )
}