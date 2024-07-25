import React, { useState } from 'react';
import './Footer.css';
import './btn.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage('Subscribed successfully!');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="https://www.linkedin.com/company/sufnaproductions/jobs/">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong>+91 97794-26400</p>
          <p><strong>Email:</strong> <a href="mailto:bussiness@sufnaproductions.com">Bussiness@sufnaproductions.com</a></p>
        </div>
        <div className="footer-section newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <p>Never miss our new project updates!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-abu">Subscribe</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sufna Productions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
