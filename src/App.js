import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Article from './components/Article';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import BlogForm from './components/BlogForm';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="App">
        <NavBar 
          onSearch={handleSearch} 
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
          isAdmin={isAdmin}
          onLogout={handleLogout}
        />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route 
              path="/new-post" 
              element={isAdmin ? <BlogForm /> : <Navigate to="/admin" />} 
            />
            <Route path="*" element={<HomePage searchQuery={searchQuery} />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Vakacharla Lokesh - Personal Blog</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;