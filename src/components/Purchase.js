import $ from "jquery"
import React from "react"
import "../style/Purchase.css"

import Loader from "../components/Loader"
import EasyLink from "./EasyLink"

function getDriveUrl(item) {
  return item.driveId ? `https://drive.google.com/drive/folders/${item.driveId}?usp=sharing` : undefined
}

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
        if ($('#paypal-button-container')) {
          this.showPayPalButtons(this.state.item.price, '#paypal-button-container')
            .then(() => {
              $('.loader-container').fadeOut()
              $('#paypal-button-container').fadeIn()
            }).catch(ø => ø)
        }
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

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            "amount": {
              "currency_code": "USD",
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

      onApprove: function (data, actions) {
        $('.loader-container').fadeIn()
        $('#paypal-button-container').fadeOut()
        return actions.order.capture().then(function (details) {
          purchaseModal.setState({ approvedEmail: details.payer.email_address })
          let email_template_fields = {
            product_name: purchaseModal.state.item.readable_name,
            download_url: getDriveUrl(purchaseModal.state.item),
            recipient_email_address: details.payer.email_address,
          }
          console.log("Sending email with fields " + JSON.stringify(email_template_fields))
          window.emailjs.send("service_44xuh73", "template_irx77xa", email_template_fields);
        });
      },

      onError: function (err) {
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
      let url = getDriveUrl(this.state.item)
      if (!url) {
        purchaseDetails = (<div style={{color: "red", textAlign: "center"}}>
          <p>An error occurred.</p>
          <p>Sorry</p>
          <p>:(</p>
        </div>)
      } else if (this.state.approvedEmail) {
        purchaseDetails = (
          <div className="approved-email">
            <p>You can use the following link to view and download the sheet music.</p>
            <p><EasyLink to={url} style={{ overflowWrap: "break-word" }}><strong>{url}</strong></EasyLink></p>
            <p>You will also receive a receipt as well as an email with this download link, sent to <span className="email-address">{this.state.approvedEmail}</span>.</p>
            <p>Contact <EasyLink to="mailto:stephen.karukas@gmail.com" className="hover-anchor">stephen.karukas@gmail.com</EasyLink> for any issues with your order.</p>
          </div>
        )
      } else {
        purchaseDetails = (
          <div>
            <p><strong>Item:</strong> <em>{this.state.item.name}</em> [Digital PDF Score]</p>
            <p><strong>Price:</strong> {"$" + this.state.item.price.toFixed(2) + " USD"}</p>
            {this.state.item.note && (
              <p><strong>Note:</strong> <em>{this.state.item.note}</em></p>
            )}
            <p style={{fontSize: "small"}}>A Google Drive link to a folder containing the materials will be sent to the email associated with your PayPal account.</p>

            <div id="smart-button-container">
              <div style={{ textAlign: "center" }}>
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
            <h2>{this.state.approvedEmail ? "Thanks for your order!" : "Purchase PDF"}</h2>
            <div className="purchase-details">{purchaseDetails}</div>
          </div>
        </div>
      )
    }
  }
}