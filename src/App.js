import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from "jquery";

//import HomePage from "./pages/Home"
import WelcomePage from "./pages/Welcome";
import EternalNothingness from "./pages/EternalNothingness";
import AboutPage from "./pages/About";
import NewsPage from "./pages/News";
import ProjectsPage from "./pages/Project";
import WorksPage from "./pages/Works";
import BirthYearPage from "./pages/BirthYear";
import InProgressPage from "./pages/InProgress";
import CollagesPage from "./pages/Collages";

import NavigationBar from "./components/NavigationBar";
import SocialContainer from "./components/SocialContainer";

import "./style/App.css";

const NAVIGATION_BAR_PAGES = [ProjectsPage, AboutPage, WorksPage];

const OTHER_ROUTABLE_PAGES = [
  WelcomePage,
  NewsPage,
  BirthYearPage,
  InProgressPage,
  CollagesPage,
];

window.updateURLParams = function (paramObj) {
  let params = window.getURLParams();
  for (let [key, value] of Object.entries(paramObj)) {
    if (value == null || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  }
  let newRelativePathQuery = window.location.pathname + "?" + params.toString();
  // This updates the URL without a reload
  window.history.replaceState(null, "", newRelativePathQuery);
};

window.getURLParam = function (key) {
  return window.getURLParams().get(key);
};

window.getURLParams = function () {
  return new URLSearchParams(window.location.search);
};

class App extends React.Component {
  componentDidMount() {
    $("#background").css("background-image", 'url("img/site-background.jpg")');
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <div id="background"></div>
        <NavigationBar pages={NAVIGATION_BAR_PAGES} />
        <SocialContainer />
        <div id="content">
          <Switch>
            {[...NAVIGATION_BAR_PAGES, ...OTHER_ROUTABLE_PAGES].map((page) => (
              <Route
                exact
                path={page.PAGE_PATH}
                key={page.PAGE_NAME}
                component={page}
              />
            ))}
            {/* Catches all other routes (404). */}
            <Route component={EternalNothingness} />
          </Switch>
        </div>
        <div id="footer"></div>
      </BrowserRouter>
    );
  }
}

export default App;
