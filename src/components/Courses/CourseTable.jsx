import React from 'react';

export const CourseTable = ({ courses, onCourseClick }) => (
    <table className="courses-table">
        <thead>
            <tr>
                <th>Nombre</th>
            </tr>
        </thead>
        <tbody>
            {courses.map((cou) => (
                <tr key={cou.cid} onClick={() => onCourseClick(cou.cid)}>
                    <td>{cou.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
);