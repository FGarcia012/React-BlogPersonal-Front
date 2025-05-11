import { useState, useEffect } from 'react';
import {
    getPublications as getPublicationsRequest,
    getPublicationsByDate as getPublicationsByDateRequest,
} from '../../services';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const usePublication = () => {
    const [publication, setPublication] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getPublications = async () => {
        setIsLoading(true);
        try {
            const { publications } = await getPublicationsRequest();
            setPublication(Array.isArray(publications) ? publications : []);
        } catch (err) {
            toast.error('Error al cargar las publicaciones' + err.message);
            setPublication([]);
        } finally {
            setIsLoading(false);
        }
    };

    const getPublicationsByDate = async (startDate, endDate) => {
        setIsLoading(true);
        try {
            const response = await getPublicationsByDateRequest(startDate, endDate);
            if (response.success) {
                setPublication(response.publications);
                toast.success('Publicaciones filtradas correctamente');
            } else {
                setPublication([]);
                toast.info('No se encontraron publicaciones en ese rango de fechas');
            }
        } catch (err) {
            console.error('Error al filtrar publicaciones:', err);
            toast.error('Error al filtrar las publicaciones');
            setPublication([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPublications();
    }, []);
    
    return {
        publication,
        isLoading,
        getPublicationsByDate,
    }
};