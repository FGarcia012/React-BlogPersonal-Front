import React, { useState } from 'react';
import { CourseTable } from './CourseTable';
import { CourseToolbar } from './CourseToolbar';
import { useCourse } from '../../shared/hooks';
import { useNavigate } from 'react-router-dom';

export const CoursesList = () => {
    const { course } = useCourse();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filteredCourses = course.filter((c) =>
        `${c.name}`.toLowerCase().includes(search.toLowerCase())
    );

    const handleCourseClick = (courseId) => {
        navigate(`/publications?courseId=${courseId}`);
    };

    return (
        <div className="courses-container">
            <h2 className='courses-title'>Lista de Cursos</h2>

            <CourseToolbar 
                search={search}
                setSearch={setSearch}
            />

            <div className='course-content'>
                <div className='table-section'>
                    <CourseTable
                        courses={filteredCourses}
                        onCourseClick={handleCourseClick}
                    />
                </div>
            </div>
        </div>
    );
};