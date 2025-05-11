import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePublication } from '../../shared/hooks';
import { PublicationTable } from '../../components/Publications/PublicationTable';

export const FilteredPublicationsPage = () => {
    const [searchParams] = useSearchParams();
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const { publication, getPublicationsByDate, isLoading } = usePublication();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (startDate && endDate) {
                try {
                    await getPublicationsByDate(startDate, endDate);
                    setError(null);
                } catch (err) {
                    setError('Error al cargar las publicaciones');
                }
            }
        };
        fetchData();
    }, [startDate, endDate]);

    if (isLoading) {
        return (
            <div className="publications-container">
                <div className="loading">Cargando publicaciones...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="publications-container">
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="publications-container">
            <h2 className="publications-title">Publicaciones Filtradas</h2>
            <p className="date-range">
                Mostrando publicaciones del {startDate} al {endDate}
            </p>
            {publication.length > 0 ? (
                <div className="table-section">
                    <PublicationTable 
                        publications={publication}
                        onPublicationClick={() => {}}
                    />
                </div>
            ) : (
                <p className="no-results">
                    No se encontraron publicaciones en el rango de fechas seleccionado
                </p>
            )}
        </div>
    );
};