import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Global Times</h1>
      </div>
      <div className="introduction">
        <h2>About Us</h2>
        <p>
          We bring you the latest headlines, in-depth analysis, and exclusive reports in
          various fields including technology, sports, entertainment, politics, and more.
        </p>
        <h2>Get Involved</h2>
        <p>
          Check out the <a href="/latest">Latest News</a> or contribute by sharing your own story on the
          <a href="/add"> Add News</a> page.
        </p>
      </div>
    </div>
  );
};

export default Home;

