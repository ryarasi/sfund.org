import React from 'react'

export default () => (
  <div>
    <div style={{textAlign: 'center'}}>
      <p>
        To suggest features or report bugs on this website, visit{' '}
        <a
          href="https://github.com/shuddhifund/shuddhifund-org"
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* <Icon name="github" /> */}
          Github
        </a>
      </p>

      <p>
        Find us on{' '}
        <a href="https://twitter.com/shuddhifund" rel="noopener noreferrer" target="_blank">
          {/* <Icon name="twitter" /> */}
          Twitter
        </a>
      </p>
    </div>
    <br/>
    <hr/>
    <br/>
    <div style={{ textAlign: 'center' }}>
    <h3>Contact Us</h3>
      <form name="contact" method="POST" netlify>
        <p>
          <label>
            Name <input autoFocus type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Subject <input type="text" name="subject" />
          </label>
        </p>
        <p>
          <label>
            Message <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
)
