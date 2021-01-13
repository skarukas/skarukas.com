import React from "react"
import { NavLink } from 'react-router-dom';
import $ from "jquery"

import "../style/NavigationBar.css"

export default class NavigationBar extends React.Component {

    componentDidMount() {
        $(window).on('resize', () => {
            let w = document.body.clientWidth;
            let $title = $("#nav-title")
            let $graphic = $("#navbar img")

            /* Hide navbar title */
            if (w < 850) {
                $title.is(":visible") && $title.fadeOut()
            } else {
                $title.is(":hidden") && $title.fadeIn()
            }

            /* Hide navbar signature */
            if (w < 500) {
                $graphic.is(":visible") && $graphic.fadeOut()
            } else {
                $graphic.is(":hidden") && $graphic.fadeIn()
            }
            $("#content").css("padding-top", $("#navbar").height())
        })
        $(window).trigger('resize')
    }

    render() {
        return (
            <div id="navbar">
                <div id="navbar-pages">
                    {this.props.pages.map(page => <NavLink to={page.path} activeClassName="navbar-selected" key={page.name}>{page.name}</NavLink>)}
                </div>
                <img src="img/signature.png" alt="Site logo"/>
                <span id="nav-title">stephen karukas</span>
            </div>
        )
    }
}