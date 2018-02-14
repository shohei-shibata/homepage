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
          <div className='contact'>
            <p>
                Contact Page
            </p>
          </div>
        );
    }
}

export default withRouter(Contact);