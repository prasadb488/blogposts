import React from 'react';
import './Comment.css';

const Comment = ({ name, date, text, avatar }) => {
    const formattedDate = new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="comment">
            <div className="comment-avatar">
                {avatar ? (
                    <img src={avatar} alt={`${name}'s avatar`} />
                ) : (
                    <span>{name.charAt(0).toUpperCase()}</span>
                )}
            </div>
            <div className="comment-content">
                <div className="comment-header">
                    <span className="comment-author">{name}</span>
                    <span className="comment-date">{formattedDate}</span>
                </div>
                <p className="comment-text">{text}</p>
            </div>
        </div>
    );
};

export default Comment;
