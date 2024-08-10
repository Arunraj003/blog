import '../App.css';

const BlogList = ({ posts, onPostClick }) => {
  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {posts.map((post, index) => (
        <div key={index} className="blog-preview" onClick={() => onPostClick(index)}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
