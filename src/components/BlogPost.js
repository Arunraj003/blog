
import '../App.css';

const BlogPost = ({ post, onBack }) => {
  return (
    <div className="blog-post">
      <button onClick={onBack}>Back to Posts</button>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
