import React, { useState } from 'react';
import { PublicationTable } from './PublicationTable';
import { PublicationToolbar } from './PublicationToolbar';
import { usePublication } from '../../shared/hooks';

export const PublicationsList = () => {
    const { publication } = usePublication();
    const [search, setSearch] = useState('');

    const filteredPublications = publication.filter((p) =>
        `${p.title}`.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className="publications-container">
            <h2 className='publications-title'>Lista de Publicaciones</h2>

            <PublicationToolbar
                search={search}
                setSearch={setSearch}
            />

            <div className='publication-content'>
                <div className='table-section'>
                    <PublicationTable
                        publications={filteredPublications}
                    />
                </div>

            </div>
        </div>
    )
}