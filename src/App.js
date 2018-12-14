import React from 'react'
import { Router, Link, Head } from 'react-static'
import { hot } from 'react-hot-loader'
import Logo from './Assets/logo.svg'
//
import Routes from 'react-static-routes'
import './App.css'

const isRouteActive = (url, route) => {
  console.log('from isRouteActive ', { url, route }, 'url.endsWith(route)', url.endsWith(route))
  return !!url.endsWith(route)
}

const App = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <Router>
      <div>
        <div className="topnav-wrapper">
          <nav className="topnav">
            <Link to="/">
              <img src={Logo} height={35} className="logo" />
            </Link>
            <span className="right-menu">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <a href="https://medium.com/@shuddhifund" target="blank" rel="noreferrer noopener">
                Blog
              </a>
              <Link to="/contact">Contact</Link>
            </span>
          </nav>
        </div>
        <div className="content">
          <Routes />
        </div>
        <div className="bottomnav-wrapper">
          <nav className="bottomnav">
            <a
              href="https://twitter.com/shuddhifund"
              target="blank"
              rel="noreferrer noopener"
              className="left-menu-item"
            >
              {/* <i className="fab fa-twitter" /> */}
               Twitter
            </a>
            <a
              href="https://github.com/shuddhifund/shuddhifund-org"
              target="blank"
              rel="noreferrer noopener"
              className="left-menu-item"
            >
              {/* <i className="fab fa-github" /> */}
               Github
            </a>
            <span className="right-menu">
              <Link to="/privacy">Privacy</Link>
            </span>
          </nav>
        </div>
      </div>
    </Router>
  </div>
)

export default hot(module)(App)
