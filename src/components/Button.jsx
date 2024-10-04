import React from 'react';
import { Link } from 'react-router-dom';


const Button = () => {
    return (
        <div className="button-container">
            
            <button className="custom-button">
                <Link to="/create" className="button-link">
                    <span className="icon">+</span>
                    <span className="text">Create Blog</span>
                </Link>
            </button>

            
            <button className="custom-button">
                <Link to="/blog" className="button-link">
                    <span className="icon">👁️</span>
                    <span className="text">Read Blog</span>
                </Link>
            </button>
        </div>
    );
};

export default Button;
