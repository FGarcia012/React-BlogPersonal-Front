import { useState, useEffect, use } from 'react';
import {
    getCourses as getCoursesRequest,
} from '../../services'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useCourse = () => {
    const [course, setCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getCourses = async () => {
        setIsLoading(true);
        try {
            const { courses } = await getCoursesRequest();
            setCourse(Array.isArray(courses) ? courses : []); 
            setIsLoading(false);
        } catch (err) {
            toast.error('Error al cargar los cursos' + err.message);
            setCourse([]); 
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCourses();
    }, []);

    console.log(course)
    return {
        course,
        isLoading,
    }
}