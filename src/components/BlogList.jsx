import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logobody from "./Logobody";
import BlogPost from "./BlogPost";

const BlogList = ({ Posts }) => {
  const location = useLocation();

  if (!Posts || Posts.length === 0) {
    return <div>No blog posts available</div>;
  }

  return (
    <div className="Mainposts">
      <div className="feed-container">
        <h1>Latest Post</h1>
        <ul className="post-list">
          {Posts.map((post) => (
            <li key={post.id} className="post-item">
              <Link to={`/post/${post.id}`} className="post-link">
                <div className="post-card">
                  <div className="post-header">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="post-avatar"
                    />
                    <div className="post-author">
                      <h2>{post.author}</h2>
                    </div>
                  </div>
                  <div className="post-content">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                  </div>
                  <div className="post-footer">
                    <div className="post-interactions">
                      <span>👍 8</span>
                      <span>💬 4</span>
                      <span>🔗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button className="custom-button">
          <Link to="/" className="button-link">
            <span className="icon"></span>
            <span className="text">Back</span>
          </Link>
        </button>
      </div>

      <div className="halfdiv">


      {location.pathname.startsWith('/post/') && (
        <>
          <BlogPost Posts={Posts} />
        </>
      )}

      
      {location.pathname === '/blog' && (
        <>
          <Logobody />
        </>
      )}
      </div>
    </div>
  );
};

export default BlogList;
