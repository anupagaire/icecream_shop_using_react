import React from 'react';
import '../css/style.css';

const Nav = ({ logoText, links }) => {
  return (
    <nav className='nav'>
      <div className='navbar'>
        <span className='logo'>{logoText}</span>
        <ul className='nav-links'>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className='search-icon'>🔍</div>
      </div>
    </nav>
  );
};

export default Nav;
