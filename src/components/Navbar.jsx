import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DateFilter } from './DateFilter';
import { usePublication } from '../shared/hooks';
import '../pages/dashboard/Navbar.css';

export const Navbar = () => {
    const location = useLocation();
    const { getPublicationsByDate } = usePublication();
    const showDateFilter = location.pathname === '/publications';

    const handleDateFilter = (startDate, endDate) => {
        getPublicationsByDate(startDate, endDate);
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/courses" className="nav-link"><h1>Cursos</h1></Link>
                {showDateFilter && (
                    <DateFilter onFilterChange={handleDateFilter} />
                )}
            </div>
        </nav>
    );
};