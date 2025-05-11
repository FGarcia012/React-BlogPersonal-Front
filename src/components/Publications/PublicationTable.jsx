import React, { useState } from 'react';

export const PublicationTable = ({ publications, onPublicationClick }) => {
    const [red] = useState('navy'); // Puedes cambiar el color por defecto aquí

    return (
        <div className="publications-feed">
            {publications.map((pub) => (
                <div 
                    key={pub.pid} 
                    className={`publication-card ${red}`}
                    onClick={() => onPublicationClick(pub.pid)}
                >
                    <div className="publication-header">
                        <span className="publication-course">{pub.course.name}</span>
                        <span className="publication-date">
                            {new Date(pub.date).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    
                    <div className="publication-content">
                        <h3 className="publication-title">{pub.title}</h3>
                        <p className="publication-description">{pub.description}</p>
                    </div>

                    <div className="publication-footer">
                        <div className="comments-section">
                            <span className="comments-count">
                                {pub.comments.length} comentarios
                            </span>
                            <div className="recent-comments">
                                {pub.comments.slice(0, 2).map((comment, index) => (
                                    <p key={index} className="comment-preview">
                                        <strong>@{comment.author}:</strong> {comment.description}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};