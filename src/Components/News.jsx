import React from "react";
import "../styles/News.css";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <h2 className="news-title">Latest News</h2>
        <p className="news-subtitle">INTEGER CONGUE ELIT</p>
      </div>
      <div className="news-content">
        <div className="news-section">
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <img src="https://via.placeholder.com/300" alt="news" />
              </div>
              <div className="news-details">
                <h3 className="news-heading">Lorem Ipsum</h3>
                <p className="news-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="https://via.placeholder.com/300" alt="news" />
              </div>
              <div className="news-details">
                <h3 className="news-heading">Lorem Ipsum</h3>
                <p className="news-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="https://via.placeholder.com/300" alt="news" />
              </div>
              <div className="news-details">
                <h3 className="news-heading">Lorem Ipsum</h3>
                <p className="news-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src="https://via.placeholder.com/300" alt="news" />
              </div>
              <div className="news-details">
                <h3 className="news-heading">Lorem Ipsum</h3>
                <p className="news-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
