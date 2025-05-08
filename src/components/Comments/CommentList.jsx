import React, { useState } from 'react';
import { CommentTable } from './CommentTable';
import { CommentToolbar } from './CommentToolbar';
import { useComment } from '../../shared/hooks';

export const CommentList = () => {
    const { comments, addComent } = useComment();
    const [search, setSearch] = useState('');
    const [newComment, setNewComment] = useState({
        publication: '',
        author: '',
        description: '',
    });

    const filteredComments = comments.filter((c) =>
        `${c.author}`.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddComment = async () => {
        const success = await addComent(newComment);
        if (success) {
            setNewComment({ publication: '', author: '', description: '' });
        }
    };

    return (
        <div className="comments-container">
            <h2 className="comments-title">Lista de Comentarios</h2>

            <CommentToolbar
                search={search}
                setSearch={setSearch}
                onAddClick={handleAddComment}
            />

            <div className="form-section">
                <input
                    type="text"
                    placeholder="Publicación"
                    value={newComment.publication}
                    onChange={(e) => setNewComment({ ...newComment, publication: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={newComment.author}
                    onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                />
                <textarea
                    placeholder="Descripción"
                    value={newComment.description}
                    onChange={(e) => setNewComment({ ...newComment, description: e.target.value })}
                />
                
                <button onClick={handleAddComment}>Añadir Comentario</button>
            </div>

            <div className="table-section">
                <CommentTable comments={filteredComments} />
            </div>
        </div>
    );
};