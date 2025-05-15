import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/TopNav.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch, isDarkMode, onThemeToggle, isAdmin, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract search query from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      if (onSearch) onSearch(query);
    }
  }, [location.search, onSearch]);

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    // Update URL with search query
    const params = new URLSearchParams();
    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim());
      navigate(`/?${params.toString()}`);
    } else {
      navigate('/');
    }
    
    // Call the onSearch callback
    if (onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSearchReset = () => {
    setSearchQuery('');
    navigate('/');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}>
      <a href="/" className="navbar-logo">
        My Blog
      </a>
      
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isAdmin && <Link to="/new-post" className="create-post">Create Post</Link>}
        {isAdmin && (
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
      
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search blog posts"
        />
        {searchQuery && (
          <button 
            type="button"
            className="search-clear"
            onClick={handleSearchReset}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
        <button 
          type="submit"
          className="search-submit"
          aria-label="Submit search"
        >
          🔍
        </button>
      </form>
      
      <button 
        className="theme-toggler" 
        onClick={onThemeToggle}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;