import React from 'react';
import Comment from './Comment';
import './CommentList.css';

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            <h3>Comments</h3>
            {comments.length === 0 ? (
                <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
                comments.map((comment, index) => (
                    <Comment
                        key={index}
                        name={comment.name}
                        date={comment.date}
                        text={comment.text}
                        avatar={comment.avatar}
                    />
                ))
            )}
        </div>
    );
};

export default CommentList;
