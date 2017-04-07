import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import mainpage from './Page/mainpage/mainpage';
import homepage from './Page/HomePage/homepage';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={mainpage} />
      <Route path='/homepage' component={homepage} />
    </div>
  </Router>,
  document.getElementById('root')
);
