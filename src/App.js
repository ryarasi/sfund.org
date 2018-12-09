import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import * as Logo from './Assets/logo.svg';
//
import Routes from 'react-static-routes'

import './App.css'

const App = () => (
  <Router>
    <div>
      <div className="topnav-wrapper">
        <nav className="topnav">
            <Link to="/"><img src={"./Assets/logo.svg"} height={30} /></Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="https://medium.com/@shuddhifund" target="blank" rel="noreferrer noopener">
              Blog
            </a>
            <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="content">
        <Routes />
      </div>
      <div className="bottomnav-wrapper">
        <nav className="bottomnav">
          <Link className="right" to="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
