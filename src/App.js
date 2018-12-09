import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav className="topnav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="https://medium.com/@shuddhifund" target="blank" rel="noreferrer noopener">
          Blog
        </a>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
        <nav  className="bottomnav">
          <Link to="/privacy">Privacy</Link>
        </nav>
    </div>
  </Router>
)

export default hot(module)(App)
