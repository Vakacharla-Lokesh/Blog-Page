import React from "react";
import "../styles/Article.css"

function Article(props){
    return <div className="blog-page">
    <h2 className="Blog-Title">Blog Title</h2>
    <h3 className="info">Date</h3>
    <h3 className="info">Time</h3>
    <p className="blog-content">This is the blog page content that i would like to display to the user.</p>
    </div>;
}

export default Article;