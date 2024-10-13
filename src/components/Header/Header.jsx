import React, { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header>
      <div className="logo">
        <a href="/">
          <p>SultanovF</p>
          <p>.</p>
        </a>
      </div>
      <div className="header-right">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      </div>
      
      <div className="theme-toggle">
          <input 
            type="checkbox" 
            className="LTCheckbox" 
            id="LTCheckbox" 
            checked={isDarkMode} 
            onChange={toggleDarkMode} 
          />
          <label htmlFor="LTCheckbox" className="LTCheckbox-label">
            {isDarkMode ? <BsFillSunFill className='fa-moon' /> : <BsFillMoonFill className='fa-sun' />}
            <span className="ball" />
          </label>
        </div>
    </header>
  );
};

export default Header;
