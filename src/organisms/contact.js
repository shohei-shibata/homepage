import React, { Component } from 'react';

import '../css/contact.css';

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
                <h2>Contact Form</h2>
                <p>Do you want to get in touch with me? Great!<br/>
                 I will take your message very seriously and will respond as quickly as I can.</p>
    
                <form className="contact-form" action="https://formspree.io/me@shoheishibata.com" method="POST">          
                    <div className='form-row'>
                        <input className="contact-form-item name" type="text" name="name" placeholder="Name" autoFocus={true}/>
                        <input className="contact-form-item email" type="email" name="_replyto" placeholder="Email" />    
                    </div>
                    <div className='form-row'>
                        <input className="contact-form-item subject" type="subject" name="_replyto" placeholder="Subject" />  
                    </div>
                    <div className='form-row'>
                        <textarea placeholder="Your message here" className="contact-form-item message" type="text" name="message" rows="5" />
                    </div>
                    <input type="hidden" name="_next" value="/" />
                    <input type="text" name="_gotcha" style={{display:'none'}} />
                    <input type="hidden" name="_subject" placeholder="shoheishibata.com Contact Form" />
                    <div>
                        <BtnPrimary value='Send' active={true} type='submit' fontSize='1.5em' width='120px' lineHeight='40px' />
                    </div>
                </form>
              </div>
            </div>
        );
    }
}

export default Contact;