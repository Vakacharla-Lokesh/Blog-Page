import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import "../styles/Article.css";

function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // If no slug is provided (viewing from home page), show the first post
    if (!slug) {
      setPost(blogPosts[0]);
      return;
    }

    // Find the post with the matching slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
    } else {
      // Post not found
      setPost(null);
    }
  }, [slug]);

  // Format content with proper paragraphs
  const formatContent = (content) => {
    if (!content) return [];
    
    return content
      .trim()
      .split('\n\n')
      .filter(para => para.trim() !== '')
      .map((paragraph, index) => (
        <p key={index} className="blog-content">
          {paragraph.trim()}
        </p>
      ));
  };

  // If post is not found
  if (!post) {
    return (
      <div className="blog-page not-found">
        <h1 className="Blog-Title">Post Not Found</h1>
        <p className="blog-content">The blog post you're looking for doesn't exist.</p>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-categories">
        {post.categories.map((category, index) => (
          <span key={index} className="blog-category">
            {category}
          </span>
        ))}
      </div>
      
      <h1 className="Blog-Title">{post.title}</h1>
      
      <div className="blog-meta">
        <span className="info">{post.date}</span>
        <span className="info-separator">•</span>
        <span className="info">{post.readTime}</span>
      </div>
      
      <div className="blog-content-container">
        {formatContent(post.content)}
      </div>
      
      <div className="blog-navigation">
        <Link to="/" className="back-to-home">← Back to All Posts</Link>
      </div>
    </div>
  );
}

export default Article;