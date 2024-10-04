import React from "react";
import { useParams, Link } from 'react-router-dom';

const BlogPost = ({ Posts }) => {
  const { id } = useParams();
  
  
  const post = Posts.find(post => post.id === parseInt(id));

 
  if (!post) {
    return (
      <div className="blogpost-notfound">
        <h1>Post not Found</h1>
      </div>
    );
  }

  return (
    <div className="single-blogpost-card">
      <div className="single-post-card">
        <div className="single-post-header">
          <img src={post.imageUrl} alt={post.author} className="single-post-avatar" />
          <div className="single-post-author">
            <h2>{post.author}</h2>
          </div>
        </div>
        <div className="single-post-content">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
        <div className="single-post-footer">
          <div className="single-post-interactions">
            <span>👍 8</span>
            <span>💬 4</span>
            <span>🔗</span>
          </div>
        </div>
      </div>

      <button className="custom-button-post">
        <Link to="/" className="button-link-post">
          <span className="icon-post"></span>
          <span className="text-post">Back</span>
        </Link>
      </button>
    </div>
  );
};

export default BlogPost;
