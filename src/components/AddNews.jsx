import React, { useState } from 'react';
import axios from 'axios';
import './AddNews.css';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

   if (title.trim() === '' || content.trim() === '') {
    console.log("Validation failed");
    alert("Both title and content are required.");
    return;
  }

    axios
      .post('http://localhost:3001/news', { title, content })
       .then((response) => {
        console.log("Form submitted successfully", response);
        alert('News article added successfully');
        setTitle(''); 
        setContent(''); 
      })
      .catch((err) => {
        console.error('Error adding news:', err);
        alert('Error adding news. Please try again.');
      });
  };

  return (
    <div className="add-news">
      <h2>Add a News Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNews;
