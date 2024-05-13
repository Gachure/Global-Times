import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LatestNews.css';

const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=${category}&token=7ac74eb2087fc816fcb0371d5c2a9cbe`
        );
        setArticles(response.data.articles || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Unable to fetch news.');
      }
    };

    fetchNews();
  }, [category]); 

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="category-links">
        <button onClick={() => handleCategoryChange('politics')}>Politics</button>
        <button onClick={() => handleCategoryChange('sports')}>Sports</button>
        <button onClick={() => handleCategoryChange('entertainment')}>Entertainment</button>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-article">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="news-image"
                />
              )}
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestNews;
