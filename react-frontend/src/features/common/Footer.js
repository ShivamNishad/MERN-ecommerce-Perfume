import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="mufa-logo.png" alt="Mufa Logo" />
          <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Information Architecture</a></li>
            <li><a href="#">Interface Design</a></li>
            <li><a href="#">User Experience</a></li>
            <li><a href="#">Data Visualization</a></li>
            <li><a href="#">Website Design</a></li>
            <li><a href="#">Mobile Design</a></li>
            <li><a href="#">Digital Experience</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Information Architecture</a></li>
            <li><a href="#">Interface Design</a></li>
            <li><a href="#">User Experience</a></li>
            <li><a href="#">Data Visualization</a></li>
            <li><a href="#">Website Design</a></li>
            <li><a href="#">Mobile Design</a></li>
            <li><a href="#">Digital Experience</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mufa Perfumes. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
