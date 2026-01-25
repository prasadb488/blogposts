import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) {
            setError('Name and comment are required.');
            return;
        }

        onSubmit({
            name,
            text,
            avatar,
            date: new Date().toISOString(),
        });

        setName('');
        setText('');
        setAvatar('');
        setError('');
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <h3>Leave a Comment</h3>
            {error && <p className="error">{error}</p>}

            <div className="form-group">
                <label htmlFor="comment-name">Name</label>
                <input
                    id="comment-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="comment-text">Comment</label>
                <textarea
                    id="comment-text"
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your comment here..."
                />
            </div>

            <div className="form-group">
                <label htmlFor="comment-avatar">Avatar URL (optional)</label>
                <input
                    id="comment-avatar"
                    type="url"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    placeholder="https://example.com/avatar.jpg"
                />
            </div>

            <button type="submit">Submit Comment</button>
        </form>
    );
};

export default CommentForm;
