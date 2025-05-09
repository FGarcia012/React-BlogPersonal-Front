import { useState, useEffect, use } from 'react';
import {
    getPublications as getPublicationsRequest,
} from '../../services'
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
        console.log('Fetched publications:', publications);
        setPublication(Array.isArray(publications) ? publications : []);
        setIsLoading(false);
    } catch (err) {
        toast.error('Error al cargar las publicaciones' + err.message);
        setPublication([]);
        setIsLoading(false);
    }
};

    useEffect(() => {
        getPublications();
    }, []);
    
    return {
        publication,
        isLoading,
    }
}