import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='main-container'>Hello World</div>
        <div className='projects-container'>Projects</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);   

