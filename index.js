import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './Home';
import About from './About';
import Classes from './Classes';


/**
 * 
 * <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
 */

ReactDOM.render(
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="classes" component={Classes} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
