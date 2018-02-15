import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
            <div className='alt-contents-card'>
              <div className='contact'>
                <h3>Contact Form</h3>
    
                <form className="contact-form" action="https://formspree.io/me@shoheishibata.com" method="POST">          
                    <input className="contact-form-item name" type="text" name="name" placeholder="Name" autoFocus={true}/>
                    <input className="contact-form-item email" type="email" name="_replyto" placeholder="Email" />    
                    <div>
                        <textarea placeholder="Your message here" className="contact-form-item message" type="text" name="message" rows="5" />
                    </div>
                    <input type="hidden" name="_next" value="/" />
                    <input type="text" name="_gotcha" style={{display:'none'}} />
                    <input type="hidden" name="_subject" placeholder="shoheishibata.com Contact Form" />
                    <div>
                        <input className="contact-form-submit" type="submit" value="Send" />
                    </div>
                </form>
              </div>
            </div>
        );
    }
}

export default withRouter(Contact);