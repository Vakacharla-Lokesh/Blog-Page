import React, { useState } from 'react';
import '../styles/TopNav.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
      </div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <button className="theme-toggler" onClick={handleThemeToggle}>
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
