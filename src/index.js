import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main.js';

require('dotenv').load();

let apiUrl = 'https://shibatas-portfolio-server.herokuapp.com';
console.log('api url', apiUrl);

axios.get(apiUrl)
.then(res => {
  console.log('api success');
})
.catch(err => {
  console.error('server error.');
});

ReactDOM.render(
  <Main url={apiUrl + '/project'} />, 
  document.getElementById('root'));   

