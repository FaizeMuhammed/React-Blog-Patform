import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Title:', title);
        console.log('Content:', content);
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Create New Post</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                    <label htmlFor="title" className="input-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your title"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="content" className="input-label">Content</label>
                    <textarea
                        id="content"
                        className="form-input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter your content"
                        rows="5"
                        required
                    ></textarea>
                </div>

                

                <button type="submit" className="submit-button">Submit</button>

                <p className="signup-link">
                    Don’t have an account? <a href="#">Sign up</a>
                </p>
            </form>
            <button className="custom-button">
                <Link to="/" className="button-link">
                    <span className="icon"></span>
                    <span className="text">Back</span>
                </Link>
            </button>
        </div>
    );
};

export default BlogForm;
