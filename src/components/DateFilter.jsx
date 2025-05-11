import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/publication/DateFilter.css';

export const DateFilter = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate();

    const handleFilter = () => {
        if (startDate && endDate) {
            navigate(`/publications/filter?startDate=${startDate}&endDate=${endDate}`);
        }
    };

    return (
        <div className="date-filter">
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="date-input"
            />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="date-input"
            />
            <button onClick={handleFilter} className="filter-button">
                Filtrar por fecha
            </button>
        </div>
    );
};