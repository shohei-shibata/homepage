import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <div className='main-container'>
          <div className='main-headline'>
            <h1>Hello, I'm Shohei.</h1>
            <h1>I create web apps<br/>
              with simplicity and usefulness<br/>
              as the primary focus.</h1>
          </div>
          <div className='main-filters'>
            <div className='main-filters-btn'>HTML</div>
            <div className='main-filters-btn'>CSS</div>
            <div className='main-filters-btn'>Javascript</div>
            <div className='main-filters-btn'>React</div>
            <div className='main-filters-btn'>Node.js</div>
            <div className='main-filters-btn'>Express.js</div>
            <div className='main-filters-btn'>MongoDB</div>
          </div>
        </div>
        <div className='projects-container'>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
        </div>
        <div className='footer'>
          <div className='footer-links'>
            <ul className='footer-nav'>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='footer-copyright'>
            Shohei Shibata 2017 ©
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);   

