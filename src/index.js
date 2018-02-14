import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route 
  } from 'react-router-dom';
import './style.css';

import axios from 'axios';

import About from './about';
import Contact from './contact';
import Project from './project';
import ProjectDetail from './project-detail';
import Footer from './footer';

require('dotenv').load();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    }
  }
  componentDidMount() {
    const url = process.env.REACT_APP_APIURL + '/project';
    axios.get(url)
    .then(res => {
      this.setState({
        altView: false,
        projects: res.data
      })
    })
  }
  toggleView = (newState) => {
    this.setState({
      altView: newState
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
    const projects = this.state.projects;
    return (
      <Router>
        <div className='page-container'>
          <div className='main-container'>
            <div className={(this.state.altView) ? ('main-contents off') : ('main-contents')}>
              <div className='main-headline'>
                <h1>Hello, I'm Shohei.</h1>
                <h1>I enjoy creating<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Minimalist<br/>
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
              <div className='alt-contents-card'>
                <div>
                  <Route 
                    path="/about"
                    render={(routeProps)=> (
                      <About />
                    )
                  }/>
                  <Route 
                    path="/contact"
                    render={(routeProps)=> (
                      <Contact />
                    )
                  }/>
                  <Route 
                    path="/project/:id"
                    render={(routeProps)=> (
                      <ProjectDetail />
                    )
                  }/>
                </div>
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
          <Footer toggleView={this.toggleView} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);   

