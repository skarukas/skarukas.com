import React from "react"
import { NavLink } from 'react-router-dom';
import $ from "jquery"

import "../style/NavigationBar.css"
import WelcomePage from "../pages/Welcome";
import EasyLink from "./EasyLink";

export default class NavigationBar extends React.Component {

  componentDidMount() {
    $(window).on('resize', () => {
      let w = document.body.clientWidth;
      let $title = $("#nav-title")
      $("#home-icon").show()

      /* Hide navbar title */
      if (w < 850) {
        $title.is(":visible") && $title.fadeOut()
      } else {
        $title.is(":hidden") && $title.fadeIn()
      }


      $("#content").css("padding-top", $("#navbar").height())
    })
    $(window).trigger('resize')

  }

  render() {
    return (
      <div id="navbar">
        <div id="navbar-pages">
          {this.props.pages.map(page => <NavLink to={page.PAGE_PATH} exact activeClassName="navbar-selected" key={page.PAGE_NAME}>{page.PAGE_NAME}</NavLink>)}
        </div>
        <EasyLink to={WelcomePage.PAGE_PATH}>
          <img id="home-icon" src="img/home-icon.png" alt="Home button" />
        </EasyLink>
        <span id="nav-title">stephen karukas</span>
      </div>
    )
  }
}