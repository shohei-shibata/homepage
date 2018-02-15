import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class About extends Component {
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
              <div className='about'>
                <p>   
                    <img className='about-photo' src='https://picsum.photos/200/200' alt='me' />
                    <strong>Welcome! My name is Shohei Shibata.</strong><br/><br/>
                    Living in Düsseldorf with my wife and two boys,
                    I work as a mechanical engineer in the automotive industry during the day,
                    and code in the spare time.
                </p>
                <hr/>
                <p>
                    The most amazing experiences never happen in the computer, at least as far as I know. 
                    That's why my goal is to create non-distracting, minimalistic apps that helps people 
                    do their computer tasks efficiently.
                </p>
                <hr/>
                <p>
                    Do you have a possible project that you'd like to discuss with me?<br/>
                    If so please use the contact form to get in touch with me. <br/>
                    I'm really looking forward to hear what you have to say!
                </p>
              </div>    
            </div>
        );
    }
}

export default withRouter(About);