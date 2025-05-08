import React, { useState } from 'react';
import { CourseTable } from './CourseTable';
import { CourseToolbar } from './CourseToolbar';
import { useCourse } from '../../shared/hooks';

export const CoursesList = () => {
    const { course } = useCourse();
    const [search, setSearch] = useState('');

    const filteredCourses = course.filter((c) => 
        `${c.name}`.toLowerCase().includes(search.toLowerCase())
    )
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
                    />
                </div>

            </div>
        </div>
    )
}