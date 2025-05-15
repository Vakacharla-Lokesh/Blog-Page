import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPost';
import '../styles/HomePage.css';

const HomePage = ({ searchQuery }) => {
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? blogPosts.filter(
        post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.categories.some(category => category.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : blogPosts;

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to My Blog</h1>
        <p>Thoughts, stories and ideas about web development and technology</p>
      </div>

      {searchQuery && (
        <div className="search-results">
          <h2>Search Results for "{searchQuery}"</h2>
          <p>{filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found</p>
        </div>
      )}

      <div className="blog-posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-content">
                <div className="blog-card-categories">
                  {post.categories.map((category, index) => (
                    <span key={index} className="category-tag">
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="read-more-link">
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No posts found</h3>
            <p>Try adjusting your search terms or browse all posts</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;