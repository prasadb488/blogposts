import React from 'react';
import './BlogPostDetail.css';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const BlogPostDetail = ({ id, title, content, author, date }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      const storedComments = localStorage.getItem(`blog-comments-${id}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  }, [id]);

  React.useEffect(() => {
    if (id) {
      localStorage.setItem(`blog-comments-${id}`, JSON.stringify(comments));
    }
  }, [comments, id]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  if (!title || !content || !author || !date) {
    return <p className="blog-post-not-found">Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="blog-post-detail">
      <h1 className="post-title">{title}</h1>
      <p className="post-author">By {author}</p>
      <p className="post-date">Published on {formattedDate}</p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <CommentList comments={comments} />
      <CommentForm onSubmit={handleAddComment} />
    </div>
  );
};

export default BlogPostDetail;
