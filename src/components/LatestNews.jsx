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
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b37a6287ad084a359344df94eda9828a`
        );
        setArticles(response.data.articles);
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
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
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
