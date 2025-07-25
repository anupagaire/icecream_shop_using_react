import React from 'react';
import '../css/style.css';

const Footer = ({ companyName, year, links }) => {
  return (
    <footer className="footer">
      <p>&copy; {year} {companyName}. All rights reserved.</p>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
