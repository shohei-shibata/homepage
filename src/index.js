import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import axios from 'axios';

import Project from './project';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    }
  }
  componentDidMount() {
    const url = 'https://shibatas-portfolio-server.herokuapp.com/project'
    axios.get(url)
    .then(res => {
      this.setState({
        altView: false,
        projects: res.data
      })
    })
  }
  toggleView = (newState) => {
    console.log('toggle view', newState);
    this.setState({
      altView: (newState) ? (newState) : (!this.state.altView)
    });
  }
  handleClick = (e) => {
    switch (e.target.id) {
      case 'home':
        this.toggleView(false);
        break;
      default:
        this.toggleView(true);
    }
  }
  render() {
    console.log(this.state);
    const projects = this.state.projects;
    return (
      <div className='page-container'>
        <div className='main-container'>
          <div className={(this.state.altView) ? ('main-contents off') : ('main-contents')}>
            <div className='main-headline'>
              <h1>Hello, I'm Shohei.</h1>
              <h1>I enjoy creating<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Simple<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Intuitive<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Practical<br />
                  Web Apps.</h1>
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
          <div className={(!this.state.altView) ? ('alt-contents off') : ('alt-contents')}>
            <div className='main-headline'>
              <h1>Hello, I'm Shohei.</h1>
              <h1>I enjoy creating<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Simple<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Intuitive<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Practical<br />
                  Web Apps.</h1>
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
        </div>
        <div className='projects-container'>
          {(projects) ? (
            <div>
              {projects.map((project, i) => {
                return <Project key={i} project={project} toggleView={this.toggleView} />;
              })}
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <div className='footer'>
          <div>
            <ul className='footer-nav'>
              <li onClick={this.handleClick}>About</li>
              <li id='home' onClick={this.handleClick}>Home</li>
              <li onClick={this.handleClick}>Contact</li>
            </ul>
          </div>
          <div className='footer-copyright'>
            Shohei Shibata 2018 ©
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

