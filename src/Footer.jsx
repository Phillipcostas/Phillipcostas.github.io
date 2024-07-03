import React from 'react';
import './CSS/App.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/Phillipcostas" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/phillip-costas-6804281a/" target="blank" rel="noopener noopener">
        <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <p>&copy; 2024 Phillip Costas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
