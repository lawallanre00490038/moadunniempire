import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="blog__posts">
        <div className="blog__post">
          <img
            src="images/blog/blog1.jpg"
            alt="Blog post"
          />
          <div className="blog__post-content">
            <h3>How to stay fashionable on a budget</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="blog__post">
          <img
            src="images/blog/fashion trend.png"
            alt="Blog post"
          />
          <div className="blog__post-content">
            <h3>Top fashion trends for summer 2023</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
