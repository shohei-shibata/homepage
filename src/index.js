import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route 
  } from 'react-router-dom';
import './css/index.css';

import axios from 'axios';

import About from './organisms/about';
import Blog from './organisms/blog';
import Contact from './organisms/contact';
import Home from './organisms/home';
import Portfolio from './organisms/portfolio';

import Nav from './molecules/nav';

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
      let data = res.data
        .filter(item => {
          return item.priority > 0;
        })
        .sort((current, next) => {
          return current.priority - next.priority;
        })
      data.forEach(item => {
        item.tags.forEach(tag => {
          if (tags.indexOf(tag) === -1) {
            tags.push(tag);
          }
        })
      });
      this.setState({
        altView: false,
        projects: data,
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
    if (tag === this.state.filter) {
      tag = null;
    }
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
      <div>
        <Router>
          <div className="fixed-page">
            <Nav />
            <div className="main flex-col">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);   

