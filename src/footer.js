import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
          <div className='footer'>
            <div className='footer-copyright'>
              Shohei Shibata 2018 ©
            </div>
          </div>
        );
    }
}

export default withRouter(Footer);