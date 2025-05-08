import React from 'react';
import './DashboardPage.css';
import { Navbar } from '../../components';

export const DashboardPage = () => {
  return (
    <div className="dashboard-container">
        <Navbar />
      <h1>Bienvenido a mi blog</h1>
      <p>Puedes ver las publicaciones que he hecho en nuestro blog y comentar sobre ellas.</p>
    </div>
  );
};