import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePublication } from '../../shared/hooks';
import { PublicationToolbar } from './PublicationToolbar';
import { PublicationTable } from './PublicationTable';

export const PublicationsList = () => {
    const { publication } = usePublication();
    const [search, setSearch] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const courseId = queryParams.get('courseId');
    console.log(`courseId from URL: ${courseId}`);

    console.log('All publications:', publication);
    console.log('Structure of a publication:', publication[0]); 
    console.log('Course structure in a publication:', publication[0]?.course); 

    const filteredPublications = publication
        .filter((p) => {
            console.log(`Comparing: ${String(p.course?._id)} === ${String(courseId)}`);
            return (!courseId || String(p.course?._id) === String(courseId)) &&
                `${p.title}`.toLowerCase().includes(search.toLowerCase());
        })
        .sort((a, b) => a.course.name.localeCompare(b.course.name));

    console.log('Filtered publications:', filteredPublications);

    const handlePublicationClick = (publicationId) => {
        navigate(`/comments?publicationId=${publicationId}`); 
    };

    return (
        <div className="publications-container">
            <h2 className="publications-title">Lista de Publicaciones</h2>

            <PublicationToolbar
                search={search}
                setSearch={setSearch}
            />

            <div className="publication-content">
                {filteredPublications.length > 0 ? (
                    <div className="table-section">
                        <PublicationTable
                            publications={filteredPublications}
                            onPublicationClick={handlePublicationClick}
                        />
                    </div>
                ) : (
                    <p>No hay publicaciones disponibles para este curso.</p>
                )}
            </div>
        </div>
    );
};