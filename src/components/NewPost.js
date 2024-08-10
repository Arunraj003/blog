import React, { useState } from 'react';
import '../App.css';

const NewPost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddPost({ title, content, excerpt: content.substring(0, 100) + '...' });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="new-post">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default NewPost;
