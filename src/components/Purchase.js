import $ from "jquery"
import React from "react"
import "../style/Purchase.css"

import Loader from "../components/Loader"

export default class PurchaseModal extends React.Component {
    state = {}

    hide() {
        $('.purchase-details').slideUp(() => {
            this.setState({ item: undefined, approvedEmail: undefined })
        })
        $('.modal-container').fadeOut()
    }

    componentDidUpdate() {
        if (this.state.item && !this.state.approvedEmail) {
            $('#paypal-button-container').empty().hide()
            $('.modal-container').hide().fadeIn()
            $(".purchase-details").hide().slideDown(() => {
                this.showPayPalButtons(this.state.item.price, '#paypal-button-container')
                    .then(() => {
                        $('.loader-container').fadeOut()
                        $('#paypal-button-container').fadeIn()
                    })
            })
        }
    }

    /* From PayPal website */
    showPayPalButtons(price, container) {
        let purchaseModal = this
        let buttons = window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'buynow',
            },
    
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        "amount":{
                            "currency_code":"USD",
                            "value": price
                        },
                        "description": purchaseModal.state.item.name
                    }],
                    application_context: {
                        brand_name: "Stephen Karukas",
                        shipping_preference: "NO_SHIPPING"
                    }
                });
            },
    
            onApprove: function(data, actions) {
                $('.loader-container').fadeIn()
                $('#paypal-button-container').fadeOut()
                return actions.order.capture().then(function(details) {
                    purchaseModal.setState({ approvedEmail: details.payer.email_address })
                });
            },
    
            onError: function(err) {
                console.log(err);
            }
        })
        return buttons.render(container)
    }

    displayItem(item) {
        this.setState({ item, approvedEmail: undefined })
    }

    render() {
        if (!this.state.item) {
            return null
        } else {
            let purchaseDetails;

            if (this.state.approvedEmail) {
                purchaseDetails = (
                    <div className="approved-email">
                        <p>A PDF will be sent to <span className="email-address">{this.state.approvedEmail}</span>.</p>
                        <p>If this is incorrect, or if you have any questions, contact <a href="mailto:stephen.karukas@gmail.com" className="hover-anchor">stephen.karukas@gmail.com</a></p>
                    </div>
                )
            } else {
                purchaseDetails = (
                    <div>
                        <p><strong>Item:</strong> <em>{this.state.item.name}</em> [PDF Score]</p>
                        <p><strong>Price:</strong> {"$" + this.state.item.price.toFixed(2) + " USD"}</p>
                        {this.state.item.note && (
                            <p><strong>Note:</strong> <em>{this.state.item.note}</em></p>
                        )}
                        
                        <div id="smart-button-container">
                            <div style={{textAlign: "center"}}>
                                <div id="paypal-button-container"></div>
                            </div>
                            <Loader />
                        </div>
                    </div>
                )
            }

            return (
            <div className="modal-container" onClick={() => this.hide()}>
                <div className="purchase-container" onClick={e => e.stopPropagation()}>
                    <a className="purchase-exit-button" title="Exit" onClick={() => this.hide()}>
                        <img className="transparent-icon"
                            src="img/x-icon.png"
                            alt="Close modal window">
                        </img>
                    </a>
                    <h2>{this.state.approvedEmail? "Thanks for your order!" : "Purchase PDF"}</h2>
                    <div className="purchase-details">{purchaseDetails}</div>
                </div>
            </div>
        )
        }
    }
}