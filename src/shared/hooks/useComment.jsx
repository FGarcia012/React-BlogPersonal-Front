import { useState, useEffect } from 'react';
import {
    getComments as getCommentsRequest, 
    addComment as addCommentRequest,
} from '../../services';
import toast from 'react-hot-toast';

export const useComment = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getComments = async () => {
        setIsLoading(true);
        try {
            const { comments } = await getCommentsRequest();
            setComments(Array.isArray(comments) ? comments : []);
        } catch (err) {
            toast.error('Error al cargar los comentarios: ' + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const addComent = async ({ publication, author, description }) => {
        setIsLoading(true);
        try {
            const response = await addCommentRequest({ publication, author, description });
            if (response.error) {
                toast.error('Error al agregar el comentario');
                return false;
            }
            toast.success('Comentario agregado exitosamente');
            return true;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    return {
        comments,
        isLoading,
        getComments,
        addComent,
    };
};
