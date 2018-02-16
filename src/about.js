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
            <div className={(this.props.altView) ? ('alt-contents-card shift') : ('alt-contents-card')}>
              <div className='about'>
                <h3>About Me</h3>
                <p>   
                    <img className='about-photo' src='https://picsum.photos/200/200' alt='me' />
                    My name is Shohei Shibata. Living in Düsseldorf with my wife and two boys,
                    I work as a mechanical engineer in the automotive industry during the day,
                    and code in the spare time.
                </p>
                <p>
                    My biggest focus is in creating simple web apps that positively influence people's lives. I want the web to be useful, not distracting or addictive.
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