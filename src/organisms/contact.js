import React, { Component } from 'react';

import BtnPrimary from '../atoms/btn-primary';

class Contact extends Component {
    handleClick = (e) => {
        switch (e.target.id) {
            case 'about':
                this.props.toggleView(true);
                this.props.history.push('/about');
                break;
            case 'home':
                this.props.toggleView(false);
                this.props.history.push('/');
                break;
            case 'contact':
                this.props.toggleView(true);
                this.props.history.push('/contact');
                break;
            default:
        }
    }
    render() {
        return (
            <div className='main-card'>
              <div className='contact'>
                <h3>Contact Me</h3>
                <small>Please use the form below to get in touch.</small>
    
                <form className="contact-form" action="https://formspree.io/me@shoheishibata.com" method="POST">          
                    <input className="contact-form-item name" type="text" name="name" placeholder="Name" autoFocus={true}/>
                    <input className="contact-form-item email" type="email" name="_replyto" placeholder="Email" />    
                    <input className="contact-form-item subject" type="subject" name="_replyto" placeholder="Subject" />  
                    <div>
                        <textarea placeholder="Your message here" className="contact-form-item message" type="text" name="message" rows="5" />
                    </div>
                    <input type="hidden" name="_next" value="/" />
                    <input type="text" name="_gotcha" style={{display:'none'}} />
                    <input type="hidden" name="_subject" placeholder="shoheishibata.com Contact Form" />
                    <div>
                        <BtnPrimary value='Send' active={true} type='submit' fontSize='0.8em' width='120px' lineHeight='40px' />
                    </div>
                </form>
              </div>
            </div>
        );
    }
}

export default Contact;