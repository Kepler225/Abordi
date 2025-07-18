import React from 'react'
import logo_2 from '../assets/logo_2.png'
import { FaTwitter, FaLinkedin, FaSmile } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='footer'>
          <div className="footer-top">
        <div className="footer-brand">
          <img src={logo_2}/>
          <p>The intelligent workspace that brings together the best AI tools for your profession.</p>
          <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin />
  </a>
  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer"> <FaSmile />
  </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Roadmap</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>Help Center</li>
            <li>API</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="footer-subscribe">
        <div className="subscribe-text">
          <h3>Subscribe to our newslette</h3>
          <p>Get the latest updates on new features and AI tools.</p>
        </div>
        <form className="subscribe-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Abordi Inc. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer