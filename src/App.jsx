import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    content: '<p>This is a full guide on getting started with React.</p>',
    author: 'Sai Prasad',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    content: '<p>CSS Grid and Flexbox each have their strengths. Here’s how to choose.</p>',
    author: 'Sai Prasad',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: '<p>Accessibility is essential for inclusivity. Follow these practices.</p>',
    author: 'Sai Prasad',
    date: '2023-03-10',
    url: '/posts/3',
  }
];

const App = () => {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BlogPostList posts={samplePosts} />} />
        <Route
          path="/posts/:id"
          element={
            <PostWrapper posts={samplePosts} />
          }
        />
      </Routes>
    </div>
  );
};

import { useParams } from 'react-router-dom';
const PostWrapper = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Blog post not found.</p>;
  }

  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      author={post.author}
      date={post.date}
    />
  );
};

export default App;
