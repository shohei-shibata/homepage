import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends Component {
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
          <div className='footer'>
            <div>
              <ul className='footer-nav'>
                <li id='about' onClick={this.handleClick}>About</li>
                <li id='home' onClick={this.handleClick}>Home</li>
                <li id='contact' onClick={this.handleClick}>Contact</li>
              </ul>
            </div>
            <div className='footer-copyright'>
              Shohei Shibata 2018 ©
            </div>
          </div>
        );
    }
}

export default withRouter(Footer);