import React, { useState } from 'react';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NewPost from './components/NewPost';
import './App.css';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handlePostClick = (index) => {
    setCurrentPost(posts[index]);
  };

  const handleBack = () => {
    setCurrentPost(null);
  };

  return (
    <div className="App">
      {currentPost ? (
        <BlogPost post={currentPost} 
        onBack={handleBack} />
      ) : (
        <>
          <NewPost onAddPost={handleAddPost} />
          <BlogList posts={posts} onPostClick={handlePostClick} />
        </>
      )}
    </div>
  );
}

export default App;
