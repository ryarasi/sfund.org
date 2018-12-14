import React from 'react'
import { Head } from 'react-static'
import './Contact.css'

export default () => (
  <div>
    <Head>
      <title>Contact | Shuddhi Fund</title>
    </Head>
    <div style={{ textAlign: 'center', fontSize: '1.2em' }}>
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
    <br />
    <hr style={{width: '20vw'}}/>
    <br />
    <div style={{ textAlign: 'center' }}>
      <h3>Contact Us</h3>
      <form name="contact" method="POST" netlify>
        <div>
          <div className="label">
            <label>Name</label>
          </div>
          <input autoFocus type="text" name="name" />
        </div>
        <div>
          <div className="label">
            <label>Email</label>
          </div>
          <input type="email" name="email" />
        </div>
        <div>
          <div className="label">
            <label>Subject</label>
          </div>
          <input type="text" name="subject" />
        </div>
        <div>
          <div className="label">
            <label>Message</label>
          </div>
          <textarea name="message" />
        </div>
        <br />
        <div>
          <button type="submit" className="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
)
