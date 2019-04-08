import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter , Switch, Route, Link } from 'react-router-dom'


// import components
import Home from './components/index'
import About from './components/about'
import Skill from './components/skill'
import Portfolio from './components/portfolio'
import SocialMedia from './components/socialmedia'

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-ligh">
            <Link to={'/'} className="navbar-brand">My Portfolio</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/about'} className="nav-link" >About Me</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/skill'} className="nav-link" >Skill</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/portfolio'} className="nav-link" >Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/social-media'} className="nav-link" >Social Media</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/skill" component={Skill}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/social-media" component={SocialMedia}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
