import React, { useState, useEffect } from 'react';
import '../styles/TopNav.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle initial theme preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.body.classList.toggle('dark-mode', prefersDark);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Implement your search functionality here
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-logo">
        My Blog
      </a>
      
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search blog posts"
        />
      </form>
      
      <button 
        className="theme-toggler" 
        onClick={handleThemeToggle}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;