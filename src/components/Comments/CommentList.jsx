import React, { useState } from 'react';
import { CommentTable } from './CommentTable';
import { CommentToolbar } from './CommentToolbar';
import { useComment } from '../../shared/hooks';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const CommentList = () => {
    const { comments, addComent, getComments } = useComment();
    const [search, setSearch] = useState('');
    const [newComment, setNewComment] = useState({
        publication: '',
        author: '',
        description: '',
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const publicationId = queryParams.get('publicationId');

    // Filtrar y ordenar comentarios por fecha (más recientes primero)
    const filteredComments = comments
        .filter(
            (c) => c.publication._id === publicationId && `${c.author}`.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha descendente

    const handleAddComment = async () => {
        if (!newComment.author || !newComment.description) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }
        const success = await addComent({ ...newComment, publication: publicationId });
        if (success) {
            setNewComment({ publication: '', author: '', description: '' });
            toast.success('Comentario agregado exitosamente.');
            await getComments();
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
                {filteredComments.length > 0 ? (
                    <CommentTable comments={filteredComments} />
                ) : (
                    <p>No hay comentarios disponibles para esta publicación.</p>
                )}
            </div>
        </div>
    );
};