import React from 'react';

export const CommentTable = ({ comments }) => (
    <div className="comments-table">
        {comments.map((com) => (
            <div key={com.ccid} className="comment-item">
                <div className="comment-header">
                    <span className="comment-author">@{com.author}</span>
                    <p className="comment-content">{com.description}</p>
                </div>
                <div className="comment-date">
                    {new Date(com.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>
            </div>
        ))}
    </div>
);