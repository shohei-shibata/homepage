import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profilePhoto from './img/profile.png';

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
            <div className={(this.props.altView) ? ('alt-contents-card shift') : ('alt-contents-card')}>
              <div className='about'>
                <h3>About Me</h3>
                <p>   
                    <img className='about-photo' src={profilePhoto} alt='me' />
                    My name is Shohei Shibata. Living in Düsseldorf with my wife and two boys,
                    I code as much as I can outside of my day job responsibility as a mechanical engineer in the automotive industry.
                </p>
                <p>
                    My biggest focus is in creating simple web apps that positively influence people's lives. I want to help the web to be useful, rather than distracting or addictive.
                </p>
                <p>
                    If there are any projects which I could support you in any way, please don't hesitate to contact me.
                </p>
              </div>    
            </div>
        );
    }
}

export default withRouter(About);