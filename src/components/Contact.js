import React from 'react'
import "./Contact.css";
import { EmailRounded } from '@material-ui/icons';
import { PhoneRounded } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { WhatsApp } from '@material-ui/icons';
function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact__left">
                <h1>Contact</h1>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </div>
            <div className="contact__right">
                <div className="contact__email">
                    <EmailRounded className="contact__icon" />
                    <p>tariqhussainchang363@gmail.com</p>
                </div>
                <div className="contact__phone">
                    <PhoneRounded className="contact__icon" />
                    <p>+92 311 3546862</p>
                </div>
                <div className="contact__github">
                    <GitHub className="contact__icon" />
                    <p>https://github.com/Tariq-Chang</p>
                </div>
                <div className="contact__whatsapp">
                    <WhatsApp className="contact__icon" />
                    <p>+92 311 3546862</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
