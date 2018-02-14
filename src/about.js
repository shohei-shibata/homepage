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
          <div className='about'>
            <p>
                Living in Düsseldorf with my wife and two boys,<br/>
                I work as a mechanical engineer in the automotive industry during the day,<br/>
                and code in the spare time.
            </p>
            <p>
                Computers can help us to accomplish so maning amazing things.<br/>
                But they can also turn us into monitor-staring zombies.<br/>
                My biggest goal is to promote the positive use of the computers and the internet,<br/>
                by making web apps that allow people to do just that.
            </p>
            <p>
                Becoming a parent taught me to use my spare time productively.<br/>
                I probably get much more done now than when I was single, when I had all the time in the world!
            </p>
            <p>
                I strive to make programs that are robust and efficient, with a code that is easy to follow.<br/>
            </p>
            <p>
                
            </p>
          </div>
        );
    }
}

export default withRouter(About);