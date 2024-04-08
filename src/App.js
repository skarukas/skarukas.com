import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import $ from "jquery"

//import HomePage from "./pages/Home"
import WelcomePage from "./pages/Welcome"
import EternalNothingness from "./pages/EternalNothingness"
import AboutPage from "./pages/About"
import NewsPage from "./pages/News"
import ProjectsPage from "./pages/Project"
import WorksPage from "./pages/Works"
import BirthYearPage from "./pages/BirthYear";

import NavigationBar from "./components/NavigationBar"
import SocialContainer from "./components/SocialContainer"

import './style/App.css'
import CollagesPage from "./pages/Collages";

const NAVIGATION_BAR_PAGES = [
  ProjectsPage,
  CollagesPage,
  WorksPage
]

const OTHER_ROUTABLE_PAGES = [
  WelcomePage,
  AboutPage,
  NewsPage,
  BirthYearPage
]

window.removeExternalParams = function () {
  // remove params that come before hash (#), for example fbclid
  let splitUrl = window.location.href.split("#")
  let rest = splitUrl[splitUrl.length - 1]
  let origin = window.location.origin
  let url = origin + "#" + rest
  window.location.replace(url)
}

window.updateURLParams = function (paramObj) {
  let params = window.getURLParams()
  for (let [key, value] of Object.entries(paramObj)) {
    if (value == null || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
  }
  let baseUrl = window.location.href.split("?")[0]
  let url = params.size ? baseUrl + "?" + params : baseUrl
  window.location.replace(url)
}

window.getURLParam = function (key) {
  return window.getURLParams().get(key)
}

window.getURLParams = function () {
  return new URLSearchParams(window.location.href.split("?")[1])
}


class App extends React.Component {

  componentDidMount() {
    $('#background').css('background-image', 'url("img/site-background.jpg")')
    window.removeExternalParams()
  }

  render() {
    return (
      <HashRouter basename='/'>
        <div id="background"></div>
        <NavigationBar pages={NAVIGATION_BAR_PAGES} />
        <SocialContainer />
        <div id="content">
          <Switch>
            {
              [...NAVIGATION_BAR_PAGES, ...OTHER_ROUTABLE_PAGES].map(page => <Route exact path={page.PAGE_PATH} key={page.PAGE_NAME} component={page} />)
            }
            {/* Catches all other routes (404). */}
            <Route component={EternalNothingness} />
          </Switch>
        </div>
        <div id="footer"></div>
      </HashRouter>
    )
  }
}

export default App;
