import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPost';
import '../styles/BlogForm.css';

const BlogForm = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    categories: '',
    readTime: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const post = {
      id: blogPosts.length + 1,
      ...newPost,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      categories: newPost.categories.split(',').map(cat => cat.trim()),
      slug: newPost.title.toLowerCase().replace(/\s+/g, '-')
    };

    // In a real application, you would make an API call here
    blogPosts.unshift(post);
    navigate('/');
  };

  return (
    <div className="blog-form">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Read Time (e.g., '5 min read')"
            value={newPost.readTime}
            onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Categories (comma-separated)"
            value={newPost.categories}
            onChange={(e) => setNewPost({...newPost, categories: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Excerpt"
            value={newPost.excerpt}
            onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({...newPost, content: e.target.value})}
            required
            rows="10"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default BlogForm;