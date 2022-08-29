import React from "react"
import $ from "jquery"

import PurchaseModal from "../components/Purchase";
import SearchBar from "../components/SearchBar";
import AudioPlayer from "../components/AudioPlayer";
import worksData from "../data/works"
import "../style/Works.css"


export default class WorksPage extends React.Component {
    state = { data: worksData }
    modalRef = React.createRef()

    componentDidMount() {
        if (window.getURLParam("work-id")) {
            setTimeout(() => {
                // FIX THIS
                let $queryWork = $("#" + window.getURLParam("work-id"))
                let offset = $queryWork.offset().top
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
        document.title = "Stephen Karukas - Music"
        if (!this.state.data) return this.props.fallback || null
        else return (
            <div id="works-page">
                <SearchBar placeholder="Filter by keyword (ex: marimba)"/>
                <PurchaseModal ref={this.modalRef}/>
                <div className="work-container">
                    { 
                        this.state.data.map((work, idx) => {
                            let showDetails = work.id === window.getURLParam("work-id")
                            return <Work work={work} key={idx} modalRef={this.modalRef} showDetails={showDetails}/>
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
        

        /* Pause all audio */
        $('.work')
            .find('audio')
            .trigger('pause')
    }

    render() {
        let work = this.state.work;
        if (!work.title) return null

        let iconImage = "img/expand-down-icon.png"; /* ["expand-icon.png", "condense-icon.png"][+this.state.showDetails] */
        let workYear = work.year? (<span className="work-year">({work.year})</span>) : null

        return (
            <div ref={this.containerElement}
                 className="work"
                 id={work.id}
                 style={{display: ["none", "initial"][+this.state.show]}}>
                
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
                            dangerouslySetInnerHTML={{__html: work.description || '<em>Description coming soon.</em>'}}>
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
                        {work.purchase && <PurchaseButton purchase={work.purchase} name={work.id.toUpperCase()} modalRef={this.props.modalRef}/>}
                        {work.audio && <AudioPlayer src={"audio/" + work.audio} />}
                    </div>
                </div>
            </div>
        )
    }
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
            /* Sell directly using PayPal */
            buttonText = `Purchase ($${purchaseInfo.price})`
            purchaseURL = null
            onClick = () => {
                props.modalRef.current.displayItem({
                    name: props.name,
                    price: purchaseInfo.price, 
                    note: purchaseInfo.note
                })
            }
        } else {
            /* Send to publisher website */
            buttonText = `Purchase (${purchaseInfo.publisher})`
            purchaseURL = purchaseInfo.link
        }
    }

    return (
        <a href={purchaseURL} target="_blank" rel="noreferrer" onClick={onClick}>
            <button className="purchase-button">{buttonText}</button>
        </a>
    )
}