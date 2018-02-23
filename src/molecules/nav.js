import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../css/nav.css';

class Nav extends Component {
    handleClick = (e) => {
        console.log('nav', e.target.id);
        let destination = e.target.id.toLowerCase();
        switch (destination) {
          case 'home':
          case 'logo':
            destination = '';
            break;
          default:
        }
        console.log('destination');
        this.props.history.push('/' + destination);
    }
    render() {
        const navItems = ["Home", "About", "Portfolio", "Blog", "Contact"];
        return (
            <div className="nav-container">
              <div id="logo" className="logo-container" onClick={this.handleClick}>
                  <h1 className="logo">Shohei</h1>
                  <h1 className="logo bold">Shibata</h1>
              </div>
              <div className="nav-links">
                <ul>
                  {navItems.map(item => {
                      return (<li key={item} id={item} onClick={this.handleClick}>{item}</li>)
                  })}
                </ul>
              </div>
              <div className="nav-links-mobile">
                <i className="fas fa-bars"></i>
              </div>
            </div>  
        );
    }
}

export default withRouter(Nav);