import React from "react"
import $ from "jquery"

import SearchBar from "../components/SearchBar"
import newsData from "../data/news"

import "../style/News.css"

export default class NewsPage extends React.Component {
    componentDidMount() {
        if (window.getURLParam("news-id")) {
            setTimeout(() => {
                // FIX THIS
                let $queryItem = $("#" + window.getURLParam("news-id"))
                let offset = $queryItem.offset().top
                let scrollVal = offset - ($('#navbar').height() + 4)
                window.scroll({
                    top: scrollVal,
                    left: 0, 
                    behavior: 'smooth'
                });
            }, 1000)
        }
    }
    render() {
        let byDateDescending = (a, b) => (b.date.getTime() || 0) - (a.date.getTime() || 0)
        return (
            <div id="news-page">
                <SearchBar />
                <div className="news-container">
                    {newsData.sort(byDateDescending).map((itemData, idx) => {
                        let showDetails = itemData.id === window.getURLParam("news-id")
                        return <NewsItem data={itemData} key={idx} showDetails={showDetails}/>
                    })}
                </div>
            </div>
        )
    }
}

class NewsItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showDetails: props.showDetails
        }
        this.containerElement = React.createRef()
    }

    testQuery(queries) {
        let data = getJSXText(Object.values(this.props.data))
        /* test if the properties contain the query string */
        let stringified = JSON.stringify(data).toLowerCase()
        this.setState({
            show: queries.every(q => stringified.includes(q.toLowerCase()))
        })
    }

    toggleDetails() {
        /* Hide all others */
        $('.news-item')
            .not(this.containerElement.current)
            .removeClass('news-item-selected')
            .children(".toggle-details")
            .slideUp(500)

        /* Toggle current */
        $(this.containerElement.current)
            .toggleClass('news-item-selected')
            .children(".toggle-details")
            .slideToggle(500)
        

        /* Pause all audio if any */
        $('.news-item')
            .find('audio')
            .trigger('pause')
    }

    componentDidMount() {
        if (this.props.showDetails) this.toggleDetails()
        
        $("#news-page .search-bar").on('input', event => {
            this.testQuery(event.target.value.split(" "))
        }).trigger('input')
        /* Fix all the links */
        $("a").attr("target", "_blank");
    }

    render() {
        let iconImage = "img/expand-down-icon.png";
        let data = this.props.data
        return (
            <div ref={this.containerElement} 
                 className="news-item" 
                 id={data.id}
                 style={{display: ["none", "initial"][+this.state.show]}}>

                <a className="show-details-button" onClick={ø => this.toggleDetails()}>
                    <img className="transparent-icon"
                         alt="Expand down icon"
                         src={iconImage} />
                    <NewsItemHeader title={data.title} date={data.date} subtitle={data.subtitle} tags={data.tags}/>
                </a>
                <div className="news-item-content-container toggle-details">
                    <hr />
                    <div className="news-item-content">{data.content}</div>
                </div>
            </div>
        )
    }
}

function NewsItemHeader(props) {
    return (
        <div className="news-item-header-container">
            <h3 className="news-title">{props.title}</h3>
            {props.subtitle && <h4 className="news-subtitle">{props.subtitle}</h4>}
            {props.tags && <div>{props.tags.map((tag, idx) => <div className="news-item-tag" key={idx}>{tag}</div>)}</div>}
            {props.date && <div className="news-item-date">{props.date.toLocaleDateString()}</div>}
        </div>
    )
}

//new Date().toISOString()

function getJSXText(obj) {
    if (obj instanceof Array) return obj.map(getJSXText).join(" ")
    if (typeof obj != "object" || (!obj.props || !obj.props.children)) return obj.toString()
    return getJSXText(obj.props.children)
}