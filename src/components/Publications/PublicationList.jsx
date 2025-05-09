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

    const filteredPublications = publication.filter((p) =>
        p.course === courseId && `${p.title}`.toLowerCase().includes(search.toLowerCase())
    );

    const handlePublicationClick = (publicationId) => {
        navigate(`/comments?publicationId=${publicationId}`);
    };

    console.log('courseId from URL:', courseId);
    console.log('Filtered Publications:', filteredPublications);

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