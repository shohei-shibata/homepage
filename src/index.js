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
        projects: res.data
      })
    })
  }
  render() {
    console.log(this.state);
    const projects = this.state.projects;
    return (
      <div className='page-container'>
        <div className='main-container'>
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
        <div className='projects-container'>
          {(projects) ? (
            <div>
              {projects.map((project, i) => {
                return <Project key={i} project={project}/>;
              })}
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <div className='footer'>
          <div>
            <ul className='footer-nav'>
              <li>About</li>
              <li>Home</li>
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

