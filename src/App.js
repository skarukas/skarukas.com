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
 
import NavigationBar from "./components/NavigationBar"
import SocialContainer from "./components/SocialContainer"

import './style/App.css'

function Page(name, path, component) {
    this.name = name;
    this.path = path;
    this.component = component
}

const pages = [
    /* new Page("home",  "/home",  HomePage), */
    new Page("code",  "/code",  ProjectsPage),
    new Page("works", "/works", WorksPage),
    new Page("news",  "/news",  NewsPage),
    new Page("about", "/about", AboutPage),
]

window.removeExternalParams = function() {
    // remove params that come before hash (#), for example fbclid
    let splitUrl = window.location.href.split("#")
    let rest = splitUrl[splitUrl.length-1]
    let origin = window.location.origin
    let url = origin + "#" + rest
    window.location.replace(url)
}

window.updateURLParams = function(paramObj) {
    let params = window.getURLParams()
    for (let [key, value] of Object.entries(paramObj)) params.set(key, value)
    let baseUrl = window.location.href.split("?")[0]
    let url = baseUrl + "?" + params
    window.location.replace(url)
}

window.getURLParam = function(key) {
    return window.getURLParams().get(key)
}

window.getURLParams = function() {
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
                <NavigationBar pages={pages} />
                <SocialContainer />
                <div id="content">
                    <Switch>
                        <Route exact path="/" component={WelcomePage}/>
                        {pages.map(page => <Route path={page.path} key={page.name} component={page.component} />)}
                        <Route component={EternalNothingness}/>
                    </Switch>
                </div>
                <div id="footer"></div>
            </HashRouter>
        )
    }
}

export default App;
