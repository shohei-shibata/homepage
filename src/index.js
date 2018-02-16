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
import Nav from './nav';
import ProjectCard from './project-card';
import ProjectDetail from './project-detail';
import Footer from './footer';

import BtnOne from './btn-one';

require('dotenv').load();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altView: false,
      projects: null,
      tags: null,
      filter: null
    }
  }
  componentDidMount() {
    const url = process.env.REACT_APP_APIURL + '/project';
    axios.get(url)
    .then(res => {
      let tags = [];
      res.data.forEach(data => {
        data.tags.forEach(tag => {
          if (tags.indexOf(tag) === -1) {
            tags.push(tag);
          }
        })
      });
      this.setState({
        altView: false,
        projects: res.data,
        tags: tags
      })
    })
  }
  toggleView = (newState) => {
    this.setState({
      altView: newState
    });
  }
  filterProjects = (tag) => {
    this.setState({
      filter: tag
    });
  }
  handleClick = (e) => {
    console.log('handleClick', e.target.id);
    switch (e.target.id) {
      case 'home':
        this.toggleView(false);
        break;
      default:
        this.toggleView(true);
    }
  }
  render() {
    const tags = (this.state.tags) ? (this.state.tags) : ([]);
    const filter = this.state.filter;
    let projects = this.state.projects;
    
    // Filter projects if filter is set
    if (projects && filter) {
      projects = projects.filter(project => {
        return project.tags.indexOf(filter) !== -1;
      });      
    }
    
    return (
      <Router>
        <div>
          <div className={(this.state.altView) ? ('page-container shift') : ('page-container')}>
              <div className='main-container'>
                <div className='main-contents'>
                  <div className='main-headline'>
                    <h1>Hello, I'm Shohei.</h1>
                    <h1>My passion is building<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simple<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intuitive<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Practical<br />
                        Web Apps.</h1>
                  </div>
                  <div className='main-filters'>
                    {tags.map((item, i) => {
                      const active = (item === this.state.filter);
                      return (
                        <BtnOne key={i} value={item} active={active} onClick={this.filterProjects}/>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='alt-container'>
                  <Route 
                    path="/about"
                    render={(routeProps)=> (
                      <About altView={this.state.altView} />
                    )
                  }/>
                  <Route 
                    path="/contact"
                    render={(routeProps)=> (
                      <Contact altView={this.state.altView} />
                    )
                  }/>
                  <Route 
                    path="/project/:id"
                    render={(routeProps)=> (
                      <ProjectDetail projects={projects}/>
                    )
                  }/>
              </div>
          </div>
          <div className='projects-container'>
            {(projects) ? (
              <div>
                {projects.map((project, i) => {
                  return <ProjectCard key={i} position={i} project={project} toggleView={this.toggleView} />;
                })}
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <Nav toggleView={this.toggleView} altView={this.state.altView} />
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);   

